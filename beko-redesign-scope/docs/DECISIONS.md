# Rozhodnutí a vizuální základ

## Příběh podle otázek zákazníka · 5. 11. 2026

Připomínka uživatele: příběh skáče, web má být modernější a technologičtější. Odstranit loď z hero a dát místo ní animovanou designovou skicu na světlém gradientu z barev BEKO. Case studies nahradit mapou procesu spolupráce s výzvou k akci, vrátit krátké projekty a pro mapu použít shadcn komponentu. Fáze 1 `review`, schválení čeká.

- **Pořadí:** hero, O společnosti, klienti, služby, proces s výzvou k akci, projekty, standardy s mapou, kontakt.
- **Nadpisy:** místo jednoho slova odpovědi na otázku zákazníka, například „Jak spolu budeme pracovat“.
- **Hero:** „Od první skici po hotové řešení“. Skica je výslovná výjimka z dřívějšího zákazu skic. Nejde o obrázek, tahy generuje kód z Bézierových křivek a mění se na 3D model a výpočty.
- **Proces:** pět kroků sestavených z textů na stránkách Konstrukce, Design a IT služby. Konkrétní podobu musí potvrdit BEKO.
- **Mapa:** mapcn, MapLibre a podklady CARTO. Worker je v `web/public/maplibre/`, po aktualizaci `maplibre-gl` ho je třeba znovu zkopírovat. Před produkcí ověřit licenční podmínky podkladů CARTO.
- **Pobočky:** všech 16 ze stránky O nás, souřadnice přibližně na úrovni města. Telefon Vídně doplněn podle `beko.at`, protože na webu BEKO Engineering je zkrácený.
- **Odloženo:** případové studie jsou v `web/components/subpages/`, v LP z nich zůstala výzva k akci.

## Zkrácení LP na příběh dodavatele · 5. 11. 2026

Připomínka uživatele: LP je zbytečně obsáhlá a opakuje podkategorie. Má představit firmu stávajícím textem, přidat carousel log klientů podle React Bits Social Proof 9, stručné služby bez fotek ve futuristických kartách ze Sentry a Scalemont a naznačit případovou studii. BEKO se má představit jako prvotřídní dodavatel velkých firem, ne podle omezeného obsahu současného webu. Fáze 1 `review`, schválení čeká.

- **Struktura:** hero, důkaz, O společnosti, Reference, Služby, Standardy, Kontakt. Výška stránky na desktopu z 13 420 na 6 432 px. Sekce Design, Projekty, Software, Obory, Blog, FAQ a detail služeb jsou přesunuté do `web/components/subpages/` pro Fázi 2 a 4.
- **Nadpis hero:** „60 let inženýrství pro evropský průmysl“ podle založení skupiny v roce 1966.
- **Klienti:** GRAMMER, HAUK, ALW a EA Partner z referencí BEKO, MAHLE a Philips z tiskových zpráv skupiny z let 2006 až 2008. Přímí OEM klienti nejsou veřejně doložení, proto nejsou v carouselu. Věta o BMW, VW, Audi, Porsche a ŠKODA vychází z článků o GRAMMER a HAUK. Seznam, loga a použití značek musí potvrdit BEKO.
- **Případové studie:** GRAMMER CZ, HAUK a EA Partner se týkají softwaru SpinFire, E-BOAT je interní projekt. Konstrukční zakázku pro velkého zákazníka je potřeba doplnit od BEKO, neexistuje veřejný podklad.
- **Karty služeb:** izometrické vizuály kreslené kódem jsou výslovná výjimka ze zákazu vlastních kreseb, protože je uživatel odkázal v referencích.

## Přestavba Fáze 1 · 5. 11. 2026

Pokyn uživatele: odstranit z webu rukopis AI v textech, vzorech, číslování a pomlčkách a předělat ho na úrovni seniorního vývojáře. Požadován světlý web s hranatými rohy, barvami původního webu BEKO, efekty textů, moderními animacemi a upravenými prvky shadcn. Fáze 1 `review`, schválení čeká.

