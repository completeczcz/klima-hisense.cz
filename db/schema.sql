-- D1 schéma pro klima-hisense.cz
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  objekt TEXT,                 -- byt / dum / kancelar / jine
  rady TEXT,                   -- vybrané řady Hisense (JSON pole)
  mistnosti TEXT, plocha TEXT,
  psc TEXT, obec TEXT,
  jmeno TEXT, telefon TEXT, email TEXT, poznamka TEXT,
  zdroj_stranky TEXT, kampan TEXT, gclid TEXT,
  ip_hash TEXT, user_agent TEXT,
  stav TEXT NOT NULL DEFAULT 'nová',          -- nová / předaná / zaměřeno / realizováno / ztracená
  partner TEXT,
  poznamka_interni TEXT,
  reseni TEXT,                 -- split / multisplit / poradit
  sestava TEXT                 -- návrh z kalkulačky výkonu (text)
);
-- Další změny schématu provádí Worker sám (MIGRATIONS v worker/index.js, tabulka schema_migrations).
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_ip ON leads(ip_hash, created_at);

-- Zájem montážních firem o partnerství (/pro-montazni-firmy/) – vytváří Worker migrací 3 a 4
CREATE TABLE IF NOT EXISTS partneri (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  firma TEXT, ico TEXT, jmeno TEXT, telefon TEXT, email TEXT,
  kraje TEXT,                  -- JSON pole krajů působnosti
  fplyny TEXT,                 -- certifikace pro práci s F-plyny: ano / ne
  poznamka TEXT,
  ip_hash TEXT, stav TEXT NOT NULL DEFAULT 'nový', poznamka_interni TEXT
);
CREATE INDEX IF NOT EXISTS idx_partneri_ip ON partneri(ip_hash, created_at);
