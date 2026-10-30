// Centrální údaje webu – změny zde se propíšou do celého webu.
export const site = {
  name: 'Klima Hisense',
  domain: 'klima-hisense.cz',
  url: 'https://klima-hisense.cz',
  tagline: 'Klimatizace Hisense s montáží po celé ČR',
  claim: 'Oficiální zastoupení Hisense pro Českou republiku',
  phone: '+420 608 543 471',
  phoneHref: 'tel:+420608543471',
  email: 'info@klima-hisense.cz',
  hours: 'Po–Pá 8:00–16:00',
  responseTime: 'do 1 pracovního dne',
  warrantyYears: 3,
  contactPerson: { name: 'Sebastian Petrovka', role: 'Projektový manažer' },
  company: {
    name: 'COMPLETE CZ, spol. s r.o.',
    ico: '26707829',
    address: 'Vyskočilova 1410/1, 140 00 Praha 4',
    building: 'Budova Life – C',
    register: 'Městským soudem v Praze', // TODO: doplnit spisovou značku (oddíl C, vložka …)
    web: 'https://www.completecz.cz',
  },
  // Měření – vyplnit ID; prázdné = skript se nenačte.
  analytics: {
    gtmId: '',
    ga4Id: '',
    adsId: '', // AW-XXXXXXXXX
    adsLeadLabel: '', // conversion label pro odeslanou poptávku
  },
  turnstileSiteKey: '', // Cloudflare Turnstile – veřejný klíč (prázdné = bez ověření)
};

export const nav = [
  { href: '/klimatizace/', label: 'Klimatizace' },
  { href: '/chytre-funkce/', label: 'Chytré funkce' },
  { href: '/jak-to-probiha/', label: 'Montáž' },
  { href: '/blog/', label: 'Poradna' },
  { href: '/caste-dotazy/', label: 'Časté dotazy' },
];
