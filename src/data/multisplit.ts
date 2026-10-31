// Multisplit Hisense – údaje z katalogu Hisense 2026/2027 (COMPLETE CZ), kapitola Klimatizace Multi split.
// Ceny se na webu záměrně neuvádějí.

export interface Outdoor {
  code: string;
  family: 'DUAL' | 'TRIAL' | 'QUADRI' | 'PENTA';
  ports: number;
  cool: number; // jmenovitý chladicí výkon kW
  heat: number; // jmenovitý topný výkon kW
  /** nejvyšší součet jmenovitých tříd vnitřních jednotek (2,5 / 3,5 / 5,0 / 7,0) podle kombinačních tabulek výrobce – zjednodušeno pro orientační výpočet */
  maxSum: number;
  /** největší nástěnná jednotka, kterou lze v běžné kombinaci připojit (kW třída) */
  maxUnit: number;
  branch: number; // max. délka potrubí jedné větve m
  total: number; // max. délka potrubí celkem m
  heatMin: number; // topí do venkovní teploty °C
}

export const outdoor: Outdoor[] = [
  { code: '2AMW42U4RGC', family: 'DUAL', ports: 2, cool: 4.1, heat: 4.5, maxSum: 6.0, maxUnit: 3.5, branch: 15, total: 30, heatMin: -20 },
  { code: '2AMW52U4RXC', family: 'DUAL', ports: 2, cool: 5.0, heat: 5.5, maxSum: 7.0, maxUnit: 3.5, branch: 20, total: 30, heatMin: -20 },
  { code: '3AMW62U4RJC', family: 'TRIAL', ports: 3, cool: 6.3, heat: 7.0, maxSum: 8.5, maxUnit: 5.0, branch: 25, total: 50, heatMin: -20 },
  { code: '3AMW72U4RJC', family: 'TRIAL', ports: 3, cool: 7.0, heat: 8.0, maxSum: 10.5, maxUnit: 5.0, branch: 25, total: 50, heatMin: -20 },
  { code: '4AMW81U4RJC', family: 'QUADRI', ports: 4, cool: 8.0, heat: 9.0, maxSum: 11.0, maxUnit: 5.0, branch: 25, total: 60, heatMin: -20 },
  { code: '5AMW105U4RQC', family: 'PENTA', ports: 5, cool: 10.0, heat: 11.0, maxSum: 15.5, maxUnit: 5.0, branch: 25, total: 80, heatMin: -20 },
  { code: '5AMW125U4RTA', family: 'PENTA', ports: 5, cool: 12.5, heat: 13.5, maxSum: 15.5, maxUnit: 5.0, branch: 20, total: 80, heatMin: -15 },
];

export const families = [
  { name: 'DUAL', rooms: 2, kw: '4,1 a 5,0 kW', text: 'Pro dvě místnosti, typicky obývák a ložnici v bytě.' },
  { name: 'TRIAL', rooms: 3, kw: '6,3 a 7,0 kW', text: 'Pro tři místnosti, třeba byt 3+kk nebo patro domu.' },
  { name: 'QUADRI', rooms: 4, kw: '8,0 kW', text: 'Pro čtyři místnosti, rodinný dům nebo menší kancelář.' },
  { name: 'PENTA', rooms: 5, kw: '10,0 a 12,5 kW', text: 'Až pět místností z jedné venkovní jednotky.' },
];

/** Nástěnné řady, které lze zapojit do multisplitu, a jejich chladicí výkony (kW) */
export const multiSeries: Record<string, number[]> = {
  'air-master': [2.6, 3.5, 5.0],
  'energy-pro-x': [2.6, 3.5],
  'uni-pure': [2.6, 3.5, 5.0],
  'wings-comfort': [2.6, 3.2, 5.0],
};

export const otherIndoor = [
  { name: 'Kazetové jednotky', text: 'Do podhledu, rozvádějí vzduch do čtyř stran. Kanceláře a obchody.', kw: '2,6–7,0 kW' },
  { name: 'Kanálové jednotky', text: 'Skryté v podhledu, ven vede jen mřížka. Pro čistý interiér.', kw: '2,6–5,0 kW' },
  { name: 'Konzolové jednotky', text: 'Nízko u podlahy, ideální pro topení a podkroví.', kw: '2,6–4,9 kW' },
  { name: 'Parapetně-podstropní', text: 'Pro velké místnosti a komerční prostory.', kw: '7,0 kW' },
];

export const multiFaq = [
  { q: 'Kolik místností připojím k jedné venkovní jednotce?', a: 'Dvě až pět. Venkovní jednotky Hisense DUAL jsou pro dvě místnosti, TRIAL pro tři, QUADRI pro čtyři a PENTA pro pět. Pro šest a více místností navrhneme dvě venkovní jednotky.' },
  { q: 'Může mít každá místnost jinou teplotu?', a: 'Ano. Každá vnitřní jednotka má vlastní ovladač a v aplikaci ConnectLife ji ovládáte zvlášť. V ložnici můžete mít 22 °C, v obýváku 24 °C a dětský pokoj úplně vypnout.' },
  { q: 'Může jedna místnost chladit a druhá topit?', a: 'Ne. Všechny vnitřní jednotky jedné venkovní jednotky pracují ve stejném režimu, buď chlazení, nebo topení. Teplotu i rychlost ventilátoru si ale nastavíte v každé místnosti jinak.' },
  { q: 'Je multisplit levnější než samostatné klimatizace?', a: 'Cena zařízení bývá podobná. Ušetříte hlavně místo a montáž venkovních jednotek: na fasádě je jedna místo tří. To ocení SVJ u bytových domů i vzhled rodinného domu. Konkrétní srovnání vám připravíme v nabídce.' },
  { q: 'Můžu další místnost připojit později?', a: 'Ano, pokud má venkovní jednotka volnou přípojku a dostatečný výkon. Proto se vyplatí zvolit venkovní jednotku s rezervou a potrubí do budoucí místnosti připravit už při montáži.' },
  { q: 'Co se stane, když se venkovní jednotka porouchá?', a: 'Přestanou fungovat všechny připojené místnosti, dokud servis jednotku neopraví. U samostatných klimatizací porucha jedné jednotky ostatní neovlivní. Venkovní jednotky Hisense mají diagnostiku a ochrany, které poruchám předcházejí.' },
];
