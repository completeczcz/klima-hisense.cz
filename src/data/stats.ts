// Souhrnné údaje řad pro srovnávací prvky (hluk, topení, průvodce) – z katalogu Hisense 2026/2027 (viz products.ts).
export interface SeriesStat { id: string; name: string; noise: number; scop: number; seer: number; heatMin: number }

export const seriesStats: SeriesStat[] = [
  { id: 'air-master', name: 'Air Master', noise: 18, scop: 5.1, seer: 8.8, heatMin: -22 },
  { id: 'energy-pro-x', name: 'Energy Pro X', noise: 18, scop: 5.1, seer: 8.8, heatMin: -22 },
  { id: 'uni-pure', name: 'Uni Pure', noise: 19, scop: 4.6, seer: 8.5, heatMin: -22 },
  { id: 'wings-comfort', name: 'Wings Comfort', noise: 24, scop: 4.1, seer: 6.4, heatMin: -20 },
  { id: 'hi-smart', name: 'Hi-Smart', noise: 24, scop: 4.1, seer: 6.3, heatMin: -15 },
];

// Orientační hladiny běžných zvuků v dB(A) – obecně uváděné hodnoty
export const noiseRefs = [
  { db: 20, label: 'Šumění listí' },
  { db: 30, label: 'Šepot' },
  { db: 40, label: 'Tichá kancelář, lednice' },
  { db: 50, label: 'Tichá ulice' },
  { db: 60, label: 'Běžný rozhovor' },
];

// Čísla důvěry – Hisense obecně a provozovatel
export const trust = [
  { big: '1969', label: 'Hisense vyrábí elektroniku od roku 1969' },
  { big: '160+', label: 'zemí, kde Hisense působí' },
  { big: 'Red Dot', label: 'ocenění designu 2025 pro Air Master' },
  { big: '3 roky', label: 'záruka na všechny klimatizace' },
  { big: '23+ let', label: 'COMPLETE CZ v chlazení a klimatizaci' },
];
