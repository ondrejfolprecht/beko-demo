import { typeset } from "@/lib/typography";

const origin = "https://beko-engineering.cz";
const uploads = (path: string) => `${origin}/wp-content/uploads/${path}`;

export type Accent = "red" | "blue" | "lime" | "yellow" | "sky";

export const company = typeset({
  name: "BEKO Engineering",
  legalName: "B E K O Engineering, spol. s r.o.",
  address: "1. máje 871/13, 460 07 Liberec III",
  registration: "IČ 14866358, DIČ CZ14866358",
  phone: "+420 485 387 555",
  phoneHref: "tel:+420485387555",
  email: "info@beko-engineering.cz",
  profile: `${origin}/o-nas/`,
  linkedin: "https://www.linkedin.com/company/3087801",
});

export const navigation = typeset([
  {
    label: "Služby",
    href: `${origin}/sluzby/`,
    overview: "Přehled služeb",
    children: [
      { label: "Engineering", description: "Design a konstrukce", href: `${origin}/engineering/` },
      { label: "Design", description: "Od rešerše po virtuální realitu", href: `${origin}/design/` },
      { label: "Konstrukce", description: "Od konceptu po výrobní dokumentaci", href: `${origin}/konstrukce/` },
      { label: "IT služby", description: "CAD automatizace, aplikace, embedded", href: `${origin}/it-sluzby/` },
      { label: "AI řešení", description: "AI Readiness, RAG, vizuální kontrola", href: `${origin}/ai-reseni/` },
      { label: "Vzdělávání", description: "Kurzy CATIA V5 a rekvalifikace", href: `${origin}/vzdelavani/` },
    ],
  },
  {
    label: "Software",
    href: `${origin}/software/`,
    overview: "Přehled softwaru",
    children: [
      { label: "SpinFire Insight", description: "Prohlížeč CAD dat pro celou firmu", href: `${origin}/spinfire/` },
      { label: "BE-Play", description: "Správa licencí a instalací CATIA V5", href: `${origin}/be-play/` },
      { label: "Aktualizace SpinFire", description: "Přehled vydaných verzí", href: `${origin}/spinfire/novinky-a-aktualizace/` },
    ],
  },
  { label: "Kariéra", href: `${origin}/kariera/`, overview: "", children: [] },
  { label: "Spolupráce", href: `${origin}/spoluprace/`, overview: "", children: [] },
  {
    label: "O nás",
    href: `${origin}/o-nas/`,
    overview: "Firemní profil",
    children: [
      { label: "Interní projekty", description: "E-BOAT, E-CITY, E-BETA, C-GATE", href: `${origin}/interni-projekty/` },
      { label: "Blog", description: "Případové studie a odborné články", href: `${origin}/blog/` },
    ],
  },
]);

export const hero = typeset({
  title: "Engineering bez kompromisů.",
  titleBreakAfter: "Engineering",
  lead: "Za každým novým produktem stojí důležitá rozhodnutí. Propojujeme znalost průmyslu s engineeringem, IT a AI, abychom vašemu týmu pomohli posouvat projekty vpřed a pracovat efektivněji.",
  primaryAction: "Probrat projekt",
  secondaryAction: "Prohlédnout naši práci",
});

export const about = typeset({
  statement:
    "Skupina BEKO vznikla v roce 1966 v Rakousku. V Česku působíme od roku 1991 a dnes máme pobočky v pěti zemích střední Evropy. Do projektu nastupujeme jako externí podpora vašeho týmu, nebo převezmeme odpovědnost za celý inženýrský celek.",
  figures: [
    { value: 35, suffix: "+", label: "let na českém trhu" },
    { value: 850, suffix: "+", label: "dokončených projektů" },
    { value: 150, suffix: "+", label: "odborníků v týmu" },
    { value: 130, suffix: "+", label: "zákazníků" },
  ],
  video: {
    /** Downloaded from the BEKO YouTube channel (Rs4wycyFJQ8) on 9. 11. 2026, served from our own files without the player. */
    src: "/video/beko-o-nas.mp4",
    poster: "/video/beko-o-nas-poster.jpg",
    title: "BEKO Engineering, firemní video",
    posterAlt: "CAD model interiéru automobilu s volantem BEKO na monitoru",
    action: "Přehrát video",
    duration: "0:28",
  },
});

const logo = (name: string, file: string, width: number, height: number) => ({ name, src: `/images/logos/${file}.svg`, width, height });

/** Výběr uživatele. Vztah s firmami a použití log musí před zveřejněním potvrdit BEKO, viz public/images/logos/SOURCES.md. */
export const clientLogos = typeset({
  title: "Spolupracujeme s lídry v oboru",
  items: [
    logo("BMW", "bmw", 34, 34),
    logo("Volkswagen", "volkswagen", 34, 34),
    logo("Audi", "audi", 62, 24),
    logo("Porsche", "porsche", 150, 10),
    logo("Škoda", "skoda", 34, 34),
    logo("Ford", "ford", 56, 24),
    logo("GRAMMER", "grammer", 52, 32),
    logo("MAHLE", "mahle", 86, 20),
    logo("Philips", "philips", 104, 19),
    logo("Dassault Systèmes", "dassault-systemes", 96, 29),
  ],
});

