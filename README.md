# klima-hisense.cz

Poptávkový web pro klimatizace Hisense s montáží po celé ČR. Provozuje COMPLETE CZ, spol. s r.o., oficiální zastoupení Hisense pro ČR.

- **Technika:** Astro (statický web) + Cloudflare Worker (formulář, `worker/index.js`) + D1 + Email Routing
- **Nasazení a nastavení:** viz [NASAZENI.md](NASAZENI.md)

## Struktura

```
src/pages/            stránky (úvod, klimatizace, chytré funkce, poradna, poptávka, právní)
src/content/blog/     články poradny (Markdown)
src/data/             údaje webu, řady a funkce Hisense, FAQ
public/img/           fotky a piktogramy z podkladů Hisense
functions/api/        příjem poptávek
db/schema.sql         schéma databáze D1
```

## Příkazy

```
npm install
npm run dev        # vývoj na http://localhost:4321
npm run build      # produkční build do dist/
```
