// Cloudflare Worker pro klima-hisense.cz
// Statický web (Astro, složka dist/) servíruje Cloudflare přímo, Worker obsluhuje jen /api/*.
// E-mail o nové poptávce odchází přes Cloudflare Email Routing (vazba EMAIL, stejně jako u Kalkulace COMPLETE).
//
// Vazby a proměnné (wrangler.jsonc, tajné hodnoty v Cloudflare → Settings → Variables and Secrets):
//   DB               – D1 databáze klima-hisense-db (schéma v /db/schema.sql)
//   EMAIL            – send_email (Cloudflare Email Routing)
//   NOTIFY_TO        – kam chodí upozornění na poptávku (musí být ověřená v Email Routing → Destination addresses)
//   MAIL_FROM        – odesílatel na doméně klima-hisense.cz (Email Routing musí být na doméně zapnutý)
//   TURNSTILE_SECRET – tajný klíč Turnstile (nepovinné)
//   IP_SALT          – náhodný text pro anonymizaci IP (secret)
import { EmailMessage } from 'cloudflare:email';

const FIELDS = {
  objekt: 20, mistnosti: 20, plocha: 10, psc: 10, obec: 80,
  jmeno: 100, telefon: 25, email: 120, poznamka: 2000, souhlas: 5,
  zdroj_stranky: 300, kampan: 300, gclid: 200,
  reseni: 20, sestava: 700,
};
const OBJEKT = { byt: 'Byt', dum: 'Rodinný dům', kancelar: 'Kancelář / provozovna', jine: 'Jiné' };
const RESENI = { split: 'Samostatné jednotky', multisplit: 'Multisplit (jedna venkovní jednotka)', poradit: 'Poradit s řešením' };

// Změny schématu D1 – jen přidávat na konec (provedené verze jsou v tabulce schema_migrations).
const MIGRATIONS = [
  [1, 'ALTER TABLE leads ADD COLUMN reseni TEXT'],
  [2, 'ALTER TABLE leads ADD COLUMN sestava TEXT'],
  [3, `CREATE TABLE IF NOT EXISTS partneri (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    firma TEXT, ico TEXT, jmeno TEXT, telefon TEXT, email TEXT,
    kraje TEXT, fplyny TEXT, poznamka TEXT,
    ip_hash TEXT, stav TEXT NOT NULL DEFAULT 'nový', poznamka_interni TEXT
  )`],
  [4, 'CREATE INDEX IF NOT EXISTS idx_partneri_ip ON partneri(ip_hash, created_at)'],
];
let schemaReady = false;
async function ensureSchema(db) {
  if (schemaReady) return;
  await db.prepare("CREATE TABLE IF NOT EXISTS schema_migrations (version INTEGER PRIMARY KEY, applied_at TEXT NOT NULL DEFAULT (datetime('now')))").run();
  const done = new Set(((await db.prepare('SELECT version FROM schema_migrations').all()).results || []).map((r) => r.version));
  for (const [version, sql] of MIGRATIONS) {
    if (done.has(version)) continue;
    try {
      await db.prepare(sql).run();
    } catch (e) {
      if (!/duplicate column/i.test(String(e?.message || e))) throw e;
    }
    await db.prepare('INSERT OR IGNORE INTO schema_migrations (version) VALUES (?)').bind(version).run();
  }
  schemaReady = true;
}

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/poptavka' || url.pathname === '/api/poptavka/') {
      if (request.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
      return handleLead(request, env, ctx);
    }
    if (url.pathname === '/api/partner' || url.pathname === '/api/partner/') {
      if (request.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
      return handlePartner(request, env, ctx);
    }
    if (url.pathname.startsWith('/api/')) return json({ ok: false, error: 'not-found' }, 404);
    return env.ASSETS.fetch(request);
  },
};