export const caseStudies = typeset({
  lead: "Dodavatelé světových značek u nás řeší to, na čem stojí jejich termíny a kvalita. Tři příklady od zákazníků a jeden z našeho vlastního vývoje.",
  items: [
    {
      id: "grammer",
      client: "GRAMMER CZ",
      sector: "Interiéry vozů pro BMW, VW, Audi a Porsche",
      title: "Vyrobitelnost ověřená už v předsérii",
      steps: [
        { label: "Výzva", value: "U nových projektů je potřeba rychle posoudit plastové díly a konstrukci vstřikovacích forem." },
        { label: "Řešení", value: "BEKO dodalo SpinFire Enterprise do procesu DFM a Design Review, včetně kontroly podkosů a odformovacích úhlů." },
        { label: "Výsledek", value: "Návrhy změn konstrukce vznikají přímo při kontrole, bez plné CAD licence." },
      ],
      quote: "Velmi oceňuji integrovanou funkci vizualizace odformovacích úhlů a dělící roviny.",
      author: "Jiří Chaloupecký, Tooling Manager",
      flow: ["Plastový díl", "Podkosy", "Odformovací úhly", "Dělicí rovina", "Návrh změny"],
      facts: ["3 závody v Česku", "Přibližně 1 500 zaměstnanců"],
      href: `${origin}/efektivnejsi-prace-ve-spolecnosti-grammer-cz/`,
    },
    {
      id: "hauk",
      client: "HAUK",
      sector: "Svařované a lisované díly, od roku 1998 převážně pro ŠKODA",
      title: "3D data dostupná i mimo konstrukci",
      steps: [
        { label: "Výzva", value: "Zákaznická data přicházejí v různých formátech a při cenotvorbě je musí otevřít i obchodní oddělení." },
        { label: "Řešení", value: "SpinFire Insight používá obchod i konstrukce, od řezů a analýz tloušťky po kontrolu přípravků z externích konstrukcí." },
        { label: "Výsledek", value: "Do neutrálního formátu lze převést i jen část velké sestavy a nástroj se obešel bez školení." },
      ],
      quote: "Bylo možné nástroj rovnou začít používat, a to bez potřeby odborného zaškolení.",
      author: "Tomáš Bartoš, konstruktér",
      flow: ["Data zákazníka", "SpinFire Insight", "Cenotvorba", "Kontrola přípravků", "Neutrální formát"],
      facts: ["Robotické svařovací linky", "Lisovací nástroje"],
      href: `${origin}/spinfire-hauk/`,
    },
    {
      id: "ea-partner",
      client: "EA Partner",
      sector: "Vývoj a simulace, Engineering Automation Partner",
      title: "Data pro simulace se připravují sama",
      steps: [
        { label: "Výzva", value: "Inženýři trávili čas rutinními převody CAD dat místo vývoje." },
        { label: "Řešení", value: "SpinFire Publish sleduje adresáře, rozpozná změnu a sám vytvoří požadovaný formát v definované struktuře." },
        { label: "Výsledek", value: "Tým simulací má data vždy aktuální a odpadly chyby z ruční práce." },
      ],
      quote: "Soustředíme se na vývoj, ne na administrativu.",
      author: "Filip Šolc, technický ředitel",
      flow: ["CATIA V5", "Sledovaný adresář", "SpinFire Publish", "JT a STP", "Process Simulate"],
      facts: ["Automaticky při změně dat", "Výstup JT a STP"],
      href: `${origin}/automatizace-ea-partner/`,
    },
    {
      id: "e-boat",
      client: "BEKO E-BOAT",
      sector: "Vlastní vývoj, design a konstrukce v jednom týmu",
      title: "Elektrický trimarán od návrhu po veletrh",
      steps: [
        { label: "Výzva", value: "Ověřit práci v CAD napříč týmy a integraci elektrického pohonu do kompozitové struktury." },
        { label: "Řešení", value: "Designéři a konstruktéři navrhli čtyřmístné plavidlo s vodním tryskovým pohonem a solárními panely." },
        { label: "Výsledek", value: "Studie prezentovaná na veletrzích a postupy, které používáme na zakázkách." },
      ],
      quote: "",
      author: "",
      flow: ["Design", "Konstrukce", "Kompozitový trup", "Elektrický pohon", "Prezentace"],
      facts: ["100% elektrický pohon", "Nulové emise"],
      href: `${origin}/beko-e-boat/`,
    },
  ],
});

export const serviceCards = typeset({
  title: "Co potřebuje váš projekt právě teď?",
  lead: "Někdy potřebujete posílit tým, aby se vývoj mohl posunout dál. Jindy přicházíte s konkrétním konstrukčním zadáním nebo s procesem, který vás zbytečně zdržuje. Pomůžeme vám zorientovat se v možnostech a najít vhodnou odbornost. Jednotlivé služby můžeme propojit podle souvislostí vašeho projektu.",
  action: "Prohlédnout všechny služby",
  href: `${origin}/sluzby/`,
});

export const process = typeset({
  title: "Nejdřív poznáme vaše zadání",
  lead: "Před prvním rozhovorem nemusíte mít vyřešenou každou technickou otázku. Potřebujeme porozumět tomu, kam se chcete dostat, co už máte k dispozici a kde se projekt zadrhává. Z této společné představy pak vychází návrh dalšího postupu.",
  action: "Probrat možnosti spolupráce",
  href: "#kontakt",
  steps: [
    { id: "zadani", title: "Porozumění zadání", text: "Probereme cíl, současný stav a omezení. Ujasníme si, jak má vypadat použitelný výsledek." },
    { id: "postup", title: "Návrh postupu", text: "Vymezíme rozsah práce, potřebné odbornosti a podklady. Domluvíme odpovědnosti i způsob ověřování výstupů." },
    { id: "prace", title: "Průběžná práce a ověřování", text: "Postup rozvíjíme v dohodnutých krocích. Otevřené otázky a změny zadání řešíme v jejich technických souvislostech." },
    { id: "predani", title: "Předání a další využití", text: "Výstupy předáme v domluvené podobě. Společně projdeme, co potřebuje váš tým pro jejich další použití." },
  ],
});

