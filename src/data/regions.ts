// Montáž klimatizace Hisense podle krajů.
// Zásady: žádné pobočky, technici „ve městě X“, reakční doby po krajích, počty montáží, reference ani ceny.
// Montáž zajišťuje prověřená partnerská firma z regionu. Klimatické a stavební údaje jsou obecné.
// Topení podle řady: Air Master, Energy Pro X, Uni Pure do −22 °C, Wings Comfort do −20 °C, Hi-Smart do −15 °C, multisplit do −20 °C.

export interface Region {
  id: string;
  name: string;
  inName: string;
  cities: string[];
  intro: string;
  housing: string;
  climate: string;
  tip: string;
  faq: { q: string; a: string }[];
}

export const regions: Region[] = [
  {
    id: 'praha',
    name: 'Praha',
    inName: 'v Praze',
    cities: ['Praha 1', 'Praha 2', 'Praha 3', 'Praha 4', 'Praha 5', 'Praha 6', 'Praha 8', 'Praha 9', 'Praha 10', 'Praha 11', 'Praha 13', 'Praha 22'],
    intro:
      'Klimatizaci Hisense s montáží zajistíme v celé Praze, od historického centra po okrajové čtvrti. Poptávku předáme prověřené partnerské firmě z Prahy nebo blízkého okolí, která udělá obhlídku a připraví nabídku. Ozveme se do 1 pracovního dne.',
    housing:
      'Pražský bytový fond tvoří činžovní domy z přelomu 19. a 20. století, rozsáhlá sídliště jako Jižní Město, Černý Most nebo Stodůlky a stále víc novostaveb. Ve většině případů jde o bytový dům, takže umístění venkovní jednotky na fasádu, balkon či lodžii schvaluje SVJ nebo vlastník domu. Pro dva a více pokojů v jednom bytě se často vyplatí multisplit, protože na fasádě pak visí jen jedna venkovní jednotka.',
    climate:
      'Hustá zástavba, asfalt a málo zeleně vytvářejí tepelný ostrov města, a proto se Praha v létě ohřívá víc než okolní krajina a v noci pomaleji chladne. Nejvíc to pocítíte v podkrovních bytech a v pokojích s okny na jih a západ. V zimě poslouží klimatizace jako úsporné přitápění v přechodném období, řady Air Master, Energy Pro X a Uni Pure topí až do −22 °C.',
    tip:
      'Souhlas SVJ si vyřiďte ještě před objednáním montáže. K žádosti přiložte fotku plánovaného umístění venkovní jednotky a údaje o její hlučnosti, schvalování to obvykle urychlí.',
    faq: [
      {
        q: 'Dá se klimatizace namontovat v domě v Pražské památkové rezervaci?',
        a: 'Většinou ano, ale u domů v památkové rezervaci nebo zóně je pro umístění venkovní jednotky obvykle potřeba stanovisko orgánu památkové péče. Uliční fasáda bývá problematická, schůdnější je dvorní fasáda, pavlač nebo střecha. Možnosti probere partnerská firma při obhlídce.',
      },
      {
        q: 'Bydlím v pronajatém bytě. Můžu si nechat klimatizaci namontovat?',
        a: 'Montáž klimatizace je změna bytu, ke které potřebujete souhlas pronajímatele, a v bytovém domě navíc souhlas SVJ nebo vlastníka domu. Nejlépe je domluvit se písemně i na tom, co se s klimatizací stane při skončení nájmu.',
      },
    ],
  },
  {
    id: 'stredocesky-kraj',
    name: 'Středočeský kraj',
    inName: 've Středočeském kraji',
    cities: ['Kladno', 'Mladá Boleslav', 'Příbram', 'Kolín', 'Kutná Hora', 'Mělník', 'Benešov', 'Beroun', 'Rakovník', 'Nymburk', 'Brandýs nad Labem-Stará Boleslav', 'Říčany'],
    intro:
      'Středočeský kraj obepíná Prahu a montáž klimatizací Hisense tu zajišťujeme ve městech i v menších obcích. Vaši poptávku převezme prověřená partnerská firma z okolí, která navrhne umístění jednotek a připraví nabídku. Poptávka je zdarma a nezávazná.',
    housing:
      'Typickým bydlením jsou rodinné domy v satelitních obcích kolem Prahy, často novostavby s dobrou izolací a velkými prosklenými plochami. K tomu se přidávají sídliště v Kladně, Mladé Boleslavi či Příbrami a množství chat a chalup na Posázaví, Kokořínsku nebo v Brdech. U rodinného domu se venkovní jednotka obvykle umisťuje na zahradní stranu nebo na podstavec u domu, aby nerušila sousedy.',
    climate:
      'Polabí kolem Nymburka, Kolína a Mělníka patří k teplejším a sušším oblastem Čech, zatímco Brdy a Křivoklátsko jsou znatelně chladnější. Novostavby s velkými okny na jih a západ se v létě přehřívají i přes kvalitní izolaci. V zimě klimatizace Hisense topí podle řady až do −22 °C, takže dobře poslouží i na chatě.',
    tip:
      'Pokud má novostavba velké prosklené plochy na jih nebo západ, řekněte to při poptávce. Tepelná zátěž od slunce je tu vyšší, než by odpovídalo samotné ploše místnosti, a výkon jednotky se tomu musí přizpůsobit.',
    faq: [
      {
        q: 'Developer mi do novostavby připravil přípravu pro klimatizaci. Co to znamená?',
        a: 'Obvykle jde o předem uložené potrubí nebo chráničky ve zdi a místo pro odvod kondenzátu. Partnerská firma při obhlídce ověří, zda příprava odpovídá zvolené jednotce, tedy dimenzi potrubí a jeho délce, a zda ji lze použít.',
      },
      {
        q: 'Vyplatí se klimatizace na chatu, kam jezdíme jen o víkendech?',
        a: 'Ano, zvlášť s režimem udržování +8 °C, který mají například řady Air Master a Hi-Smart. Chata přes týden nevymrzne a přes aplikaci ConnectLife ji před příjezdem vytopíte na plnou teplotu. U Hi-Smart je k tomu potřeba volitelný Wi-Fi modul.',
      },
    ],
  },
  {
    id: 'jihocesky-kraj',
    name: 'Jihočeský kraj',
    inName: 'v Jihočeském kraji',
    cities: ['České Budějovice', 'Tábor', 'Písek', 'Strakonice', 'Jindřichův Hradec', 'Český Krumlov', 'Prachatice', 'Třeboň', 'Milevsko', 'Dačice', 'Vimperk', 'Kaplice'],
    intro:
      'V Jihočeském kraji zajistíme klimatizaci Hisense do bytu, rodinného domu i rekreačního objektu na Šumavě nebo u Lipna. Montáž provede prověřená partnerská firma z regionu. Do 1 pracovního dne se vám ozveme s doporučením vhodné řady.',
    housing:
      'Vedle bytových domů v Českých Budějovicích, Táboře či Písku tu převládají rodinné domy a venkovská stavení. Historická centra jako Český Krumlov, Třeboň nebo Jindřichův Hradec jsou památkově chráněná, takže umístění venkovní jednotky se tu musí řešit s ohledem na vzhled domu. Na Šumavě a kolem Lipna je mnoho chalup a apartmánů, kam majitelé jezdí jen občas.',
    climate:
      'Českobudějovická a Třeboňská pánev mají teplá léta, zato Šumava patří k nejchladnějším oblastem republiky s dlouhou zimou a vysokou sněhovou pokrývkou. V horách proto klimatizace slouží hlavně k topení a temperování. Pro tyto podmínky se hodí řady Air Master, Energy Pro X a Uni Pure s provozem do −22 °C a vyhřívanou vanou venkovní jednotky.',
    tip:
      'U horské chalupy nebo apartmánu počítejte s tím, že venkovní jednotka musí stát nad úrovní sněhu a mimo místa, kam padá sníh ze střechy. Vhodné místo určí partnerská firma při obhlídce.',
    faq: [
      {
        q: 'Můžu klimatizaci v apartmánu na Lipně ovládat z domova?',
        a: 'Ano. Řady Air Master, Energy Pro X, Uni Pure a Wings Comfort mají Wi-Fi v základu a ovládáte je v aplikaci ConnectLife odkudkoli. Den před příjezdem tak apartmán vytopíte nebo v létě předchladíte, potřebujete jen internet v objektu.',
      },
      {
        q: 'Může být klimatizace na Šumavě hlavním zdrojem tepla?',
        a: 'V dobře zateplené chalupě může klimatizace pokrýt velkou část vytápění, ale výkon s klesající venkovní teplotou ubývá. Pro tuhé mrazy je rozumné mít záložní zdroj, například kamna. O tom, zda klimatizace stačí, rozhodnou tepelné ztráty objektu, které posoudí technik.',
      },
    ],
  },
  {
    id: 'plzensky-kraj',
    name: 'Plzeňský kraj',
    inName: 'v Plzeňském kraji',
    cities: ['Plzeň', 'Klatovy', 'Rokycany', 'Domažlice', 'Tachov', 'Sušice', 'Přeštice', 'Nýřany', 'Stříbro', 'Horažďovice', 'Nepomuk', 'Horšovský Týn'],
    intro:
      'Klimatizace Hisense s montáží je dostupná v Plzni i v celém Plzeňském kraji až po Šumavu a Český les. Poptávku předáme prověřené partnerské firmě z regionu, která připraví obhlídku a nabídku na míru. Poptávka nic nestojí a k ničemu nezavazuje.',
    housing:
      'Plzeň kombinuje činžovní domy v centru se sídlišti na Lochotíně, Borech, Slovanech nebo v Doubravce, z nichž mnohá prošla revitalizací a zateplením. Na venkově, zejména na Chodsku a Klatovsku, jsou typické statky a starší domy se silnými kamennými nebo smíšenými zdmi. Obojí ovlivňuje, jak se jednotky ukotví a kudy povede potrubí.',
    climate:
      'Plzeňská pánev mívá v létě vysoké teploty, které se v zástavbě drží i v noci. Šumava a Český les jsou naopak chladné a zasněžené, takže tam bývá hlavní motivací úsporné topení. Řady Hisense topí podle typu do −15 °C až −22 °C a jednotku pro horské polohy je dobré volit s rezervou.',
    tip:
      'Chystáte zateplení nebo rekonstrukci domu? Naplánujte klimatizaci předem, průchody pro potrubí a kotvení konzol se pak připraví ještě před zateplením a izolaci nebude nutné dodatečně narušovat.',
    faq: [
      {
        q: 'Panelový dům v Plzni prošel zateplením. Dá se na fasádu ještě namontovat venkovní jednotka?',
        a: 'Ano, ale konzole se musí ukotvit do nosné zdi skrz izolaci a průchody potrubí pečlivě utěsnit. Některá SVJ po zateplení stanovují jednotné umístění, například na lodžie. Postup proto doporučujeme probrat s výborem SVJ ještě před obhlídkou.',
      },
      {
        q: 'Mám starý statek se zdmi silnými přes půl metru. Je to pro montáž problém?',
        a: 'Většinou ne. Průchod pro potrubí se vyvrtá jádrovým vrtákem, u silných a smíšených zdí je jen pracnější. Důležité je, aby trasa potrubí nepřesáhla povolenou délku, u samostatných klimatizací Hisense je to 20 m.',
      },
    ],
  },
  {
    id: 'karlovarsky-kraj',
    name: 'Karlovarský kraj',
    inName: 'v Karlovarském kraji',
    cities: ['Karlovy Vary', 'Cheb', 'Sokolov', 'Mariánské Lázně', 'Ostrov', 'Františkovy Lázně', 'Aš', 'Chodov', 'Nejdek', 'Kraslice', 'Horní Slavkov', 'Jáchymov'],
    intro:
      'Klimatizace Hisense zajistíme do bytů, rodinných domů i penzionů v celém Karlovarském kraji. Montáž provede prověřená partnerská firma z regionu nebo z okolí, která se vám ozve kvůli obhlídce. My se ozveme do 1 pracovního dne od odeslání poptávky.',
    housing:
      'Pro kraj jsou typická lázeňská města s historickými vilami a lázeňskými domy. Karlovy Vary, Mariánské Lázně a Františkovy Lázně patří mezi Slavná lázeňská města Evropy zapsaná na seznam UNESCO, a zásahy do fasád tam podléhají památkové ochraně. Na Sokolovsku a Chebsku najdete sídliště, v Krušných horách chalupy a penziony.',
    climate:
      'Kraj patří k chladnějším částem republiky, hlavně Krušné hory a Slavkovský les mají drsnější zimy a kratší léto. Horké dny ale přicházejí i sem, nejvíc v údolí Ohře. Klimatizace tu proto často slouží jako úsporné topení v přechodném období a temperování objektů, které nejsou trvale obydlené.',
    tip:
      'U penzionu nebo domu s pokoji k pronájmu zvažte, zda chcete pokoje řídit nezávisle na sobě. Na tom závisí volba mezi samostatnými klimatizacemi a multisplitem.',
    faq: [
      {
        q: 'Provozuji penzion. Je lepší multisplit, nebo samostatná klimatizace do každého pokoje?',
        a: 'Multisplit šetří místo na fasádě, ale všechny pokoje na jedné venkovní jednotce musí současně chladit, nebo topit. Samostatné klimatizace jsou na sobě nezávislé a porucha jedné neovlivní ostatní pokoje. Pro pokoje hostů s různými nároky proto bývají praktičtější samostatné jednotky.',
      },
      {
        q: 'Kam s venkovní jednotkou u lázeňského domu, kde nesmím měnit uliční fasádu?',
        a: 'Obvykle se hledá místo na dvorní fasádě, ve vnitrobloku, na zahradě nebo na střeše, kde jednotka není z ulice vidět. U chráněných objektů je vhodné umístění předem konzultovat s orgánem památkové péče. Trasu potrubí navrhne partnerská firma při obhlídce.',
      },
    ],
  },
  {
    id: 'ustecky-kraj',
    name: 'Ústecký kraj',
    inName: 'v Ústeckém kraji',
    cities: ['Ústí nad Labem', 'Teplice', 'Děčín', 'Most', 'Chomutov', 'Litoměřice', 'Louny', 'Žatec', 'Kadaň', 'Litvínov', 'Jirkov', 'Roudnice nad Labem'],
    intro:
      'Montáž klimatizací Hisense zajišťujeme v celém Ústeckém kraji, od Podkrušnohoří po Litoměřicko a Lounsko. Poptávku převezme prověřená partnerská firma z regionu a domluví s vámi obhlídku. Na poptávku odpovídáme do 1 pracovního dne.',
    housing:
      'Velká část obyvatel kraje bydlí v panelových domech, ať už v Mostě, Chomutově, Litvínově nebo na ústeckých sídlištích, často ve vyšších patrech. U paneláků se venkovní jednotka obvykle umisťuje na lodžii nebo na fasádu vedle ní, vždy se souhlasem SVJ či vlastníka domu. V Českém středohoří a na Litoměřicku jsou běžné rodinné domy a chalupy.',
    climate:
      'Polabí kolem Litoměřic a Roudnice patří k nejteplejším místům Čech a Žatecko s Lounskem leží ve srážkovém stínu Krušných hor, takže tu bývají suchá a horká léta. Pánevní oblasti pod Krušnými horami trápí v zimě teplotní inverze. Krušné hory samotné jsou chladné a větrné, pro chalupy tam volte řadu s provozem do −22 °C.',
    tip:
      'V horních patrech paneláku se zeptejte, zda půjde montáž provést z lodžie, nebo bude potřeba plošina či výšková technika. Ovlivní to termín i nabídku, a partnerská firma to posoudí při obhlídce.',
    faq: [
      {
        q: 'Mám zasklenou lodžii. Můžu na ni dát venkovní jednotku?',
        a: 'Jen pokud bude lodžie při provozu dostatečně větraná. V uzavřené zasklené lodžii by jednotka nasávala vlastní ohřátý vzduch, ztrácela výkon a v létě by se přehřívala. Často se proto jednotka umisťuje na fasádu vedle lodžie nebo se okno lodžie za provozu otevírá.',
      },
      {
        q: 'Jak se montuje venkovní jednotka ve vysokém patře panelového domu?',
        a: 'Pokud je k dispozici lodžie nebo balkon, montuje se z nich. Na volnou fasádu ve výšce se pracuje z vysokozdvižné plošiny nebo s využitím výškové techniky. Způsob zvolí partnerská firma podle domu a přístupu k fasádě.',
      },
    ],
  },
  {
    id: 'liberecky-kraj',
    name: 'Liberecký kraj',
    inName: 'v Libereckém kraji',
    cities: ['Liberec', 'Jablonec nad Nisou', 'Česká Lípa', 'Turnov', 'Semily', 'Nový Bor', 'Frýdlant', 'Tanvald', 'Železný Brod', 'Jilemnice', 'Hrádek nad Nisou', 'Mimoň'],
    intro:
      'Klimatizaci Hisense s montáží zajistíme v Liberci, Jablonci i v horských obcích Jizerských hor a Krkonoš. Poptávku předáme prověřené partnerské firmě z regionu. Ta navrhne umístění jednotek s ohledem na místní podmínky a připraví nabídku.',
    housing:
      'Liberec a Jablonec nabízejí pestrou skladbu od secesních vil a činžovních domů po sídliště. V Jizerských horách, Krkonoších a Českém ráji je mnoho roubenek, chalup a apartmánových domů. U historických interiérů s ozdobnými stropy se majitelé často ptají na méně nápadné typy vnitřních jednotek.',
    climate:
      'Jizerské hory patří k nejdeštivějším a nejzasněženějším místům v Česku a zima tu trvá dlouho. Liberecká kotlina pod Ještědem má mírnější léta, horké vlny ale přicházejí i sem. Pro topení v horách se hodí řady Air Master, Energy Pro X a Uni Pure s provozem do −22 °C a vyhřívanou vanou venkovní jednotky, která brání zamrzání vody po odmrazování.',
    tip:
      'Na horách nechte venkovní jednotku osadit na konzole dostatečně vysoko nad zemí nebo na vyvýšený podstavec a chraňte ji před sněhem padajícím ze střechy. Zapadaná jednotka nemůže volně nasávat vzduch.',
    faq: [
      {
        q: 'Kam umístit venkovní jednotku u chalupy, kde napadne hodně sněhu?',
        a: 'Na konzoli na štítovou stěnu nebo na vyvýšený podstavec, mimo okapovou hranu střechy, odkud sjíždí sníh. Je také potřeba myslet na odtok vody z odmrazování, aby pod jednotkou nevznikal led na chodníku nebo u vchodu.',
      },
      {
        q: 'Ve vile máme ozdobné stropy a nechceme nástěnnou jednotku. Jaké jsou možnosti?',
        a: 'V rámci multisplitu Hisense lze zvolit konzolovou jednotku, která stojí nízko u podlahy podobně jako radiátor, nebo kanálovou jednotku skrytou mimo místnost, ze které je vidět jen mřížka. Co lze v konkrétním domě provést, posoudí technik při obhlídce.',
      },
    ],
  },
  {
    id: 'kralovehradecky-kraj',
    name: 'Královéhradecký kraj',
    inName: 'v Královéhradeckém kraji',
    cities: ['Hradec Králové', 'Trutnov', 'Náchod', 'Jičín', 'Rychnov nad Kněžnou', 'Dvůr Králové nad Labem', 'Jaroměř', 'Vrchlabí', 'Nové Město nad Metují', 'Hořice', 'Broumov', 'Dobruška'],
    intro:
      'V Královéhradeckém kraji zajistíme klimatizace Hisense pro byty, rodinné domy i horské chalupy v Krkonoších a Orlických horách. Instalaci svěříme prověřené montážní firmě, která v regionu působí. Do 1 pracovního dne vám doporučíme vhodnou řadu i výkon.',
    housing:
      'Hradec Králové je známý prvorepublikovou architekturou i rozsáhlými sídlišti, v okolí převládají rodinné domy, často patrové. Podkrkonoší a Orlické hory jsou krajem roubenek, chalup a dřevostaveb. U dřevěných staveb je důležité, kam a jak se venkovní jednotka připevní, aby se chvění nepřenášelo do konstrukce.',
    climate:
      'Polabí kolem Hradce Králové patří k teplejším oblastem s horkými letními dny, zatímco Krkonoše a Orlické hory mají dlouhou a sněžnou zimu. V nížině tak klimatizace slouží hlavně k chlazení, na horách spíš k úspornému topení a temperování. Multisplit Hisense topí až do −20 °C, samostatné jednotky vyšších řad až do −22 °C.',
    tip:
      'U patrového domu promyslete, které místnosti chcete chladit hned a které případně později. Pokud zvolíte multisplit, potrubí do budoucí místnosti se vyplatí připravit už při montáži.',
    faq: [
      {
        q: 'Máme patrový rodinný dům. Multisplit, nebo samostatné klimatizace?',
        a: 'Multisplit s jednou venkovní jednotkou se hodí, když jsou místnosti blízko sebe a délky potrubí to dovolí. Pokud jsou pokoje v opačných koncích domu nebo chcete v jedné části topit a v druhé chladit, bývají lepší dvě samostatné klimatizace či dvě menší sestavy. Návrh připraví technik podle dispozice domu.',
      },
      {
        q: 'Lze venkovní jednotku připevnit na dřevěnou stěnu roubenky?',
        a: 'Lze, ale dřevěná konstrukce snadno přenáší chvění, proto se používají antivibrační podložky a pevné ukotvení do nosných prvků. Často je jednodušší postavit jednotku na samostatný podstavec u domu. Vhodné řešení doporučí partnerská firma na místě.',
      },
    ],
  },
  {
    id: 'pardubicky-kraj',
    name: 'Pardubický kraj',
    inName: 'v Pardubickém kraji',
    cities: ['Pardubice', 'Chrudim', 'Svitavy', 'Ústí nad Orlicí', 'Česká Třebová', 'Vysoké Mýto', 'Litomyšl', 'Polička', 'Lanškroun', 'Moravská Třebová', 'Hlinsko', 'Přelouč'],
    intro:
      'Klimatizace Hisense s montáží zajistíme v Pardubicích i v dalších městech a obcích kraje. Poptávku zpracujeme do 1 pracovního dne a předáme ji prověřené partnerské firmě z regionu. Ta s vámi domluví obhlídku a připraví nabídku.',
    housing:
      'Pardubice a Chrudim mají vedle sídlišť i čtvrti rodinných domů a vil, na Svitavsku a Orlickoústecku převládají menší města a vesnice s rodinnými domy. Novější domy často topí tepelným čerpadlem vzduch–voda s podlahovým topením, které v létě obvykle nechladí. Část zástavby leží v blízkosti Labe, Chrudimky a Orlice, což je dobré zohlednit při volbě místa pro venkovní jednotku.',
    climate:
      'Pardubické Polabí je teplá a rovinatá oblast s horkými léty. Směrem na východ a jih se krajina zvedá k Orlickým horám a Žďárským vrchům, kde jsou zimy výrazně chladnější, okolí Hlinska je známé tuhými mrazy. Pro topení v těchto polohách se hodí řady s provozem do −22 °C.',
    tip:
      'Pokud už topíte tepelným čerpadlem vzduch–voda, klimatizaci berte jako doplněk na letní chlazení a rychlé přitápění. Výkon stačí navrhnout podle letní tepelné zátěže místností.',
    faq: [
      {
        q: 'Topíme tepelným čerpadlem vzduch–voda. Má smysl ještě klimatizace?',
        a: 'Ano, pokud chcete v létě chladit. Tepelné čerpadlo vzduch–voda s podlahovým topením obvykle chlazení nezvládne nebo jen omezeně, kdežto klimatizace ochladí a odvlhčí místnost rychle. Na jaře a na podzim navíc může přitopit, aniž byste spouštěli celou otopnou soustavu.',
      },
      {
        q: 'Dům stojí v blízkosti řeky. Kam s venkovní jednotkou?',
        a: 'V lokalitách s rizikem rozlivu je rozumnější montovat venkovní jednotku na konzoli na fasádu výš nad terén než na podstavec na zemi. Elektrické části jednotky by pak při vyšší vodě nebyly ohrožené. Konkrétní umístění navrhne partnerská firma při obhlídce.',
      },
    ],
  },
  {
    id: 'kraj-vysocina',
    name: 'Kraj Vysočina',
    inName: 'na Vysočině',
    cities: ['Jihlava', 'Třebíč', 'Havlíčkův Brod', 'Žďár nad Sázavou', 'Pelhřimov', 'Velké Meziříčí', 'Humpolec', 'Nové Město na Moravě', 'Chotěboř', 'Telč', 'Světlá nad Sázavou', 'Moravské Budějovice'],
    intro:
      'Na Vysočině zajistíme klimatizace Hisense pro rodinné domy, byty i chalupy, ve městech i na vesnicích. Montáž provede prověřená partnerská firma z regionu nebo z okolí. Poptávka je zdarma a ozveme se do 1 pracovního dne.',
    housing:
      'Převládají rodinné domy, venkovská stavení a chalupy, menší podíl mají sídliště v Jihlavě, Třebíči nebo Žďáru nad Sázavou. Telč a židovská čtvrť s bazilikou v Třebíči jsou zapsané na seznamu UNESCO, takže v jejich historických částech se zásahy do fasád posuzují přísněji. Mnoho domů na venkově dosud topí kotlem na dřevo nebo uhlí.',
    climate:
      'Českomoravská vrchovina leží výš než většina okolních krajů, a proto má chladnější a delší zimy a mírnější léta. Horké vlny ale přicházejí i sem a nejvíc je pocítí podkrovní pokoje. Klimatizace tu má velký význam jako úsporné topení v přechodném období, řady Air Master, Energy Pro X a Uni Pure topí až do −22 °C.',
    tip:
      'Pokud topíte kotlem na tuhá paliva, klimatizace vám na jaře a na podzim ušetří zatápění kvůli chladným ránům. Navrhněte ji tedy i s ohledem na topný výkon, nejen na chlazení.',
    faq: [
      {
        q: 'Má na Vysočině smysl klimatizace, když jsou tu léta mírnější?',
        a: 'Ano, a často hlavně kvůli topení. Klimatizace pracuje jako tepelné čerpadlo vzduch–vzduch a v přechodném období vytopí místnost úsporněji než přímotop. V létě pak oceníte chlazení zejména v podkroví a v pokojích na jižní straně.',
      },
      {
        q: 'Topíme kotlem na dřevo. Jak se s ním klimatizace doplňuje?',
        a: 'Klimatizace převezme přitápění na jaře a na podzim, kdy by se kotel zatápěl jen kvůli pár chladným hodinám. V tuhé zimě pak zůstává hlavním zdrojem kotel a klimatizace pomáhá v místnostech, kam teplo z kotle nedosáhne dobře. Oba zdroje fungují nezávisle na sobě.',
      },
    ],
  },
  {
    id: 'jihomoravsky-kraj',
    name: 'Jihomoravský kraj',
    inName: 'v Jihomoravském kraji',
    cities: ['Brno', 'Znojmo', 'Břeclav', 'Hodonín', 'Vyškov', 'Blansko', 'Boskovice', 'Kyjov', 'Mikulov', 'Hustopeče', 'Kuřim', 'Ivančice'],
    intro:
      'Klimatizaci Hisense s montáží zajistíme v Brně i v celém Jihomoravském kraji. S poptávkou se vám ozveme do 1 pracovního dne a obhlídku i nabídku pak připraví prověřená partnerská firma z jižní Moravy.',
    housing:
      'Brno nabízí činžovní domy v centru, funkcionalistické vily, velká sídliště jako Líšeň, Bohunice nebo Bystrc a rozrůstající se satelity v okolí. Na jihu kraje jsou typické vinařské obce s řadovou zástavbou a dvory, kde domy stojí těsně vedle sebe. V takové zástavbě je hlavní otázkou, kam s venkovní jednotkou, aby hlukem nerušila sousedy.',
    climate:
      'Jižní Morava patří k nejteplejším oblastem Česka a letní vedra tu bývají častější než ve většině republiky. Brno navíc zatěžuje efekt tepelného ostrova města. Klimatizace se tu proto využívá hodně k chlazení, a díky mírnějším zimám je velmi efektivní i jako tepelné čerpadlo pro topení.',
    tip:
      'V horkých oblastech má smysl sledovat sezónní účinnost chlazení SEER, protože klimatizace poběží v létě hodně hodin. Nejvyšší SEER mají u Hisense řady Air Master a Energy Pro X.',
    faq: [
      {
        q: 'Zvládne klimatizace chladit i při velmi vysokých venkovních teplotách?',
        a: 'Ano. Většina řad Hisense chladí do venkovní teploty +43 °C a Air Master dokonce do +50 °C. Venkovní jednotku je přesto dobré umístit tak, aby nebyla celý den na přímém slunci a měla volný odvod teplého vzduchu.',
      },
      {
        q: 'Bydlíme v řadovém domě ve vinařské obci. Kam s venkovní jednotkou kvůli sousedům?',
        a: 'Nejlépe na stranu dvora nebo zahrady, co nejdál od oken a ložnic sousedů, a ne do úzkého průchodu, kde se zvuk odráží. Při volbě řady pomůže porovnat hlučnost venkovních jednotek, kterou uvádíme u každé řady. Konkrétní místo navrhne partnerská firma při obhlídce.',
      },
    ],
  },
  {
    id: 'olomoucky-kraj',
    name: 'Olomoucký kraj',
    inName: 'v Olomouckém kraji',
    cities: ['Olomouc', 'Prostějov', 'Přerov', 'Šumperk', 'Jeseník', 'Hranice', 'Zábřeh', 'Uničov', 'Litovel', 'Mohelnice', 'Šternberk', 'Lipník nad Bečvou'],
    intro:
      'V Olomouckém kraji zajistíme montáž klimatizací Hisense od Hané po Jeseníky. Vaši poptávku převezme prověřená partnerská firma z regionu a domluví s vámi obhlídku. Poptávka je nezávazná a zdarma.',
    housing:
      'Olomouc má jednu z největších městských památkových rezervací v zemi s činžovními a měšťanskými domy, které mají často vysoké stropy. Prostějov, Přerov a Šumperk kombinují sídliště s rodinnými domy, v Jeseníkách jsou běžné chalupy a penziony. U starších domů s vysokými stropy je potřeba počítat s větším objemem vzduchu, než by odpovídalo ploše.',
    climate:
      'Haná v Hornomoravském úvalu je teplá rovinatá oblast, kde léta bývají horká. Jeseníky na severu kraje naopak patří k nejchladnějším a nejzasněženějším horám Česka. V nížině proto klimatizace slouží hlavně k chlazení, v horách k topení, kde se hodí řady s provozem do −22 °C.',
    tip:
      'V bytech s vysokými stropy nechte výkon spočítat technikem, pravidlo 100 W na m² tu nestačí. U jednotky v historickém domě se navíc vyplatí zjistit, zda dům neleží v památkové rezervaci.',
    faq: [
      {
        q: 'Byt v Olomouci má stropy přes tři metry. Jaký výkon potřebuji?',
        a: 'Orientační pravidlo 100 W na m² počítá s běžnou výškou stropu. Při vysokých stropech je vzduchu víc a výkon se navyšuje, takže místo jednotky 2,6 kW může být potřeba 3,5 kW. Přesný výkon určí technik podle objemu místnosti, oken a oslunění.',
      },
      {
        q: 'Co se stane, když v Jeseníkách klesne teplota pod −22 °C?',
        a: 'Pod nejnižší provozní teplotou výrobce klimatizace spolehlivě topit nemusí a výkon klesá už před dosažením této hranice. Na chalupě v horách by proto měl být záložní zdroj tepla. Klimatizace pak pokryje většinu topné sezony a záloha jen nejmrazivější dny.',
      },
    ],
  },
  {
    id: 'zlinsky-kraj',
    name: 'Zlínský kraj',
    inName: 've Zlínském kraji',
    cities: ['Zlín', 'Uherské Hradiště', 'Kroměříž', 'Vsetín', 'Valašské Meziříčí', 'Otrokovice', 'Rožnov pod Radhoštěm', 'Uherský Brod', 'Holešov', 'Bystřice pod Hostýnem', 'Luhačovice', 'Napajedla'],
    intro:
      'Klimatizace Hisense s montáží zajistíme ve Zlíně, na Slovácku, Hané i na Valašsku. Poptávku předáme prověřené partnerské firmě z regionu, která se vám ozve kvůli obhlídce. Na každou poptávku reagujeme do 1 pracovního dne.',
    housing:
      'Zlín je známý funkcionalistickou zástavbou a baťovskými domky z režného zdiva, které stojí často ve svazích údolí Dřevnice. Kroměříž a Uherské Hradiště mají památkově chráněná historická centra, na Valašsku jsou běžné rodinné domy a chalupy v kopcovitém terénu. Svahy a neomítnuté cihelné fasády ovlivňují, kudy povede potrubí a kam se umístí venkovní jednotka.',
    climate:
      'Dolnomoravský úval kolem Uherského Hradiště patří k nejteplejším částem Moravy s horkými léty. Valašsko s Beskydami, Javorníky a Vizovickými vrchy je chladnější a deštivější, se sněžnými zimami. Na Slovácku tak klimatizace hodně chladí, na Valašsku má větší význam topení, kde se hodí řady do −22 °C.',
    tip:
      'U domu z režného zdiva požádejte o vedení potrubí co nejkratší cestou a s krytem v barvě fasády, případně vnitřkem domu. Každý průraz do neomítnuté cihly je na fasádě vidět.',
    faq: [
      {
        q: 'Máme baťovský domek z režných cihel. Jak namontovat klimatizaci, aby nepoškodila vzhled?',
        a: 'Venkovní jednotka se obvykle umisťuje na zahradní stranu nebo na podstavec u domu, potrubí se vede co nejkratší trasou a průraz se pečlivě začistí. Některé lokality mohou mít regulaci vzhledu staveb, proto je dobré si podmínky předem ověřit na stavebním úřadě.',
      },
      {
        q: 'Dům stojí ve svahu a venkovní jednotka by byla výš než vnitřní. Nevadí to?',
        a: 'Nevadí, pokud převýšení a délka potrubí nepřekročí limity výrobce. U samostatných klimatizací Hisense je to až 20 m potrubí a převýšení 10 až 15 m podle modelu, u multisplitu platí limity pro jednotlivé větve. Trasu ověří partnerská firma při obhlídce.',
      },
    ],
  },
  {
    id: 'moravskoslezsky-kraj',
    name: 'Moravskoslezský kraj',
    inName: 'v Moravskoslezském kraji',
    cities: ['Ostrava', 'Havířov', 'Karviná', 'Frýdek-Místek', 'Opava', 'Nový Jičín', 'Třinec', 'Kopřivnice', 'Orlová', 'Český Těšín', 'Bohumín', 'Krnov'],
    intro:
      'V Moravskoslezském kraji zajistíme klimatizace Hisense pro byty, rodinné domy i chalupy v Beskydech. Odeslanou poptávku zpracujeme do 1 pracovního dne. Montáž včetně obhlídky převezme prověřená partnerská firma z okolí.',
    housing:
      'Ostrava, Havířov a Karviná mají rozsáhlá sídliště, včetně čtvrtí v architektuře socialistického realismu, jako je Ostrava-Poruba nebo centrum Havířova. Vedle nich stojí hornické kolonie, činžovní domy a v okolí rodinné domy. V Beskydech a Jeseníkách je mnoho chalup, u bytových domů rozhoduje o umístění venkovní jednotky SVJ.',
    climate:
      'Ostravská průmyslová aglomerace patří k oblastem, kde se v topné sezoně při teplotních inverzích opakují smogové situace. V takové dny lidé omezují větrání, a proto tu má význam i filtrace vzduchu v klimatizaci. Beskydy a Jeseníky jsou chladné a sněžné, pro topení na horách se hodí řady Air Master, Energy Pro X a Uni Pure s provozem do −22 °C.',
    tip:
      'Pokud vám záleží na čistotě vzduchu doma, vyberte řadu s filtrem 4 v 1 nebo ionizací Hi-NANO, tedy Air Master, Energy Pro X, Uni Pure nebo Wings Comfort, a filtry čistěte pravidelně.',
    faq: [
      {
        q: 'Pomůže klimatizace při smogu?',
        a: 'Klimatizace nepřivádí vzduch zvenku, ale nechává cirkulovat vzduch v místnosti přes filtry. Můžete tak mít zavřená okna a příjemnou teplotu, a filtry zachytí část prachu, u řad s filtrem 4 v 1 i jemnější nečistoty. Plnohodnotnou čističku vzduchu ani řízené větrání ale nenahradí.',
      },
      {
        q: 'Jak klimatizace topí při mlze a teplotách kolem nuly?',
        a: 'Vlhké počasí kolem nuly je pro venkovní jednotku náročné, protože se na výměníku rychle tvoří námraza. Jednotka ji pravidelně automaticky odmrazuje a na pár minut přeruší foukání teplého vzduchu, což je normální. Vyhřívaná vana u řad Air Master, Energy Pro X a Uni Pure brání zamrzání odtékající vody.',
      },
    ],
  },
];

export const regionById = (id: string) => regions.find((r) => r.id === id);
