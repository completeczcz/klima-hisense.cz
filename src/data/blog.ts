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
  'klimatizace-hisense-prehled-rad': '/img/air-master-cerna.webp',
  'topeni-klimatizaci': '/img/interier-zima.jpg',
  'chytra-klimatizace-aplikace-connectlife': '/img/energy-pro-x-cerna.webp',
  'smart-eye-a-ai-smart': '/img/air-master-cerna.webp',
  'cisty-vzduch-hi-nano-a-filtry': '/img/uni-pure.webp',
  'energeticke-tridy-seer-scop': '/img/energy-pro-x-bila.webp',
  'jak-probiha-montaz-klimatizace': '/img/interier-lampa.jpg',
  'udrzba-a-cisteni-klimatizace': '/img/wings-comfort.webp',
  'klimatizace-do-rodinneho-domu': '/img/interier-zima.jpg',
};
export const postImage = (slug: string) => byPost[slug] ?? '/img/hero-loznice.jpg';
export const isPhoto = (src: string) => src.endsWith('.jpg');