- **Barvy:** paleta přečtená z Elementoru původního webu nahrazuje interpretační odstíny předchozí iterace.
- **Motiv:** mozaika čtverců odvozená z loga. Stupňovitý okrajový motiv v hero a odhalování obrazů.
- **Obraz:** skutečné fotografie a rendery BEKO, načítané přes `next/image` z `beko-engineering.cz`. Dočasná volba pro demo, před nasazením přenést do repozitáře a ověřit práva.
- **Obsah:** přepsáno z textů původního webu. Vymyšlený čtyřkrokový proces nahradil skutečný postup návrhu ze stránky Design. Přibyly sekce Projekty a Obory, sekce Spolupráce zanikla. Uvedeno 150+ odborníků podle úvodní stránky, jiné stránky BEKO uvádějí 100+. BEKO musí údaj potvrdit.
- **Nadpisy:** Michroma zůstává podle dřívějšího pokynu, sekce mají jednoslovné nadpisy jako dodaný nápis DESIGN.
- **Technika:** Motion pro scroll a odpočet, úpravy přímo v komponentách shadcn, CSS zmenšené z 483 na přibližně 250 řádků. Odstraněny nepoužívané Card a Separator.
- **Regrese:** celá LP, header, menu, Tabs, Accordion, cookies. [QA](../../web/docs/qa/phase-1/rebuild/README.md).

Starší záznamy níže jsou historie a nejsou závazné, pokud odporují této sekci nebo DESIGN.md.

## Aktuální korekce zadání · 5. 11. 2026

Uživatel upřesnil, že požadoval **bezpatkové** písmo. Předchozí patková interpretace je nahrazena. Běžný text a UI budou používat SF Pro prostřednictvím systémového stacku Apple; pro hlavní nadpisy se ověřuje Michroma, široké technické písmo podobné nápisu DESIGN na dodaném screenshotu. Screenshot je pouze typografická reference, ne pokyn vrátit skicy.

Současně zadal další propracování celé LP směrem k Sentry, lehkému liquid glass, hranatým rohům a více střídmým barevným akcentům BEKO. Celková plocha zůstává převážně světlá. Nová iterace zmenší generické slogany, omezí opakování stejných karet a ukáže skutečný projekt i konkrétní výstupy jednotlivých oborů. Monoflow se nepoužívá, zákaz vlastních technických skic trvá.

Jde o uživatelem vyžádanou změnu celého vizuálního systému ve Fázi 1. Předchozí varianty níže jsou historie. Nový běžící výsledek zatím není schválený, Fáze 2 zůstává zavřená.

### Realizace aktuální iterace

5. 11. 2026, Codex. Fáze 1 `review`, vizuální schválení čeká.

- **Typografie** — SF Pro systémově přes Apple stack pro text a UI. Michroma 400 z `@fontsource/michroma@5.3.0`, latin/latin-ext WOFF2 a OFL lokálně v `../../web/app/fonts/`. Source Serif odstraněn. Podoba fontu je volba podobná dodanému nápisu DESIGN, ne přesná identifikace původního písma. Screenshot je uložen v `references/user-heading-2026-11-05.png` a evidován v manifestu.
- **Kompozice** — Sentry vede vztah levé textové osy a pravého skutečného projektu. E-BOAT je přenesen do hero a jeho obraz se neopakuje níže. Nabídka, obory, software i články mají konkrétnější obsah. Maximum obsahu 1280 px, okraje 64/32/20/16 px.
- **Povrchy** — převážně světlé, průsvitná bílá s blur 18 px, header 20 px. Základ #F9FAFC, text #202B3C, akce #315CD5. Služby mají fialovou, modrou, zelenou a okrovou; přesné hodnoty jsou v DESIGN.md a CSS. Jde o interpretační paletu dle uživatele, nikoli oficiální firemní HEX kódy.
- **Tvary a komponenty** — hlavní rádius 2 px, dialogy 4 px. Stále jedna shadcn sada Radix/radix-nova. Software tvoří společnou plochu, proces Tabs, praktické otázky Accordion. Nevznikla žádná dekorativní skica, fake screenshot ani AI bitmapa.
- **UX** — sticky header má samostatnou kotvu před sebou. Návrat nahoru byl opraven a ověřen. Po kontaktní akci v mobilním menu se fokus přesune na kontakt, při Escape zpět na menu. Interní kotvy mají dostatečný odstup od hlavičky. Etapy a FAQ mají data oddělená v `../../web/content/site.ts`.
- **Ověření** — finální lint, build a typecheck prošly. Čtyři šířky bez přetékání, načtené fonty a obrázky, menu klávesnicí i focus trap, Tabs, FAQ, cookie volba po reloadu. Bez zachycené konzolové chyby. Neprovedené systémové přepnutí reduced motion a test jiného OS jsou zaznamenány v QA.

