// Cloudflare Pages Function: příjem poptávek z formuláře na klima-hisense.cz
// Bindings (Cloudflare → Pages → Settings → Bindings / Variables):
//   DB                 – D1 databáze (schéma v /db/schema.sql)
//   TURNSTILE_SECRET   – tajný klíč Turnstile (nepovinné, doporučené)
//   RESEND_API_KEY     – API klíč Resend.com pro e-mailové notifikace (nepovinné)
//   NOTIFY_TO          – kam posílat notifikace, např. ps@completecz.cz
//   NOTIFY_FROM        – odesílatel, např. "Klima Hisense <poptavky@klima-hisense.cz>" (doména ověřená v Resend)
//   IP_SALT            – náhodný text pro anonymizaci IP

const FIELDS = {
  objekt: 20, mistnosti: 20, plocha: 10, psc: 10, obec: 80,
  jmeno: 100, telefon: 25, email: 120, poznamka: 2000, souhlas: 5,
  zdroj_stranky: 300, kampan: 300, gclid: 200,
};
const OBJEKT = { byt: 'Byt', dum: 'Rodinný dům', kancelar: 'Kancelář / provozovna', jine: 'Jiné' };

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export async function onRequestPost({ request, env }) {
  const wantsJson = (request.headers.get('accept') || '').includes('application/json');
  const fail = (error, status = 400) =>
    wantsJson ? json({ ok: false, error }, status) : Response.redirect(new URL('/poptavka/?chyba=' + error, request.url), 303);

  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return fail('origin', 403);

  let raw = {};
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) raw = await request.json();
    else {
      const fd = await request.formData();
      raw = Object.fromEntries(fd);
      raw.rady = fd.getAll('rady');
    }
  } catch {
    return fail('bad-body');
  }

  // Honeypot – boti vyplní skryté pole
  if (raw.web) return wantsJson ? json({ ok: true, id: 0 }) : Response.redirect(new URL('/dekujeme/', request.url), 303);

  const d = {};
  for (const [k, max] of Object.entries(FIELDS)) {
    const v = raw[k];
    d[k] = typeof v === 'string' ? v.trim().slice(0, max) : '';
  }
  const rady = (Array.isArray(raw.rady) ? raw.rady : []).filter((r) => typeof r === 'string').map((r) => r.slice(0, 40)).slice(0, 8);
  if (!OBJEKT[d.objekt]) d.objekt = 'jine';

  if (!d.jmeno || !d.obec) return fail('povinne');
  if (!/^\d{3}\s?\d{2}$/.test(d.psc)) return fail('psc');
  if (!/^\+?[\d\s]{9,17}$/.test(d.telefon)) return fail('telefon');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) return fail('email');
  if (d.souhlas !== 'ano') return fail('souhlas');

  const ip = request.headers.get('cf-connecting-ip') || '';

  let captchaNote = null;
  if (env.TURNSTILE_SECRET) {
    const body = new FormData();
    body.append('secret', env.TURNSTILE_SECRET);
    body.append('response', String(raw['cf-turnstile-response'] || ''));
    body.append('remoteip', ip);
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
    const out = await r.json().catch(() => ({}));
    // Neúspěšné ověření poptávku nezahodí, jen ji označí ke kontrole.
    if (!out.success) captchaNote = 'Ověření Turnstile neprošlo – zkontrolovat, zda nejde o spam.';
  }

  const ipHash = ip ? await sha256(ip + (env.IP_SALT || 'klima-hisense')) : '';
  if (env.DB && ipHash) {
    const row = await env.DB.prepare("SELECT COUNT(*) AS n FROM leads WHERE ip_hash = ? AND created_at > datetime('now', '-1 hour')").bind(ipHash).first();
    if (row && row.n >= 5) return fail('limit', 429);
  }

  let id = 0;
  if (env.DB) {
    const res = await env.DB.prepare(
      `INSERT INTO leads (objekt, rady, mistnosti, plocha, psc, obec, jmeno, telefon, email, poznamka, zdroj_stranky, kampan, gclid, ip_hash, user_agent, poznamka_interni)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(d.objekt, JSON.stringify(rady), d.mistnosti, d.plocha, d.psc, d.obec, d.jmeno, d.telefon, d.email, d.poznamka,
        d.zdroj_stranky, d.kampan, d.gclid, ipHash, (request.headers.get('user-agent') || '').slice(0, 300), captchaNote)
      .run();
    id = res.meta?.last_row_id ?? 0;
  }

  if (env.RESEND_API_KEY && env.NOTIFY_TO) {
    const rows = [
      ['Objekt', OBJEKT[d.objekt]], ['Zájem o řady', rady.join(', ')], ['Počet místností', d.mistnosti], ['Plocha', d.plocha && `${d.plocha} m²`],
      ['Místo', `${d.psc} ${d.obec}`], ['Jméno', d.jmeno], ['Telefon', d.telefon], ['E-mail', d.email], ['Zpráva', d.poznamka],
      ['Vstupní stránka', d.zdroj_stranky], ['Kampaň', d.kampan], ['GCLID', d.gclid], ['Kontrola', captchaNote],
    ].filter(([, v]) => v);
    const html = `<h2>Nová poptávka #${id} – klima-hisense.cz</h2><table cellpadding="6" style="border-collapse:collapse">${rows
      .map(([k, v]) => `<tr><td style="border-bottom:1px solid #ddd"><b>${esc(k)}</b></td><td style="border-bottom:1px solid #ddd">${esc(v)}</td></tr>`)
      .join('')}</table>`;
    const send = (payload) =>
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => null);
    const from = env.NOTIFY_FROM || 'Klima Hisense <poptavky@klima-hisense.cz>';
    await Promise.all([
      send({ from, to: env.NOTIFY_TO.split(',').map((s) => s.trim()), reply_to: d.email, subject: `${captchaNote ? '[ke kontrole] ' : ''}Poptávka #${id}: ${OBJEKT[d.objekt]} – ${d.obec}`, html }),
      !captchaNote && send({
        from, to: [d.email], subject: 'Děkujeme za poptávku – Klima Hisense',
        html: `<p>Dobrý den, ${esc(d.jmeno)},</p><p>děkujeme za poptávku klimatizace Hisense (${esc(OBJEKT[d.objekt])}, ${esc(d.obec)}). Ozveme se vám do 1 pracovního dne, doporučíme vhodnou řadu a výkon a domluvíme obhlídku s montážním partnerem z vašeho regionu.</p><p>S pozdravem<br>Klima Hisense – oficiální zastoupení Hisense pro ČR<br>COMPLETE CZ, spol. s r.o.<br>klima-hisense.cz</p>`,
      }),
    ]);
  }

  return wantsJson ? json({ ok: true, id }) : Response.redirect(new URL('/dekujeme/', request.url), 303);
}

export async function onRequest({ request }) {
  if (request.method === 'POST') return;
  return json({ ok: false, error: 'method' }, 405);
}

async function sha256(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