export const projectsTeaser = typeset({
  title: "Naše práce v praxi",
  lead: "Vývojové projekty, zákaznické příběhy a softwarová řešení ukazují různé způsoby, jak využíváme naše zkušenosti. U každé ukázky najdete její zadání, technický kontext a roli BEKO.",
  action: "Prohlédnout projekty",
  href: `${origin}/interni-projekty/`,
  items: [
    { title: "BEKO E-BOAT", tag: "Interní vývojový koncept", detail: "Design a konstrukce", accent: "blue" as Accent, text: "Čtyřmístný elektrický trimarán s nulovými emisemi", href: `${origin}/beko-e-boat/`, image: { src: uploads("2026/03/eboat_beko_electric_boat_2banner_side_red_1.jpg"), alt: "BEKO E-BOAT z boku při západu slunce" } },
    { title: "BE-Play a SpinFire", tag: "Softwarová řešení", detail: "CATIA V5 a CAD data", accent: "lime" as Accent, text: "Správa licencí CATIA V5 a sdílení CAD dat napříč týmy", href: `${origin}/software/`, image: { src: uploads("2026/03/be-play1.png"), alt: "BE-Play s přehledem využití licencí" } },
    { title: "E-CITY", tag: "Interní vývojový koncept", detail: "Design a konstrukce", accent: "blue" as Accent, text: "Tříkolové elektrické vozidlo do města", href: `${origin}/beko-e-city/`, image: { src: uploads("2026/03/1_e_city.jpg"), alt: "Studie elektrického vozidla E-CITY" } },
    { title: "EA Partner", tag: "Zákaznický příběh", detail: "SpinFire Publish", accent: "red" as Accent, text: "Automatizace práce s CAD daty se SpinFire Publish", href: `${origin}/automatizace-ea-partner/`, image: { src: uploads("2026/05/manuf2.jpg"), alt: "Pracoviště EA Partner" } },
    { title: "E-BETA", tag: "Interní vývojový koncept", detail: "Design a konstrukce", accent: "blue" as Accent, text: "Dvoumístný elektrický skútr", href: `${origin}/beko-e-beta/`, image: { src: uploads("2026/03/2_e_beta.jpg"), alt: "Elektrický skútr E-BETA" } },
    { title: "C-GATE", tag: "Interní vývojový koncept", detail: "Design a konstrukce", accent: "blue" as Accent, text: "Dezinfekční brána do rušných prostor", href: `${origin}/c-gate/`, image: { src: uploads("2026/03/3_c_gate.jpg"), alt: "Dezinfekční brána C-GATE" } },
  ],
});

/** Brand claim used as a large moving type band between sections. */
export const claim = typeset({
  text: "BEKO: NO LIMITS",
  lines: ["BEKO: NO LIMITS", "BEKO: NO LIMITS"],
});

export const trust = typeset({
  map: {
    title: "Naše pobočky",
    text: "Najděte nejbližší pobočku a kontakt na její tým.",
    fallback: { src: uploads("2026/03/mapa.png"), alt: "Mapa zemí, kde má skupina BEKO pobočky", width: 1111, height: 740 },
  },
});

/** Popisy z dokumentu s textacemi pro části, které ještě nejsou postavené. */
export const landingParts = typeset({
  blog: {
    id: "blog",
    number: "07",
    title: "Blog a newsletter",
    task: "Ukázat způsob uvažování a nabídnout další čtení. Pod výběrem článků přihlášení k odběru novinek.",
    layout: "articles" as const,
  },
  faq: {
    id: "caste-otazky",
    number: "08",
    title: "Časté otázky",
    task: "Pět až šest otázek, které pomohou připravit první rozhovor před zahájením spolupráce.",
    layout: "questions" as const,
  },
});

export const contact = typeset({
  title: "Proberme, co potřebuje váš projekt dál",
  lead: "Možná hledáte konkrétní odbornost. Možná potřebujete nejdřív zjistit, kudy se vydat. Napište nám, co právě řešíte a kam se chcete dostat. Od tohoto kontextu se můžeme odrazit při hledání dalšího postupu.",
  note: "Pro úvodní kontakt stačí stručný popis. Sdílení technických podkladů domluvíme podle povahy projektu.",
  officesLink: "Najít kontakt na pobočku",
  /** Short band at the end of the landing page; the full section with the form and map waits for the contact page. */
  band: {
    text: "Napište nám, co právě řešíte a kam se chcete dostat. Pro úvodní kontakt stačí stručný popis.",
    action: "Probrat projekt",
    href: `${origin}/kontakty/`,
  },
  form: {
    title: "Co právě řešíte?",
    text: "Napište nám několik vět o svém zadání. Uveďte kontakt, na kterém s vámi můžeme probrat další možnosti.",
    name: { label: "Jméno a příjmení", placeholder: "Jak vás máme oslovit", missing: "Doplňte prosím své jméno." },
    email: { label: "Pracovní e-mailová adresa", hint: "Adresa, na které vás můžeme kontaktovat.", placeholder: "jmeno@firma.cz", missing: "Doplňte prosím e-mail pro odpověď.", invalid: "Zkontrolujte prosím e-mailovou adresu. Potřebujeme ji ve tvaru jmeno@firma.cz." },
    company: { label: "Firma", hint: "Pomůže nám zorientovat se v prostředí vašeho projektu." },
    phone: { label: "Telefon", hint: "Uveďte, pokud chcete otázky probrat telefonicky." },
    message: { label: "Vaše zadání", placeholder: "Co má řešení zvládnout? V jaké fázi projekt je? Je něco důležitého, co bychom měli vědět před prvním rozhovorem?", missing: "Napište alespoň stručně, co potřebujete řešit." },
    optional: "nepovinné",
    action: "Odeslat zprávu",
    sending: "Odesíláme vaši zprávu.",
    success: "Děkujeme za zprávu. Máme vaše zadání i kontakt a navážeme s vámi další komunikaci.",
    demo: "Toto je ukázka formuláře. Zpráva se nikam neodesílá. Pro kontakt s BEKO použijte uvedený e-mail nebo telefon.",
  },
});

