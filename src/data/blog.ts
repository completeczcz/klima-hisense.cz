export const catNames: Record<string, string> = {
  'vyber-klimatizace': 'Výběr klimatizace',
  'chytre-funkce': 'Chytré funkce',
  'montaz-a-provoz': 'Montáž a provoz',
};
export const readingTime = (body = '') => Math.max(3, Math.round(body.split(/\s+/).length / 200));
export const fmtDate = (d: Date) => d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });

// Ilustrační obrázek článku (fotky a produkty z podkladů Hisense)
const byPost: Record<string, string> = {
  'jak-vybrat-klimatizaci-do-bytu': '/img/interier-lampa.jpg',
  'jaky-vykon-klimatizace': '/img/kancelar.jpg',
  'klimatizace-do-loznice': '/img/hero-loznice.jpg',
  'klimatizace-hisense-prehled-rad': '/img/blog/rady.jpg',
  'topeni-klimatizaci': '/img/interier-zima.jpg',
  'chytra-klimatizace-aplikace-connectlife': '/img/blog/aplikace.jpg',
  'smart-eye-a-ai-smart': '/img/air-master-cerna.webp',
  'cisty-vzduch-hi-nano-a-filtry': '/img/uni-pure.webp',
  'energeticke-tridy-seer-scop': '/img/venkovni-jednotka.jpg',
  'jak-probiha-montaz-klimatizace': '/img/blog/montaz.jpg',
  'udrzba-a-cisteni-klimatizace': '/img/wings-comfort.webp',
  'klimatizace-do-rodinneho-domu': '/img/dum-rodina.jpg',
  'multisplit-nebo-samostatne-klimatizace': '/img/blog/multisplit.jpg',
  'klimatizace-v-bytovem-dome-svj': '/img/blog/svj.jpg',
  'dotace-na-klimatizaci': '/img/blog/dotace.jpg',
  'air-master-nebo-energy-pro-x': '/img/blog/am-epx.jpg',
};
export const postImage = (slug: string) => byPost[slug] ?? '/img/hero-loznice.jpg';
export const isPhoto = (src: string) => src.endsWith('.jpg');
// kontrola: každý článek má jiný obrázek
if (new Set(Object.values(byPost)).size !== Object.keys(byPost).length) throw new Error('Obrázky článků se opakují');