Aktuální [náhled úvodu a služeb](../../web/docs/qa/phase-1/sentry-glass/desktop-hero-services.jpg), [celá LP](../../web/docs/qa/phase-1/sentry-glass/desktop-full.jpg), [mobil](../../web/docs/qa/phase-1/sentry-glass/mobile-390x844.jpg) a [QA](../../web/docs/qa/phase-1/sentry-glass/README.md). Další fáze nezačala.

## Archiv patkové iterace · nahrazeno upřesněním uživatele

Uživatel odmítl první LP a výslovně zadal úplné přepracování. **Tento pokyn nahrazuje níže uvedené původní vizuální volby i odporující části DESIGN.md.** Fáze 1 se znovu otevírá, další fáze nezačala.

- Monoflow se z návrhu zcela vypouští. Hlavní reference jsou Sentry a Scalemont, především jejich světlé obsahové části, jemné vrstvy a ovladatelné přepínání obsahu.
- Celý web bude světlý, s velmi jemným gradientem na pozadí. Tmavé pásy, technická mřížka i všechny SVG skicy se odstraní.
- Bez sans písma. Nový návrh používá patkové Source Serif 4 pro obsah i UI, lokálně s českou diakritikou. Žádná rodina Sans ani Mono se nenačítá.
- Obsah LP se přepíše do kratších, konkrétnějších bloků. Kompozici povede centrovaný hero a pravidelný obsahový sloupec; sekce budou mít stejnou osu a čitelnou hierarchii.
- shadcn Radix / radix-nova zůstává. Přibývají skutečně použité Tabs, Badge a Separator, Accordion bude použit i pro otázky ke spolupráci. Barevnost jednotlivých bloků se bude ladit až s uživatelem, současné plochy zůstávají téměř bílé.

Globální změnu autorizuje přímo poslední zpráva uživatele. Výsledek zůstane návrhem k posouzení; rozsah 25 stránek se nemění. Regrese zahrne celou LP, header, footer, mobilní menu, Tabs, Accordion a cookie dialog.

### Realizace změny k posouzení

5. 11. 2026, Codex. Stav Fáze 1 `review`. Uživatel schválil změnu směru svým zadáním, novou vizuální podobu zatím neposoudil.

- **Rozvržení** — centrovaný hero a jediná šířka 1184 px. Okraje 48/32/20 px, při 360 px 16 px. Pravidelný tok obsahu, čtyři služby, kompaktní firemní údaje a řádkový seznam článků. Nové FAQ navazuje na kontaktní cestu.
- **Tokeny** — základ #FCFCFD, panel #FFFFFF, text #24282D, tlumený text #646C78, primární akce #292E36, hrana #E4E7ED. Velmi jemný gradient #EDF4FC / #F1EFF9. Akce mají rádius 8 px, panely 16 px a projektový obraz 18 px. Výška hlavních akcí alespoň 44 px. Zdroj `../../web/app/globals.css`.
- **Písmo** — Source Serif 4 Variable roman/italic 200–900 s optickou velikostí, latin + latin-ext, zdroj `@fontsource-variable/source-serif-4@5.3.1` z npm. Čtyři WOFF2 a OFL licence v `../../web/app/fonts/`, definice v `fonts.css`. Původní IBM fonty byly odstraněné, všechny Tailwind font aliasy jsou mapované na serif.
- **Komponenty** — ve stejné oficiální sadě Radix/radix-nova přidány Tabs, Badge a Separator. `development-process.tsx` používá Tabs; nový `landing-faq.tsx` Accordion. Služby a produkty mají CardHeader/Content/Footer. Header, footer, menu a cookie dialog jsou přestylované do stejné rodiny.
- **Grafika** — odstraněny `assembly-drawing.tsx` a `service-diagram.tsx`. Zůstávají malé Lucide ikony, původní barevné logo a oficiální render E-BOAT. Žádné nové bitmapy nebyly generované.
- **Kontroly** — lint, build a typecheck prošly. Ověřeny čtyři šířky, skutečné načtení serif fontů, obrázky, desktopové i mobilní menu, Tabs, FAQ a přetrvání cookie volby. Běhová emulace reduced motion nebyla dostupná; CSS ošetření je zachováno.