export const footer = typeset({
  signature: "BEKO Engineering propojuje vývoj produktů s IT a AI. Pomáháme technickým týmům rozvíjet návrhy, pracovat s daty a hledat další krok jejich projektu.",
  career: {
    title: "Chcete být u dalšího technického zadání?",
    text: "Prohlédněte si možnosti práce v BEKO a najděte místo pro svou odbornost.",
    action: "Prohlédnout otevřené pozice",
    href: `${origin}/kariera/`,
  },
  groups: [
    {
      title: "S čím pomůžeme",
      links: [
        { label: "Engineering", href: `${origin}/engineering/` },
        { label: "IT služby", href: `${origin}/it-sluzby/` },
        { label: "AI řešení", href: `${origin}/ai-reseni/` },
        { label: "Vzdělávání", href: `${origin}/vzdelavani/` },
      ],
    },
    {
      title: "Naše práce",
      links: [
        { label: "Projekty a řešení", href: `${origin}/interni-projekty/` },
        { label: "Software", href: `${origin}/software/` },
        { label: "Odborné články", href: `${origin}/blog/` },
      ],
    },
    {
      title: "BEKO Engineering",
      links: [
        { label: "O nás", href: `${origin}/o-nas/` },
        { label: "Kariéra", href: `${origin}/kariera/` },
        { label: "Spolupráce", href: `${origin}/spoluprace/` },
        { label: "Pobočky a kontakty", href: `${origin}/kontakty/` },
      ],
    },
    {
      title: "Pro uživatele softwaru",
      links: [
        { label: "SpinFire", href: `${origin}/spinfire/` },
        { label: "BE-Play", href: `${origin}/be-play/` },
        { label: "Příručka SpinFire", href: `${origin}/spinfire/prirucka-spinfire/` },
        { label: "Novinky a aktualizace", href: `${origin}/spinfire/novinky-a-aktualizace/` },
      ],
    },
  ],
  linkedin: "Sledujte BEKO na LinkedIn",
  top: "Zpět na začátek",
});

export const services = typeset([
  {
    id: "engineering",
    title: "Engineering",
    accent: "red" as Accent,
    text: "Designéři konzultují návrh s konstruktéry od začátku. Máme vlastní modelářské studio na clay modely a projekt vedeme od konceptu po výrobní dokumentaci.",
    specs: [
      { label: "CAD", value: "CATIA V5 a 3DEXPERIENCE, Siemens NX, SolidWorks, Inventor, Alias" },
      { label: "Data", value: "V PLM zákazníka, například Teamcenter nebo 3DEXPERIENCE" },
      { label: "Výstupy", value: "Clay modely, rendering, VR, výrobní dokumentace" },
    ],
    links: [
      { label: "Design", href: `${origin}/design/` },
      { label: "Konstrukce", href: `${origin}/konstrukce/` },
    ],
    image: { src: uploads("2026/03/engineering-engineering.png"), alt: "Konstruktér pracuje na modelu světlometu ve 3D CAD" },
  },
  {
    id: "it",
    title: "IT služby",
    accent: "blue" as Accent,
    text: "Píšeme doplňky a makra pro CAD systémy a napojujeme je na PLM a ERP. Vyvíjíme webové, mobilní i desktopové aplikace, embedded systémy a řešení v Power Platform.",
    specs: [
      { label: "Automatizace", value: "API pro CATIA V5, 3DEXPERIENCE, SolidWorks a Inventor" },
      { label: "Vývoj", value: "C#, .NET, SQL, Microsoft Azure" },
      { label: "Embedded", value: "Mikrokontroléry, návrh DPS v Altiu a Eagle" },
      { label: "Spolupráce", value: "Vývoj na klíč, rozšíření týmu, konzultace a audit" },
    ],
    links: [{ label: "IT služby", href: `${origin}/it-sluzby/` }],
    image: { src: uploads("2026/03/it.png"), alt: "Vývojář píše kód na notebooku" },
  },
  {
    id: "ai",
    title: "AI řešení",
    accent: "lime" as Accent,
    text: "Začínáme analýzou AI Readiness a pilot vybíráme podle návratnosti. Stavíme znalostní báze nad firemní dokumentací, AI agenty a vizuální kontrolu kvality ve výrobě.",
    specs: [
      { label: "Příprava", value: "Workshopy, roadmapa, výběr pilotu" },
      { label: "Aplikace", value: "RAG nad smlouvami a technickou dokumentací, agenti, detekce vad" },
      { label: "Provoz", value: "MLOps, i na vašich serverech bez cloudu" },
    ],
    links: [{ label: "AI řešení", href: `${origin}/ai-reseni/` }],
    image: { src: uploads("2026/03/sprva-cad-uvodka.png"), alt: "Inženýři u velké obrazovky s technickými daty" },
  },
  {
    id: "vzdelavani",
    title: "Vzdělávání",
    accent: "yellow" as Accent,
    text: "Kurzy CATIA V5 pořádáme od roku 1998 a vedou je inženýři z praxe. Prošlo jimi přes 1\u00A0000 účastníků, od úplných začátečníků po rekvalifikaci na CAD konstruktéra.",
    specs: [
      { label: "Kurzy", value: "Základní 16 h, standardní 46 h, rozšířený 56 h, rekvalifikační 74 h" },
      { label: "Kde", value: "Praha, Liberec, Brno, Mladá Boleslav, u vás ve firmě nebo online" },
      { label: "Doklad", value: "Certifikát, u rekvalifikace osvědčení podle vyhlášky MŠMT" },
    ],
    links: [{ label: "Vzdělávání", href: `${origin}/vzdelavani/` }],
    image: { src: uploads("2026/03/education.jpg"), alt: "Školení CATIA V5 v počítačové učebně" },
  },
]);

