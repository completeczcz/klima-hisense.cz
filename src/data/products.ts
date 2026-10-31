// Řady nástěnných klimatizací Hisense – údaje z produktového katalogu Hisense 2026/2027 (COMPLETE CZ).
// Ceny se na webu záměrně neuvádějí.

export type Use = 'byt' | 'dum' | 'kancelar' | 'loznice';
export const useLabels: Record<Use, string> = { byt: 'Byt', dum: 'Rodinný dům', kancelar: 'Kancelář', loznice: 'Ložnice' };

export interface Model { code: string; color?: 'bila' | 'cerna'; kw: string; cls: string; room: string }
export interface Series {
  id: string;
  name: string;
  tag: string;
  /** doporučená řada – zlatý střed funkcí a ceny */
  recommended?: boolean;
  tagline: string;
  intro: string;
  uses: Use[];
  images: { bila?: string; cerna?: string };
  /** 3 krátké body na kartu */
  highlights: string[];
  /** klíčové údaje na kartu */
  stats: { label: string; value: string }[];
  /** marketingové přednosti v detailu */
  benefits: { title: string; text: string }[];
  /** funkce (id z features.ts) */
  functions: string[];
  models: Model[];
  spec: { cols: string[]; rows: string[][] };
  seoTitle: string;
  seoDescription: string;
}

export const colors = { bila: { name: 'Bílá', hex: '#F4F6F7' }, cerna: { name: 'Černá', hex: '#262B30' } } as const;

