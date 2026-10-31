# Klima Hisense – nasazení a provoz

## Aktuální stav
- Repozitář a Cloudflare projekt zatím nejsou založené. Postup níže.
- Poptávky a e-maily z info@klima-hisense.cz mají chodit na ps@completecz.cz.

Web je statický (Astro) a běží jako **Cloudflare Worker se statickými soubory** (stejně jako Kalkulace COMPLETE). Formulář zpracovává Worker (`worker/index.js`), poptávky se ukládají do **Cloudflare D1** a upozornění chodí e‑mailem přes **Cloudflare Email Routing** (vazba `EMAIL`). Nastavení je v `wrangler.jsonc`.

**E‑maily o poptávkách:** odesílatel `poptavky@klima-hisense.cz` (proměnná `MAIL_FROM`), příjemce `ps@completecz.cz` (`NOTIFY_TO`). Na doméně musí být zapnutý Email Routing a příjemce musí být v Email Routing → Destination addresses ve stavu *Verified*.

## 1. Propojení s GitHubem (jednorázově, ~5 min)

1. Cloudflare → **Workers & Pages** → **Create** → záložka **Pages** → **Connect to Git**.
2. Vyberte repozitář `completeczcz/klima-hisense.cz`, větev `main`.
3. Nastavení buildu:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`
4. **Save and Deploy.** Web poběží na `klima-hisense.pages.dev`. Každý push do `main` se nasadí sám.

## 2. Databáze poptávek (D1)

1. Workers & Pages → **D1** → **Create database** → název `klima-hisense-db`.
2. V databázi otevřete **Console** a vložte celý obsah souboru `db/schema.sql` → Execute.
   Pozdější změny schématu (nové sloupce, tabulka `partneri` pro formulář montážních firem) provádí Worker sám při první poptávce – seznam `MIGRATIONS` ve `worker/index.js`, provedené verze jsou v tabulce `schema_migrations`.
3. Pages projekt → **Settings → Bindings** → **Add → D1 database**: Variable name `DB`, databáze `klima-hisense-db`.
4. ID databáze doplňte do `wrangler.toml` (`database_id`), aby šlo testovat lokálně.

## 3. Proměnné prostředí (Settings → Variables and Secrets)

| Proměnná | K čemu | Povinné |
|---|---|---|
| `NOTIFY_TO` | kam chodí e-mail o nové poptávce, např. `info@klima-hisense.cz` | doporučené |
| `RESEND_API_KEY` | klíč z [resend.com](https://resend.com) pro odesílání e-mailů (zdarma do 3 000/měs.) | doporučené |
| `NOTIFY_FROM` | odesílatel, např. `Klima Hisense <poptavky@klima-hisense.cz>` (doména ověřená v Resend) | doporučené |
| `TURNSTILE_SECRET` | ochrana proti spamu (Cloudflare Turnstile) | doporučené |
| `IP_SALT` | libovolný náhodný text pro anonymizaci IP | ano |

Klíče typu „secret“ zadávejte jako **Encrypt**. Do repozitáře nikdy nepatří.

Bez `RESEND_API_KEY` se poptávky jen uloží do databáze (vidíte je v D1 konzoli).

## 4. Doména klima-hisense.cz

1. Přidejte doménu do Cloudflare (Add a site) a u registrátora přepněte nameservery na Cloudflare.
2. Pages projekt → **Custom domains** → přidejte `klima-hisense.cz` i `www.klima-hisense.cz`.
3. Přesměrování www → bez www: **Rules → Redirect Rules** (`www.klima-hisense.cz/*` → `https://klima-hisense.cz/${1}`, 301).
4. E-mail `info@klima-hisense.cz`: **Email → Email Routing** → přeposílání na vaši schránku.

## 5. Ochrana proti spamu (Turnstile)

1. Cloudflare → **Turnstile** → Add site → doména `klima-hisense.cz`, režim **Managed**.
2. Veřejný klíč (Site Key) vložte do `src/data/site.ts` → `turnstileSiteKey`.
3. Tajný klíč jako proměnnou `TURNSTILE_SECRET`.

## 6. Měření a Google Ads

V `src/data/site.ts` → `analytics` vyplňte:
- `gtmId` (Google Tag Manager, doporučeno) **nebo** `ga4Id` a `adsId`.
- Konverze: po odeslání formuláře se na stránce `/dekujeme/` odešle událost **`generate_lead`** (do dataLayer i gtag). V Google Ads ji importujte z GA4, nebo v GTM vytvořte konverzní značku Ads spouštěnou touto událostí.
- Cookie lišta používá **Consent Mode v2** (výchozí stav zamítnuto), což Google Ads v EU vyžaduje.
- Formulář ukládá `gclid` a UTM parametry, takže u každé poptávky víte, z jaké kampaně přišla.

## 7. Google Search Console

1. Přidejte doménu `klima-hisense.cz` (ověření DNS záznamem v Cloudflare).
2. Odešlete sitemapu `https://klima-hisense.cz/sitemap-index.xml`.

## Úpravy obsahu

| Co | Kde |
|---|---|
| Telefon, e-mail, firma, měření, Turnstile | `src/data/site.ts` |
| Řady klimatizací, modely, parametry | `src/data/products.ts` |
| Chytré funkce a srovnání řad | `src/data/features.ts` |
| Časté dotazy | `src/data/faq.ts` |
| Články poradny | `src/content/blog/*.md` |

Lokální spuštění: `npm install`, pak `npm run dev` (web) nebo `npm run build && npx wrangler pages dev dist` (web + formulář).

## Kontroly kvality

- `python3 scripts/check-links.py` – rozbité interní odkazy
- `python3 scripts/seo-audit.py` – délky titulků a popisů, H1, duplicity

