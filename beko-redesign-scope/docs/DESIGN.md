# Vizuální smlouva projektu

Aktualizováno 5. 11. 2026 po dalších připomínkách uživatele. LP je příběh prvotřídního dodavatele seřazený podle otázek zákazníka, detaily patří na podstránky. Výsledek čeká na posouzení uživatelem.

## Směr

Světlý web s ostrými rohy, barvami původního webu BEKO a skutečnými fotografiemi a rendery BEKO. Vizuální motiv je mozaika čtverců odvozená z loga. Hlavní reference jsou **Sentry** pro světlou plochu, navigační pruh, modrý přechod a karty s izometrickým objektem a **Scalemont** pro propojený diagram s aktivním uzlem. **Monoflow se nepoužívá.** Uživatel výslovně požádal o izometrické vizuály karet služeb, které jsou kreslené kódem. Jiné dekorativní kresby se nepřidávají. Hero používá uživatelem dodanou fotografii konceptu auta ve dvou tématech.

## Pravidla proti AI rukopisu

Závazná pro další fáze.

- Žádné pomlčky ve viditelném textu, číslování sekcí ani položek, oddělovače s lomítkem nebo tečkou uprostřed a malé proložené popisky nad nadpisy.
- Žádné slogany a dvoudílné nadpisy s tečkou. Nadpis sekce odpovídá na otázku zákazníka, tělo textu je konkrétní fakt doložený podklady BEKO.
- Žádné pastelové karty s ikonou nahoře, seznamy s fajfkami, dekorativní přechodové skvrny ani vymyšlené postupy a čísla.
- Česká sazba: spojky a předložky se nezalamují na konci řádku, totéž platí pro jednotky a PSČ. Řeší to `web/lib/typography.ts`.

## Příběh a důkazy

Čtenář je technický nebo nákupní ředitel velkého výrobce. Části a jejich pořadí určuje [LANDING-PARTS.md](LANDING-PARTS.md) podle dodaného dokumentu s textacemi. Směr vyprávění: potřeba zákazníka, vhodná odbornost, ukázka práce a první kontakt.

- **Tvrzení potřebuje důkaz.** Místo přídavných jmen konkrétní jméno, certifikát, počet nebo výrok klienta.
- **Klienti a čísla musí být doložené.** Neexistující výsledky nedoplňovat. Výběr log v hero určil uživatel, vztah s firmami musí BEKO potvrdit před zveřejněním.
- **LP nepřebírá obsah podstránek.** Sekce pro detail služeb, kroků návrhu, projektů, softwaru, oborů, blogu, FAQ a případových studií jsou připravené v `web/components/subpages/`.

## Typografie

- **Text a UI:** systémový SF Pro přes `-apple-system`, `BlinkMacSystemFont`, `SF Pro Text`, dále Segoe UI, Arial, sans-serif. Hlavní text 17 až 18 px, ostatní 15 px, nejmenší 13 px.
- **H1 a H2:** lokální Michroma 400 verzálkami, soubory a OFL licence v `web/public/fonts/`. H1 do 72 px na desktopu, přibližně 26 px na telefonu, vždy na dva řádky se zlomem za slovem Engineering, řádkování 1,2 a prostrkání −0,025 em. Text a šipka položek hlavního menu mají po najetí barvu BEKO: Služby modrá, Software světle modrá, Kariéra žlutá, Spolupráce červená, O nás limetková. Ve světlém režimu mají světle modrá, žlutá a limetková tmavší odstín `#0f78c8`, `#997700` a `#55800f`. Část 03 má velký text o historii BEKO a řadu čtyř čísel s popisky, bez nadpisu, tlačítka a dekorací. Část 04 má nadpis na středu a šest služeb z menu v bílé mřížce se sdílenými linkami. Každá buňka má ikonu v obrysovém čtverečku v barvě BEKO, šipku, název a popisek z menu, po najetí spotlight v barvě služby. Za mřížkou je jemná technická mřížka. Část 05 má stejný středový úvod a vodorovný carousel vysokých karet s fotkou přes celou plochu, bílým štítkem typu projektu v barvě BEKO nahoře a názvem dole. Karty přesahují k pravému okraji, pod nimi je tlačítko, pauza a hranaté šipky. Carousel se sám posouvá o kartu každých 4,5 s. Mezi částmi 06 a 07 je pás s claimem BEKO: NO LIMITS Michromou přes celou šířku, každý řádek dvakrát se značkou BEKO z loga mezi opakováními, první řádek plný, druhý modře obrysový, při scrollu se posouvají proti sobě. Část 07 má středový úvod, tři články ve sdílené mřížce se spotlightem, na telefonu jako řádky s náhledem, a pod nimi světlý panel newsletteru s technickou mřížkou a formulářem. Čísla mají postupně modrou, červenou, tmavší žlutou a tmavší limetkovou. Tag jazyka CS je zatím jen popisek, na desktopu vedle přepínače režimu, na mobilu v záhlaví otevřeného menu. H2 do 64 px na desktopu, přibližně 26 px na telefonu.
- **H3 a čísla:** H3 SF Pro semibold, velká čísla Michroma.