export const series: Series[] = [
  {
    id: 'air-master',
    name: 'Air Master',
    tag: 'Novinka 2026',
    tagline: 'Vlajková loď nové generace',
    intro:
      'Nejchytřejší klimatizace Hisense. Sama pozná, kde v místnosti jste, a vzduch rozvede podél stropu tak, aby vám nikdy nefoukalo na záda. V bílém nebo černém provedení, oceněná Red Dot 2025.',
    uses: ['byt', 'dum', 'loznice', 'kancelar'],
    images: { cerna: '/img/air-master-cerna.webp', bila: '/img/air-master-bila.webp' },
    highlights: ['Smart Eye PRO hlídá, kde jste', 'Tichá od 18 dB(A)', 'Topí i při −22 °C'],
    stats: [
      { label: 'Energetická třída', value: 'A+++' },
      { label: 'Hlučnost od', value: '18 dB(A)' },
      { label: 'Výkony', value: '2,6–5,0 kW' },
    ],
    benefits: [
      { title: 'Ví, kde v místnosti jste', text: 'Infračervený senzor Smart Eye PRO s rozlišením 80 × 62 pixelů rozpozná polohu osob i jejich tepelný komfort. Teplotu, směr a rychlost proudění pak klimatizace upraví sama.' },
      { title: 'Vzduch bez průvanu', text: 'Lamely se natáčejí až o 90° a Coandův efekt vede chladný vzduch podél stropu. Místnost se ochladí rovnoměrně a velmi tiše, od 18 dB(A).' },
      { title: 'Teplo i v mrazu', text: 'Topí až do venkovní teploty −22 °C. Vyhřívaná vana venkovní jednotky a režim udržování +8 °C zvládnou i chatu nebo chalupu.' },
      { title: 'Čistý vzduch, chytré ovládání', text: 'Ionizace Hi‑NANO, filtr 4 v 1 a filtr s aktivním uhlím. Ovládání přes aplikaci ConnectLife, hlasem i s funkcí AI Smart.' },
    ],
    functions: ['smart-eye', 'ai-smart', 'wifi', 'hlasove-ovladani', 'hi-nano', 'filtr-4v1', 'uhlikovy-filtr', 'i-feel', 'super', 'smart', 'celorocni-provoz'],
    models: [
      { code: 'QK25WM0B', color: 'cerna', kw: '2,6 / 3,2', cls: 'A+++ / A+++', room: 'do 25 m²' },
      { code: 'QK35WM0B', color: 'cerna', kw: '3,5 / 4,0', cls: 'A+++ / A+++', room: 'do 35 m²' },
      { code: 'QK50FM0B', color: 'cerna', kw: '5,0 / 5,4', cls: 'A+++ / A++', room: 'do 50 m²' },
      { code: 'QK25WM0A', color: 'bila', kw: '2,6 / 3,2', cls: 'A+++ / A+++', room: 'do 25 m²' },
      { code: 'QK35WM0A', color: 'bila', kw: '3,5 / 4,0', cls: 'A+++ / A+++', room: 'do 35 m²' },
      { code: 'QK50FM0A', color: 'bila', kw: '5,0 / 5,4', cls: 'A+++ / A++', room: 'do 50 m²' },
    ],
    spec: {
      cols: ['2,6 kW', '3,5 kW', '5,0 kW'],
      rows: [
        ['Chladicí výkon (min–max) [kW]', '2,6 (1,0–4,0)', '3,5 (1,0–4,4)', '5,0 (1,5–5,8)'],
        ['Topný výkon (min–max) [kW]', '3,2 (1,6–4,2)', '4,0 (1,6–4,8)', '5,4 (1,6–6,0)'],
        ['SEER / SCOP', '8,8 / 5,1', '8,6 / 5,1', '8,5 / 4,6'],
        ['Hlučnost vnitřní jednotky [dB(A)]', '18* / 25–38', '18* / 25–38', '18* / 31–44'],
        ['Hlučnost venkovní jednotky [dB(A)]', '51', '51', '54'],
        ['Průtok vzduchu max. [m³/h]', '680', '750', '880'],
        ['Rozměry vnitřní jednotky Š × V × H [mm]', '830 × 310 × 215', '830 × 310 × 215', '830 × 310 × 215'],
        ['Rozměry venkovní jednotky Š × V × H [mm]', '785 × 540 × 260', '785 × 540 × 260', '860 × 640 × 310'],
        ['Hmotnost vnitřní / venkovní [kg]', '10 / 33', '10 / 33', '11 / 38'],
        ['Provoz chlazení / topení [°C]', '−15 až +50 / −22 až +24', '−15 až +50 / −22 až +24', '−15 až +50 / −22 až +24'],
        ['Potrubí kapalina / plyn', '1/4" / 3/8"', '1/4" / 3/8"', '1/4" / 1/2"'],
        ['Max. délka potrubí / převýšení [m]', '20 / 10', '20 / 10', '20 / 15'],
        ['Napájení', '230 V, 1f', '230 V, 1f', '230 V, 1f'],
      ],
    },
    seoTitle: 'Hisense Air Master – klimatizace se Smart Eye PRO',
    seoDescription: 'Klimatizace Hisense Air Master: novinka 2026 se Smart Eye PRO, A+++, od 18 dB(A), topení do −22 °C. Bílá i černá, 2,6–5,0 kW. Nezávazná poptávka s montáží.',
  },
  {
    id: 'energy-pro-x',
    name: 'Energy Pro X',
    tag: 'Prémiový design',
    tagline: 'Prémiový design a inteligentní komfort',
    intro:
      'Elegantní klimatizace v černém nebo stříbrně bílém provedení s nejvyšší třídou A+++ v chlazení i topení. Řekněte jí „foukej na mě“, nebo „mimo mě“ a ona to udělá.',
    uses: ['byt', 'dum', 'loznice', 'kancelar'],
    images: { cerna: '/img/energy-pro-x-cerna.webp', bila: '/img/energy-pro-x-bila.webp' },
    highlights: ['Režimy „foukej na mě / mimo mě“', 'A+++ v chlazení i topení', 'Ionizace Hi‑NANO'],
    stats: [
      { label: 'Energetická třída', value: 'A+++' },
      { label: 'Hlučnost od', value: '18 dB(A)' },
      { label: 'Výkony', value: '2,6–3,5 kW' },
    ],
    benefits: [
      { title: 'Inteligentní oko Smart Eye', text: 'Pozná, kde v místnosti jste, a podle toho řídí teplotu, vlhkost i proudění. Režim „Foukej na mě“ vás rychle zchladí, „Foukej mimo mě“ zabrání průvanu.' },
      { title: 'Ionizace Hi‑NANO', text: 'Koncentrované ionty obklopí prach, viry a bakterie ve vzduchu. Podle měření výrobce odstranily 92,6 % viru H1N1 a až 88,5 % bakterií E. coli za 2 hodiny.' },
      { title: 'Topení i při mrazu', text: 'Topí až do −22 °C, má vyhřívanou vanu venkovní jednotky a umí udržovat v místnosti +8 °C.' },
      { title: 'Vše pod kontrolou v telefonu', text: 'Aplikace ConnectLife, hlasové ovládání, AI Smart, statistiky spotřeby a výkonu, samodiagnostika i samočištění.' },
    ],
    functions: ['smart-eye', 'ai-smart', 'wifi', 'hlasove-ovladani', 'hi-nano', 'filtr-4v1', 'uhlikovy-filtr', 'i-feel', 'super', 'celorocni-provoz'],
    models: [
      { code: 'QH25XV4B', color: 'cerna', kw: '2,6 / 3,2', cls: 'A+++ / A+++', room: 'do 25 m²' },
      { code: 'QH35XV4B', color: 'cerna', kw: '3,5 / 4,0', cls: 'A+++ / A+++', room: 'do 35 m²' },
      { code: 'QH25XV4A', color: 'bila', kw: '2,6 / 3,2', cls: 'A+++ / A+++', room: 'do 25 m²' },
      { code: 'QH35XV4A', color: 'bila', kw: '3,5 / 4,0', cls: 'A+++ / A+++', room: 'do 35 m²' },
    ],
    spec: {
      cols: ['2,6 kW', '3,5 kW'],
      rows: [
        ['Chladicí výkon (min–max) [kW]', '2,6 (1,0–4,0)', '3,5 (1,0–4,4)'],
        ['Topný výkon (min–max) [kW]', '3,2 (1,6–4,2)', '4,0 (1,6–4,8)'],
        ['SEER / SCOP', '8,8 / 5,1', '8,5 / 5,1'],
        ['Hlučnost vnitřní jednotky [dB(A)]', '18* / 25–38', '18* / 25–38'],
        ['Hlučnost venkovní jednotky [dB(A)]', '50', '53'],
        ['Průtok vzduchu max. [m³/h]', '580', '630'],
        ['Rozměry vnitřní jednotky Š × V × H [mm]', '877 × 301 × 194', '877 × 301 × 194'],
        ['Rozměry venkovní jednotky Š × V × H [mm]', '810 × 585 × 280', '810 × 585 × 280'],
        ['Hmotnost vnitřní / venkovní [kg]', '10 / 33', '10 / 33'],
        ['Provoz chlazení / topení [°C]', '−15 až +43 / −22 až +24', '−15 až +43 / −22 až +24'],
        ['Potrubí kapalina / plyn', '1/4" / 3/8"', '1/4" / 3/8"'],
        ['Max. délka potrubí / převýšení [m]', '20 / 10', '20 / 10'],
        ['Napájení', '230 V, 1f', '230 V, 1f'],
      ],
    },
    seoTitle: 'Hisense Energy Pro X – klimatizace A+++ v černé',
    seoDescription: 'Klimatizace Hisense Energy Pro X: A+++ v chlazení i topení, Smart Eye, ionizace Hi-NANO, od 18 dB(A). Černá nebo bílá, 2,6 a 3,5 kW. Poptávka s montáží po ČR.',
  },
  {
    id: 'uni-pure',
    name: 'Uni Pure',
    tag: 'Doporučujeme',
    recommended: true,
    tagline: 'Profesionální standard pro každodenní komfort',
    intro:
      'Tichá a výkonná klimatizace pro každý den. Od 19 dB(A), s ionizací Hi‑NANO a ovládáním z telefonu. Ideální do ložnice i obýváku, topí až do −22 °C.',
    uses: ['byt', 'dum', 'loznice'],
    images: { bila: '/img/uni-pure.webp' },
    highlights: ['Tichá od 19 dB(A)', 'A+++ v chlazení', 'Topí i při −22 °C'],
    stats: [
      { label: 'Energetická třída', value: 'A+++' },
      { label: 'Hlučnost od', value: '19 dB(A)' },
      { label: 'Výkony', value: '2,6–5,0 kW' },
    ],
    benefits: [
      { title: 'Ticho na spaní', text: 'Vnitřní jednotka začíná na 19 dB(A) v režimu QUIET. To je méně než šepot, takže vás v noci nebude rušit.' },
      { title: 'Topí celý rok', text: 'Venkovní jednotka má vyhřívanou vanu a topí až do −22 °C. V přechodném období klidně nahradí topení.' },
      { title: 'Ionizace Hi‑NANO', text: 'Koncentrované ionty účinně potlačují prach, viry a bakterie, takže doma dýcháte čistší vzduch.' },
      { title: 'Chytrá a odolná', text: 'Wi‑Fi a hlasové ovládání, statistiky spotřeby, samočištění a třístupňová antikorozní ochrana venkovní jednotky.' },
    ],
    functions: ['wifi', 'hlasove-ovladani', 'hi-nano', 'uhlikovy-filtr', 'i-feel', 'super', 'smart', 'celorocni-provoz'],
    models: [
      { code: 'HB25XU0A', kw: '2,6 / 3,0', cls: 'A+++ / A++', room: 'do 25 m²' },
      { code: 'HB35XU0A', kw: '3,5 / 3,9', cls: 'A+++ / A++', room: 'do 35 m²' },
      { code: 'HB50BP0A', kw: '5,0 / 5,4', cls: 'A++ / A++', room: 'do 50 m²' },
    ],
    spec: {
      cols: ['2,6 kW', '3,5 kW', '5,0 kW'],
      rows: [
        ['Chladicí výkon (min–max) [kW]', '2,6 (0,8–3,2)', '3,5 (1,0–4,0)', '5,0 (1,5–6,3)'],
        ['Topný výkon (min–max) [kW]', '3,0 (0,8–3,3)', '3,9 (1,0–4,4)', '5,4 (1,6–6,2)'],
        ['SEER / SCOP', '8,5 / 4,6', '8,5 / 4,6', '8,5 / 4,6'],
        ['Hlučnost vnitřní jednotky [dB(A)]', '19* / 25–40', '19* / 26–41', '19* / 31–44'],
        ['Hlučnost venkovní jednotky [dB(A)]', '54', '55', '55'],
        ['Průtok vzduchu max. [m³/h]', '680', '680', '950'],
        ['Rozměry vnitřní jednotky Š × V × H [mm]', '850 × 293 × 204', '850 × 293 × 204', '973 × 303 × 227'],
        ['Rozměry venkovní jednotky Š × V × H [mm]', '810 × 585 × 280', '810 × 585 × 280', '860 × 667 × 310'],
        ['Hmotnost vnitřní / venkovní [kg]', '9,5 / 28,5', '9,5 / 29,5', '11,5 / 38'],
        ['Provoz chlazení / topení [°C]', '−15 až +43 / −22 až +24', '−15 až +43 / −22 až +24', '−15 až +43 / −22 až +24'],
        ['Potrubí kapalina / plyn', '1/4" / 3/8"', '1/4" / 3/8"', '1/4" / 1/2"'],
        ['Max. délka potrubí / převýšení [m]', '20 / 10', '20 / 10', '20 / 15'],
        ['Napájení', '230 V, 1f', '230 V, 1f', '230 V, 1f'],
      ],
    },
    seoTitle: 'Hisense Uni Pure – tichá klimatizace od 19 dB(A)',
    seoDescription: 'Klimatizace Hisense Uni Pure: tichý provoz od 19 dB(A), A+++ v chlazení, ionizace Hi-NANO, topení do −22 °C. Výkony 2,6–5,0 kW. Nezávazná poptávka s montáží.',
  },
  {
    id: 'wings-comfort',
    name: 'Wings Comfort',
    tag: 'I pro velké místnosti',
    tagline: 'Ověřená volba pro každý domov',
    intro:
      'Spolehlivá klimatizace s filtrací 4 v 1, plazmovým ionizátorem a samočištěním. Jako jediná řada nabízí i výkon 6,3 kW pro velké obývací pokoje a kanceláře.',
    uses: ['byt', 'dum', 'kancelar'],
    images: { bila: '/img/wings-comfort.webp' },
    highlights: ['Filtr 4 v 1 a plazmový ionizátor', '4D natáčení lamel', 'Výkony až 6,3 kW'],
    stats: [
      { label: 'Energetická třída', value: 'A++' },
      { label: 'Hlučnost od', value: '24 dB(A)' },
      { label: 'Výkony', value: '2,6–6,3 kW' },
    ],
    benefits: [
      { title: 'Sama se vyčistí', text: 'Patentované samočištění vnitřní jednotky odstraňuje prach z výměníku, takže z klimatizace proudí čistší vzduch.' },
      { title: 'Vzduch do každého kouta', text: 'Horizontální i vertikální lamely řídí samostatné motory (4D). Vzduch se v místnosti lépe rozvádí a teplota je rovnoměrná.' },
      { title: 'Čtyřstupňová filtrace', text: 'Filtr 4 v 1 s vitamínem C, ionty stříbra, katechinem a HEPA, k tomu plazmový ionizátor a ochrana proti plísním.' },
      { title: 'Pohodlné ovládání', text: 'Wi‑Fi a hlasové ovládání přes aplikaci ConnectLife, funkce SMART, SUPER a I FEEL a 24h časovač.' },
    ],
    functions: ['wifi', 'hlasove-ovladani', 'plazma', 'filtr-4v1', 'uhlikovy-filtr', 'i-feel', 'super', 'smart', 'celorocni-provoz'],
    models: [
      { code: 'KB25YR4B', kw: '2,6 / 2,7', cls: 'A++ / A+', room: 'do 25 m²' },
      { code: 'KB35MR0B', kw: '3,2 / 3,3', cls: 'A++ / A+', room: 'do 32 m²' },
      { code: 'KB50XS1G', kw: '5,0 / 5,0', cls: 'A++ / A+', room: 'do 50 m²' },
      { code: 'KB70BT2B', kw: '6,3 / 6,8', cls: 'A++ / A+', room: 'do 63 m²' },
    ],
    spec: {
      cols: ['2,6 kW', '3,2 kW', '5,0 kW', '6,3 kW'],
      rows: [
        ['Chladicí výkon (min–max) [kW]', '2,6 (1,0–3,0)', '3,2 (1,0–4,0)', '5,0 (1,0–6,0)', '6,3 (1,6–7,2)'],
        ['Topný výkon (min–max) [kW]', '2,7 (1,0–3,0)', '3,3 (1,0–4,2)', '5,0 (1,6–6,25)', '6,8 (1,8–7,3)'],
        ['SEER / SCOP', '6,3 / 4,1', '6,4 / 4,0', '6,1 / 4,0', '6,3 / 4,0'],
        ['Hlučnost vnitřní jednotky [dB(A)]', '24–40', '24–40', '31–44', '32–46'],
        ['Hlučnost venkovní jednotky [dB(A)]', '51', '52', '55', '57'],
        ['Průtok vzduchu max. [m³/h]', '550', '550', '880', '1100'],
        ['Rozměry vnitřní jednotky Š × V × H [mm]', '833 × 256 × 203', '833 × 256 × 203', '943 × 300 × 225', '1039 × 325 × 237'],
        ['Rozměry venkovní jednotky Š × V × H [mm]', '660 × 483 × 240', '780 × 540 × 260', '810 × 585 × 280', '860 × 667 × 310'],
        ['Hmotnost vnitřní / venkovní [kg]', '7,7 / 21,5', '7,7 / 25', '11 / 34', '11,5 / 41'],
        ['Provoz chlazení / topení [°C]', '−15 až +43 / −20 až +24', '−15 až +43 / −20 až +24', '−15 až +43 / −20 až +24', '−15 až +43 / −20 až +24'],
        ['Potrubí kapalina / plyn', '1/4" / 3/8"', '1/4" / 3/8"', '1/4" / 1/2"', '3/8" / 5/8"'],
        ['Max. délka potrubí / převýšení [m]', '20 / 10', '20 / 10', '20 / 15', '20 / 15'],
        ['Napájení', '230 V, 1f', '230 V, 1f', '230 V, 1f', '230 V, 1f'],
      ],
    },
    seoTitle: 'Hisense Wings Comfort – klimatizace až 6,3 kW',
    seoDescription: 'Klimatizace Hisense Wings Comfort: samočištění, filtr 4 v 1, plazmový ionizátor, 4D lamely a výkon až 6,3 kW pro velké místnosti. Poptávka s montáží po ČR.',
  },
  {
    id: 'hi-smart',
    name: 'Hi‑Smart',
    tag: 'Základní řada',
    tagline: 'Dostupné řešení pro každého',
    intro:
      'Jednoduchá klimatizace s praktickými funkcemi pro ložnici, pracovnu nebo chatu. Rychle zchladí, v přechodném období přitopí a ve spánkovém režimu je potichu.',
    uses: ['byt', 'loznice'],
    images: { bila: '/img/hi-smart.webp' },
    highlights: ['Režimy SMART, SUPER, I FEEL a SLEEP', 'Filtr s aktivním uhlím', 'Wi‑Fi modul volitelně'],
    stats: [
      { label: 'Energetická třída', value: 'A++' },
      { label: 'Hlučnost od', value: '24 dB(A)' },
      { label: 'Výkony', value: '2,6–3,2 kW' },
    ],
    benefits: [
      { title: 'Tichý chod', text: 'Optimalizovaný vzduchový kanál snižuje hluk vnitřní jednotky až na 24 dB(A).' },
      { title: 'Úsporný režim', text: 'Jedním tlačítkem přepnete do úsporného režimu s minimální spotřebou, komfort přitom zůstane.' },
      { title: 'Praktické funkce', text: 'SMART, SUPER, I FEEL a SLEEP, LED displej, 24h časovač a temperování místnosti na +8 °C. Topí až do −15 °C.' },
      { title: 'Čistý vzduch', text: 'Filtrace s aktivním uhlím, antibakteriální povrch výměníků, ochrana proti plísním a samočištění.' },
    ],
    functions: ['i-feel', 'super', 'smart', 'uhlikovy-filtr', 'wifi'],
    models: [
      { code: 'CF25LR02', kw: '2,6 / 2,7', cls: 'A++ / A+', room: 'do 25 m²' },
      { code: 'CF35LR03', kw: '3,2 / 3,65', cls: 'A++ / A+', room: 'do 32 m²' },
    ],
    spec: {
      cols: ['2,6 kW', '3,2 kW'],
      rows: [
        ['Chladicí výkon (min–max) [kW]', '2,6 (1,0–3,0)', '3,2 (1,0–3,4)'],
        ['Topný výkon (min–max) [kW]', '2,7 (1,0–3,0)', '3,65 (1,0–3,75)'],
        ['SEER / SCOP', '6,3 / 4,1', '6,1 / 4,0'],
        ['Hlučnost vnitřní jednotky [dB(A)]', '24–40', '25–42'],
        ['Hlučnost venkovní jednotky [dB(A)]', '51', '55'],
        ['Průtok vzduchu max. [m³/h]', '550', '600'],
        ['Rozměry vnitřní jednotky Š × V × H [mm]', '795 × 256 × 197', '795 × 256 × 197'],
        ['Rozměry venkovní jednotky Š × V × H [mm]', '660 × 483 × 240', '660 × 483 × 240'],
        ['Hmotnost vnitřní / venkovní [kg]', '7,1 / 21,5', '7,1 / 19,8'],
        ['Provoz chlazení / topení [°C]', '−15 až +43 / −15 až +24', '−15 až +43 / −15 až +24'],
        ['Potrubí kapalina / plyn', '1/4" / 3/8"', '1/4" / 3/8"'],
        ['Max. délka potrubí / převýšení [m]', '20 / 10', '20 / 10'],
        ['Napájení', '230 V, 1f', '230 V, 1f'],
      ],
    },
    seoTitle: 'Hisense Hi-Smart – jednoduchá klimatizace do bytu',
    seoDescription: 'Klimatizace Hisense Hi-Smart: režimy SMART, SUPER, I FEEL a SLEEP, filtr s aktivním uhlím, provoz od 24 dB(A). Výkony 2,6 a 3,2 kW. Poptávka s montáží.',
  },
];

export const getSeries = (id: string) => series.find((s) => s.id === id)!;
export const mainImage = (s: Series) => s.images.cerna ?? s.images.bila!;