export const designProcess = typeset({
  lead: "Naši designéři mají zkušenost se světovými značkami a s konstruktéry spolupracují od začátku projektu. Ukázky jednotlivých kroků pocházejí z našich interních projektů.",
  href: `${origin}/design/`,
  steps: [
    {
      id: "reserse",
      label: "Rešerše",
      title: "Trh, konkurence a první nápady",
      text: "Začínáme rešerší a analýzou zadání, do které vás zapojujeme. Z ní vycházejí ideové skici a směr, kterým se návrh vydá.",
      image: { src: uploads("2026/03/research.png"), alt: "Moodboard elektrických kol z rešerše" },
    },
    {
      id: "clay",
      label: "Clay model",
      title: "Fyzický model v našem studiu",
      text: "Prototyp stavíme z clay hmoty ve vlastním modelářském studiu nebo tiskneme na 3D tiskárně. Proporce tak posoudíte na skutečném objektu.",
      image: { src: uploads("2026/03/claymodel2.png"), alt: "Clay model tříkolového vozidla E-CITY" },
    },
    {
      id: "model",
      label: "3D model",
      title: "Data pro konstrukci",
      text: "Návrh převádíme do 3D v CATII, NX nebo Aliasu. Konstruktéři na něm rovnou ověřují vyrobitelnost.",
      image: { src: uploads("2026/03/3d-model.png"), alt: "Průhledný 3D model vozidla E-CITY" },
    },
    {
      id: "rendering",
      label: "Rendering",
      title: "Materiály a světlo před výrobou",
      text: "Fotorealistické vizualizace a animace používáme pro schválení návrhu i pro první prezentaci výrobku.",
      image: { src: uploads("2026/03/rendering.png"), alt: "Fotorealistický rendering vozidla E-CITY na ulici" },
    },
    {
      id: "vr",
      label: "Virtuální realita",
      title: "Interiér v měřítku 1:1",
      text: "Ve VR si můžete sednout do interiéru vozu v plné velikosti a ověřit ergonomii a ovládání ještě před stavbou prototypu.",
      image: { src: uploads("2026/03/virtualreality.png"), alt: "Designér s ovladačem pro virtuální realitu" },
    },
  ],
});

export const projects = typeset({
  lead: "Na vlastních studiích a prototypech zkoušíme nové technologie a postupy. Do sériové výroby je nedovádíme, nabízíme je k licenci, transferu technologie nebo dalšímu společnému vývoji.",
  feature: {
    title: "BEKO E-BOAT",
    text: "Čtyřmístný elektrický trimarán s vodním tryskovým pohonem, solárními panely a kompozitovým trupem. V interiéru je teak nebo mahagon, recyklovaný karbon a dotykový displej 16 palců.",
    href: `${origin}/beko-e-boat/`,
    image: {
      src: uploads("2026/03/eboat_beko_electric_boat_2banner_side_red_1.jpg"),
      alt: "BEKO E-BOAT z boku při západu slunce",
    },
  },
  others: [
    {
      title: "E-CITY",
      text: "Tříkolové elektrické vozidlo do města, které parkuje kolmo mezi ostatními auty.",
      href: `${origin}/beko-e-city/`,
      image: { src: uploads("2026/03/1_e_city.jpg"), alt: "Studie elektrického vozidla E-CITY" },
    },
    {
      title: "E-BETA",
      text: "Dvoumístný elektrický skútr v retro stylu.",
      href: `${origin}/beko-e-beta/`,
      image: { src: uploads("2026/03/2_e_beta.jpg"), alt: "Elektrický skútr E-BETA" },
    },
    {
      title: "C-GATE",
      text: "Dezinfekční brána do rušných prostor. Měří teplotu a dokáže nahradit docházkový systém.",
      href: `${origin}/c-gate/`,
      image: { src: uploads("2026/03/3_c_gate.jpg"), alt: "Dezinfekční brána C-GATE" },
    },
  ],
});

