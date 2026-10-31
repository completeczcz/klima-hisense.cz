// Stránky podle použití (/klimatizace/do-bytu/ …). Texty vlastní, údaje o řadách z products.ts a stats.ts.
export interface UsePage {
  id: 'byt' | 'dum' | 'loznice' | 'kancelar';
  slug: string;
  label: string; // do menu
  title: string;
  description: string;
  h1: string;
  lead: string;
  image: string;
  imageAlt: string;
  /** doporučené řady v pořadí s důvodem */
  picks: { id: string; why: string }[];
  /** na co myslet */
  tips: { title: string; text: string }[];
  sizing: string;
  rooms: string[]; // výchozí místnosti kalkulačky
  multi: string; // věta o multisplitu
  faq: { q: string; a: string }[];
  articles: string[]; // slugy článků
}

export const uses: UsePage[] = [
  {
    id: 'byt',
    slug: 'do-bytu',
    label: 'Do bytu',
    title: 'Klimatizace do bytu Hisense s montáží',
    description: 'Klimatizace Hisense do bytu: které řady se hodí, jaký výkon zvolit, souhlas SVJ a umístění venkovní jednotky. Spočítejte si výkon a pošlete poptávku.',
    h1: 'Klimatizace do bytu',
    lead: 'V bytě rozhoduje tichý chod, nenápadná vnitřní jednotka a místo pro venkovní jednotku. Poradíme s výběrem i se souhlasem SVJ.',
    image: '/img/interier-lampa.jpg',
    imageAlt: 'Obývací pokoj v bytě s nástěnnou klimatizací Hisense',
    picks: [
      { id: 'uni-pure', why: 'Tichá od 19 dB(A), s ionizací Hi‑NANO a Wi‑Fi. Spolehlivý standard do obýváku i ložnice.' },
      { id: 'energy-pro-x', why: 'Prémiový design v černé nebo bílé a A+++ v chlazení i topení. Pro byty, kde záleží na vzhledu.' },
      { id: 'air-master', why: 'Nejchytřejší řada se Smart Eye PRO. Vzduch vede podél stropu, takže na vás nefouká.' },
      { id: 'hi-smart', why: 'Jednoduchá klimatizace s praktickými režimy do menšího pokoje nebo pracovny.' },
    ],
    tips: [
      { title: 'Souhlas SVJ', text: 'Venkovní jednotka na fasádě nebo lodžii obvykle potřebuje souhlas SVJ nebo vlastníka domu. Připravíme vám technické podklady.' },
      { title: 'Kam s venkovní jednotkou', text: 'Na lodžii, balkon, fasádu pod okno nebo na střechu. Technik vybere místo s dobrým prouděním vzduchu a krátkým potrubím.' },
      { title: 'Odvod kondenzátu', text: 'Voda z vnitřní jednotky odtéká samospádem, nebo ji vyčerpá malé čerpadlo, když to jinak nejde.' },
      { title: 'Více pokojů', text: 'Obývák a ložnici zvládne jedna venkovní jednotka. Na fasádě pak visí jen jedna.' },
    ],
    sizing: 'Do běžného pokoje do 25 m² obvykle stačí 2,6 kW, do obýváku do 35 m² 3,5 kW. U podkrovních a jižních bytů počítejte s rezervou.',
    rooms: ['obyvak:25'],
    multi: 'Chcete klimatizovat obývák i ložnici? Multisplit DUAL připojí dvě vnitřní jednotky k jedné venkovní, což ocení i SVJ.',
    faq: [
      { q: 'Potřebuji na klimatizaci v bytě povolení?', a: 'Stavební povolení se na běžnou klimatizaci zpravidla nevyžaduje. U bytového domu ale obvykle potřebujete souhlas SVJ nebo vlastníka s umístěním venkovní jednotky, v nájemním bytě souhlas pronajímatele.' },
      { q: 'Bude klimatizace v bytě rušit sousedy?', a: 'Venkovní jednotky Hisense mají podle modelu hlučnost zhruba 50–57 dB(A). Technik je umístí tak, aby nerušily sousedy, a vnitřní jednotky jsou v tichém režimu od 18 dB(A).' },
      { q: 'Jak dlouho montáž v bytě trvá?', a: 'Montáž jedné klimatizace obvykle zabere jeden den. Multisplit pro dvě až tři místnosti jeden až dva dny.' },
    ],
    articles: ['jak-vybrat-klimatizaci-do-bytu', 'klimatizace-v-bytovem-dome-svj', 'jaky-vykon-klimatizace'],
  },
  {
    id: 'dum',
    slug: 'do-domu',
    label: 'Do rodinného domu',
    title: 'Klimatizace do rodinného domu Hisense',
    description: 'Klimatizace Hisense do rodinného domu: chlazení podkroví, topení v přechodném období, multisplit pro více místností. Spočítejte si sestavu a pošlete poptávku.',
    h1: 'Klimatizace do rodinného domu',
    lead: 'V domě klimatizace zchladí rozpálené podkroví v létě a na jaře i na podzim úsporně přitopí. Pro více místností stačí jedna venkovní jednotka.',
    image: '/img/interier-zima.jpg',
    imageAlt: 'Útulný obývací pokoj rodinného domu s klimatizací Hisense',
    picks: [
      { id: 'air-master', why: 'SCOP až 5,1 a topení do −22 °C. Nejlepší volba, pokud chcete klimatizací i často topit.' },
      { id: 'energy-pro-x', why: 'A+++ v chlazení i topení a prémiový design do obytných místností.' },
      { id: 'uni-pure', why: 'Tichá do ložnic v podkroví, s vyhřívanou vanou venkovní jednotky.' },
      { id: 'wings-comfort', why: 'Jako jediná řada má výkon 6,3 kW pro velký obývací prostor s kuchyní.' },
    ],
    tips: [
      { title: 'Začněte podkrovím', text: 'Ložnice pod střechou se v létě přehřívají nejvíc. Klimatizace tam pomůže nejrychleji a nejvíc.' },
      { title: 'Topení v přechodném období', text: 'Na jaře a na podzim vytopí místnost rychle a bez zapínání kotle. Na chatě umí držet +8 °C.' },
      { title: 'Umístění venkovní jednotky', text: 'Na fasádu, konzoli u domu nebo terasu. Pozor na okna sousedů a volné proudění vzduchu.' },
      { title: 'Více místností', text: 'Multisplit připojí k jedné venkovní jednotce až pět vnitřních. Vzdálené místnosti můžou mít vlastní venkovní jednotku.' },
    ],
    sizing: 'Ložnice a dětské pokoje obvykle 2,6 kW, obývací pokoj 3,5–5,0 kW, velký otevřený prostor s kuchyní 6,3 kW nebo dvě jednotky.',
    rooms: ['obyvak:35', 'loznice:16', 'detsky:12'],
    multi: 'V domě se často klimatizuje víc místností. Multisplit TRIAL nebo QUADRI zvládne celé patro z jedné venkovní jednotky.',
    faq: [
      { q: 'Vytopí klimatizace celý dům?', a: 'Klimatizace vytápí místnost, ve které je vnitřní jednotka. Jako doplňkové topení v přechodném období nebo pro vybrané místnosti funguje velmi dobře. Hlavní vytápění celého domu navrhuje technik individuálně.' },
      { q: 'Kam v domě dát vnitřní jednotku?', a: 'Obvykle na stěnu naproti oknu nebo nad dveře, aby proud vzduchu nemířil přímo na postel nebo gauč. Technik při obhlídce navrhne nejlepší místo i trasu potrubí.' },
      { q: 'Je lepší multisplit, nebo samostatné klimatizace?', a: 'Pokud jsou místnosti blízko sebe, třeba v jednom patře, vyplatí se multisplit. Když jsou na opačných stranách domu, bývají lepší samostatné klimatizace. Rádi vám obě varianty porovnáme.' },
    ],
    articles: ['klimatizace-do-rodinneho-domu', 'topeni-klimatizaci', 'multisplit-nebo-samostatne-klimatizace'],
  },
  {
    id: 'loznice',
    slug: 'do-loznice',
    label: 'Do ložnice',
    title: 'Tichá klimatizace do ložnice Hisense',
    description: 'Tichá klimatizace do ložnice: řady Hisense od 18 dB(A), noční režim, proudění bez průvanu a správné umístění. Spočítejte výkon a pošlete poptávku.',
    h1: 'Tichá klimatizace do ložnice',
    lead: 'V ložnici rozhoduje ticho a proudění, které na vás nefouká. Nejtišší klimatizace Hisense běží od 18 dB(A), tedy tišeji než šepot.',
    image: '/img/hero-loznice.jpg',
    imageAlt: 'Ložnice s tichou klimatizací Hisense nad postelí',
    picks: [
      { id: 'air-master', why: 'Od 18 dB(A) a Coandův efekt vede vzduch podél stropu. Smart Eye PRO hlídá, aby na vás nefoukalo.' },
      { id: 'energy-pro-x', why: 'Od 18 dB(A) a směr proudění si nastavíte i hlasem: „foukej mimo mě“.' },
      { id: 'uni-pure', why: 'V režimu QUIET od 19 dB(A), s ionizací Hi‑NANO pro čistší vzduch při spánku.' },
    ],
    tips: [
      { title: 'Hlučnost vnitřní jednotky', text: 'Sledujte nejnižší hlučnost v dB(A). Rozdíl 18 a 24 dB(A) v tiché ložnici poznáte.' },
      { title: 'Noční režim', text: 'Režim SLEEP postupně upraví teplotu během noci, režim QUIET ztlumí ventilátor na minimum.' },
      { title: 'Umístění mimo postel', text: 'Vnitřní jednotka by neměla foukat přímo na postel. Ideální je stěna naproti nebo nad dveřmi.' },
      { title: 'Rozumná teplota', text: 'Pro spánek stačí rozdíl jen několik stupňů proti venku. Šetříte energii i zdraví.' },
    ],
    sizing: 'Do běžné ložnice do 20 m² stačí nejmenší výkon 2,6 kW. Podkrovní ložnice s velkými okny může potřebovat 3,5 kW.',
    rooms: ['loznice:14'],
    multi: 'Chcete chladit ložnici i dětský pokoj? Obě tiché jednotky připojíte k jedné venkovní jednotce v multisplitu.',
    faq: [
      { q: 'Která klimatizace Hisense je nejtišší?', a: 'Air Master a Energy Pro X začínají na 18 dB(A), Uni Pure na 19 dB(A) v tichém režimu QUIET.' },
      { q: 'Je zdravé spát s klimatizací?', a: 'Ano, pokud nefouká přímo na vás a teplota není příliš nízká. Pomůže noční režim, správné umístění vnitřní jednotky a pravidelné čištění filtrů.' },
      { q: 'Může klimatizace v ložnici běžet celou noc?', a: 'Může. Invertorová klimatizace po dosažení teploty jen udržuje nastavenou hodnotu s nízkým výkonem a velmi tiše.' },
    ],
    articles: ['klimatizace-do-loznice', 'smart-eye-a-ai-smart', 'udrzba-a-cisteni-klimatizace'],
  },
  {
    id: 'kancelar',
    slug: 'do-kancelare',
    label: 'Do kanceláře',
    title: 'Klimatizace do kanceláře Hisense',
    description: 'Klimatizace Hisense do kanceláře a provozovny: vyšší výkony, rovnoměrné proudění, ovládání z telefonu a kazetové jednotky do podhledu. Poptávka s montáží.',
    h1: 'Klimatizace do kanceláře a provozovny',
    lead: 'V kanceláři potřebujete stálou teplotu pro soustředění, rovnoměrné proudění bez průvanu a ovládání, které zvládne každý. I z telefonu.',
    image: '/img/kancelar.jpg',
    imageAlt: 'Moderní kancelář s klimatizací Hisense',
    picks: [
      { id: 'wings-comfort', why: 'Výkony až 6,3 kW pro větší kanceláře a zasedačky, filtr 4 v 1 a plazmový ionizátor.' },
      { id: 'air-master', why: 'Smart Eye PRO pozná, kde lidé sedí, a proudění rozvede podél stropu bez průvanu.' },
      { id: 'uni-pure', why: 'Tichý provoz a čistší vzduch do menších kanceláří a ordinací.' },
    ],
    tips: [
      { title: 'Výkon podle lidí a techniky', text: 'Každý člověk a počítač přidává teplo. Kancelář proto obvykle potřebuje vyšší výkon než stejně velký pokoj doma.' },
      { title: 'Proudění bez průvanu', text: 'Vnitřní jednotku umístěte tak, aby nefoukala přímo na pracovní místa.' },
      { title: 'Více místností', text: 'Kanceláře a zasedačky zvládne multisplit s jednou venkovní jednotkou, i s kazetovými jednotkami do podhledu.' },
      { title: 'Ovládání a provoz', text: 'Přes aplikaci ConnectLife nastavíte časový plán, aby se kancelář vychladila ještě před příchodem.' },
    ],
    sizing: 'Menší kancelář do 20 m² obvykle 2,6–3,5 kW, open space a zasedačky 5,0–6,3 kW nebo více jednotek.',
    rooms: ['kancelar:20'],
    multi: 'Pro více kanceláří navrhneme multisplit s nástěnnými, kazetovými nebo kanálovými jednotkami.',
    faq: [
      { q: 'Jaký výkon potřebuje kancelář?', a: 'Záleží na ploše, oslunění, počtu lidí a techniky. Orientačně spočítá kalkulačka, přesný výkon určí technik při obhlídce.' },
      { q: 'Lze klimatizaci v kanceláři ovládat centrálně?', a: 'Každou jednotku ovládáte vlastním ovladačem nebo všechny v aplikaci ConnectLife, kde nastavíte i časové plány.' },
      { q: 'Máte i jednotky do podhledu?', a: 'Ano. Pro kanceláře se hodí kazetové jednotky do podhledu nebo skryté kanálové jednotky. Zapojíte je do multisplitu.' },
    ],
    articles: ['jaky-vykon-klimatizace', 'chytra-klimatizace-aplikace-connectlife', 'multisplit-nebo-samostatne-klimatizace'],
  },
];
