// Slovník pojmů – klimatizace a tepelná čerpadla vzduch–vzduch.
// Údaje o řadách Hisense vycházejí z products.ts, features.ts a multisplit.ts (katalog Hisense 2026/2027).
// Texty jsou prostý text bez markdownu. Řazení podle české abecedy (ch za h) zajišťuje sort na konci souboru.

export interface Term { id: string; term: string; text: string; link?: { href: string; label: string } }

const terms: Term[] = [
  {
    id: 'ai-smart',
    term: 'AI Smart',
    text: 'Funkce, při které klimatizace sama řídí teplotu, vlhkost, směr a intenzitu proudění podle podmínek v místnosti, takže nemusíte nic nastavovat. U klimatizací Hisense ji mají řady Air Master a Energy Pro X.',
    link: { href: '/blog/smart-eye-a-ai-smart/', label: 'Smart Eye a AI Smart' },
  },
  {
    id: 'btu',
    term: 'BTU',
    text: 'British Thermal Unit, jednotka tepla používaná hlavně v USA a v zahraničních nabídkách. Výkon 9 000 BTU/h odpovídá zhruba 2,6 kW, 12 000 BTU/h asi 3,5 kW a 18 000 BTU/h asi 5,3 kW. V Evropě se výkon klimatizací uvádí v kW.',
    link: { href: '/blog/jaky-vykon-klimatizace/', label: 'Jaký výkon klimatizace zvolit' },
  },
  {
    id: 'connectlife',
    term: 'ConnectLife',
    text: 'Aplikace Hisense pro ovládání klimatizace z telefonu odkudkoli. Umí správu místností, časové plány, statistiky spotřeby a výkonu, přehled kvality vzduchu a chytrou diagnostiku.',
    link: { href: '/blog/chytra-klimatizace-aplikace-connectlife/', label: 'Chytrá klimatizace s aplikací ConnectLife' },
  },
  {
    id: 'coanduv-efekt',
    term: 'Coandův efekt',
    text: 'Jev, kdy proud vzduchu „přilne“ k blízké ploše a sleduje ji. Klimatizace Air Master ho využívá při chlazení: lamely natočí studený vzduch podél stropu, odkud se pozvolna snáší do místnosti, takže nefouká přímo na lidi.',
    link: { href: '/klimatizace/air-master/', label: 'Hisense Air Master' },
  },
  {
    id: 'dc-invertor',
    term: 'DC invertor',
    text: 'Řízení kompresoru, který plynule mění otáčky podle aktuální potřeby, místo aby se opakovaně zapínal a vypínal. Teplota je stabilnější, provoz tišší a spotřeba nižší. Invertorový kompresor mají všechny řady Hisense.',
  },
  {
    id: 'dual-trial-quadri-penta',
    term: 'DUAL, TRIAL, QUADRI, PENTA',
    text: 'Označení venkovních jednotek multisplit Hisense podle počtu připojitelných vnitřních jednotek: DUAL pro dvě, TRIAL pro tři, QUADRI pro čtyři a PENTA pro pět místností.',
    link: { href: '/klimatizace/multisplit/', label: 'Multisplit Hisense' },
  },
  {
    id: 'eer-cop',
    term: 'EER a COP',
    text: 'Okamžitá účinnost klimatizace v jednom bodě měření. EER udává poměr chladicího výkonu a příkonu (27 °C uvnitř, 35 °C venku), COP totéž pro topení (20 °C uvnitř, 7 °C venku). Pro srovnání modelů jsou vypovídající spíš sezónní hodnoty SEER a SCOP.',
    link: { href: '/blog/energeticke-tridy-seer-scop/', label: 'Energetické třídy, SEER a SCOP' },
  },
  {
    id: 'energeticka-trida',
    term: 'Energetická třída',
    text: 'Hodnocení úspornosti na energetickém štítku EU, nejlepší je A+++. U klimatizací se uvádí zvlášť pro chlazení (podle SEER) a pro topení (podle SCOP), proto může mít jednotka třeba A+++ v chlazení a A++ v topení.',
    link: { href: '/blog/energeticke-tridy-seer-scop/', label: 'Energetické třídy, SEER a SCOP' },
  },
  {
    id: 'f-plyny',
    term: 'F-plyny a certifikace',
    text: 'Fluorované skleníkové plyny, mezi které patří i chladivo R32. Na práci s chladivovým okruhem se vztahují evropská pravidla, takže napojení potrubí, kontrolu těsnosti, vakuování a plnění chladivem smí provádět jen certifikovaný technik.',
    link: { href: '/blog/jak-probiha-montaz-klimatizace/', label: 'Jak probíhá montáž klimatizace' },
  },
  {
    id: 'filtr-4-v-1',
    term: 'Filtr 4 v 1 a uhlíkový filtr',
    text: 'Filtr 4 v 1 kombinuje vitamín C, ionty stříbra, katechin a HEPA vrstvu a zachytí prach a jemné nečistoty; mají ho řady Air Master, Energy Pro X a Wings Comfort. Filtr s aktivním uhlím pohlcuje pachy a mají ho všechny řady Hisense.',
    link: { href: '/blog/cisty-vzduch-hi-nano-a-filtry/', label: 'Čistý vzduch: Hi-NANO a filtry' },
  },
  {
    id: 'gwp',
    term: 'GWP',
    text: 'Potenciál globálního oteplování, tedy kolikrát víc plyn přispívá ke skleníkovému efektu než stejné množství CO₂. Chladivo R32 má GWP 675, dříve rozšířené R410A přibližně 2 088.',
  },
  {
    id: 'hi-nano',
    term: 'Hi-NANO',
    text: 'Patentovaná ionizace záporných iontů Hisense, která potlačuje bakterie a viry ve vzduchu. Podle měření výrobce odstranila během 2 hodin 92,6 % viru H1N1 a 88,54 % bakterií E. coli. Mají ji řady Air Master, Energy Pro X a Uni Pure.',
    link: { href: '/blog/cisty-vzduch-hi-nano-a-filtry/', label: 'Čistý vzduch: Hi-NANO a filtry' },
  },
  {
    id: 'hlasove-ovladani',
    term: 'Hlasové ovládání',
    text: 'Ovládání klimatizace hlasovým asistentem Google nebo Amazon Alexa přes aplikaci ConnectLife. U Hisense ho podporují řady Air Master, Energy Pro X, Uni Pure a Wings Comfort.',
    link: { href: '/chytre-funkce/', label: 'Chytré funkce Hisense' },
  },
  {
    id: 'hlucnost',
    term: 'Hlučnost dB(A)',
    text: 'Hladina hluku vážená podle citlivosti lidského ucha. Stupnice je logaritmická: zvýšení o 10 dB vnímáme přibližně jako dvojnásobnou hlasitost. Nejtišší vnitřní jednotky Hisense (Air Master a Energy Pro X) běží v režimu QUIET od 18 dB(A).',
    link: { href: '/blog/klimatizace-do-loznice/', label: 'Tichá klimatizace do ložnice' },
  },
  {
    id: 'chladici-vykon',
    term: 'Chladicí výkon (kW)',
    text: 'Množství tepla, které klimatizace dokáže z místnosti odvést, udávané v kilowattech. Nejde o spotřebu elektřiny, ta je několikanásobně nižší. Orientačně se počítá se 100 W na m², takže 2,6 kW stačí zhruba do 25 m².',
    link: { href: '/blog/jaky-vykon-klimatizace/', label: 'Jaký výkon klimatizace zvolit' },
  },
  {
    id: 'chladivo',
    term: 'Chladivo',
    text: 'Látka, která v uzavřeném okruhu přenáší teplo mezi vnitřní a venkovní jednotkou. Venkovní jednotka je z výroby naplněná pro určitou délku potrubí, při delším potrubí technik chladivo doplní. Za provozu se chladivo nespotřebovává, a pokud ubývá, jde o netěsnost, kterou je třeba najít a opravit.',
  },
  {
    id: 'i-feel',
    term: 'I FEEL',
    text: 'Funkce, při které se teplota měří čidlem v dálkovém ovladači, tedy tam, kde sedíte nebo spíte, a ne pod stropem u vnitřní jednotky. Mají ji všechny řady Hisense.',
    link: { href: '/chytre-funkce/', label: 'Chytré funkce Hisense' },
  },
  {
    id: 'kanalova-jednotka',
    term: 'Kanálová jednotka',
    text: 'Vnitřní jednotka skrytá v podhledu nebo ve vedlejší místnosti, do klimatizovaného prostoru vede jen vzduchotechnické potrubí zakončené mřížkou. Hodí se do interiérů, kde nemá být jednotka vidět. Hisense ji nabízí ve výkonech 2,6–5,0 kW pro multisplit.',
    link: { href: '/klimatizace/multisplit/', label: 'Multisplit Hisense' },
  },
  {
    id: 'kazetova-jednotka',
    term: 'Kazetová jednotka',
    text: 'Vnitřní jednotka zabudovaná do podhledu, která rozvádí vzduch do čtyř stran. Typicky se používá v kancelářích a obchodech. U Hisense ve výkonech 2,6–7,0 kW.',
    link: { href: '/klimatizace/multisplit/', label: 'Multisplit Hisense' },
  },
  {
    id: 'kombinacni-tabulka',
    term: 'Kombinační tabulka',
    text: 'Tabulka výrobce, která určuje, jaké vnitřní jednotky a v jakém součtu výkonů lze připojit ke konkrétní venkovní jednotce multisplit. Součet vnitřních jednotek může být vyšší než jmenovitý výkon venkovní, protože všechny místnosti obvykle naplno neběží současně.',
    link: { href: '/blog/multisplit-nebo-samostatne-klimatizace/', label: 'Multisplit, nebo samostatné klimatizace?' },
  },
  {
    id: 'kondenzat',
    term: 'Kondenzát a jeho odvod',
    text: 'Voda, která se při chlazení sráží z vlhkého vzduchu na výměníku vnitřní jednotky. Odvádí se hadičkou se spádem ven nebo do kanalizace přes zápachovou uzávěrku; kde spád zajistit nejde, použije se malé čerpadlo kondenzátu. Při topení naopak odkapává voda z venkovní jednotky.',
    link: { href: '/blog/jak-probiha-montaz-klimatizace/', label: 'Jak probíhá montáž klimatizace' },
  },
  {
    id: 'konzolova-jednotka',
    term: 'Konzolová jednotka',
    text: 'Vnitřní jednotka umístěná nízko u podlahy, podobně jako radiátor. Výhodná je hlavně pro topení, do podkroví se šikmými stěnami nebo pod okno. Hisense ji nabízí ve výkonech 2,6–4,9 kW.',
    link: { href: '/klimatizace/multisplit/', label: 'Multisplit Hisense' },
  },
  {
    id: 'multisplit',
    term: 'Multisplit',
    text: 'Sestava s jednou venkovní jednotkou a dvěma až pěti vnitřními jednotkami, každá s vlastní teplotou. Všechny vnitřní jednotky ale pracují ve stejném režimu, buď chladí, nebo topí. Do multisplitu Hisense lze zapojit řady Air Master, Energy Pro X, Uni Pure a Wings Comfort.',
    link: { href: '/klimatizace/multisplit/', label: 'Multisplit Hisense' },
  },
  {
    id: 'obhlidka',
    term: 'Obhlídka',
    text: 'Návštěva technika před montáží. Posoudí místnost a potřebný výkon, navrhne umístění vnitřní a venkovní jednotky, trasu potrubí i odvod kondenzátu a na tomto základě se upřesní nabídka.',
    link: { href: '/blog/jak-probiha-montaz-klimatizace/', label: 'Jak probíhá montáž klimatizace' },
  },
  {
    id: 'odmrazovani',
    term: 'Odmrazování',
    text: 'Při topení v chladném a vlhkém počasí se na výměníku venkovní jednotky tvoří námraza. Jednotka ji proto čas od času automaticky odmrazí, na pár minut přeruší vyfukování teplého vzduchu a z venkovní jednotky odteče voda, případně stoupá pára. Jde o běžnou součást provozu.',
    link: { href: '/blog/topeni-klimatizaci/', label: 'Topení klimatizací' },
  },
  {
    id: 'propojovaci-potrubi',
    term: 'Propojovací potrubí',
    text: 'Dvě izolované měděné trubky (kapalinová a plynová), kterými proudí chladivo mezi jednotkami, vedené spolu s kabelem a hadičkou kondenzátu. U samostatných klimatizací Hisense může mít až 20 m a převýšení mezi jednotkami 10 až 15 m podle modelu.',
  },
  {
    id: 'r32',
    term: 'R32',
    text: 'Jednosložkové chladivo (difluormethan), které používají všechny nástěnné klimatizace Hisense. Oproti dříve používanému R410A má zhruba třetinový potenciál globálního oteplování a vystačí s menší náplní. Patří mezi mírně hořlavá chladiva, proto s ním pracuje jen certifikovaný technik.',
  },
  {
    id: 'rezim-8-c',
    term: 'Režim +8 °C',
    text: 'Temperování, při kterém klimatizace drží v místnosti stálých +8 °C, aby objekt nevymrzl. Hodí se na chatu, chalupu nebo byt, který je přes zimu prázdný. Umějí ho všechny nástěnné řady Hisense.',
    link: { href: '/vytapeni-klimatizaci/', label: 'Vytápění klimatizací' },
  },
  {
    id: 'rezim-quiet-a-sleep',
    term: 'Režim QUIET a SLEEP',
    text: 'QUIET sníží otáčky ventilátoru na minimum, aby jednotka běžela co nejtišeji, u Air Master a Energy Pro X od 18 dB(A). SLEEP je noční režim, který provoz přizpůsobí spánku a mají ho všechny řady Hisense.',
    link: { href: '/blog/klimatizace-do-loznice/', label: 'Tichá klimatizace do ložnice' },
  },
  {
    id: 'rezim-super',
    term: 'Režim SUPER (Turbo)',
    text: 'Krátkodobý provoz na maximální výkon, kterým po příchodu domů rychle vychladíte nebo v zimě zahřejete místnost. Mají ho všechny řady Hisense.',
    link: { href: '/chytre-funkce/', label: 'Chytré funkce Hisense' },
  },
  {
    id: 'samocisteni',
    term: 'Samočištění',
    text: 'Funkce, která po vypnutí vysuší a pročistí výměník vnitřní jednotky, takže se v ní méně drží prach a vlhkost. Mají ji všechny řady Hisense; pravidelné čištění filtrů a odborný servis ale nenahrazuje.',
    link: { href: '/blog/udrzba-a-cisteni-klimatizace/', label: 'Údržba a čištění klimatizace' },
  },
  {
    id: 'scop',
    term: 'SCOP',
    text: 'Sezónní topný faktor, tedy průměrná účinnost topení za celou topnou sezonu. SCOP 5,1 znamená, že klimatizace dodá asi 5,1 kWh tepla na každou spotřebovanou kWh elektřiny. Nejvyšší SCOP 5,1 mají u Hisense Air Master (2,6 a 3,5 kW) a Energy Pro X.',
    link: { href: '/blog/energeticke-tridy-seer-scop/', label: 'Energetické třídy, SEER a SCOP' },
  },
  {
    id: 'seer',
    term: 'SEER',
    text: 'Sezónní chladicí faktor, průměrná účinnost chlazení za celou letní sezonu s proměnlivými teplotami. Čím vyšší číslo, tím nižší spotřeba; podle něj se určuje energetická třída pro chlazení. Air Master 2,6 kW dosahuje SEER 8,8.',
    link: { href: '/blog/energeticke-tridy-seer-scop/', label: 'Energetické třídy, SEER a SCOP' },
  },
  {
    id: 'servis-a-udrzba',
    term: 'Servis a údržba',
    text: 'Filtry vnitřní jednotky stačí v sezoně propláchnout zhruba jednou za dva až čtyři týdny, odborný servis s vyčištěním výměníku a kontrolou odvodu kondenzátu se doporučuje jednou ročně. Zda se na zařízení vztahuje povinná kontrola těsnosti, závisí na množství chladiva; u běžných domácích klimatizací s malou náplní tomu tak zpravidla není.',
    link: { href: '/blog/udrzba-a-cisteni-klimatizace/', label: 'Údržba a čištění klimatizace' },
  },
  {
    id: 'smart-eye',
    term: 'Smart Eye a Smart Eye PRO',
    text: 'Senzory, které rozpoznají, kde v místnosti jste, a podle toho řídí proudění vzduchu, například v režimech „Foukej na mě“ a „Foukej mimo mě“. Smart Eye má Energy Pro X, Air Master má pokročilejší Smart Eye PRO s infračerveným senzorem 80 × 62 pixelů.',
    link: { href: '/blog/smart-eye-a-ai-smart/', label: 'Smart Eye a AI Smart' },
  },
  {
    id: 'split',
    term: 'Split klimatizace',
    text: 'Klimatizace rozdělená na vnitřní jednotku v místnosti a venkovní jednotku venku, propojené potrubím s chladivem. Hlučný kompresor je tak mimo obytný prostor. Jedna venkovní a jedna vnitřní jednotka tvoří samostatnou klimatizaci, tzv. single split.',
    link: { href: '/klimatizace/', label: 'Klimatizace Hisense' },
  },
  {
    id: 'svj',
    term: 'SVJ',
    text: 'Společenství vlastníků jednotek v bytovém domě. Venkovní jednotka se zpravidla montuje na fasádu nebo balkon, tedy na společné části domu, proto je obvykle potřeba souhlas SVJ nebo vlastníka domu podle stanov a pravidel konkrétního domu.',
    link: { href: '/blog/jak-probiha-montaz-klimatizace/', label: 'Jak probíhá montáž klimatizace' },
  },
  {
    id: 'tepelna-zatez',
    term: 'Tepelná zátěž',
    text: 'Součet tepla, které do místnosti proniká zvenku (slunce okny, střecha, stěny) a které v ní vzniká (lidé, spotřebiče, vaření). Z tepelné zátěže se určuje potřebný chladicí výkon, proto má například podkroví s velkými okny vyšší nároky než stejně velký pokoj na severu.',
    link: { href: '/blog/jaky-vykon-klimatizace/', label: 'Jaký výkon klimatizace zvolit' },
  },
  {
    id: 'tepelne-cerpadlo-vzduch-vzduch',
    term: 'Tepelné čerpadlo vzduch–vzduch',
    text: 'Zařízení, které odebírá teplo venkovnímu vzduchu a předává ho přímo vzduchu v místnosti. Každá klimatizace Hisense takto v zimě topí, podle řady až do venkovní teploty −22 °C, a z jedné kWh elektřiny vyrobí několikanásobně víc tepla.',
    link: { href: '/vytapeni-klimatizaci/', label: 'Vytápění klimatizací' },
  },
  {
    id: 'tepelne-cerpadlo-vzduch-voda',
    term: 'Tepelné čerpadlo vzduch–voda',
    text: 'Tepelné čerpadlo, které teplo z venkovního vzduchu předává vodě v otopné soustavě (radiátory, podlahové topení) a obvykle ohřívá i teplou vodu. Na rozdíl od klimatizace, tedy tepelného čerpadla vzduch–vzduch, ohřívá vodu, ne přímo vzduch v místnosti.',
  },
  {
    id: 'vakuovani',
    term: 'Vakuování',
    text: 'Krok montáže, při kterém technik vývěvou odsaje z propojovacího potrubí vzduch a vlhkost. Teprve potom otevře ventily s chladivem. Vlhkost v okruhu by zhoršovala účinnost a mohla poškodit kompresor.',
    link: { href: '/blog/jak-probiha-montaz-klimatizace/', label: 'Jak probíhá montáž klimatizace' },
  },
  {
    id: 'venkovni-jednotka',
    term: 'Venkovní jednotka',
    text: 'Část klimatizace s kompresorem, výměníkem a ventilátorem, která teplo odvádí ven, nebo ho při topení z venkovního vzduchu odebírá. Montuje se na fasádu, balkon, terasu nebo podstavec a potřebuje volný přívod i odvod vzduchu a přístup pro servis.',
  },
  {
    id: 'vnitrni-jednotka',
    term: 'Vnitřní jednotka',
    text: 'Část klimatizace v místnosti s výměníkem, ventilátorem, filtry a lamelami. Nejčastěji je nástěnná, k dispozici jsou i kazetové, kanálové a konzolové jednotky.',
    link: { href: '/klimatizace/', label: 'Klimatizace Hisense' },
  },
  {
    id: 'vyhrivana-vana',
    term: 'Vyhřívaná vana',
    text: 'Topné těleso ve spodní části venkovní jednotky, které brání zamrzání vody po odmrazování a pomáhá udržet spolehlivé topení v mrazu. Mají ji řady Air Master, Energy Pro X a Uni Pure.',
    link: { href: '/blog/topeni-klimatizaci/', label: 'Topení klimatizací' },
  },
  {
    id: 'wi-fi-modul',
    term: 'Wi-Fi modul',
    text: 'Komponenta, která připojí klimatizaci k domácí síti a umožní ovládání aplikací ConnectLife. Řady Air Master, Energy Pro X, Uni Pure a Wings Comfort ho mají v základu, u Hi-Smart je volitelný.',
    link: { href: '/blog/chytra-klimatizace-aplikace-connectlife/', label: 'Chytrá klimatizace s aplikací ConnectLife' },
  },
];

export const glossary: Term[] = terms.sort((a, b) => a.term.localeCompare(b.term, 'cs'));