export const software = typeset({
  href: `${origin}/software/`,
  products: [
    {
      title: "SpinFire Insight",
      text: "Prohlížeč CAD dat pro celou firmu. Soubory z CATIA, NX, Creo, SolidWorks a Inventoru otevře i člověk bez CAD licence a může v nich dělat řezy, měřit a psát poznámky.",
      specs: [
        { label: "Cena", value: "Podle velikosti firmy, ne podle počtu uživatelů" },
        { label: "Dodavatel", value: "Vyvíjí Tech Soft 3D, BEKO zajišťuje prodej a podporu" },
        { label: "Používají", value: "GRAMMER CZ, HAUK, EA Partner" },
      ],
      href: `${origin}/spinfire/`,
      action: "Detail a demo",
      image: { src: uploads("2026/03/spinfire_2.jpg"), alt: "SpinFire Insight se síťovým modelem mřížky chladiče", width: 800, height: 447 },
    },
    {
      title: "BE-Play",
      text: "Správa licencí a instalací CATIA V5. V reálném čase ukazuje, kdo jakou licenci používá a kolik jich zbývá, a spouští prostředí pro VW, BMW, Ford a PAG.",
      specs: [
        { label: "Licence", value: "Monitoring přes licenční server DSLS, přehledy za období" },
        { label: "Režimy", value: "Administrátorský a uživatelský, automatické aktualizace" },
        { label: "Požadavky", value: "Windows, .NET Framework, DSLS" },
      ],
      href: `${origin}/be-play/`,
      action: "Detail produktu",
      image: { src: uploads("2026/03/be-play1.png"), alt: "BE-Play s přehledem využití licencí", width: 1972, height: 976 },
    },
  ],
});

export const industries = typeset([
  { title: "Automotive", accent: "lime" as Accent, text: "Komponenty pro OEM a dodavatele Tier 1, integrace systémů, odlehčování struktur a optimalizace dílů pro sériovou výrobu." },
  { title: "Letecký průmysl", accent: "sky" as Accent, text: "Struktury a mechanismy z progresivních materiálů, kde rozhoduje každý gram a milimetr." },
  { title: "Kolejová vozidla", accent: "yellow" as Accent, text: "Mechanické celky a interiéry podle bezpečnostních norem a nároků drážního provozu." },
  { title: "Strojírenství", accent: "red" as Accent, text: "Jednoúčelové stroje a výrobní linky se snadnou montáží a dobrou ergonomií obsluhy." },
  { title: "Energetika", accent: "blue" as Accent, text: "Komponenty pro náročné provozní podmínky, volba materiálů a dlouhodobá spolehlivost sestav." },
  { title: "Lékařské vybavení", accent: "lime" as Accent, text: "Přístroje a vybavení s důrazem na hygienu, ergonomii a materiálovou čistotu." },
  { title: "Obranný průmysl", accent: "sky" as Accent, text: "Systémy pro extrémní podmínky, integrace elektroniky a splnění vojenských standardů." },
]);

export const articles = typeset({
  href: `${origin}/blog/`,
  items: [
    {
      title: "Automatizace při ověřování konstrukce ve společnosti EA Partner",
      type: "Případová studie",
      date: "5. 5. 2026",
      text: "SpinFire Publish sám rozpozná změny v CAD datech a převede je do struktury, kterou potřebuje tým simulací.",
      href: `${origin}/automatizace-ea-partner/`,
      image: { src: uploads("2026/05/manuf2.jpg"), alt: "Pracoviště EA Partner" },
    },
    {
      title: "Kompletní průvodce architekturou RAG 2026",
      type: "Odborná studie",
      date: "9. 10. 2026",
      text: "Jak nasadit generativní AI do ostrého provozu bez úniku duševního vlastnictví a v souladu s evropskou regulací.",
      href: `${origin}/kompletni-pruvodce-architekturou-rag-2026/`,
      image: { src: uploads("2026/03/engineering-software_optimized.png"), alt: "Technická data na monitorech a notebooku" },
    },
  ],
});

export const blog = typeset({
  title: "Zkušenosti z projektů pro vaše další rozhodování",
  lead: "Některé technické otázky se vracejí v různých projektech. Jak zjednodušit práci s CAD daty? Kdy dává smysl zapojit AI? A co si ověřit před změnou zavedeného postupu? Sdílíme poznatky, které mohou pomoci i při vašem rozhodování.",
  action: "Prohlédnout odborné články",
  href: `${origin}/blog/`,
  read: "Číst článek",
  items: [
    {
      title: "Firemní AI a RAG",
      type: "Odborná studie",
      accent: "lime" as Accent,
      date: "9. 10. 2026",
      text: "Co rozhoduje o tom, zda vyhledávání nad firemními dokumenty pomůže v reálném provozu? Podívejte se na souvislosti dat, architektury a ověřování odpovědí.",
      href: `${origin}/kompletni-pruvodce-architekturou-rag-2026/`,
      image: { src: uploads("2026/03/engineering-software_optimized.png"), alt: "Technická data na monitorech a notebooku" },
    },
    {
      title: "Automatizace u EA Partner",
      type: "Případová studie",
      accent: "red" as Accent,
      date: "5. 5. 2026",
      text: "Jak firma využila SpinFire Publish při práci s CAD daty a ověřování konstrukce. Konkrétní příběh pro týmy, které hledají možnosti automatizace.",
      href: `${origin}/automatizace-ea-partner/`,
      image: { src: uploads("2026/05/manuf2.jpg"), alt: "Pracoviště EA Partner" },
    },
    {
      title: "Práce s CAD daty napříč týmy",
      type: "Software",
      accent: "sky" as Accent,
      text: "Konstrukční data potřebují číst také lidé mimo konstrukci. Prohlédněte si možnosti nástrojů, které je zpřístupňují nákupu, technologii nebo řízení projektů.",
      href: `${origin}/spinfire/`,
      image: { src: uploads("2026/03/spinfire_2.jpg"), alt: "SpinFire Insight se síťovým modelem mřížky chladiče" },
    },
  ],
  newsletter: {
    title: "Nechte si poslat další poznatky z praxe",
    text: "Zajímá vás, jak se vyvíjí práce s technickými daty, softwarem a AI? Přihlaste se k odběru článků a novinek BEKO. K tématům se můžete vrátit, až budou aktuální pro váš tým.",
    label: "E-mail",
    placeholder: "vas@email.cz",
    action: "Odebírat články a novinky",
    note: "Odběr můžete kdykoli zrušit.",
    privacy: "Jak pracujeme s osobními údaji",
    invalid: "Zkontrolujte prosím e-mailovou adresu. Potřebujeme ji ve tvaru jmeno@firma.cz.",
    success: "E-mail má správný formát. V ostré verzi by následovalo potvrzení odběru.",
    demo: "Toto je ukázka webu, adresa se nikam neodeslala.",
  },
});