## Barvy

Paleta je převzatá z konfigurace Elementoru na `beko-engineering.cz`.

| Role | Hodnota |
|---|---|
| Pozadí | #FFFFFF |
| Střídavá plocha | #F1F4FA |
| Hrana | #DDE1E9 |
| Text | #15171C |
| Tlumený text | #565E6E |
| Hlavní akce a fokus | #155DF5, hover #0F46C2 |
| Nebeská modrá | #56B5F9 |
| Žlutá | #F8D347 |
| Červená | #DD4754 |
| Limetková | #9DC53D |

Akcenty jsou ploché a ostře ohraničené. Služby: Engineering červená, IT modrá, AI limetková, Vzdělávání žlutá. Modrý přechod se používá ve výzvě k akci pod procesem.

## Tvar a povrch

Rádius 0 všude, nastavený v tokenech a přímo v komponentách. Sklo jen tam, kde je pod ním obraz nebo podklad: sticky header, karty služeb, popisky projektů, štítky skici. Bez stínů.

## Rozložení

Obsah nejvýše 1344 px. Okraje 16, 20, 32 a 48 px. Header 64 a 72 px. Sekce 72, 96 a 136 px svisle. Mozaikový modul 32, 40 a 56 px.

Pořadí sekcí je v [LANDING-PARTS.md](LANDING-PARTS.md).

- **Hero:** fotografie konceptu auta přes celou výšku okna, pod skleněnou hlavičkou. Denní a noční scéna mají stejnou kompozici a přepínají se prolnutím. Na šířku vyplní plochu, na výšku je auto celé dole a obloha nahoře plynule přechází do plné barvy. Nadpis, text a dvě výzvy jsou v oblasti oblohy. Na desktopu vlevo, pod 1024 px na středu.
- **Proces:** pět kroků na liště, která se plní podle scrollu. Na mobilu svislá lišta. Pod ní modrá výzva k akci.
- **Projekty:** E-BOAT, E-CITY, E-BETA a C-GATE v asymetrické mřížce se skleněnými popisky.
- **Mapa poboček:** shadcn registr mapcn nad MapLibre, panel se zeměmi vlevo. Bez popisků podkladu, protože jsou anglicky.

## Pohyb

Motion 14 pro scroll a odpočet, ostatní v CSS.

- **Nadpisy:** H1 po slovech z CSS bez čekání na hydrataci, H2 po písmenech při vstupu do obrazu.
- **Text:** odstavec o společnosti se po slovech doplňuje podle scrollu, odkazy mají roll efekt.
- **Hero:** nadpis po slovech, krátké usazení fotografie a prolnutí dne a noci. Skica z předchozí iterace je odložená v `web/components/subpages/hero-sketch.tsx`.
- **Obrazy:** mozaikové odhalení u projektů.
- **Carousel:** jedna řada bílých log v hero z CSS, fadeout do stran, zastavení při najetí, pomalý posun.
- **Karty služeb:** bodové světlo podle kurzoru, rozestup vrstev při najetí, běžící světlo a blikající buňky ve vizuálech.
- **Proces:** lišta a uzly řízené scrollem.
- **Mapa:** přelet na vybranou zemi nebo pobočku. MapLibre se stahuje až při přiblížení sekce, bez WebGL se ukáže statická mapa.
- **Čísla:** odpočet, finální hodnota je vždy v HTML.
- **Přístupnost:** text je čitelný bez JavaScriptu i s `prefers-reduced-motion`, nadpisy mají text pro čtečky zvlášť.

## Komponenty

shadcn Radix, styl `radix-nova`. Map z registru mapcn je převzatá téměř beze změny, aby šla aktualizovat. Button s variantou `split`, Badge, Tabs, Accordion, Navigation Menu, Sheet, Dialog a Switch jsou upravené přímo v `web/components/ui/`, ne přepisy přes `[data-slot]`. Sekce LP jsou v `web/components/sections/`, sekce pro budoucí podstránky v `web/components/subpages/`, animační prvky v `web/components/motion/`, obsah v `web/content/site.ts`, tokeny v `web/app/globals.css`.

## Kontrola a stav

Aktuální [QA a screenshoty](../../web/docs/qa/phase-1/rebuild/README.md). Stav zůstává `review`. Fáze 2 nezačíná bez výslovného schválení běžící LP.


## Revize 8. 11. 2026 · aktuální upřesnění

Na výslovný pokyn uživatele provedena revize napříč LP. Tato pravidla nahrazují starší popisy spotlightů a odhalování textu pro současnou landing page: hero si ponechává animaci, vnitřní nadpisy a text O společnosti jsou čitelné ihned. Služby mají jednoduchý hover/focus podklad a samostatné barevné ikony bez rámečku, bez spotlightu a mřížky. Blog je redakční sestava hlavního článku a dvou menších příspěvků. Newsletter odděluje pouze linka, nikoli technická mřížka nebo svítící karta. Kontakt má klidný světlý podklad. Claim a schválené carousely zůstávají; značka v claimu je odvozena do menšího WebP. Materiály pro budoucí podstránky zůstávají archivované, jejich starší efekty se na LP nevracejí automaticky.