Aktuální [desktop](../../web/docs/qa/phase-1/light-redesign/desktop-1440x900.jpg), [celá LP](../../web/docs/qa/phase-1/light-redesign/desktop-full.jpg), [mobil](../../web/docs/qa/phase-1/light-redesign/mobile-390x844.jpg) a [QA](../../web/docs/qa/phase-1/light-redesign/README.md). Nová sada nahrazuje předchozí screenshoty. Barevnost bloků se má ladit s uživatelem až v další iteraci. Fáze 2 nezačala.

## Archiv původních voleb · nahrazeno pokynem uživatele

Datum 5. 11. 2026. Stav `proposed`. Následující nastavení vzniklo při přípravě scope. Finální podobu uživatel posoudí na běžící LP.

- Kompozice a mřížka vycházejí primárně z Monoflow.
- Sentry informuje o omezeném modrém akcentu a technických vrstvách. Scalemont informuje o pohybu, propojení a aktivních stavech.
- Světlé a tmavé sekce sdílejí jednu typografii, tokeny a komponenty.
- UI základ je bezplatný shadcn/ui, vlastní návrh sekcí a volitelně bezplatný Motion.
- Implementace bude v `web/`, obsah bude v lokálních datech a celý první rozsah má 25 cílových cest.
- Přechody mezi fázemi vyžadují posouzení uživatele. V rámci fáze agent pokračuje samostatně až k ověřitelnému výsledku.

## Archiv první odmítnuté LP

### Odvození pro implementaci Fáze 1

5. 11. 2026, Codex. Stav `proposed`.

- **Kompozice** — Monoflow určuje světlý hero s dominantním objektem vlevo dole a titulkem v pravé polovině. Rozvržení používá dvanáct sloupců a čtyři hlavní svislé osy. Tmavý vývojový postup tvoří ostrý předěl mezi světlými službami a softwarem.
- **Typografie** — IBM Plex Sans pro české titulky a text, IBM Plex Mono pro indexy, štítky a technické poznámky. H1 má na desktopu 88 px a na telefonu 44 px.
- **Prostor** — široké okraje a různé kompozice sekcí drží stejné osy. Všechny čtyři služby budou dostupné současně.
- **Grafika** — vlastní SVG rozložené technické sestavy zabere levou polovinu hero. Sentry doplní pouze modrý světelný akcent pod sestavou. E-BOAT použije doložený render z původního webu BEKO.
- **Pohyb** — krátké odhalení a návaznost kroků vycházejí ze Scalemont. Systémová volba reduced motion ukáže plnohodnotný statický stav.
- **Umístění** — implementace navazuje v existujícím `../web/`. Dokumentace a originály zůstávají v tomto balíčku. Nový rozsah 25 stránek nahrazuje původní plán 22 stránek.

### Implementovaný základ

5. 11. 2026, Codex. Fáze `review`, vizuální volby stále `proposed`. Uživatel výsledek zatím neschválil.