async function handleLead(request, env, ctx) {
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
  if (!RESENI[d.reseni]) d.reseni = '';

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
    if (!out.success) captchaNote = 'Ověření Turnstile neprošlo – zkontrolovat, zda nejde o spam.';
  }

  const ipHash = ip ? await sha256(ip + (env.IP_SALT || 'klima-hisense')) : '';
  if (env.DB && ipHash) {
    const row = await env.DB.prepare("SELECT COUNT(*) AS n FROM leads WHERE ip_hash = ? AND created_at > datetime('now', '-1 hour')").bind(ipHash).first();
    if (row && row.n >= 5) return fail('limit', 429);
  }

  let id = 0;
  if (env.DB) {
    const ua = (request.headers.get('user-agent') || '').slice(0, 300);
    let res;
    try {
      await ensureSchema(env.DB);
      res = await env.DB.prepare(
        `INSERT INTO leads (objekt, rady, mistnosti, plocha, psc, obec, jmeno, telefon, email, poznamka, zdroj_stranky, kampan, gclid, ip_hash, user_agent, poznamka_interni, reseni, sestava)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(d.objekt, JSON.stringify(rady), d.mistnosti, d.plocha, d.psc, d.obec, d.jmeno, d.telefon, d.email, d.poznamka,
          d.zdroj_stranky, d.kampan, d.gclid, ipHash, ua, captchaNote, d.reseni, d.sestava)
        .run();
    } catch (e) {
      // Pojistka: kdyby migrace selhala, poptávka se uloží do původních sloupců (řešení a sestava do interní poznámky)
      console.error('Uložení s novými sloupci selhalo:', String(e?.message || e));
      const extra = [RESENI[d.reseni] && `Řešení: ${RESENI[d.reseni]}`, d.sestava && `Návrh z kalkulačky: ${d.sestava}`].filter(Boolean).join('\n');
      res = await env.DB.prepare(
        `INSERT INTO leads (objekt, rady, mistnosti, plocha, psc, obec, jmeno, telefon, email, poznamka, zdroj_stranky, kampan, gclid, ip_hash, user_agent, poznamka_interni)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(d.objekt, JSON.stringify(rady), d.mistnosti, d.plocha, d.psc, d.obec, d.jmeno, d.telefon, d.email, d.poznamka,
          d.zdroj_stranky, d.kampan, d.gclid, ipHash, ua, [captchaNote, extra].filter(Boolean).join('\n') || null)
        .run();
    }
    id = res.meta?.last_row_id ?? 0;
  }

  // Upozornění e-mailem – poptávka je uložená i v případě, že e-mail selže
  const mail = notifyLead(env, id, d, rady, captchaNote).catch((e) => console.error('E-mail poptávky se nepodařilo odeslat:', String(e?.message || e)));
  if (ctx?.waitUntil) ctx.waitUntil(mail); else await mail;

  return wantsJson ? json({ ok: true, id }) : Response.redirect(new URL('/dekujeme/', request.url), 303);
}