/**
 * BE-Assist, the demo assistant in the bottom corner. There is no model behind it: it picks one of the prepared
 * answers below (and the FAQ answers) by the words in the question, and says so in its window.
 */
export const assistant = typeset({
  name: "BE-Assist",
  role: "Průvodce službami BEKO",
  open: "Zeptat se BE-Assist",
  close: "Zavřít BE-Assist",
  greeting: "Dobrý den, jsem BE-Assist. Pomohu vám zorientovat se ve službách BEKO a připravit první rozhovor. Na co se chcete zeptat?",
  placeholder: "Napište dotaz",
  send: "Odeslat dotaz",
  thinking: "BE-Assist píše odpověď",
  demo: "Ukázka. Odpovědi jsou předpřipravené a dotaz se nikam neodesílá.",
  fallback: "Na tohle v ukázce připravenou odpověď nemám. Zkuste se zeptat na služby, průběh spolupráce, software nebo kontakt. S konkrétním zadáním vám nejlépe poradí kolegové na info@beko-engineering.cz.",
  suggestions: ["S čím mi BEKO pomůže?", "Jak probíhá spolupráce?", "Jak vás mohu kontaktovat?"],
  topics: [
    { keywords: ["sluzb", "pomuz", "nabiz", "delat", "zamer", "obor"], answer: "BEKO pokrývá engineering, design a konstrukci, IT služby, AI řešení a vzdělávání. Jednotlivé odbornosti umíme propojit v jednom zadání, například konstrukci s automatizací práce s CAD daty.", link: { label: "Přejít na služby", href: "#sluzby" } },
    { keywords: ["spoluprac", "prubeh", "postup", "zacit", "zacina", "krok", "proces"], answer: "Nejdřív porozumíme vašemu zadání, potom navrhneme postup, průběžně pracujeme a ověřujeme výstupy a nakonec je předáme k dalšímu využití. Na začátek stačí stručně popsat, co potřebujete posunout.", link: { label: "Průběh spolupráce", href: "#proces" } },
    { keywords: ["kontakt", "napsat", "zavolat", "telefon", "email", "mail", "pobock", "adres", "kde"], answer: "Napište na info@beko-engineering.cz nebo zavolejte na +420 485 387 555. Sídlo je v Liberci a pobočky najdete v pěti zemích střední Evropy.", link: { label: "Kontakt", href: "#kontakt" } },
    { keywords: ["softwar", "spinfire", "beplay", "be-play", "catia", "licenc", "cad"], answer: "BEKO nabízí SpinFire pro práci s CAD daty napříč týmy a BE-Play pro správu licencí CATIA V5. K oběma najdete na webu novinky a příručky.", link: { label: "Ukázky naší práce", href: "#projekty" } },
    { keywords: ["ai", "umel", "inteligenc", "rag", "automatiz"], answer: "V AI řešeních pomáháme s připraveností firmy, vyhledáváním nad firemními dokumenty a vizuální kontrolou. Vždy začínáme tím, kde má zapojení AI pro váš projekt reálný přínos.", link: { label: "Přejít na služby", href: "#sluzby" } },
    { keywords: ["karier", "prace", "pozic", "zamestn", "nabor", "volna"], answer: "Otevřené pozice a možnosti práce v BEKO najdete na stránce Kariéra. Odkaz je i dole v patičce.", link: { label: "Kariéra", href: `${origin}/kariera/` } },
    { keywords: ["projekt", "referenc", "ukazk", "zkusenost", "klient", "zakazni"], answer: "Za BEKO je přes 850 dokončených projektů. Na stránce najdete například interní koncepty BEKO E-BOAT a E-CITY nebo zákaznický příběh EA Partner.", link: { label: "Ukázky naší práce", href: "#projekty" } },
  ],
});