| Oblast | Reálná volba a umístění |
|---|---|
| UI | shadcn CLI 4.23.0, základ Radix, styl `radix-nova`, výchozí oficiální registr bez vlastních přepisů. Konfigurace `../../web/components.json`, zdroj komponent `../../web/components/ui/`, licence MIT ve stejné složce. Použité Button, Card, Navigation Menu, Sheet, Accordion, Dialog a Switch. |
| Barvy | `../../web/app/globals.css`: světlá #F4F5F3, tmavá #11151A, panel #FFFFFF, text #161A20, tlumený #555F6D, inverzní #F6F7F9 a #B2BAC6, akcent #2457E8, světlý akcent #DCE6FF, hrany #D8DDE2 / #303846. Fokus na tmavém povrchu #8DABFF. |
| Písma | IBM Plex Sans 400/500/600 a IBM Plex Mono 400/500, lokální latin a latin-ext WOFF2 v `../../web/app/fonts/`, obě licence OFL přibalené. `../../web/app/fonts.css` definuje podmnožiny. H1 88 px desktop / 44 px mobil / 40 px při 360 px, běžný text nejméně 16 px, informační štítky 11 px. |
| Mřížka | 12 sloupců v hero a opakované čtvrtinové osy, obsah nejvýše 1440 px, okraje 64 / 32 / 20 px a při 360 px 16 px. Hero text má pravou osu, objekt levou spodní část. |
| Akce a povrchy | Hlavní tlačítka nejméně 44 px, rádius 4 px, panely a dialogy 8 px. Služby mají lokální čtvercovou variantu s navazujícími hranami. Bez výchozích výrazných stínů. |
| Sdílené části | `../../web/components/site/site-header.tsx`, `site-footer.tsx`, `cookie-preferences.tsx`, `development-process.tsx`. Obsah v `../../web/content/site.ts`, skládání LP v `../../web/app/page.tsx`. |
| Technická grafika | Vlastní SVG sestava v `assembly-drawing.tsx`, čtyři výkresy v `service-diagram.tsx`. Hero používá plný materiálový pohled, postup stejnou geometrii ve wireframe. Výběr kroku zvýrazní součást a oznámí změnu textem. Ilustrace je označena jako vlastní koncept. |
| Skutečné assety | Logo od uživatele odvozené do `../../web/public/brand/beko-logo.webp`, oficiální render E-BOAT v `../../web/public/images/beko-e-boat.webp`. Přesné původní adresy a stav oprávnění jsou v kořenovém README. Žádné AI bitmapy. |
| Pohyb | CSS, bez Motion. Krátký vstup hero a stavy akcí/menu. `prefers-reduced-motion` vypíná posun a zkracuje animace/přechody; obsah zůstává úplný. Běhové přepnutí systémové volby nebylo dostupné v nástroji a zůstává kontrolou k doplnění. |
| Navigace a cookies | Odkaz na kategorii je oddělený od ovladače podmenu. Mobil má plný Sheet, vlastní rozbalení, fokus a scroll lock. Cookies uchovávají verzovanou místní volbu, footer umožňuje změnu. Demo nemá analytického poskytovatele. Další stránky jsou nyní označené původní odkazy. |

### Vizuální baseline a schválení

Desktop [1440 × 900](../../web/docs/qa/phase-1/desktop-1440x900.jpg), [celá LP](../../web/docs/qa/phase-1/desktop-full.jpg), mobil [390 × 844](../../web/docs/qa/phase-1/mobile-390x844.jpg), [celá LP](../../web/docs/qa/phase-1/mobile-full.jpg). Tablet a 360px varianta i konkrétní porovnání šesti oblastí s referencemi jsou v [QA záznamu](../../web/docs/qa/phase-1/README.md).

Schválení uživatele čeká. Po výslovném schválení zaznamenat přesný pokyn a datum, změnit příslušný stav na `approved` a používat tuto LP jako regresní základ. Při připomínkách pokračovat v první fázi a po opravě obnovit sadu screenshotů.

## Formát další změny

U každé změny uveď důvod, rozsah, dotčené tokeny či komponenty, konkrétní stránky pro regresi a způsob schválení. Novou inspiraci přiřaď ke konkrétní vlastnosti, například otevření menu, hero nebo galerie. Zaznamenej, zda jde o lokální variantu, nebo změnu celého základu.