// Zájem montážní firmy o partnerství (/pro-montazni-firmy/)
const KRAJE = ['Praha', 'Středočeský', 'Jihočeský', 'Plzeňský', 'Karlovarský', 'Ústecký', 'Liberecký', 'Královéhradecký', 'Pardubický', 'Vysočina', 'Jihomoravský', 'Olomoucký', 'Zlínský', 'Moravskoslezský'];
async function handlePartner(request, env, ctx) {
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ ok: false, error: 'origin' }, 403);
  let raw;
  try { raw = await request.json(); } catch { return json({ ok: false, error: 'bad-body' }, 400); }
  if (!raw || typeof raw !== 'object') return json({ ok: false, error: 'bad-body' }, 400);
  if (raw.web) return json({ ok: true, id: 0 });
  const str = (k, max) => (typeof raw[k] === 'string' ? raw[k].trim().slice(0, max) : '');
  const d = { firma: str('firma', 150), ico: str('ico', 12).replace(/\s/g, ''), jmeno: str('jmeno', 100), telefon: str('telefon', 25), email: str('email', 120), fplyny: str('fplyny', 5), poznamka: str('poznamka', 2000), souhlas: str('souhlas', 5) };
  const kraje = (Array.isArray(raw.kraje) ? raw.kraje : []).filter((k) => KRAJE.includes(k));
  if (!d.firma || !d.jmeno) return json({ ok: false, error: 'povinne' }, 400);
  if (d.ico && !/^\d{8}$/.test(d.ico)) return json({ ok: false, error: 'ico' }, 400);
  if (!/^\+?[\d\s]{9,17}$/.test(d.telefon)) return json({ ok: false, error: 'telefon' }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) return json({ ok: false, error: 'email' }, 400);
  if (d.souhlas !== 'ano') return json({ ok: false, error: 'souhlas' }, 400);
  if (!['ano', 'ne'].includes(d.fplyny)) d.fplyny = '';

  const ip = request.headers.get('cf-connecting-ip') || '';
  const ipHash = ip ? await sha256(ip + (env.IP_SALT || 'klima-hisense')) : '';
  let id = 0;
  if (env.DB) {
    await ensureSchema(env.DB);
    if (ipHash) {
      const row = await env.DB.prepare("SELECT COUNT(*) AS n FROM partneri WHERE ip_hash = ? AND created_at > datetime('now', '-1 hour')").bind(ipHash).first();
      if (row && row.n >= 3) return json({ ok: false, error: 'limit' }, 429);
    }
    const res = await env.DB.prepare('INSERT INTO partneri (firma, ico, jmeno, telefon, email, kraje, fplyny, poznamka, ip_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)')
      .bind(d.firma, d.ico, d.jmeno, d.telefon, d.email, JSON.stringify(kraje), d.fplyny, d.poznamka, ipHash).run();
    id = res.meta?.last_row_id ?? 0;
  }
  const mail = (async () => {
    if (!env.EMAIL || typeof env.EMAIL.send !== 'function' || !env.NOTIFY_TO || !env.MAIL_FROM) return;
    const rows = [['Firma', d.firma], ['IČO', d.ico], ['Kontaktní osoba', d.jmeno], ['Telefon', d.telefon], ['E-mail', d.email], ['Kraje', kraje.join(', ')], ['Certifikace F-plyny', d.fplyny], ['Zpráva', d.poznamka]].filter(([, v]) => v);
    const subject = `Zájem o partnerství #${id}: ${d.firma}`;
    const text = [`Montážní firma má zájem o spolupráci (klima-hisense.cz)`, '', ...rows.map(([k, v]) => `${k}: ${v}`)].join('\n');
    const html = `<h2 style="font-family:Arial,sans-serif;color:#007e7b">Zájem o partnerství #${id} – klima-hisense.cz</h2><table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows.map(([k, v]) => `<tr><td style="border-bottom:1px solid #ddd;vertical-align:top"><b>${esc(k)}</b></td><td style="border-bottom:1px solid #ddd">${esc(v).replace(/\n/g, '<br>')}</td></tr>`).join('')}</table>`;
    for (const to of String(env.NOTIFY_TO).split(',').map((s) => s.trim()).filter(Boolean)) {
      await env.EMAIL.send(new EmailMessage(env.MAIL_FROM, to, buildMime({ from: env.MAIL_FROM, fromName: 'Klima Hisense – partneři', to, replyTo: d.email, subject, text, html })));
    }
  })().catch((e) => console.error('E-mail o partnerství se nepodařilo odeslat:', String(e?.message || e)));
  if (ctx?.waitUntil) ctx.waitUntil(mail); else await mail;
  return json({ ok: true, id });
}