export const faq = typeset({
  title: "Co si ujasnit před prvním rozhovorem",
  lead: "Možná už máte konkrétní zadání. Možná teprve hledáte vhodný postup. Tady najdete odpovědi, které vám pomohou připravit první rozhovor.",
  more: "Nenašli jste svou otázku? Napište nám, co řešíte.",
  action: "Zeptat se přímo",
  href: "#kontakt",
  items: [
    { id: "zadani", question: "Musíme mít před prvním kontaktem hotové zadání?", answer: "Pro první rozhovor stačí popsat, co potřebujete posunout, v jaké fázi projekt je a kde narážíte na omezení. Společně upřesníme, které podklady a odbornosti budou pro další postup potřeba." },
    { id: "cast", question: "Můžeme poptat jen část projektu?", answer: "Ano, můžeme se bavit o konkrétní odbornosti, dílčím úkolu i širší spolupráci. Rozsah vymezíme podle návazností na váš tým a podle toho, jaký výstup potřebujete převzít." },
    { id: "priprava", question: "Co si připravit na úvodní rozhovor?", answer: "Pomůže stručný popis cíle, současného stavu a očekávaného termínu. Pokud už víte o důležitých technických omezeních nebo používaných systémech, přidejte je. Citlivé podklady můžeme řešit až po domluvě způsobu jejich sdílení." },
    { id: "rozsah", question: "Jak se dohodne rozsah a cena spolupráce?", answer: "Vycházíme ze zadání, potřebné odbornosti a očekávaných výstupů. Nejdřív si ujasníme souvislosti a otevřené otázky. Na tomto základě připravíme konkrétní návrh rozsahu, termínu a obchodních podmínek." },
    { id: "duvernost", question: "Jak pracujete s důvěrnými informacemi?", answer: "Před předáním citlivých podkladů si domluvíme požadavky na důvěrnost, přístupy a technické prostředí. Pokud projekt vyžaduje dohodu o mlčenlivosti, zahrneme ji do přípravy spolupráce." },
    { id: "propojeni", question: "Můžete propojit engineering s IT nebo AI v jednom zadání?", answer: "Ano. Propojení dává smysl například při automatizaci CAD úloh, předávání technických dat mezi systémy nebo práci s firemní dokumentací. Nejdřív společně posoudíme, kde takové zapojení vašemu projektu skutečně pomůže." },
  ],
});

export const questions = typeset([
  {
    title: "V jakých CAD systémech pracujete?",
    answer: "V CATII V5 i 3DEXPERIENCE, Siemens NX, SolidWorks a Autodesk Inventoru. Systém volíme podle zákazníka a standardů daného odvětví.",
  },
  {
    title: "Můžete pracovat přímo v našem prostředí?",
    answer: "Ano. Data spravujeme ve vašem PLM, například v Teamcenteru nebo 3DEXPERIENCE, a předáváme je v nativních formátech CAD.",
  },
  {
    title: "Jak chráníte citlivá data?",
    answer: "Máme certifikace TISAX, ISO 27001 a ISO 9001. Pro obranné a letecké zakázky používáme izolované datové okruhy a se zákazníky uzavíráme NDA.",
  },
  {
    title: "Musí AI běžet v cloudu?",
    answer: "Nemusí. Modely umíme provozovat na lokálních serverech, takže vaše data neopustí firmu.",
  },
]);

export type Office = { id: string; city: string; address: string; phone: string; coordinates: [number, number] };

const office = (city: string, address: string, phone: string, coordinates: [number, number]): Office => ({
  id: city.toLowerCase().replaceAll(" ", "-"),
  city,
  address,
  phone,
  coordinates,
});

/** Adresy a telefony ze stránky O nás. Souřadnice jsou přibližné, na úrovni města. */
export const officeCountries = typeset([
  {
    id: "cz",
    label: "Česko",
    offices: [
      office("Liberec", "1. máje 871/13, 460 07 Liberec III", "+420 485 387 555", [15.056, 50.767]),
      office("Praha", "Na Hutmance 1010/9, 158 00 Praha 5", "+420 221 228 450", [14.355, 50.05]),
      office("Brno", "Vídeňská 101/119d, 619 00 Brno", "+420 534 001 500", [16.595, 49.17]),
      office("Plzeň", "Edvarda Beneše 590/31, 301 00 Plzeň", "+420 725 997 974", [13.373, 49.738]),
      office("Mladá Boleslav", "Vodkova 84/109, 293 01 Mladá Boleslav", "+420 607 033 188", [14.903, 50.411]),
    ],
  },
  {
    id: "sk",
    label: "Slovensko",
    offices: [
      office("Bratislava", "Panónska cesta 3604/17, 851 04 Bratislava", "+421 948 948 871", [17.107, 48.12]),
      office("Žilina", "Radlinského 633/19, 010 01 Žilina", "+421 948 828 886", [18.739, 49.223]),
      office("Trenčín", "K výstavisku 13, 912 50 Trenčín", "+421 948 828 885", [18.044, 48.894]),
    ],
  },
  {
    id: "at",
    label: "Rakousko",
    offices: [
      office("Vídeň", "Stubenbastei 2, 1010 Wien", "+43 1 797 500", [16.377, 48.206]),
      office("Linec", "Gruberstraße 2-4, 4020 Linz", "+43 1 797 500", [14.296, 48.303]),
      office("Štýrský Hradec", "Joanneumring 5, 8010 Graz", "+43 316 71 65 69", [15.441, 47.068]),
      office("Hall in Tirol", "Brockenweg 2, 6060 Hall in Tirol", "+43 662 82 76 40", [11.508, 47.283]),
    ],
  },
  {
    id: "hu",
    label: "Maďarsko",
    offices: [
      office("Győr", "Mártirok útja 66, 9027 Győr", "+36 96 511 560", [17.65, 47.687]),
      office("Budapešť", "Budafoki út 56, 1117 Budapest", "+36 1 309 7600", [19.052, 47.47]),
      office("Szombathely", "Körmendi u. 40, 9700 Szombathely", "+36 94 512 010", [16.621, 47.23]),
    ],
  },
  {
    id: "si",
    label: "Slovinsko",
    offices: [office("Lublaň", "Slovenska cesta 56, 1000 Ljubljana", "+386 30 424 544", [14.505, 46.056])],
  },
]);

export const legal = {
  privacy: `${origin}/ochrana-osobnich-udaju/`,
  reporting: `${origin}/whistleblowing/`,
};