[Kontrola revize a screenshoty](../../web/docs/qa/phase-1/refinement/README.md).

## Kontakt a patička · 9. 11. 2026

Landing page končí krátkým pásem s výzvou ke kontaktu v plné BEKO modré. Formulář a mapa poboček patří na stránku Kontakt. Patička je bílá, pás s kariérou je v ní jen kompaktní řádek, aby nesoupeřil se závěrečnou výzvou.

Sekce se oddělují střídáním podkladů: Služby, Průběh spolupráce a FAQ leží na `mist`, ostatní na bílé, newsletter je panel se světlým přechodem od sky k blue. Sekce na podkladu mají odsazení nahoře i dole a nepotřebují linku nad nadpisem. [Kontrola rytmu podkladů](../../web/docs/qa/phase-1/sections/README.md).

[Kontrola kontaktu a patičky](../../web/docs/qa/phase-1/contact/README.md).

## Tmavý režim · 9. 11. 2026

Tmavý režim platí pro celý web. Podklad je tmavě modrý `#0a1424`, střídající se sekce `#16233b` a karty `#101d33`, takže rytmus podkladů zůstává stejný jako ve světlém režimu. Kontaktní pás zůstává v plné BEKO modré, hero přepíná na noční fotografii. Ztmavení pod dialogy a na fotkách je v obou režimech stejně tmavé. [Kontrola tmavého režimu](../../web/docs/qa/phase-1/dark-mode/README.md).

## Jemné interakce a rytmus · revize 9. 11. 2026 (Codex)

Projekty mají asymetrickou dvousloupcovou hlavičku s linkou. Čísla společnosti jsou statická. Carousel zobrazuje rozsah plně viditelných položek a šest segmentů; mobil má plné ovládání, klávesnice šipky a Home/End. Barevná spodní linka služeb se aktivuje hoverem i fokusem. Otevřené FAQ má text a spodní linku v akcentu, plus se mění na minus. Tyto detaily rozvíjejí existující geometrii bez nových plošných efektů.

`--blue` je nadále barva ploch, `--blue-text` je čitelný text/fokus (`#155df5` světlý, `#85adff` tmavý). Kontaktní CTA je bílé v obou režimech. Tmavý text na žlutém výběru zůstává čitelný. [QA](../../web/docs/qa/phase-1/polish/README.md).

## Korekce uživatele · 9. 11. 2026

Uživatel odmítl barevné hover linky služeb, linku nad nadpisem projektů a číselný ukazatel u šipek. Tyto prvky i segmentová lišta pod projekty byly odstraněny. Toto rozhodnutí nahrazuje odpovídající části předchozí revize: ponechat čisté rozvržení, šipky a pauzu, nepřidávat dekorativní linky ani číslování jako univerzální designový detail.

## Cílené animace · 9. 11. 2026

Na přání uživatele vrácen pohyb vybraných vizuálních skupin: video a hlavní článek 900 ms, služby a vedlejší články 650 ms, posun 16–20 px, odstupy nejvýše 140 ms. Vstupy proběhnou jednou, bez skrytí obsahu při nefunkčním JS, bez animování obsahu již viditelného při načtení. Fokus animaci ruší; reduced motion ji vypíná. Průběh spolupráce drží dosažený stav. Nadpisy, firemní čísla a běžný text zůstávají stabilní. Dekorativní linky a číslování odmítnuté uživatelem se nevracejí.

## Viditelný pohyb · 10. 11. 2026

Předchozí vstupy byly uživatelem vyhodnoceny jako neviditelné. Nová intenzita nahrazuje parametry z 9. 11.: vstupy 40–48 px / 1–1,2 s / 110 ms odstupy; začínají výše ve viewportu. Hero má hloubku pomocí posunu fotografie, video scroll-linked rozšíření z 82 % na 100 %, blog parallax uvnitř fotografie. Pohyb nenarušuje nativní scroll ani čitelnost nadpisů. Patička má výraznější kariérní výzvu a postupný nástup skupin odkazů, pěti-sloupcová sazba až od 1280 px. Navigace používá jemnější otevření a jasný klávesový fokus. Reduced motion vypíná nové efekty; hero parallax je vypnutý také na úzkém mobilu.

[Kontrola a omezení](../../web/docs/qa/phase-1/dynamic/README.md).

### Korekce navigace · 10. 11. 2026

Na přání uživatele mají rozbalovací panely plně neprůhledné pozadí v obou režimech, nulovou otevírací prodlevu a žádné fade/zoom/slide ani animované rozměry. Toto nahrazuje předchozí doporučení animovat otevření navigace. Průhlednost hlavní lišty zůstává.

### Technická mřížka · 10. 11. 2026

Na přání uživatele vyzkoušena jediná lokální statická mřížka za kroky spolupráce: 72 px na desktopu, 64 px na mobilu, jemné linky a radiální vytrácení. Nadpis, hero a služby ji nedostávají. Světlá a tmavá paleta jsou oddělené. Varianta čeká na posouzení.