async function notifyLead(env, id, d, rady, captchaNote) {
  if (!env.EMAIL || typeof env.EMAIL.send !== 'function' || !env.NOTIFY_TO || !env.MAIL_FROM) return;
  const rows = [
    ['Objekt', OBJEKT[d.objekt]], ['Zájem o řady', rady.join(', ')], ['Počet místností', d.mistnosti], ['Plocha', d.plocha && `${d.plocha} m²`],
    ['Řešení', RESENI[d.reseni]], ['Návrh z kalkulačky', d.sestava.split(' | ').join('\n')],
    ['Místo', `${d.psc} ${d.obec}`], ['Jméno', d.jmeno], ['Telefon', d.telefon], ['E-mail', d.email], ['Zpráva', d.poznamka],
    ['Vstupní stránka', d.zdroj_stranky], ['Kampaň', d.kampan], ['GCLID', d.gclid], ['Kontrola', captchaNote],
  ].filter(([, v]) => v);
  const subject = `${captchaNote ? '[ke kontrole] ' : ''}Poptávka #${id}: ${OBJEKT[d.objekt]}${d.reseni === 'multisplit' ? ', multisplit' : ''}${d.mistnosti && d.mistnosti !== '1' ? `, místností: ${d.mistnosti}` : ''} – ${d.obec}`;
  const text = [`Nová poptávka #${id} z klima-hisense.cz`, '', ...rows.map(([k, v]) => `${k}: ${v}`)].join('\n');
  const html = `<h2 style="font-family:Arial,sans-serif;color:#007e7b">Nová poptávka #${id} – klima-hisense.cz</h2>
<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="border-bottom:1px solid #ddd;vertical-align:top"><b>${esc(k)}</b></td><td style="border-bottom:1px solid #ddd">${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table>
<p style="font-family:Arial,sans-serif;font-size:13px;color:#555">Odpovědět zákazníkovi: <a href="mailto:${esc(d.email)}">${esc(d.email)}</a>, tel. ${esc(d.telefon)}</p>`;
  for (const to of String(env.NOTIFY_TO).split(',').map((s) => s.trim()).filter(Boolean)) {
    const raw = buildMime({ from: env.MAIL_FROM, fromName: 'Klima Hisense – poptávky', to, replyTo: d.email, subject, text, html });
    await env.EMAIL.send(new EmailMessage(env.MAIL_FROM, to, raw));
  }
}

/* MIME zpráva pro Cloudflare Email Routing (stejný postup jako v Kalkulaci COMPLETE) */
const enc = new TextEncoder();
const uid = (n = 16) => [...crypto.getRandomValues(new Uint8Array(n))].map((b) => b.toString(16).padStart(2, '0')).join('');
const b64u = (str) => { const by = enc.encode(str); let bin = ''; for (let i = 0; i < by.length; i += 0x8000) bin += String.fromCharCode(...by.subarray(i, i + 0x8000)); return btoa(bin); };
const hdrEnc = (str) => (/^[\x20-\x7e]*$/.test(str) ? str : `=?UTF-8?B?${b64u(str)}?=`);
const wrap76 = (s) => s.replace(/(.{76})/g, '$1\r\n');
const MAIL_RE = /^[^\s<>"',;:@\\]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
function buildMime({ from, fromName, to, replyTo, subject, text, html }) {
  const bnd = 'b_' + uid(12), dom = from.split('@')[1] || 'localhost';
  return [
    `From: ${hdrEnc(fromName)} <${from}>`, `To: <${to}>`,
    ...(replyTo && MAIL_RE.test(replyTo) ? [`Reply-To: <${replyTo}>`] : []),
    `Subject: ${hdrEnc(subject)}`, `Message-ID: <${uid(16)}@${dom}>`, `Date: ${new Date().toUTCString().replace('GMT', '+0000')}`,
    'MIME-Version: 1.0', `Content-Type: multipart/alternative; boundary="${bnd}"`, '',
    `--${bnd}`, 'Content-Type: text/plain; charset=UTF-8', 'Content-Transfer-Encoding: base64', '', wrap76(b64u(text || '')),
    `--${bnd}`, 'Content-Type: text/html; charset=UTF-8', 'Content-Transfer-Encoding: base64', '', wrap76(b64u(html || esc(text || ''))),
    `--${bnd}--`, ''].join('\r\n');
}

async function sha256(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
