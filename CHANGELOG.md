# Changelog a předání projektu BEKO Engineering

Tento soubor je společný pracovní záznam pro Codex a Claude Code. Zachycuje změny, rozhodnutí, výsledky ověření a místo, odkud má další práce navázat.

## Jak záznam vést

- Před prací si přečti aktuální stav a poslední zápisy. Stav rozpracované práce porovnej se soubory v projektu.
- Po každém uceleném zásahu přidej nový zápis nad starší. Zahrň změny kódu, designu, obsahu, konfigurace a schválená rozhodnutí. Související úpravy seskup do jednoho zápisu.
- Aktualizuj sekci **Aktuální stav**, pokud se posunula rozpracovanost, změnil další krok nebo vznikl blokátor. Při předání uprostřed práce výslovně označ, co zbývá dokončit.
- Do ověření uveď, co jsi skutečně spustil nebo prošel a s jakým výsledkem. Připoj cesty ke změněným souborům a případně odkaz na commit nebo PR.

## Aktuální stav

- **Fáze** — Fáze 1 je ve stavu `review`. Landing je rozdělená na deset částí podle [dokumentu s textacemi](beko-redesign-scope/BEKO_Landing_page_texty.docx), Části 07 až 10 jsou implementované, landing je uzavřená. Formulář a mapa poboček čekají na stránku Kontakt. Přehled je v [LANDING-PARTS.md](beko-redesign-scope/docs/LANDING-PARTS.md). Náhled běží na `http://localhost:3000/`.
- **Podklady** — aktuální [redesign scope](beko-redesign-scope/START-HERE.md) určuje 25 stránek v šesti fázích a nahrazuje původní plán 22 stránek. Stav a předání jsou v [PROGRESS.md](beko-redesign-scope/PROGRESS.md), návrhové volby v [DECISIONS.md](beko-redesign-scope/docs/DECISIONS.md). Původní audit a uživatelské reference zůstávají zachované.
- **Další krok** — posouzení celé landing page včetně výraznějších scroll efektů a revize navigace/patičky z 10. 11. uživatelem. Fázi 2 zahájit až po výslovném schválení.
- **Blokátory** — žádné evidované.

## Zápisy

### 2026-11-19 — Příprava publikace na GitHub a Vercel (Codex)

- **Pokyn uživatele** — nahrát aktuální demo do `ondrejfolprecht/beko-demo` a připravit živý náhled na Vercelu.
- **Rozsah** — aplikace `web/`, veřejné assety a projektová dokumentace; bez závislostí, buildů a lokálních screenshotů. Vercel musí mít Root Directory `web`.
- **Ověření** — produkční build a lint prošly. Místní Git autentizace nefunguje, upload probíhá přes připojený GitHub.
- **Předání** — stav publikace bude doplněn po dokončení.

### 2026-11-11 — Vrácení původních obrázků projektů (Codex)

- **Pokyn uživatele** — vrátit poslední výměnu fotografií zpět.
- **Změna** — karta BE-Play znovu používá `be-play1.png`, EA Partner `manuf2.jpg`. Odstraněné individuální ořezy a oba nově vytvořené WebP soubory. Dodané zdrojové PNG zůstávají zachované.
- **Soubory** — `web/content/site.ts`, `web/components/sections/project-carousel.tsx`, `web/public/images/projects/`.
- **Ověření** — kontrola odkazů na původní obrázky a typecheck prošly. Vizuálně znovu neprocházeno.
- **Předání** — poslední výměna fotografií odvolaná, ostatní úpravy webu zachované.

### 2026-11-11 — Nové fotografie projektových karet (Codex)

- **Pokyn uživatele** — použít dodanou fotografii engineering místo obrázku BE-Play a fotografii design místo EA Partner.
- **Změna** — obě fotografie jsou uložené lokálně jako WebP v původním rozlišení 2048 × 698. Karty mají samostatně nastavený ořez: engineering na CAD monitor, design na návrh světlometu na tabletu. Alternativní texty popisují ilustrační fotografie. Názvy, odkazy a obrázky v blogu zůstaly stejné.
- **Soubory a odkazy** — `web/content/site.ts`, `web/components/sections/project-carousel.tsx`, `web/public/images/projects/engineering.webp`, `web/public/images/projects/design.webp`. Náhled: `web/docs/qa/phase-1/projects/image-swap.png`.
- **Ověření** — lint a typecheck prošly. V prohlížeči na localhostu ověřené načtení obou fotografií a ořezy v projektovém carouselu na desktopu.
- **Předání** — hotovo, připraveno k posouzení uživatelem.

### 2026-11-11 — Naznačené menu výběru jazyka (Claude Code)

- **Pokyn uživatele** — u štítku CS naznačit menu výběru jazyků jen jako designový prvek s angličtinou, němčinou, francouzštinou a španělštinou. Během práce upřesněno: v menu jen zkratky, ne celé názvy.
- **Změna** — štítek CS je tlačítko se šipkou, které otevírá úzké menu se zkratkami CS, EN, DE, FR a ES. CS je označené jako vybrané, ostatní jsou neaktivní s popiskem „brzy“ a nejdou zvolit, takže menu nic nepřepíná. Celé názvy jazyků jsou jen pro čtečky obrazovky. Platí v hlavičce na desktopu i v mobilním menu. Menu drží 16 px od okraje obrazovky.
- **Soubory a odkazy** — `web/components/site/language-tag.tsx`, snímky ve `web/docs/qa/phase-1/language/`.
- **Ověření** — lint, typecheck a build prošly. V obou režimech na 1512 a 393 px ověřeno otevření myší i klávesou Enter, pět položek se čtyřmi neaktivními, zavření klávesou Esc s návratem fokusu a poloha menu, bez přetékání a bez chyby JavaScriptu.
- **Předání** — čeká na posouzení. Jazykové verze webu neexistují, při jejich doplnění stačí položky aktivovat.

### 2026-11-11 — Značka v pásu s claimem srovnaná na písmena (Claude Code)

- **Pokyn uživatele** — vystředit logo v pásu s claimem, aby pod ním nebyla mezera od spodní linky písmen.
- **Změna** — značka BEKO má výšku přesně jako verzálky (0,75 em místo 0,7 em) a je posunutá o 0,069 em dolů, takže její horní a spodní hrana leží na horní a spodní lince písmen. Dřív byla vystředěná na řádek, ne na písmena.
- **Soubory a odkazy** — `web/components/sections/claim-band.tsx`, snímek `web/docs/qa/phase-1/claim/mark-aligned.png`.
- **Ověření** — typecheck a build prošly. Změřeno na 1512 a 393 px: horní i spodní hrana značky se shoduje s hranami verzálek na pixel (473/598 px na desktopu, 292/334 px na mobilu).
- **Předání** — hotovo.

### 2026-11-11 — Popisek čísla 150+ (Claude Code)

- **Pokyn uživatele** — u čísla 150+ uvést „odborníků v týmu“.
- **Změna** — popisek třetího čísla je „odborníků v týmu“ místo „odborníků“.
- **Soubory a odkazy** — `web/content/site.ts`.
- **Ověření** — typecheck a build prošly. Vizuálně neprocházeno.
- **Předání** — hotovo.

### 2026-11-11 — Logo pro tmavý režim (Claude Code)

- **Pokyn uživatele** — nahrané `BekoLogoDark.svg` použít v tmavém režimu.
- **Změna** — z dodaného SVG (537 kB, bílý nápis) vznikl `web/public/brand/beko-logo-dark.webp` 880 × 251 px, 57 kB. Hlavička a patička vykreslují obě loga a přepínají je podle režimu, světlé má `dark:hidden`, tmavé `hidden dark:block`. Světlé logo beze změny. Zdrojové SVG zůstává v kořeni projektu.
- **Soubory a odkazy** — `web/public/brand/beko-logo-dark.webp`, `web/components/site/site-header.tsx`, `web/components/site/site-footer.tsx`, snímky ve `web/docs/qa/phase-1/logo/`.
- **Ověření** — lint, typecheck a build prošly. V obou režimech na 1512 a 393 px změřeno, že se v hlavičce i patičce zobrazuje právě jedno správné logo ve stejné velikosti jako dřív, bez chyby JavaScriptu.
- **Předání** — čeká na posouzení.

### 2026-11-11 — Čísla bez kótovacích čar (Claude Code)

- **Pokyn uživatele** — odstranit kóty u čtyř čísel, už se nelíbí.
- **Změna** — kótovací čáry pod čísly jsou pryč včetně stylů. Barvy čísel, popisky a jednorázové protočení poslední číslice zůstaly.
- **Soubory a odkazy** — `web/components/sections/about.tsx`, `web/app/globals.css`.
- **Ověření** — lint, typecheck a build prošly. Vizuálně neprocházeno, změna jen odebírá dekoraci.
- **Předání** — kóty pod čísla nevracet.

### 2026-11-11 — Ikona BE-Assist podle nové reference, oči a bublina (Claude Code)

- **Pokyn uživatele** — fotky do sekce Služby se nakonec nedělají. Místo toho dodělat ikonu chatbota podle přiložené reference v BEKO stylu, zachovat pohyb očí, nechat občas vyskočit bublinu se třemi tečkami a ponechat zelený indikátor online.
- **Změna** — vlastní původní ikona, reference sloužila jako směr. Světlá zaoblená hlava s jemným přechodem, tmavý průzor, modrá čepička, červená sluchátka, žlutá anténa a zelená tečka online. Světle modré oči se v sedmisekundové smyčce podívají vlevo, vpravo a dvakrát mrknou. Na tlačítku jednou za 11 s vyskočí z rohu hlavy modrá bublina se třemi pulzujícími tečkami a po zhruba třech sekundách zmizí, v hlavičce okna bublina není. Při omezeném pohybu oči stojí a bublina se nezobrazí. Kandidáti stock fotek z Unsplash byli jen prohlíženi, nic se nestáhlo a šest fotek nahraných uživatelem do kořene projektu zůstalo nepoužitých.
- **Soubory a odkazy** — `web/components/site/assistant.tsx`, `web/app/globals.css`, snímky `web/docs/qa/phase-1/assistant/*-bot-*.png`.
- **Ověření** — lint, typecheck a build prošly. V obou režimech zmrazeny a vyfoceny tři stavy animace (klid, pohled do strany s bublinou, pohled vpravo), bez chyby JavaScriptu. Plynulost pohybu neposouzena pohledem v běžícím prohlížeči.
- **Předání** — ikona čeká na posouzení.

### 2026-11-10 — BE-Assist se objeví po prvním scrollu, tlumenější tlačítko (Claude Code)

- **Pokyn uživatele** — tlačítko asistenta zobrazit až po prvním scrollu s plynulou animací a ztlumit jeho podbarvení v obou režimech.
- **Změna** — tlačítko je při načtení skryté a nedostupné (`inert`), po posunu o víc než 40 px vyjede zdola o 24 px a zprůhlední se během 0,5 až 0,7 s. Jakmile se objeví, zůstává i po návratu nahoru. Při omezeném pohybu se zobrazí bez animace. Podbarvení už není plná barva textu, ale poloprůhledné pozadí stránky s rozmazáním a tenkým rámečkem jako u hlavičky, při najetí ztmavne rámeček.
- **Soubory a odkazy** — `web/components/site/assistant.tsx`, `web/app/globals.css`, snímky `web/docs/qa/phase-1/assistant/*-launcher-*.png`.
- **Ověření** — lint, typecheck a build prošly. V obou režimech změřeno: při načtení průhlednost 0 a `inert`, po scrollu průběh animace a konečný stav, po návratu nahoru zůstává. Vzhled zkontrolován na hero, na podbarvené sekci a na modrém kontaktním pásu. Bez chyby JavaScriptu.
- **Předání** — čeká na posouzení.

### 2026-11-10 — Propracovanější ikona BE-Assist (Claude Code)

- **Pokyn uživatele** — udělat robota propracovanějšího a modernějšího podle přiložených referencí chatbotových ikon.
- **Změna** — vlastní původní ikona, reference sloužily jen jako směr. Zaoblená hlava s přechodem sky → blue → blue-deep, tmavý průzor se dvěma zaoblenýma očima, červená sluchátka, žlutá anténa a zelená tečka „online“ v rohu. Oči jednou za 5,5 s mrknou, při omezeném pohybu ne. Ikona je na tlačítku o něco větší než dřív. Je to jediný zaoblený prvek na jinak hranatém webu, záměrně, aby se asistent odlišil.
- **Soubory a odkazy** — `web/components/site/assistant.tsx`, `web/app/globals.css`, snímky `web/docs/qa/phase-1/assistant/*-robot-button.png` a `*-robot-header.png`.
- **Ověření** — lint, typecheck a build prošly. Ikona zkontrolována ve zvětšení v obou režimech, bez chyby JavaScriptu. Mrknutí ověřeno jen ve stylech.
- **Předání** — ikona čeká na posouzení.

### 2026-11-10 — Hlava robota místo mozaiky u BE-Assist (Claude Code)

- **Pokyn uživatele** — nahradit barevný čtverec malou hlavou robota v barvách BEKO, aby bylo hned jasné, že jde o chatbota.
- **Změna** — ikona asistenta je hranatá hlava robota: modrá hlava, bílé oči, zelená ústa, červené uši a žlutá anténa na světle modrém stonku. Platí pro tlačítko i hlavičku okna.
- **Soubory a odkazy** — `web/components/site/assistant.tsx`, snímky `web/docs/qa/phase-1/assistant/light-robot-button.png` a `dark-robot-button.png`.
- **Ověření** — lint, typecheck a build prošly. Ikona zkontrolována ve zvětšení v obou režimech, bez chyby JavaScriptu.
- **Předání** — ikona čeká na posouzení.

### 2026-11-10 — Demo asistent BE-Assist v pravém dolním rohu (Claude Code)

- **Pokyn uživatele** — udělat do pravého spodního rohu demo pop-up AI agenta, kterému lze napsat dotaz, pojmenovat ho podle brandingu BEKO a designově vyjít ze stylu stránky.
- **Změna** — nová komponenta `Assistant` na konci stránky. Tlačítko s mozaikou z loga a názvem BE-Assist (název navazuje na BE-Play) otevírá okno s ostrými rohy: hlavička s názvem a rolí, zprávy, tři navržené dotazy, pole s tlačítkem odeslat a řádek o ukázce. Za asistentem není žádný model. Odpověď se vybírá podle slov v dotazu ze sedmi připravených témat a šesti odpovědí FAQ, bez shody přijde věta s odkazem na e-mail. Každá odpověď může nést odkaz na příslušnou sekci. Okno není modální, Esc ho zavře a vrátí fokus na tlačítko, po otevření má fokus pole, zprávy jsou živá oblast. Tlačítko leží pod lištou cookies (z-index 20 proti 30). Patička má dole rezervu, aby tlačítko nepřekrývalo odkazy.
- **Soubory a odkazy** — nový `web/components/site/assistant.tsx`, `web/content/site.ts` (export `assistant`), `web/app/page.tsx`, `web/app/globals.css`, `web/components/site/site-footer.tsx`, snímky ve `web/docs/qa/phase-1/assistant/`.
- **Ověření** — lint, typecheck a build prošly. Produkční build v obou režimech na 1512, 393 a 320 px bez přetékání a bez chyby JavaScriptu. Ověřeno otevření, fokus pole, pět dotazů včetně dotazu bez shody, navržený dotaz, Esc s návratem fokusu a že tlačítko na konci stránky nepřekrývá odkazy patičky. Čtečka obrazovky netestována. Neověřeno v Safari, Firefoxu a na fyzických zařízeních.
- **Předání** — asistent čeká na posouzení. Je to ukázka bez napojení, texty odpovědí musí potvrdit BEKO. Pro ostrý provoz je potřeba napojení na model a pravidla pro zpracování dotazů.

### 2026-11-10 — Šest značkových detailů (Claude Code)

- **Pokyn uživatele** — z navržených drobností udělat body 2, 3, 6, 8, 9 a 10.
- **Změna** — (2) textový kurzor, nativní ovládací prvky a posuvník stránky používají barvy BEKO, výběr textu a obrys fokusu už je měly. (3) Přibyla ikona pro uložení na plochu telefonu `apple-icon` 180 × 180 se stejnou mozaikou jako `icon.svg` a `manifest.webmanifest` s názvem a barvami. Zvláštní ikona pro tmavý režim nevznikla, barevná mozaika je čitelná na světlé i tmavé liště. (6) Pod každým ze čtyř čísel je kótovací čára se značkami na koncích v barvě čísla, široká jako číslo. (8) Šipka v dělených tlačítkách se při najetí a fokusu vymění: první odjede ve svém směru, druhá přijede za ní. (9) Štítek na kartě projektu při najetí a fokusu vysune druhý řádek s typem práce. Údaj `detail` je odvozený z textu karet a obsahu webu. (10) Poslední číslice každého čísla se při prvním zobrazení jednou protočí, server vykresluje konečnou hodnotu.
- **Soubory a odkazy** — `web/app/globals.css`, nové `web/app/apple-icon.tsx`, `web/app/manifest.ts` a `web/components/motion/figure-value.tsx`, `web/components/sections/about.tsx`, `web/components/sections/project-carousel.tsx`, `web/components/ui/button.tsx`, `web/content/site.ts`, snímky ve `web/docs/qa/phase-1/details/`.
- **Ověření** — lint, typecheck a build prošly. Produkční build v obou režimech na 1512 a 393 px bez přetékání a bez chyby JavaScriptu. Změřeno: kóta má stejnou šířku jako číslo, animace číslice se spustí, štítek zůstává uvnitř karty, ikona a manifest vrací 200. Šipka a štítek ověřeny najetím myši, fokus klávesnicí jen ve stylech. Omezený pohyb vypíná protočení i přechody, ověřeno ve stylech. Neověřeno v Safari, Firefoxu a na fyzických zařízeních.
- **Předání** — detaily čekají na posouzení. Texty druhého řádku štítků (Design a konstrukce, CATIA V5 a CAD data, SpinFire Publish) musí potvrdit BEKO. Štítek je kvůli skrytému druhému řádku u některých karet o něco širší než jeho popisek.

### 2026-11-10 — Průběh spolupráce bez mřížky (Claude Code)

- **Pokyn uživatele** — odstranit mřížku z pozadí čtyř kroků průběhu spolupráce, nelíbí se.
- **Změna** — zkoušená technická mřížka za kroky je pryč včetně stylů pro tmavý režim a mobil. Kroky, linka postupu a tlačítko zůstaly beze změny.
- **Soubory a odkazy** — `web/components/sections/process.tsx`, `web/app/globals.css`.
- **Ověření** — lint, typecheck a build prošly. Vizuálně neprocházeno, změna jen odebírá dekoraci.
- **Předání** — mřížku za kroky nevracet.

### 2026-11-10 — Doladění neutrálních odstínů a přechod v kontaktním pásu (Claude Code)

- **Pokyn uživatele** — posoudit, zda barvy působí prémiově, a případně upravit odstíny nebo přidat gradienty.
- **Změna** — značkové barvy BEKO zůstaly. Tmavý režim je hlubší a méně sytě modrý: podklad `#080c16` (dříve `#0a1424`), střídající se sekce `#141d30`, karty `#0d1422`, tlumený text `#aeb9cd`. Text světlého režimu je přitónovaný do tmavé modré `#0e1524` (dříve neutrální `#15171c`). Kontaktní pás má přechod z BEKO modré do hlubší `--blue-deep` pod úhlem 135° (třída `.contact-band`) a jeho doprovodný text je plně bílý. Pevné ztmavení `--scrim` a barva lišty prohlížeče v tmavém režimu odpovídají novému podkladu.
- **Soubory a odkazy** — `web/app/globals.css`, `web/app/layout.tsx`, `web/components/sections/contact-band.tsx`, `web/components/site/theme-toggle.tsx`, snímky [světlý](web/docs/qa/phase-1/colour/light-desktop.jpg) a [tmavý](web/docs/qa/phase-1/colour/dark-desktop.jpg).
- **Ověření** — lint, typecheck a build prošly. Oba režimy na 1512 px bez chyby JavaScriptu. Kontrast spočítán: text na tmavém podkladu 18,2 : 1, tlumený text na kartách 8,5 : 1, bílá na kontaktním pásu 5,4 až 7,9 : 1. Mobil po této změně vizuálně neprocházen, mění se jen barvy. Neověřeno v Safari, Firefoxu a na fyzických zařízeních.
- **Předání** — odstíny čekají na posouzení uživatelem. Barevná čísla a ikony služeb beze změny.

### 2026-11-10 — Lokální technická mřížka v průběhu spolupráce (Codex)

- **Pokyn uživatele** — vyzkoušet jemnou technickou mřížku za kroky spolupráce.
- **Změna** — statická CSS mřížka 72 px (64 px na mobilu), šedomodré tenké linky, radiální maska postupně mizí do okrajů a směrem k nadpisu/CTA. Tmavý režim má vlastní světlý odstín. Dekorace neovlivňuje layout ani interakce; ostatní sekce beze změny.
- **Ověření** — lint a typecheck prošly. Vizuální kontrola desktopu ve světlém i tmavém režimu, dokument bez horizontálního přetečení. [Světlá](web/docs/qa/phase-1/grid/light.png), [tmavá](web/docs/qa/phase-1/grid/dark.png). Mobil nebyl v této dílčí změně vizuálně kontrolován.
- **Soubory** — `web/components/sections/process.tsx`, `web/app/globals.css`.
- **Předání** — vyzkoušená varianta čeká na posouzení uživatelem. Fáze 1 zůstává review.

### 2026-11-10 — Okamžitá a neprůhledná rozbalovací navigace (Codex)

- **Pokyn uživatele** — odstranit prodlevu menu a prosvítání stránky pod panelem.
- **Změna** — desktop NavigationMenu má `delayDuration={0}` a `skipDelayDuration={0}`. Odstraněny nástupní/odchodové fade, zoom a posuvy obsahu i přechod rozměrů. Panel používá plné `bg-popover` bez průhlednosti a backdrop filtru. Klávesový fokus zachován.
- **Ověření** — lint a typecheck prošly. IAB: otevření Enter, zavření Escape; světlý panel rgb(255,255,255), tmavý rgb(10,20,36), animation none a transition 0s. [Snímek](web/docs/qa/phase-1/dynamic/navigation-solid.png).
- **Soubory** — `web/components/site/site-header.tsx`, `web/components/ui/navigation-menu.tsx`.
- **Předání** — menu má reagovat okamžitě a být plně neprůhledné. Fáze 1 zůstává review.

### 2026-11-10 — Výraznější pohyb, navigace a patička (Codex)

- **Pokyn uživatele** — znovu projít landing page, navigaci a footer, opravit chyby a dodat viditelné efekty a designové detaily; předchozí vstupy byly příliš nenápadné.
- **Pohyb** — nový `ScrollScene` odděluje pohyb hero fotografie od textu (posun do 100 px a přiblížení do 9 %), video se podle scrollu rozšiřuje z 82 % na plnou šířku a fotografie blogu mají pohyb uvnitř ořezu. Hero efekt je na úzkém mobilu vypnutý kvůli kompozici. Vstup služeb/článků je výraznější: 40–48 px, 1–1,2 s, odstupy 110 ms, spuštění až výše ve viewportu. Jednorázové vstupy nově využívá i navigační část patičky.
- **Design a opravy** — kariérní výzva má větší typografii; pěti-sloupcová patička se zapíná až od 1280 px, pod tím mají odkazy více prostoru. Logo patičky vede nahoru. Navigační panel má jemnější otevření a přechod velikosti. Opraven viditelný klávesový fokus v dropdownu (výslovný solid outline), akcent Služby v dark mode a automatické zavření mobilního menu při přechodu na desktop. Šipky odkazů reagují i na klávesový fokus.
- **Přístupnost a rozsah** — nativní scroll, žádné nové závislosti. Obsah serveru je viditelný bez JS; skript připravuje pouze prvky mimo viewport. Fokus ruší vstupní efekt. Reduced motion vypíná nové vstupy i parallax/scale. Odmítnuté hover linky služeb, linka nad projekty a číslování se nevracejí.
- **Ověření** — lint, typecheck a produkční build po finálních úpravách prošly. IAB: ověřena změna měřítka videa při scrollu, stupňovaný nástup služeb, fotografie mobilního blogu, video dialog a Escape, fokus v navigaci (solid / 2 px), zavření menu při resize, mobilní Kontakt s fokusem na sekci, šířky 320/390/1100/1440 bez přetečení dokumentu, světlá/tmavá varianta. Žádné rozbité načtené obrázky ani chyby konzole v provedené kontrole. Neověřeno v Safari/Firefox a na fyzických zařízeních; reduced motion kontrolován v implementaci, nikoli změnou OS.
- **Soubory** — `web/components/motion/{entrance,scroll-scene}.tsx`, `web/components/sections/{hero-background,about,blog}.tsx`, `web/components/site/{site-header,site-footer}.tsx`, `web/components/ui/navigation-menu.tsx`, `web/app/globals.css`. [QA a snímky](web/docs/qa/phase-1/dynamic/README.md). Záloha `output/backups/pre-motion-2026-11-10.tar.gz`.
- **Předání** — posoudit běžným scrollováním od začátku; Fáze 1 zůstává review. Bez publikace, commitu a zásahu do obsahového rozsahu.

### 2026-11-09 — Cílený návrat scroll animací (Codex)

- **Pokyn uživatele** — vrátit prémiový pocit pomocí střídmých animací videa, služeb, procesu a blogu.
- **Změna** — nový `Entrance` přidává jednorázový nástup vizuálních skupin přes IntersectionObserver a CSS: služby 650 ms / posun 16 px s rozestupem 70 ms po řadě, video a hlavní článek 900 ms / jemné odhalení. Blog má krátké odstupy. Nadpisy a samostatné texty zůstávají statické. Existující průběh spolupráce nově drží dosažený stav a plynule dorovnává linku pružinou; při návratu nahoru se neodvíjí zpět.
- **Přístupnost** — výchozí obsah je viditelný i bez JavaScriptu, obsah již ve viewportu při načtení nebliká, fokus uvnitř vstupní efekt ruší. Vstupy fungují pouze při `prefers-reduced-motion: no-preference`, proces má statickou variantu pro omezený pohyb. Žádné nové knihovny, hover linky ani číselné indikátory.
- **Ověření** — lint, typecheck a produkční build prošly. IAB: scroll spustil video, všech šest služeb a tři články; ověřeny odstupy 0/70/140 ms a návrat článků do opacity 1 / nulového posunu. Dokument bez horizontálního přetečení, konzole bez chyb. Omezený pohyb ověřen v implementaci, nikoli přepnutím OS; mobil a jiné prohlížeče v této dílčí změně neověřeny.
- **Soubory** — `web/components/motion/entrance.tsx`, `web/components/sections/{about,services,process,blog}.tsx`, `web/app/globals.css`. Snímek: `web/docs/qa/phase-1/motion/blog.png`.
- **Předání** — posoudit intenzitu pohybu při běžném scrollu na localhostu. Fáze 1 zůstává review.

### 2026-11-09 — Odstranění dekorativních linek a číslování (Codex)

- **Pokyn uživatele** — barevná hover linka služeb, linka nad nadpisem projektů a čísla u šipek působí šablonovitě; odstranit je.
- **Změna** — odstraněna barevná hover/focus linka služeb, horní linka projektů i související odsazení, číselný rozsah a segmentová lišta carouselu. Odstraněn i nepotřebný výpočet viditelných položek. Šipky, pauza, klávesové ovládání a asymetrické rozvržení zůstávají.
- **Soubory** — `web/app/globals.css`, `web/components/sections/projects-teaser.tsx`, `web/components/sections/project-carousel.tsx`, návrhové předání v `beko-redesign-scope/docs/DESIGN.md`.
- **Ověření** — lint a typecheck prošly, localhost odpovídá HTTP 200. Změna je lokální, bez publikace.
- **Předání** — dekorativní linky ani číselné ukazatele nevracet jako automatické „vylepšení“ designu. Fáze 1 zůstává v review.

### 2026-11-09 — Navazující UX/UI revize celé landing page (Codex)

- **Pokyn uživatele** — po dokončení landing page a dark mode zrevidovat kód, odstranit šablonovité vzorce a doplnit promyšlené designové detaily.
- **Design** — projekty mají asymetrickou hlavičku s jemnou dělicí linkou místo dalšího centrovaného bloku. Carousel doplňuje segmentová lišta a údaj o plně viditelných projektech, šipky jsou dostupné i na mobilu. Služby mají dvoupixelovou linku v barvě oboru při hoveru i fokusu. FAQ zvýrazňuje otevřenou odpověď barvou textu a linky; ikona přechází z plus na minus. Firemní čísla se už neodpočítávají od nuly. Schválené hero, video, newsletterový gradient a kontaktní pás zůstávají.
- **Kód** — carousel podporuje šipky, Home/End a omezuje zbytečné aktualizace stavu při scrollu. Ruční ovládání zastaví autoplay. Oddělený token `--blue-text` zachovává modré plochy a zvyšuje kontrast textových akcentů v dark mode. Výběr textu má pevně tmavé písmo na žluté. Kontaktní CTA zůstává bílé i v dark mode. Přepínač reaguje na změnu systémové preference a uložené volby v jiném okně; blokované úložiště nebrání počátečnímu systémovému vzhledu. Aktualizuje se i barva prohlížečové lišty.
- **Ověření** — lint, typecheck a produkční build prošly. V IAB ověřeny světlý/tmavý režim, šířky 320/390/768/1440 bez horizontálního přetečení dokumentu, mobilní menu a změna vzhledu s reloadem, carousel včetně End a krajního disabled stavu, FAQ, otevření/zavření videa a cookies. Konzole bez chyb. Kontrast nového modrého textu na tmavém `mist` 7,04 : 1 (původně 2,93 : 1), na bílé 5,36 : 1. Nejde o kompletní audit WCAG; změna OS za běhu, synchronizace mezi okny, Safari/Firefox a fyzická zařízení nebyly interaktivně ověřeny.
- **Soubory** — `web/components/sections/{about,services,projects-teaser,project-carousel,faq,contact-band,newsletter-form}.tsx`, `web/components/site/{site-header,theme-toggle}.tsx`, `web/components/ui/accordion.tsx`, `web/app/{globals.css,layout.tsx}`. [QA a snímky](web/docs/qa/phase-1/polish/README.md). Záloha před úpravami: `output/backups/pre-polish-2026-11-09.tar.gz`.
- **Předání** — celá landing page včetně navazující revize čeká na posouzení. Fáze 2 nezačala, newsletter zůstává lokální simulací. Bez nových závislostí, publikace či commitu.

### 2026-11-09 — Tmavý režim celého webu (Claude Code)

- **Pokyn uživatele** — dodělat kompletní dark mode webu.
- **Změna** — tmavé tokeny už neplatí jen pro hlavičku, hero a mobilní menu, ale pro celý web přes třídu `.dark` na `<html>` s `color-scheme: dark`. Bez uložené volby se web řídí nastavením systému, přepínač v hlavičce volbu uloží. Přibyly tokeny `--surface` (karty a pole formulářů), `--danger` (chybové texty) a `--scrim` (pevné tmavé ztmavení). Napevno bílé karty služeb, pole a potvrzení formulářů, značky průběhu, štítky v carouselu, lišta cookies a přepínače používají tokeny. Ztmavení pod dialogy, mobilním menu, videem a na fotkách projektů je pevně tmavé v obou režimech. Panel newsletteru má v tmavém režimu vlastní přechod, claim používá barvu textu. Podklady sekcí se střídají stejně jako ve světlém režimu.
- **Soubory a odkazy** — `web/app/globals.css`, `web/app/layout.tsx`, `web/components/sections/services.tsx`, `process.tsx`, `project-carousel.tsx`, `about-video.tsx`, `newsletter-form.tsx`, `contact-form.tsx`, `web/components/site/cookie-preferences.tsx`, `web/components/ui/dialog.tsx`, `sheet.tsx`, `switch.tsx`, `badge.tsx`, `beko-redesign-scope/docs/LANDING-PARTS.md`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/dark-mode/README.md).
- **Ověření** — lint, typecheck a build prošly. Celá stránka v obou režimech ve čtyřech velikostech bez přetékání a bez chyby JavaScriptu. Detaily tmavého režimu včetně chyby formuláře, dialogu cookies a videa prošly pohledem. Kontrast neověřen nástrojem. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — tmavý režim čeká na schválení. Archivované komponenty podstránek v `web/components/subpages` tmavý režim zatím neřeší.

### 2026-11-09 — Firemní video z vlastního souboru (Claude Code)

- **Pokyn uživatele** — vložit video jako soubor, ne jako odkaz na YouTube, bez reklam a zpoždění. Stažení z YouTube uživatel výslovně schválil.
- **Změna** — video `Rs4wycyFJQ8` z kanálu BEKO je staženo nástrojem yt-dlp v dočasné složce, obraz 1080p a zvuk spojené přes AVFoundation v macOS bez překódování a ořezané na skutečnou délku 28,4 s. Soubor `web/public/video/beko-o-nas.mp4` má 11,2 MB a metadata na začátku pro okamžitý start. Náhled `beko-o-nas-poster.jpg` je snímek z 10. sekundy bez titulku. Dialog místo přehrávače YouTube používá nativní prvek `video` s ovládáním prohlížeče. Přehrávání začne hned při otevření, takže video roste se zvětšujícím se náhledem. Ze stránky zmizely všechny požadavky na YouTube a `i.ytimg.com` zmizel z povolených zdrojů obrázků.
- **Soubory a odkazy** — `web/components/sections/about-video.tsx`, `web/content/site.ts`, `web/next.config.ts`, nové `web/public/video/beko-o-nas.mp4` a `web/public/video/beko-o-nas-poster.jpg`, [QA a snímky](web/docs/qa/phase-1/about-video/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu. Ve vestavěném prohlížeči skutečný klik spustil video hned se zvukem, Esc ho zavřel a fokus se vrátil na tlačítko. Žádný požadavek na YouTube. Neověřeno v Safari, iOS, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — video čeká na schválení. Použití videa mimo YouTube musí potvrdit BEKO, ideálně dodat originál ve vyšší kvalitě.

### 2026-11-09 — Firemní video pod čísly (Claude Code)

- **Pokyn uživatele** — vrátit původní video mezi čtyři čísla a služby, bez autoplay, po kliknutí otevřít ve zvětšeném náhledu.
- **Změna** — pod čísly v části O společnosti je široký náhled firemního videa z YouTube (od 1024 px 21:9, pod tím 16:9) s modrým čtvercovým tlačítkem a popiskem Přehrát video 0:28 vlevo dole, aby nezakrývaly nápis v obrázku. Nic se nespouští samo. Po kliknutí se otevře dialog: náhled se přes sdílenou animaci Motion zvětší do přehrávače 16:9 uprostřed obrazovky na tmavém pozadí a teprve potom se načte přehrávač YouTube se zvukem a ovládáním. Zavírá se křížkem, Esc nebo klikem vedle, náhled se vrátí na místo a fokus na tlačítko. Komponenta `about-video.tsx` byla přepsána, smyčka bez zvuku a efekt při scrollu z původní verze odpadly.
- **Soubory a odkazy** — `web/components/sections/about-video.tsx`, `web/components/sections/about.tsx`, `beko-redesign-scope/docs/LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/about-video/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, ověřeno otevření, načtení přehrávače, fokus a zavření křížkem, Esc i klikem vedle. Spuštění zvuku hned po skutečném kliknutí neověřeno, bezhlavý Chrome přehrávání po programovém kliku blokoval. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — video čeká na schválení. Zasahuje do schválené části 03, text a čísla zůstaly beze změny.

### 2026-11-09 — Podklady oddělují sekce, patička bez poznámky o ukázce (Claude Code)

- **Pokyn uživatele** — smazat z patičky řádek o ukázkovém webu. Hlavní část je příliš bílá a sekce splývají, hlavně blog, newsletter a FAQ. Rozbít to gradientem nebo podbarvením.
- **Změna** — sekce se střídají v podkladech: Služby, Průběh spolupráce a FAQ mají podklad `mist`, ostatní zůstávají bílé. Bílá mřížka karet služeb na podkladu vystupuje. Newsletter je samostatný panel se světlým přechodem od sky k blue (třída `.newsletter-panel`). Kontaktní pás na konci je plná BEKO modrá s bílým textem, bílým tlačítkem a bílým obrysem fokusu. Sekce na podkladu mají horní i spodní odsazení, linka nad nadpisem u FAQ a kontaktu odpadla. Projekty a pás s claimem dostaly horní odsazení, protože navazují na podbarvenou sekci. Patička je bílá, řádek „Ukázka redesignu…“ a jeho text v datech jsou smazané.
- **Soubory a odkazy** — `web/components/sections/services.tsx`, `projects-teaser.tsx`, `process.tsx`, `claim-band.tsx`, `blog.tsx`, `faq.tsx`, `contact-band.tsx`, `web/components/site/site-footer.tsx`, `web/app/globals.css`, `web/content/site.ts`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky celé stránky](web/docs/qa/phase-1/sections/README.md).
- **Ověření** — lint, typecheck a build prošly. Čtyři velikosti celé stránky bez přetékání a bez chyby JavaScriptu, podklady potvrzeny přes vypočtené styly. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — rytmus podkladů a části 07 až 10 čekají na schválení. Zásah mění i podklad schválených částí 04 a 06, jejich obsah a rozložení zůstaly.

### 2026-11-09 — Kontakt a mapa mimo landing page, světlá patička (Claude Code)

- **Pokyn uživatele** — kontaktní sekci i mapu z landing page odstranit, patří na stránku Kontakt. Za FAQ může být menší prvek. Patičku udělat světlou, aby seděla ke zbytku webu.
- **Změna** — z landing page zmizela sekce s formulářem a mapou poboček. Místo ní je za FAQ krátký pás v redakčním rozložení: nadpis „Proberme, co potřebuje váš projekt dál“, jedna věta, tlačítko Probrat projekt na stávající stránku kontaktů a e-mail s telefonem. Pás drží kotvu `#kontakt`, takže tlačítka Kontakt v hlavičce a hero i odkazy z průběhu a FAQ fungují dál. Komponenty `contact.tsx`, `contact-form.tsx` a `office-map.tsx` zůstávají připravené pro stránku Kontakt, na landing page se nepoužívají. Patička je světlá s jemným podkladem `mist`, pás s kariérou se zmenšil na jeden řádek s obrysovým tlačítkem. Pobočky a kontakty v patičce vedou na stávající stránku kontaktů. Tmavé tokeny patičky z předchozího zápisu jsou odstraněné.
- **Soubory a odkazy** — nový `web/components/sections/contact-band.tsx`, `web/components/site/site-footer.tsx`, `web/components/site/cookie-preferences.tsx`, `web/app/globals.css`, `web/content/site.ts`, `web/app/page.tsx` (obal `data-part="09-kontakt"`), `beko-redesign-scope/docs/LANDING-PARTS.md`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/contact/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, na stránce není formulář ani mapa. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 09 a 10 čekají na schválení. Plná kontaktní sekce s formulářem a mapou čeká na stránku Kontakt.

### 2026-11-09 — Části 09 Kontakt a 10 Footer, mapa v kontaktu (Claude Code)

- **Pokyn uživatele** — dát pryč samostatnou mapu, přesunout ji do sekce kontakt, uzavřít landing page a propracovat footer.
- **Změna** — samostatná sekce Pobočky zmizela. Sekce Kontakt má redakční rozložení jako blog a FAQ: nadpis „Proberme, co potřebuje váš projekt dál“ a úvod z varianty A dokumentu, pod tím vlevo „Co právě řešíte?“ se společným e-mailem, telefonem a sídlem, doprovodnou větou o podkladech a odkazem Najít kontakt na pobočku, vpravo kontaktní formulář. Formulář má pole a texty z dokumentu, povinné jsou jméno, e-mail a zadání. Chyby se ukážou u polí a fokus skočí na první chybné pole, po odeslání se ukáže potvrzení. Odeslání je simulované a formulář to říká. Pod tím je mapa poboček s nadpisem „Naše pobočky“ a kotvou `#pobocky`. Světlý podklad kontaktu odpadl. Patička je tmavá v obou režimech: pás s kariérou a tlačítkem Prohlédnout otevřené pozice, podpis značky z varianty A s telefonem, e-mailem a LinkedIn, čtyři skupiny odkazů z dokumentu (S čím pomůžeme, Naše práce, BEKO Engineering, Pro uživatele softwaru) a spodní lišta s právními údaji, informacemi a předvolbami a odkazem Zpět na začátek. Zákaznické příběhy z dokumentu chybí, stávající web pro ně nemá samostatnou stránku. Dokumentaci a podporu zastupuje Příručka SpinFire.
- **Soubory a odkazy** — `web/components/sections/contact.tsx`, nový `web/components/sections/contact-form.tsx`, `web/components/site/site-footer.tsx`, `web/components/site/cookie-preferences.tsx`, `web/app/globals.css` (tokeny `.surface-dark` a `.surface-light`), `web/content/site.ts`, `web/app/page.tsx`, smazaný `web/components/sections/offices.tsx`, `beko-redesign-scope/docs/LANDING-PARTS.md`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/contact/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, mapa se načte. Ověřeny chyby prázdného formuláře, fokus na první chybné pole, potvrzení po odeslání a světlá lišta cookies uvnitř tmavé patičky. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 09 a 10 čekají na schválení. Formulář potřebuje před spuštěním napojení na server a souhlas s podmínkami zpracování od BEKO.

### 2026-11-09 — Část 08 Časté otázky (Claude Code)

- **Pokyn uživatele** — dodělat FAQ podle zbytku webu po revizi od Codexu.
- **Změna** — naznačení části 08 nahradila sekce ve stejném redakčním rozložení jako revidovaný blog: linka nahoře, od 1024 px vlevo nadpis „Co si ujasnit před prvním rozhovorem“ a úvod z dokumentu, přilepené při scrollu, vpravo accordion shadcn se šesti otázkami. Pět otázek je ze základní sady dokumentu, šestá „Můžete propojit engineering s IT nebo AI v jednom zadání?“ z doplňkové. První otázka je otevřená, otevřená může být vždy jen jedna. Pod otázkami je věta Nenašli jste svou otázku a odkaz Zeptat se přímo na kontakt. Sekce nese strukturovaná data `FAQPage` ze stejných textů. Starší data `questions` pro odloženou podstránku zůstala.
- **Soubory a odkazy** — `web/components/sections/faq.tsx`, `web/content/site.ts`, `web/app/page.tsx`, `beko-redesign-scope/docs/LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/faq/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, ověřeno otevření a zavření otázek klikem, posun fokusu šipkou a platnost strukturovaných dat. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 08 čeká na schválení. Odpovědi o zahájení spolupráce, důvěrnosti a obchodním rozsahu musí podle dokumentu potvrdit BEKO.

### 2026-11-08 — Celková revize designu a implementace (Codex)

- **Pokyn uživatele** — projít celý současný web po práci s Claude Code až k blogu/newsletteru, odstranit šablonové vizuální vzorce a zlepšit kód. Tento pokyn rozšiřuje oprávněný zásah napříč LP, nikoli do další fáze.
- **Design** — blog převeden na hlavní článek a dva menší příspěvky, newsletter bez dekorativního panelu. Služby bez spotlightu, mřížky a rámečků ikon; kontakt bez aurory. Vnitřní nadpisy a představení firmy čitelné bez čekání na scrollové odhalení. Zachovány hero, obrázky, fonty, barevnost, obsah, projektový carousel a claim BEKO podle předchozích pokynů.
- **Kód a UX** — validní seznam kroků, viditelné projekty bez vstupního skrývání, nezávislý hover/fokus carouselu a vypnutí autoplay po ručním posunu. Newsletter přiznává simulaci před odesláním, neslibuje skutečný odběr a předává fokus chybě/potvrzení. Správně označen odkaz na SpinFire. Claim používá 62kB WebP místo přibližně 489kB SVG, vektor ponechán.
- **Ověření** — lint, typecheck, build a diff check prošly. Šířky 320/390/768/1440 bez přetékání, validace a potvrzení formuláře, carousel, mobilní menu, přepnutí tématu, cookies, země na mapě. Žádná zachycená chyba konzole. Podrobnosti a omezení v [QA](web/docs/qa/phase-1/refinement/README.md).
- **Předání** — Fáze 1 `review`. FAQ je dosud placeholder, tmavý režim zatím jen hero/navigace, newsletter bez backendu. Před úpravami vytvořena lokální záloha `output/backups/pre-review-2026-11-08.tar.gz`. Bez commitu/pushe/publikace.

### 2026-11-08 — Značka BEKO v pásu s claimem (Claude Code)

- **Pokyn uživatele** — místo čtyř čtverečků dát do pásu logotyp BEKO oříznutý z loga v SVG.
- **Změna** — z vektorového `BekoLogo.svg` v kořeni projektu je oříznutá barevná značka bez nápisu BEKO Engineering do `web/public/brand/beko-mark.svg`. Ořez proběhl v headless Chromu podle ohraničení cest: zůstalo 1327 cest značky, 17 cest nápisu je pryč, výřez 596 × 499 bodů. Čísla v cestách jsou zaokrouhlená na jedno desetinné místo, soubor má 489 kB, po kompresi 169 kB, vykreslení se od originálu liší jen na hranách. V pásu je značka místo čtverečků v obou řádcích ve výšce 0,7 výšky písma.
- **Soubory a odkazy** — `web/public/brand/beko-mark.svg`, `web/components/sections/claim-band.tsx`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/claim/README.md).
- **Ověření** — lint, typecheck a build prošly. Značka se načte na desktopu i telefonu, řádky dál pokrývají celou šířku, bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 07 a pás s claimem čekají na schválení. Značka je kvůli detailní malbě datově těžká, pro ostrý web zvážit WebP v potřebné velikosti, které by mělo desítky kB.

### 2026-11-08 — Pás s claimem BEKO: NO LIMITS (Claude Code)

- **Pokyn uživatele** — dát do pásu místo „Připraveni na nároky velkých výrobců“ claim BEKO: NO LIMITS.
- **Změna** — oba řádky pásu nesou BEKO: NO LIMITS, horní plně, spodní modře obrysově. Claim je kratší, proto je v každém řádku dvakrát a mezi opakováními je mozaika čtyř čtverečků v barvách loga. Rozsah posunu je upravený tak, aby řádky pokryly celou šířku okna po celou dobu průjezdu.
- **Soubory a odkazy** — `web/components/sections/claim-band.tsx`, `web/content/site.ts`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/claim/README.md).
- **Ověření** — lint, typecheck a build prošly. Ve třech polohách na desktopu i telefonu řádky pokrývají celou šířku, bez přetékání a bez chyby JavaScriptu, při omezeném pohybu pás stojí. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 07 a pás s claimem čekají na schválení.

### 2026-11-08 — Standardy nahradil pás s claimem (Claude Code)

- **Pokyn uživatele** — sekci Standardy smazat, její nadpis využít jako paralaxní designový prvek landing page.
- **Změna** — sekce Standardy s certifikacemi a systémy je pryč včetně komponenty `trust.tsx`, z dat zmizely její texty a zůstal jen údaj pro mapu poboček. Mezi částmi 06 a 07 je nový pás s claimem „Připraveni na nároky velkých výrobců“ na dva řádky Michromou přes celou šířku. První řádek je plný, druhý jen modře obrysový a při scrollu se posouvají proti sobě. Čtečky dostanou claim jednou jako skrytý text. Při omezeném pohybu řádky stojí. Certifikace a systémy teď na landing page nejsou.
- **Soubory a odkazy** — `web/components/sections/claim-band.tsx`, `web/app/page.tsx`, `web/app/globals.css`, `web/content/site.ts`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/claim/README.md).
- **Ověření** — lint, typecheck a build prošly. Pohyb změřen ve třech polohách na desktopu i telefonu, bez přetékání a bez chyby JavaScriptu, při omezeném pohybu pás stojí. Zvětšeno řádkování, aby se čárka nad Ý nedotýkala prvního řádku. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 07 a pás s claimem čekají na schválení.

### 2026-11-08 — Část 07 Blog a newsletter (Claude Code)

- **Pokyn uživatele** — postavit blog a newsletter podle navrženého designu ve stylu shadcn a React Bits.
- **Změna** — naznačení části 07 nahradila nová sekce. Úvod z varianty A dokumentu je na středu, pod ním tři články ve sdílené mřížce se spotlightem podle React Bits: Firemní AI a RAG, Automatizace u EA Partner a Práce s CAD daty napříč týmy s popisky z dokumentu. Každý článek má fotku, štítek typu s barevným čtverečkem, datum, název, popis a Číst článek. Na telefonu jsou články kompaktní řádky s náhledem. Pod nimi je tlačítko Prohlédnout odborné články a světlý panel newsletteru s technickou mřížkou, texty z varianty A a formulářem podle vzoru shadcn: popisek, pole, tlačítko, poznámka a odkaz na zásady osobních údajů. Formulář ověří adresu, chybu ohlásí čtečkám a po odeslání ukáže potvrzení s poznámkou, že jde o ukázku. Třetí článek vede na stránku SpinFire, protože samostatný článek k tématu web nemá.
- **Soubory a odkazy** — `web/components/sections/blog.tsx`, `web/components/sections/newsletter-form.tsx`, `web/content/site.ts`, `web/app/page.tsx`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/blog/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, ověřen chybový i úspěšný stav formuláře. Opraveno zmáčknuté pole na telefonu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 07 čeká na schválení. Před spuštěním vybrat a napojit službu pro newsletter, případně s potvrzovacím e-mailem, a doplnit článek k tématu Práce s CAD daty.

### 2026-11-08 — Schválená část 06 (Claude Code)

- **Pokyn uživatele** — pokračovat, další je blog a newsletter.
- **Změna** — průběh spolupráce v části 06 je schválený. Blok Standardy zůstává beze změny a rozhodnutí o něm otevřené.
- **Soubory a odkazy** — `beko-redesign-scope/docs/LANDING-PARTS.md`, [QA spolupráce](web/docs/qa/phase-1/process/README.md).
- **Ověření** — beze změny kódu.
- **Předání** — část 07 čeká na návrh designu.

### 2026-11-08 — Část 06 podle varianty Partnerský příběh (Claude Code)

- **Pokyn uživatele** — část 05 je v pořádku, upravit popis spolupráce podle nových textů ve variantě A Partnerský příběh.
- **Změna** — část 05 je schválená. V části 06 je nadpis „Nejdřív poznáme vaše zadání“, úvod z varianty A a čtyři kroky z dokumentu: Porozumění zadání, Návrh postupu, Průběžná práce a ověřování, Předání a další využití. Kroky jsou bez čísel, pořadí ukazuje postupující modrá linka. Úvod je na středu a pod kroky je tlačítko Probrat možnosti spolupráce na kontakt, stejně jako u schválených částí. Odpadly výstupy kroků, nabídka modelů spolupráce a modrý pruh s odkazem na případové studie, které teď ukazuje část 05. Sekce nemá vlastní horní odstup. V carouselu části 05 se na telefonech skrývají šipky, aby se tlačítko a pauza vešly na jeden řádek, posun prstem a automatický posun zůstávají.
- **Soubory a odkazy** — `web/components/sections/process.tsx`, `web/components/sections/project-carousel.tsx`, `web/content/site.ts`, `beko-redesign-scope/docs/LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/process/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, automatický posun carouselu po změně ověřen znovu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 06 čeká na schválení. Text je podle dokumentu návrh obchodní komunikace, který musí potvrdit BEKO. Blok Standardy s certifikacemi a systémy se zatím nezměnil.

### 2026-11-08 — Automatický posun carouselu projektů (Claude Code)

- **Pokyn uživatele** — nastavit u carouselu automatický posun, aby na stránce byla dynamika.
- **Změna** — carousel se posouvá o jednu kartu každých 4,5 s a na konci se vrátí na začátek. Posun běží jen tehdy, když je carousel aspoň ze 40 % vidět, a stojí, když na něm je myš, prst nebo fokus klávesnice nebo když je karta prohlížeče skrytá. Mezi šipkami je nové tlačítko pauzy a přehrání pro přístupnost pohybujícího se obsahu. Při omezeném pohybu v systému se carousel sám neposouvá a tlačítko pauzy je skryté přes CSS, aby se shodovalo vykreslení na serveru a v prohlížeči.
- **Soubory a odkazy** — `web/components/sections/project-carousel.tsx`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/projects/README.md).
- **Ověření** — lint, typecheck a build prošly. Na 1512 a 320 px ověřen posun, zastavení při najetí myší a po pauze, při omezeném pohybu carousel stojí. Návrat na začátek ověřen v prohlížeči. Opravena chyba hydratace Reactu, kterou test odhalil při omezeném pohybu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 05 čeká na schválení.

### 2026-11-08 — Carousel projektů místo dlaždic (Claude Code)

- **Pokyn uživatele** — odstranit animaci kostičkování a místo podobných boxů udělat designový carousel podle reference, aby se zkrátilo i scrollování na mobilu.
- **Změna** — mozaikové odkrývání a mřížka dlaždic jsou pryč. Pod středovým úvodem je vodorovný carousel šesti vysokých karet 3 : 4 s fotkou přes celou plochu, tmavým přechodem dole, názvem a popisem v bílé a bílým štítkem typu projektu s barevným čtverečkem nahoře. První karta začíná na hraně obsahu, karty přesahují k pravému okraji okna, posun se zachytává na kartách. Pod carouselem je vlevo tlačítko Prohlédnout projekty a vpravo hranaté šipky, které posouvají o jednu kartu a na krajích se vypnou. Karty se při objevení jemně vysunou, po najetí se fotka přiblíží. Vráceny jsou E-BETA a C-GATE, pořadí střídá typy projektů.
- **Soubory a odkazy** — `web/components/sections/project-carousel.tsx`, `web/components/sections/projects-teaser.tsx`, `web/content/site.ts`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/projects/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání stránky a bez chyby JavaScriptu, šipky ověřeny skutečným klikem. Sekce na telefonu je o polovinu kratší. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních, hlavně posun prstem.
- **Předání** — část 05 čeká na schválení.

### 2026-11-08 — Část 05 sladěná se schválenými částmi (Claude Code)

- **Pokyn uživatele** — doladit část 05 ke schváleným částem podle návrhu: bílé pozadí, středový úvod, obsah z dokumentu, štítky v barvách BEKO a klidnější popisky.
- **Změna** — sekce je na bílém pozadí bez vlastního horního odstupu, nadpis „Naše práce v praxi“ a text z varianty B dokumentu jsou na středu jako v části 04 a pod dlaždicemi je tlačítko Prohlédnout projekty. Rozložení dlaždic a mozaikové odkrývání zůstaly. E-BOAT a E-CITY zůstaly, E-BETA a C-GATE nahradily dlaždice BE-Play a SpinFire (software) a EA Partner (zákaznický příběh). Skleněné popisky přes fotky nahradil bílý popisek pod fotkou s linkou, štítkem typu projektu s barevným čtverečkem, názvem a popisem na nejvýš dva řádky. Řádek se softwarem z dat služeb je pryč, software je teď v této části.
- **Incident** — při úpravě dat skript omylem zapsal jen začátek `web/content/site.ts` a zbytek souboru se ztratil. Soubor není v gitu, obnoven byl celý ze zdrojové mapy posledního produkčního buildu v `web/.next`, který odpovídal stavu těsně před chybou. Obnovu ověřil typecheck a kontrola obsahu, úpravy dat pak proběhly znovu po jednotlivých řádcích. Kopie před úpravou části 05 je v pracovní složce relace.
- **Soubory a odkazy** — `web/components/sections/projects-teaser.tsx`, `web/content/site.ts`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/projects/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, všechny obrázky načtené. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 05 čeká na schválení. Doporučeno začít projekt verzovat v gitu, aby šlo práci snadno obnovit.

### 2026-11-08 — Schválená část 04 (Claude Code)

- **Pokyn uživatele** — část 04 je v pořádku, pokračovat na další část.
- **Změna** — část 04 Služby je schválená. Další je část 05 Projekty a výsledky.
- **Soubory a odkazy** — `beko-redesign-scope/docs/LANDING-PARTS.md`, [QA služeb](web/docs/qa/phase-1/services/README.md).
- **Ověření** — beze změny kódu.
- **Předání** — část 05 čeká na návrh úprav.

### 2026-11-08 — Větší mezera mezi textem a čísly v části 03 (Claude Code)

- **Pokyn uživatele** — vrátit v části O nás větší odsazení, které tam bylo předtím, vypadá to lépe.
- **Změna** — mezera mezi textem a čísly je zpět na 96 px na desktopu a 56 px na tabletu a telefonu. Odstup od hero zůstává 68 px a 36 px.
- **Soubory a odkazy** — `web/components/sections/about.tsx`, [QA a snímky](web/docs/qa/phase-1/about/README.md).
- **Ověření** — lint, typecheck a build prošly. Odstupy změřeny na pěti velikostech, bez chyby JavaScriptu.
- **Předání** — část 03 je schválená, část 04 čeká na schválení.

### 2026-11-08 — Karty služeb ve stylu shadcn (Claude Code)

- **Pokyn uživatele** — odstranit pruh s certifikacemi a odvětvími i křížky v rozích, karty upravit víc podle stylu shadcn a React Bits v souladu se zbytkem webu, aby nepůsobily jako od AI.
- **Změna** — pruh i značky + jsou pryč, stejně jako barevné záře v rozích, plné barevné dlaždice, vysouvací linka a řádek Detail služby. Šest služeb je v jedné bílé mřížce se sdílenými linkami jako dřív u služeb. Každá buňka má ikonu v obrysovém čtverečku v barvě služby, šipku vpravo nahoře, název a popisek z menu. Po najetí se pod kurzorem rozsvítí spotlight v barvě služby podle vzoru React Bits, obrys ikony se obarví a šipka ztmavne. Spotlight bere barvu z proměnné `--spot`, výchozí modrá zůstává. Technická mřížka v pozadí zůstala. Na telefonu jsou buňky nižší. Z dat zmizely texty certifikací a odvětví pro tuto sekci.
- **Soubory a odkazy** — `web/components/sections/services.tsx`, `web/content/site.ts`, `web/app/globals.css`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/services/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, spotlight ověřen na dvou buňkách. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 04 čeká na schválení. Certifikace teď na landing page zůstávají jen v bloku Standardy v části 06.

### 2026-11-08 — Šest služeb z menu v barvách BEKO (Claude Code)

- **Pokyn uživatele** — udělat sekci v barvách BEKO, použít všechny služby z menu, víc propracovat karty a vzadu naznačit jemnou technickou mřížku.
- **Změna** — karty berou názvy, popisky a odkazy přímo z menu Služby: Engineering, Design, Konstrukce, IT služby, AI řešení a Vzdělávání. Každá má jednu barvu BEKO, plnou dlaždici s ikonou, jemnou barevnou záři v pravém horním rohu a spodní řádek Detail služby se šipkou. Po najetí se karta zvedne, nahoře se vysune barevná linka, záře zesílí a Detail služby se obarví. Za kartami je mřížka 28 px, která do stran mizí, a v rozích jsou technické značky +. Karty Odvětví a Certifikace a systémy nahradil úzký pruh pod kartami s certifikacemi TISAX, ISO 27001, ISO 9001 a sedmi odvětvími. Systémy v sekci už nejsou, zůstávají v bloku Standardy v části 06. Z dat zmizely nepoužívané texty služeb.
- **Soubory a odkazy** — `web/components/sections/services.tsx`, `web/content/site.ts`, `web/app/globals.css`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/services/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, hover ověřen na dvou kartách. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 04 čeká na schválení. Popisek Engineering z menu zní „Design a konstrukce“ a opakuje tak sousední karty.

### 2026-11-08 — Část 04 jako jednoduchá mřížka karet (Claude Code)

- **Pokyn uživatele** — technický výkres je příliš komplikovaný, udělat to jednoduše podle reference se šesti kartami služeb.
- **Změna** — výkres, vedení, mřížka i jejich styly jsou pryč. Pod nadpisem a textem na středu je šest karet ve třech sloupcích se světle modrým přechodem bez rámečku: Engineering, IT služby, AI řešení, Vzdělávání, Odvětví a Certifikace a systémy. Každá má malou bílou dlaždici s modrou ikonou, název a jeden až dva řádky textu. Prostřední sloupec má obsah nahoře, krajní dole, jako v referenci. Karty služeb se po najetí jemně zvednou, karty se postupně objevují při scrollu. Tlačítko Prohlédnout všechny služby je pod kartami.
- **Soubory a odkazy** — `web/components/sections/services.tsx`, `web/content/site.ts`, `web/app/globals.css`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/services/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 04 čeká na schválení. Certifikace a systémy jsou zatím i v bloku Standardy v části 06. Komponenty `service-visuals.tsx` a `spotlight-group.tsx` se na landing page nepoužívají.

### 2026-11-08 — Část 04 jako technický výkres (Claude Code)

- **Pokyn uživatele** — přehled byl málo propracovaný a měl moc textu, chyběla animace jako u předchozích čtyř schémat. Udělat technický výkres, který propojí všechny oblasti BEKO, inspirace propojeným diagramem.
- **Změna** — úvod je na středu. Pod ním je výkres na jemné modré rastrové mřížce: uprostřed tmavý uzel BEKO se čtyřmi čtverečky z loga, dýchající modrou září a rohovými značkami. Vlevo jsou certifikace TISAX, ISO 27001 a ISO 9001, vpravo systémy CATIA V5, 3DEXPERIENCE, Siemens NX, SolidWorks, Inventor a Teamcenter, obě strany vedou do uzlu přes sběrnici. Z uzlu vede vedení ke čtyřem kartám služeb s animovanými izometrickými schématy a jednořádkovým popisem. Po všech vedeních běží modré pulzy. Dole jsou štítky odvětví. Věta Nevíte, do které oblasti a delší popisy služeb jsou pryč. Pod 1024 px se vedení skrývá a vše jde pod sebe.
- **Soubory a odkazy** — `web/components/sections/services.tsx`, `web/content/site.ts`, `web/app/globals.css`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/services/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, změřeno napojení vedení na uzel a středy karet, animace se při omezeném pohybu vypínají. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 04 čeká na schválení. Certifikace a systémy jsou zatím i v bloku Standardy v části 06.

### 2026-11-08 — Část 04 jako přehled pro partnery (Claude Code)

- **Pokyn uživatele** — bento není nejlepší řešení a nesedí k částem 01 a 03, přidat certifikace a udělat sekci pro partnery, kde najdou všechno naráz.
- **Změna** — bento je pryč, sekce má bílé pozadí bez přechodu a bez karet. Vlevo je nadpis, text a tlačítko Prohlédnout všechny služby, na desktopu přilepené při scrollu. Vpravo jsou čtyři služby jako řádky s barevným čtverečkem, popisem a šipkou, u Engineeringu štítky Design a Konstrukce, název se po najetí obarví barvou služby. Pod službami je věta Nevíte, do které oblasti vaše zadání patří s odkazem Popsat, co řešíte. Dole jsou tři sloupce Odvětví, Certifikace (TISAX, ISO 27001, ISO 9001 s krátkým popisem) a Systémy, ve kterých pracujeme. Horní odstup sekce je nulový, mezeru k části 03 tvoří její spodní odstup. Ilustrace služeb se v sekci nepoužívají.
- **Soubory a odkazy** — `web/components/sections/services.tsx`, `web/content/site.ts`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/services/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 04 čeká na schválení. Certifikace a systémy jsou zatím i v bloku Standardy v části 06, duplicitu vyřešit při práci na ní. Komponenty `service-visuals.tsx` a `spotlight-group.tsx` se na landing page teď nepoužívají.

### 2026-11-08 — Část 04 Služby jako bento (Claude Code)

- **Pokyn uživatele** — nový úvod „Co potřebuje váš projekt právě teď?“ s CTA Prohlédnout všechny služby, čtyři hlavní služby a všechny oblasti, ve kterých BEKO působí, nejlépe jako bento.
- **Změna** — sekce je bento na dvanácti sloupcích. Nahoře je úvod s nadpisem, textem a tlačítkem Prohlédnout všechny služby vedle velké karty Engineering s popisky Design a Konstrukce. Pod nimi jsou karty IT služby, AI řešení a Vzdělávání s izometrickými ilustracemi. Dole je karta Odvětví, ve kterých pracujeme se sedmi štítky a modrá karta Nevíte, do které oblasti vaše zadání patří s odkazem na kontakt. Texty služeb, popisky Design a Konstrukce, věta k odvětvím a záchytná věta jsou z dokumentu s textacemi, varianta krátkých textů. Řádek se softwarem SpinFire a BE-Play je ze sekce pryč, dokument ho řadí do části 05. `SpotlightGroup` umí nově vykreslit i jiný prvek než seznam.
- **Soubory a odkazy** — `web/components/sections/services.tsx`, `web/components/sections/spotlight-group.tsx`, `web/content/site.ts`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/services/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 04 čeká na schválení. Software doplnit při práci na části 05.

### 2026-11-08 — Menší mezera mezi textem a čísly (Claude Code)

- **Pokyn uživatele** — mezera mezi textem a čísly byla větší než mezi hero a textem, zmenšit ji.
- **Změna** — mezera mezi textem a čísly je 48 px na desktopu a 32 px na tabletu a telefonu místo 96 a 56 px. Je tak vždy menší než odstup od hero, který zůstává 68 px na desktopu, 48 px na tabletu a 36 px na telefonu.
- **Soubory a odkazy** — `web/components/sections/about.tsx`, [QA a snímky](web/docs/qa/phase-1/about/README.md).
- **Ověření** — lint, typecheck a build prošly. Odstupy změřeny na pěti velikostech, bez přetékání a bez chyby JavaScriptu.
- **Předání** — část 03 je schválená, další je část 04 Služby.

### 2026-11-08 — Finální část 03 a schválení (Claude Code)

- **Pokyn uživatele** — odstranit claim BEKO: NO LIMITS, ponechat jen text a čísla, zrevidovat rozložení vůči hero a pokračovat dál.
- **Změna** — claim na pozadí je pryč z kódu, dat i stylů. Revize vůči hero: text i čísla začínají na stejné levé hraně jako nadpis, podnadpis a loga v hero na všech šířkách, odstup od hero je 68 px na desktopu a 36 px na telefonu. Text na telefonu zmenšen z 26 na 22 px, aby nesoupeřil s nadpisem hero stejné velikosti. Na telefonu a tabletu zůstává hero na středu a část 03 vlevo kvůli čitelnosti delšího textu. Část 03 je schválená.
- **Soubory a odkazy** — `web/components/sections/about.tsx`, `web/content/site.ts`, `web/app/globals.css`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/about/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, změřeny levé hrany a odstupy vůči hero. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — další je část 04 Služby. Čísla 850+, 150+ a 130+ musí potvrdit BEKO, video `about-video.tsx` čeká na nové místo.

### 2026-11-08 — Text o historii a claim na pozadí části 03 (Claude Code)

- **Pokyn uživatele** — vrátit text o historii BEKO, který sedí k číslům, a claim NO LIMITS dát na pozadí větším písmem se slabým kontrastem.
- **Změna** — velký text je opět „Skupina BEKO vznikla v roce 1966…“, rok 1991 v něm odpovídá číslu 35+ let na českém trhu. Malý popisek se čtverečky je pryč, claim BEKO: NO LIMITS je za obsahem jako nápis Michromou na dva řádky přes šířku obsahu v barvě textu s průhledností 4,5 %, svisle na středu sekce a skrytý pro odečítače. Text „Nový výrobek nevzniká…“ z dat zmizel.
- **Soubory a odkazy** — `web/components/sections/about.tsx`, `web/content/site.ts`, `web/app/globals.css`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/about/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 03 čeká na schválení.

### 2026-11-08 — Část 03 jako text a řada čísel (Claude Code)

- **Pokyn uživatele** — vrátit sekci do rozložení podle nové reference, bez CTA a bez nadpisu.
- **Změna** — nahoře je malý claim BEKO: NO LIMITS se čtyřmi čtverečky z loga, pod ním velký text „Nový výrobek nevzniká…“ s postupným dobarvením a řada čtyř barevných čísel s popisky malými písmeny. Na telefonu jsou čísla ve dvou sloupcích bez linek. Nadpis „Rozumíme práci…“, tlačítko Poznat BEKO a linky kolem čísel jsou pryč, z dat zmizely nepoužité texty nadpisu a tlačítka. Menší odstup od hero zůstal.
- **Soubory a odkazy** — `web/components/sections/about.tsx`, `web/content/site.ts`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/about/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 03 čeká na schválení.

### 2026-11-08 — Propracovanější část 03 s claimem (Claude Code)

- **Pokyn uživatele** — sekce je moc daleko od hero, mřížka čísel působí nakřivo, čísla dát jinak než do čtyř políček, sekci víc propracovat a někde použít claim BEKO: NO LIMITS.
- **Změna** — horní odstup sekce je poloviční, od hero ke claimu je 68 px na desktopu a 36 px na telefonu. Nahoře je claim BEKO: NO LIMITS se čtyřmi čtverečky v barvách loga a tenkou linkou do konce řádku. Pod ním je vlevo nadpis a vpravo text s tlačítkem Poznat BEKO. Čísla jsou dole v pruhu přes celou šířku se svislými linkami a horní linkou, první číslo zarovnané s okrajem textu. Na telefonu jsou čísla řádky s popiskem vlevo a číslem vpravo.
- **Soubory a odkazy** — `web/components/sections/about.tsx`, `web/content/site.ts`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/about/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, změřen odstup od hero. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 03 čeká na schválení.

### 2026-11-08 — Kompaktnější rozložení části 03 (Claude Code)

- **Pokyn uživatele** — rozložení podle reference má zbytečně mnoho volného místa, navrhnout jiné řešení.
- **Změna** — místo tří oddělených bloků je jedna kompozice. Vlevo na sedmi z dvanácti sloupců je nadpis, pod ním hned text zarovnaný vlevo a tlačítko Poznat BEKO. Vpravo je mřížka čísel 2 × 2 s tenkými dělicími linkami, čísla a popisky zarovnané vlevo. Na mobilu je pořadí nadpis, text, čísla, tlačítko, vše vlevo. Texty, barvy a reveal zůstaly.
- **Soubory a odkazy** — `web/components/sections/about.tsx`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/about/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 03 čeká na schválení.

### 2026-11-08 — Nové rozložení a text části 03 (Claude Code)

- **Pokyn uživatele** — upravit část 03 podle reference s nadpisem vlevo, čísly vpravo a textem pod nimi, použít nový text a CTA Poznat BEKO, místo 60 let skupiny BEKO uvést 35+ let na českém trhu.
- **Změna** — nadpis „Rozumíme práci, která stojí za výsledkem“ je H2 ve stylu ostatních částí, od slova „která“ šedý. Vpravo jsou čísla ve dvou řadách s popisky verzálkami a barvami z předchozího zápisu. Pod nimi je nový odstavec s postupným dobarvením při scrollu a tlačítko Poznat BEKO na stránku O nás stávajícího webu. Předchozí text o historii skupiny a odkaz O společnosti jsou pryč. `SplitText` umí nově ztlumit konec nadpisu přes `muteAfter`.
- **Soubory a odkazy** — `web/components/sections/about.tsx`, `web/components/motion/split-text.tsx`, `web/content/site.ts`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/about/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, čárky v nadpisu se nepřekrývají s řádkem nad nimi. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 03 čeká na schválení. Údaj 35+ let vychází z působení v Česku od roku 1991, čísla 850+, 150+ a 130+ musí dál potvrdit BEKO.

### 2026-11-08 — Část 03 bez videa, barevná čísla (Claude Code)

- **Pokyn uživatele** — video z představení firmy odebrat a použít později jinde, ponechat text a čísla, čísla v různých barvách BEKO. Přiložena reference se středovým textem a řadou čísel bez rámečků.
- **Změna** — video je pryč, komponenta `about-video.tsx`, data v `about.video` a povolení náhledů z `i.ytimg.com` zůstávají pro další použití. Text i čísla jsou podle reference na středu a čísla nemají rámečky tabulky. Barvy čísel jsou modrá, červená, žlutá a limetková v pořadí jako v logu, žlutá a limetková v tmavším odstínu kvůli čitelnosti. Tokeny tmavších odstínů se přejmenovaly z `--nav-*` na `--sky-text`, `--yellow-text` a `--lime-text`, protože je teď používá i hlavička. Velikost a reveal textu zůstaly.
- **Soubory a odkazy** — `web/components/sections/about.tsx`, `web/components/site/site-header.tsx`, `web/app/globals.css`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/about/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, barvy menu v hlavičce po přejmenování tokenů beze změny. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 03 čeká na schválení. Pro video zatím není určené nové místo.

### 2026-11-07 — Video v části 03 (Claude Code)

- **Pokyn uživatele** — zakomponovat video ze stránky O nás obvyklým způsobem, řešení nechal na Claude Code.
- **Změna** — mezi text a čísla přibyl pás s videem BEKO z YouTube (`Rs4wycyFJQ8`) v režimu bez cookies, na desktopu ve výřezu 21:9 a pod 1024 px v 16:9, přímo napojený na tabulku čísel. Při scrollu se zvětší z 94 % na plnou šířku a běží bez zvuku ve smyčce mezi 0. a 24. sekundou, aby nezačínalo koncové logo. Náhled zakrývá ikony YouTube na začátku a návrat ve smyčce. Tlačítko Přehrát video · 0:28 spustí celé video s ovládáním ve formátu 16:9. Texty a čísla se nezměnily.
- **Soubory a odkazy** — `web/components/sections/about-video.tsx`, `web/components/sections/about.tsx`, `web/content/site.ts`, `web/next.config.ts`, `beko-redesign-scope/docs/LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/about/README.md).
- **Ověření** — lint, typecheck a build prošly. Pět velikostí bez přetékání a bez chyby JavaScriptu, smyčka sledována 40 sekund, skutečný klik video spustí, při omezeném pohybu se přehrávač sám nenačte. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních, hlavně automatické spuštění na iPhonu, a zvuk videa.
- **Předání** — část 03 čeká na schválení. Řešení přes YouTube je určené pro demo a náhled se načítá přes `i.ytimg.com`. Před ostrým provozem vyžádat od BEKO původní soubor a nahrát ho přímo na web, přehrávač YouTube se teď načítá bez souhlasu návštěvníka. BEKO musí potvrdit aktuálnost videa z roku 2019 a souhlas lidí v záběrech.

### 2026-11-07 — Schválené hero a začátek další části (Claude Code)

- **Pokyn uživatele** — hero je v pořádku, přejít na druhou část a spustit web.
- **Změna** — části 01 a 02 jsou schválené. Část 02 s logy je součástí hero, další v pořadí je proto část 03 Představení firmy a čísla. Do `.claude/launch.json` přidána konfigurace `beko-dev` pro vývojový server na portu 3000.
- **Soubory a odkazy** — `.claude/launch.json`, `beko-redesign-scope/docs/LANDING-PARTS.md`.
- **Ověření** — vývojový server běží na `http://localhost:3000/` a vrací stránku s aktuálním hero.
- **Předání** — část 03 čeká na zadání uživatele. Vztahy s klienty a práva k logům musí před zveřejněním potvrdit BEKO.

### 2026-11-06 — Přepínač režimu v mobilním menu a tag jazyka (Claude Code)

- **Pokyn uživatele** — na mobilu schovat přepínač režimu do hamburger menu nahoru doprava místo nadpisu Menu a přidat malý tag CS jako znázornění volby jazyka, i na desktop na obvyklé místo.
- **Změna** — v záhlaví otevřeného mobilního menu je vlevo tag CS a vpravo přepínač a křížek. Viditelný nadpis Menu je pryč, pro odečítače zůstává. V mobilní hlavičce zbyl jen hamburger. Mobilní menu nově sleduje tmavý režim, jinak by přepínač uvnitř světlého panelu neměl viditelný efekt. Na desktopu je tag vlevo od přepínače režimu. Shadcn nemá komponentu pro jazyk a toto umístění je obvyklé. Tag není klikací, protože web má zatím jediný jazyk.
- **Soubory a odkazy** — `web/components/site/language-tag.tsx`, `web/components/site/site-header.tsx`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Přepnutí režimu uvnitř panelu v obou směrech nechá menu otevřené a panel změní barvu. Hlavička bez přetékání na šířkách 1100, 1180, 1280 a 1512 px, na 1100 px zbývá mezi menu a tagem 40 px. Devět velikostí hero bez přetékání a bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení. Přidání druhého jazyka vyžaduje z tagu udělat výběr.

### 2026-11-06 — Hamburger bez popisku a úpravy menu (Claude Code)

- **Pokyn uživatele** — u hamburgeru nepsat Menu a nechat jen tři linky, po otevření mobilního menu mít rozbalené Služby, z podmenu odstranit větu o stávajícím webu.
- **Změna** — tlačítko má jen ikonu bez rámečku a textu, pro odečítače zůstává popisek „Otevřít menu“. Kategorie Služby je při každém otevření mobilního menu rozbalená. Věta je pryč z desktopového podmenu i ze skrytého popisu mobilního menu a odkaz Přehled v podmenu je srovnaný s ostatními položkami. Skrytá poznámka pro odečítače na odkazech Kariéra a Spolupráce zůstává, stejně jako nadpis Menu v otevřeném panelu.
- **Soubory a odkazy** — `web/components/site/site-header.tsx`, [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. V obou režimech ověřeno tlačítko, rozbalené Služby po prvním i opakovaném otevření a podmenu bez věty. Devět velikostí hero bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení.

### 2026-11-06 — Tmavší barvy menu ve světlém režimu (Claude Code)

- **Pokyn uživatele** — schválené ztmavení žluté, limetkové a světle modré ve světlém režimu.
- **Změna** — hover položek Software, Kariéra a O nás má ve světlém režimu odstíny `#0f78c8`, `#997700` a `#55800f`. Tmavý režim dál používá původní barvy BEKO, modrá a červená se nemění.
- **Soubory a odkazy** — `web/app/globals.css`, `web/components/site/site-header.tsx`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Hover všech pěti položek ověřen v obou režimech bez chyby JavaScriptu. Kontrast na světlé hlavičce: světle modrá 3,9 : 1 místo 1,9 : 1, žlutá 3,6 : 1 místo 1,2 : 1, limetková 4,0 : 1 místo 1,7 : 1. Hranici 4,5 : 1 pro běžný text nesplňují, stejně jako červená s 3,5 : 1. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení.

### 2026-11-06 — Barvy v menu jen na textu a šipce (Claude Code)

- **Pokyn uživatele** — na hover měnit jen barvu textu a šipky, bez výplně.
- **Změna** — výplň položek je pryč. Text a šipka mají po najetí a při otevřeném panelu barvu BEKO: Služby modrá, Software světle modrá, Kariéra žlutá, Spolupráce červená, O nás limetková. Odstraněn i světlý podklad, který po najetí zobrazovaly odkazy Kariéra a Spolupráce.
- **Soubory a odkazy** — `web/components/site/site-header.tsx`, `web/app/globals.css`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Hover všech pěti položek ověřen v obou režimech bez chyby JavaScriptu. Kontrast na světlé hlavičce: modrá 4,6 : 1, červená 3,5 : 1, světle modrá 1,9 : 1, limetková 1,7 : 1, žlutá 1,2 : 1. Na tmavé hlavičce: modrá 3,5 : 1, červená 4,6 : 1, ostatní přes 8 : 1. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení.

### 2026-11-06 — Tenčí rámeček tlačítka a barvy v menu (Claude Code)

- **Pokyn uživatele** — zkusit tenší rámeček u druhého tlačítka a v menu dát na hover různé barvy BEKO u jednotlivých pěti kategorií.
- **Změna** — druhé tlačítko v hero má rámeček 0,5 px. Položka menu se po najetí vyplní celou výškou hlavičky, barva vyjede od spodní hrany a u položek s rozbalovacím panelem zůstává, dokud je panel otevřený. Služby jsou modré, Software světle modrý, Kariéra žlutá, Spolupráce červená a O nás limetkové. Text je podle barvy bílý nebo tmavý v obou režimech. Mobilní menu se nemění.
- **Soubory a odkazy** — `web/components/site/site-header.tsx`, `web/components/sections/hero.tsx`, `web/app/globals.css`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Hover všech pěti položek ověřen v obou režimech, rámeček 0,5 px změřen v prohlížeči s dvojnásobnou hustotou pixelů. Devět velikostí bez přetékání a bez chyby JavaScriptu. Bílý text na červené má kontrast 4,1 : 1, tedy pod hranicí 4,5 : 1 pro běžný text, tmavý text by měl 4,3 : 1. Na displejích se standardní hustotou se rámeček vykreslí jako 1 px. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení.

### 2026-11-06 — Vrácená tlačítka v hero (Claude Code)

- **Pokyn uživatele** — vrátit tlačítka zpět, rozestupy nechat.
- **Změna** — tlačítka v hero mají opět předchozí podobu a varianty `glow` a `glass` jsou z kódu odstraněné. Prostornější nadpis a odstupy z předchozího zápisu zůstávají, včetně mezery 12 px mezi tlačítky.
- **Soubory a odkazy** — `web/app/globals.css`, `web/components/ui/button.tsx`, `web/components/sections/hero.tsx`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Devět velikostí od 320 px v obou režimech bez přetékání a bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení.

### 2026-11-06 — Prostornější nadpis a nová tlačítka v hero (Claude Code)

- **Pokyn uživatele** — nadpis potřebuje víc prostoru, ať víc dýchá, a tlačítka mají být propracovanější a modernější.
- **Změna** — nadpis má řádkování 1,2 místo 1,1 a prostrkání −0,025 em místo −0,045 em. Velikost na desktopu zůstala, na telefonu se kvůli prostrkání zmenšila přibližně na 26 px, aby držela dva řádky. Větší jsou odstupy od hlavičky a mezi nadpisem, podnadpisem a tlačítky. Horní odstup roste s výškou okna, nízké okno notebooku má odstupy menší, aby tlačítka nesedla na rozmazané auto. Tlačítka mají nové varianty: `glow` s modrým přechodem, horním světlem, barevným stínem a přeběhem lesku po najetí, a `glass` s matným průhledným panelem pro světlý i tmavý režim. Hranaté rohy zůstaly. Tlačítko Kontakt v hlavičce a tlačítka v ostatních částech se nezměnila.
- **Soubory a odkazy** — `web/app/globals.css`, `web/components/ui/button.tsx`, `web/components/sections/hero.tsx`, `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Devět velikostí od 320 px v obou režimech s nadpisem na dvou řádcích, bez přetékání a bez chyby JavaScriptu. Styl po najetí ověřen na obou tlačítkách v obou režimech, přeběh lesku jen z kódu, protože snímky zachycují koncový stav. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení.

### 2026-11-06 — Světlejší denní fotka a mobilní hero bez prázdného místa (Claude Code)

- **Pokyn uživatele** — lehce zesvětlit `LightDesktop`, aby byl podnadpis čitelnější, a na mobilu odstranit volný prostor nad autem.
- **Změna** — `light-desktop.webp` je nově vygenerovaná z nezměněného `LightDesktop.png`: gamma 0,8 v horních 50 % výšky, plynulý přechod na 0,97 mezi 50 a 66 % výšky, šířka 3200 px, WebP kvalita 80. Nejnižší kontrast podnadpisu vzrostl z 6,3 : 1 na 7,8 : 1. Na výšku se výška hero řídí obsahem místo výšky displeje, auto je tak hned pod tlačítky a na vyšších displejích je pod hero vidět začátek další části. Na šířku zůstává hero přes celou výšku displeje.
- **Soubory a odkazy** — `web/public/images/hero/light-desktop.webp`, `web/components/sections/hero.tsx`, [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Devět velikostí od 320 px v obou režimech bez přetékání a bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních, skutečná výška displeje v mobilním prohlížeči se proto může lišit.
- **Předání** — části 01 a 02 čekají na schválení.

### 2026-11-06 — Odstraněný badge a dvouřádkový nadpis na mobilu (Claude Code)

- **Pokyn uživatele** — odstranit pill badge a nadpis na mobilu zmenšit tak, aby byl na dva řádky.
- **Změna** — badge je pryč a horní odstup na desktopu se vrátil na původní hodnotu. Pod 1024 px má nadpis velikost podle šířky displeje a je vždy na dvou řádcích, přibližně 27 px na telefonu a 53 px na tabletu. Desktop zůstává do 72 px. Telefon na šířku si nechává menší horní odstup a širší podnadpis, díky tomu už tlačítka nezasahují do auta.
- **Soubory a odkazy** — `web/content/site.ts`, `web/components/sections/hero.tsx`, `web/app/globals.css`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Devět velikostí od 320 px v obou režimech s nadpisem na dvou řádcích, bez přetékání a bez chyby JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení.

### 2026-11-06 — Nadpis Engineering bez kompromisů a pill badge (Claude Code)

- **Pokyn uživatele** — hlavní nadpis „Engineering bez kompromisů.“ a nad ním malý pill badge „BEKO: NO LIMITS“ s jemně průhledným pozadím, tenkým borderem, plným zaoblením a decentním modrým akcentem.
- **Změna** — badge je jediný plně zaoblený prvek na webu, výjimka z hranatých rohů je záměrná. Tečka a border jsou ve světlém režimu modré, v tmavém světle modré. Desktopová velikost nadpisu zůstala. Delší slova vyžadovala menší nadpis na užších displejích: telefon přibližně 35 px na třech řádcích, tablet 53 px na dvou. Horní odstup je na desktopu menší o 20 px, aby tlačítka nezasáhla do auta, a telefon na šířku má širší podnadpis. Titulek stránky zůstává beze změny.
- **Soubory a odkazy** — `web/content/site.ts`, `web/components/sections/hero.tsx`, `web/app/globals.css`, `beko-redesign-scope/docs/DESIGN.md`, `LANDING-PARTS.md`, [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Devět velikostí od 320 px v obou režimech bez přetékání a žádná chyba JavaScriptu. Na telefonu na šířku se spodní hrana tlačítek dotýká střechy auta, stejně jako před touto změnou. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení.

### 2026-11-06 — Menší prvky hero na desktopu (Claude Code)

- **Pokyn uživatele** — prvky hero na 14" Macu působí zbytečně velké, zmenšit o 10–15 %.
- **Změna** — od šířky 1024 px je nadpis menší přibližně o 14 %, nejvýše 72 px. Podnadpis má 16 px místo 18 px, tlačítka výšku 42 px místo 48 px a písmo 14 px. Nadpis nad logy má 13 px, loga jsou menší o 14 %. Úměrně se zmenšily i odstupy. Mobil, tablet a tlačítka v ostatních částech zůstávají beze změny.
- **Soubory a odkazy** — `web/app/globals.css`, `web/components/sections/hero.tsx`, `client-logos.tsx`, `web/components/ui/button.tsx` (volitelná třída pro `ButtonArrow`), `beko-redesign-scope/docs/DESIGN.md`, [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Osm velikostí včetně 1512 × 830 v obou režimech bez přetékání, žádná chyba JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení.

### 2026-11-06 — Nadpis BEKO: NO LIMITS a nové mobilní fotky (Claude Code)

- **Pokyn uživatele** — nadpis „BEKO: NO LIMITS“ na dva řádky a nasazení upravených mobilních fotek s prostorem pod autem pro carousel.
- **Změna** — nadpis větší, do 84 px na desktopu a přibližně 48 px na telefonu, zlom za dvojtečkou. Použity `LightMobile.png` a `DarkMobile.png` z kořene projektu. Zrušen posun fotky a doplňková barva vody z dřívější úpravy, protože fotky už místo pro loga mají. Podnadpis a tlačítka beze změny. Upraven i titulek stránky.
- **Soubory a odkazy** — `web/public/images/hero/light-mobile.webp`, `dark-mobile.webp`, `web/content/site.ts`, `web/components/sections/hero.tsx`, `web/components/motion/split-text.tsx`, `web/app/globals.css`, `web/app/layout.tsx`. [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Sedm velikostí v obou režimech bez přetékání, žádná chyba JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení. Denní mobilní fotka má šířku 1086 px, noční 2160 px.

### 2026-11-06 — Mobilní obrazy s prostorem pro carousel (Codex)

- **Zadání** — u denního i nočního obrázku posunout auto a hory výše, aby pod autem byl prostor pro carousel dodavatelů.
- **Výstupy** — `output/images/original-electric-concept-mobile-day-v2-carousel.png` a `original-electric-concept-mobile-night-v2-carousel.png`, oba 2160 × 2880 px; stejnojmenné WebP mají šířku 1080 px. Původní obrazy zachovány, kód webu beze změny.
- **Prompt a metoda** — vestavěný imagegen posunul celou scénu s auty a horami výše přibližně o 15–18 % výšky, doplnil klidnou mokrou plochu dole a zachoval oblohu nahoře. Noční obraz odvozen z nové denní kompozice s původní noční paletou. Exporty zvětšeny pomocí Sharp.
- **Ověření** — vizuálně zkontrolovány obě kompozice, celá auta a prostor pod nimi; ověřeny rozměry PNG. Na webu zatím neověřováno ani nasazeno.

### 2026-11-06 — Nový nadpis hero a středové mobilní rozložení (Claude Code)

- **Pokyn uživatele** — nadpis „Engineering pro svět, který se mění.“, nový podnadpis a na mobilu středové rozložení ve stylu SaaS landing page.
- **Změna** — text a logo pás jsou pod 1024 px na středu. Na telefonu jsou tlačítka přes celou šířku, na tabletu na výšku vedle sebe. Na desktopu zůstává zarovnání vlevo a nadpis je větší, do 64 px. Telefon na šířku má nadpis na dva řádky, aby text nezasahoval do auta. Upraven i titulek stránky.
- **Soubory a odkazy** — `web/content/site.ts`, `web/components/sections/hero.tsx`, `client-logos.tsx`, `web/components/motion/split-text.tsx`, `web/app/globals.css`, `web/app/layout.tsx`. [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Sedm velikostí včetně telefonu na šířku v obou režimech bez přetékání, žádná chyba JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — části 01 a 02 čekají na schválení.

### 2026-11-06 — Část 02 přesunutá do hero (Claude Code)

- **Pokyn uživatele** — logo sekci přesunout do hero vlevo dolů pod auto s nadpisem „Spolupracujeme s lídry v oboru“. Carousel ne přes celou šířku, s fadeoutem, zastavením po najetí a pomalejší, loga bílá ve formátu SVG, přibližně 10 větších firem a automobilek.
- **Změna** — loga BMW, Volkswagen, Audi, Porsche, Škoda, Ford, GRAMMER, MAHLE, Philips a Dassault Systèmes ve `web/public/images/logos/`. Jedna řada do šířky 600 px, rychlost přibližně 19 px/s. Na výšku je fotka zvednutá o 2,5 rem, aby se logo blok nepřekrýval s autem. Odstraněn původní samostatný pruh `proof-marquee.tsx`.
- **Soubory a odkazy** — `web/components/sections/client-logos.tsx`, `hero.tsx`, `hero-background.tsx`, `web/app/page.tsx`, `web/app/globals.css`, `web/content/site.ts`, [zdroje log](web/public/images/logos/SOURCES.md). [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Šest velikostí v obou režimech bez přetékání, všech 20 obrázků včetně kopie načtených, pauza a obnovení po najetí, omezený pohyb s ručním posunem. SVG zkontrolovaná na skripty a externí odkazy. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — přímý vztah s OEM značkami není veřejně doložený a Ford pochází jen z textu o BE-Play. Vztahy a práva k logům musí před zveřejněním potvrdit BEKO.

### 2026-11-06 — Nový nadpis a text hero (Claude Code)

- **Pokyn uživatele** — nadpis „Rozvíjíme produkty i způsob, jak je vyvíjíte“ na dva řádky a nový text. Přiložený výřez z dokumentu uvádí „posunout produkt“, uživatel napsal „posunout projekt“. Použito znění ze zprávy.
- **Změna** — zlom řádku vždy za čárkou, velikost nadpisu upravena tak, aby se na desktopu vešel na dva řádky. Větší řádkování, aby se diakritika v Michromě nedotýkala řádku nad ní. Upraven i titulek stránky.
- **Soubory a odkazy** — `web/content/site.ts`, `web/components/motion/split-text.tsx`, `web/components/sections/hero.tsx`, `web/app/globals.css`, `web/app/layout.tsx`. [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Šest velikostí v obou režimech bez přetékání a kolize textu s hlavním autem, žádná chyba JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 01 čeká na schválení.

### 2026-11-06 — Vrácení poslední úpravy hero (Claude Code)

- **Pokyn uživatele** — vrátit poslední úpravy zpátky.
- **Změna** — hero je opět v podobě před zápisem o volném prostoru a gradientech: výška celého okna, fotka bez přiblížení, nadpis v Michromě verzálkami, plný odstavec z dokumentu, bez gradientů. Horní linka části 02 je vrácená.
- **Soubory a odkazy** — stejné jako v předchozím zápisu. [QA a snímky](web/docs/qa/phase-1/hero/README.md) obnovené.
- **Ověření** — lint, typecheck a build prošly. Šest velikostí v obou režimech bez přetékání, žádná chyba JavaScriptu.
- **Předání** — část 01 čeká na další pokyn uživatele.

### 2026-11-06 — Hero bez volného prostoru, s běžným nadpisem a gradienty (Claude Code)

- **Pokyn uživatele** — méně volného prostoru na desktopu i mobilu, přiblížit fotku, nadpis v běžném písmu, zkrátit odstavec a překrýt fotku nahoře a dole gradientem pro přirozenější přechod při scrollu.
- **Změna** — fotka přiblížená 1,28× na šířku a 1,2× na výšku. Hero na 1440 × 900 snížený z 900 na 828 px, na telefonu 390 px z 844 na 616 px. Nadpis v SF Pro semibold bez verzálek. Odstavec zkrácen na dvě věty, u tohoto textu je to úprava mimo dokument. Fotka má gradient nahoře do barvy hlavičky a dole do bílé. Horní linka části 02 odstraněna, aby přechod nepřerušovala.
- **Soubory a odkazy** — `web/components/sections/hero.tsx`, `hero-background.tsx`, `proof-marquee.tsx`, `web/app/globals.css`, `web/content/site.ts`. [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Šest velikostí v obou režimech bez přetékání, žádná chyba JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 01 čeká na schválení. V tmavém režimu hero zatím přechází do bílé, protože další část tmavý režim nepodporuje.

### 2026-11-06 — Část 01 Hero s fotografií a tmavým režimem (Claude Code)

- **Pokyn uživatele** — hero s dodanými pozadími konceptu auta pro světlý i tmavý režim, nadpis „Váš vývoj má další krok“, text varianty A z dokumentu, výzvy Probrat projekt a Prohlédnout naši práci.
- **Změna** — fotografie přes celou výšku okna pod hlavičkou, výřez podle orientace obrazovky, prolnutí dne a noci. Přepínač tématu v hlavičce, volba se ukládá, výchozí je světlý režim. Tmavě se zatím přepne jen hlavička a hero (`data-theme-scope`). Certifikační štítky z hero odstraněny, skica odložena do `web/components/subpages/hero-sketch.tsx`.
- **Soubory a odkazy** — `web/components/sections/hero.tsx`, `hero-background.tsx`, `web/components/site/theme-toggle.tsx`, `site-header.tsx`, `web/components/ui/button.tsx`, `web/app/layout.tsx`, `web/app/globals.css`, `web/content/site.ts`, `web/public/images/hero/`. [QA a snímky](web/docs/qa/phase-1/hero/README.md).
- **Ověření** — lint, typecheck a build prošly. Šest velikostí v obou režimech bez přetékání, přepínač, uložení volby, kotva na projekty a reduced motion. Žádná chyba JavaScriptu. Neověřeno v Safari, Firefoxu, Windows a na fyzických zařízeních.
- **Předání** — část 01 čeká na schválení. Koncept auta je vygenerovaná vizualizace, ne projekt BEKO. Ostatní části tmavý režim zatím nepodporují.

### 2026-11-06 — Noční mobilní kompozice (Codex)

- **Zadání** — noční verze schváleného denního mobilního obrázku.
- **Výstup** — `output/images/original-electric-concept-mobile-night.png`, 2160 × 2880 px, a WebP v šířce 1080 px. Denní verze zachována, web beze změny.
- **Prompt** — změnit pouze denní osvětlení na noc, zachovat mobilní kompozici 3:4, obě auta a pohyb, ponechat prázdnou horní oblohu pro headliny, přidat jemné studené světlo a odrazy rozsvícených světel.
- **Metoda a ověření** — vestavěný imagegen, finální zvětšení a WebP přes Sharp; vizuálně zkontrolována kompozice a ověřeny rozměry PNG. Generativní úprava nezaručuje pixelově identickou geometrii.

### 2026-11-06 — Denní mobilní kompozice (Codex)

- **Zadání** — větší auto uprostřed a více oblohy pro headliny na mobilu.
- **Výstup** — `output/images/original-electric-concept-mobile-day.png`, 2160 × 2880 px, a lehčí WebP v šířce 1080 px. Na výšku bez oříznutí auta. Web beze změny.
- **Prompt** — denní varianta 4 překomponovaná na výšku, větší hlavní auto uprostřed spodní části, čistá obloha v horní většině obrazu, zachovat pohyb, druhé rozmazané auto a technický CGI styl.
- **Metoda a ověření** — vestavěný imagegen, export a WebP pomocí Sharp. Vizuálně zkontrolováno celé auto a prostor pro text; ověřeny rozměry PNG. Generátor vrátil poměr 3:4 místo požadovaného 9:16, export zachovává celý obraz bez ztráty obsahu.

### 2026-11-06 — Noční protějšek dynamické varianty (Codex)

- **Zadání** — stejná scéna jako schválená varianta 4, v noci pro dark mode.
- **Výstup** — `output/images/original-electric-concept-v4-motion-night-4k.png`, 3840 × 2160 px. Vestavěný imagegen změnil osvětlení podle denní reference; finální export zvětšen pomocí Sharp. Denní soubor zachován, web beze změny.
- **Prompt** — zachovat kompozici 16:9, design, velikost a polohu obou aut, pohyb a hory; změnit pouze scénu na noc s temně modrou oblohou, jemným studeným osvětlením, rozsvícenými světlomety a odrazy. Bez dalších objektů nebo textů.
- **Ověření** — vizuální kontrola návaznosti na denní variantu a ověření rozměrů PNG; generativní úprava nezaručuje pixelově identickou geometrii.

### 2026-11-06 — Automobily za jízdy, varianta 4 (Codex)

- **Zadání** — dynamičtější scéna za jízdy a druhé rozmazané auto vlevo v pozadí.
- **Výstup** — `output/images/original-electric-concept-v4-motion-4k.png`, 3840 × 2160 px. Varianta 3 upravena vestavěným imagegen, export zvětšen pomocí Sharp. Předchozí varianty zachovány, do webu nezapojeno.
- **Prompt** — zachovat hlavní sportovní auto, velikost a kompozici; přidat rotační rozmazání kol, vodorovné rozmazání povrchu a odrazů, jemnou vodní stopu a druhý menší výrazně rozmazaný vůz vlevo v pozadí.
- **Ověření** — vizuálně zkontrolován pohyb i dvě auta a ověřeny rozměry exportu.

### 2026-11-06 — Sportovnější automobil, varianta 3 (Codex)

- **Zadání** — zachovat schválenou scénu a udělat auto sportovnější.
- **Výstup** — `output/images/original-electric-concept-v3-sport-4k.png`, 3840 × 2160 px. Úprava varianty 2 vestavěným imagegen, finální zvětšení pomocí Sharp. Starší varianty zachovány, web beze změny.
- **Prompt** — snížit střechu a podvozek, zvětšit kola, upravit klínovou příď a přidat decentní splitter; zachovat hranaté plochy, jednoduché materiály, malé auto v záběru, světlé hory a odrazy.
- **Ověření** — vizuálně zkontrolována úprava a ověřeny rozměry PNG.

### 2026-11-06 — Menší automobil a technický render, varianta 2 (Codex)

- **Zadání** — menší auto a podoba bližší uživatelské referenci, méně reklamní a více technický render.
- **Výstup** — `output/images/original-electric-concept-v2-4k.png`, 3840 × 2160 px. Samostatná nová generace přes imagegen s referencí, finální zvětšení pomocí Sharp. Předchozí varianta zachována, web beze změny.
- **Prompt** — menší bílý hranatý monovolume koncept v pravé spodní části, krátká klínová příď, souvislé černé prosklení, jednoduché plochy a materiály, mokrá odrazivá plocha, světlé horské pozadí, zdrženlivý vzhled CAD/CGI renderu bez textů a značek.
- **Ověření** — vizuální kontrola generace a ověření rozměrů exportu.

### 2026-11-06 — Vlastní automobilový render bez vodoznaku (Codex)

- **Zadání** — uživatel schválil vytvoření nového podobně laděného obrázku.
- **Výstup** — `output/images/original-electric-concept-4k.png`, 3840 × 2160 px. Nová generace vestavěným imagegen, export zvětšen pomocí Sharp; nejde o odstranění vodoznaků z originálu. Do webu nezapojeno.
- **Prompt** — vlastní bílý elektrický grand tourer na mokré odrazivé pláni, modré hory a obloha, jemné červené zadní světlo, prémiový realistický CGI render, 16:9, bez textů, log a vodoznaků.
- **Ověření** — vizuálně zkontrolován render a ověřeny rozměry PNG. Fáze webu beze změny.

### 2026-11-06 — Landing rozdělená na části podle dokumentu s textacemi (Claude Code)

- **Pokyn uživatele** — přečíst dodaný dokument a rozdělit landing na v něm popsané části. Existující části neměnit, chybějící jen naznačit. Dále se postupuje krok po kroku.
- **Změna** — pořadí podle dokumentu, každá část má obal `data-part`. Klientská loga jsou před představením firmy a projekty před spoluprací. Části 07 a 08 jsou naznačené přes `part-placeholder.tsx`. Mapa poboček je přesunutá z bloku Standardy do části 09, její vzhled se nezměnil. Texty a podoba ostatních částí zůstaly beze změny, texty z dokumentu se zatím nepoužily.
- **Soubory a odkazy** — `web/app/page.tsx`, `web/components/sections/part-placeholder.tsx`, `offices.tsx`, `trust.tsx`, `office-map.tsx`, `web/content/site.ts`, [LANDING-PARTS.md](beko-redesign-scope/docs/LANDING-PARTS.md). [Snímky po částech](web/docs/qa/phase-1/parts/).
- **Ověření** — lint, typecheck a build prošly. Pořadí deseti částí a cíle kotev zkontrolované v DOM. 360, 390, 768 a 1440 px bez přetékání a rozbitých obrázků. Mapa na novém místě: 16 značek, výběr země a pobočky. Žádná chyba JavaScriptu. Neověřeno na fyzických telefonech, v Safari, Firefoxu a ve Windows.
- **Předání** — blok Standardy v dokumentu nemá vlastní část, dočasně je na konci části 06. Jeho úvod stále zmiňuje kapacitu v regionu, i když mapa je nově v části 09. Řešit při práci na části 06.

### 2026-11-06 — Samostatný obrázek ve 4K (Codex)

- **Zadání** — zvětšit přiložený automobilový render.
- **Výstup** — `output/images/concept-car-4k.png`, 3840 × 2956 px, bez nasazení do webu. Vestavěný imagegen upravil detaily; finální rozměr nastaven pomocí Sharp. Vodoznaky ponechány.
- **Prompt** — zvýšit rozlišení na šířku 3840 px, zachovat poměr stran, kompozici, automobil, krajinu, barvy, odrazy a vodoznaky Unsplash+.
- **Ověření** — načtena metadata výsledného PNG; stav Fáze 1 beze změny.

### 2026-11-05 — Příběh podle otázek zákazníka, skica a mapa poboček (Claude Code)

- **Pokyn uživatele** — příběh skákal. Modernější a technologičtější web, místo lodi animovaná designová skica na světlém gradientu z barev BEKO, místo case studies mapa procesu s výzvou k akci, krátké projekty a shadcn komponenta pro mapu.
- **Změna** — pořadí hero, O společnosti, klienti, služby, proces, projekty, standardy s mapou, kontakt. Skica se kreslí kódem a mění na 3D model a výpočty. Proces se plní podle scrollu. Mapa poboček používá mapcn nad MapLibre se všemi 16 pobočkami.
- **Robustnost** — MapLibre se stahuje až při přiblížení sekce, worker je v `web/public/maplibre/`. Bez WebGL se místo pádu celé stránky ukáže statická mapa.
- **Soubory a odkazy** — `web/components/sections/`, `web/components/subpages/`, `web/components/ui/map.tsx`, `web/lib/sketch.ts`, `web/content/site.ts`, `web/app/globals.css`, `web/eslint.config.mjs`, README a dokumentace scope. [QA a screenshoty](web/docs/qa/phase-1/rebuild/README.md).
- **Ověření** — lint, typecheck a build prošly. 360, 390, 768 a 1440 px bez přetékání, cyklus skici, proces při scrollu, výběr země, pobočky i značky na mapě, náhrada bez WebGL, reduced motion v emulaci, žádná chyba JavaScriptu. Neověřeno na fyzických telefonech, v Safari, Firefoxu a ve Windows.
- **Předání** — Fáze 1 `review`, schválení čeká. Proces je sestavený z textů BEKO a musí ho potvrdit. Před produkcí ověřit licenci mapových podkladů CARTO.

### 2026-11-05 — LP zkrácená na příběh prvotřídního dodavatele (Claude Code)

- **Pokyn uživatele** — LP byla zbytečně obsáhlá. Představit firmu stávajícím textem, přidat carousel log klientů podle React Bits, stručné služby bez fotek ve futuristických kartách a naznačit případovou studii. Stavět na pozici A dodavatele velkých firem.
- **Změna** — nové pořadí hero, carousel, O společnosti, Reference, Služby, Standardy, Kontakt. Nadpis hero „60 let inženýrství pro evropský průmysl“. Výška stránky na desktopu z 13 420 na 6 432 px. Dřívější sekce přesunuté do `web/components/subpages/` pro Fázi 2 a 4.
- **Rozhodnutí o obsahu** — klienti a výsledky pouze z doložených zdrojů. Přímí OEM klienti nejsou veřejně doložení, proto je jmenují jen věta o odběratelích GRAMMER a HAUK. Případové studie jsou softwarové, konstrukční zakázku musí dodat BEKO.
- **Soubory a odkazy** — `web/components/sections/`, `web/components/subpages/`, `web/content/site.ts`, `web/app/globals.css`, README a dokumentace scope. [QA a screenshoty](web/docs/qa/phase-1/rebuild/README.md).
- **Ověření** — lint, typecheck a build prošly. 360, 390, 768 a 1440 px bez přetékání a rozbitých obrázků, carousel v obou směrech, přepínání případových studií klávesnicí, reduced motion v emulaci, žádná chyba JavaScriptu. Neověřeno na fyzických telefonech, v Safari, Firefoxu a ve Windows.
- **Předání** — Fáze 1 `review`, schválení čeká.

### 2026-11-05 — LP přestavěná bez rukopisu AI (Claude Code)

- **Pokyn uživatele** — očistit web od rukopisu AI v textech, vzorech, číslování a pomlčkách a předělat ho jako seniorní vývojář. Světlý, s hranatými rohy, barvami původního webu BEKO, efekty textů, moderními animacemi a upravenými prvky shadcn.
- **Vzhled a obsah** — paleta přečtená z původního webu, motiv mozaiky z loga, skutečné fotografie a rendery BEKO. Texty přepsané z podkladů BEKO. Vymyšlený proces nahradil doložený postup návrhu, přibyly sekce Projekty a Obory. Pravidla proti AI rukopisu jsou v DESIGN.md.
- **Technika** — sekce rozdělené do `web/components/sections/`, animace v `web/components/motion/` s knihovnou Motion, úpravy přímo v `web/components/ui/`. CSS zmenšené z 483 na přibližně 250 řádků. Fonty přesunuté do `web/public/fonts/`, přidán `.claude/launch.json` pro produkční náhled. Odstraněny Card, Separator a komponenty předchozí LP.
- **Ověření** — lint, typecheck a build prošly. 360, 390, 768, 1440 px bez přetékání a rozbitých obrázků přes Chrome DevTools Protocol, ručně 1100 a 1920 px. Mobilní menu včetně návratu fokusu, Tabs, Accordion, cookies, reduced motion v emulaci. Žádná chyba JavaScriptu. Neověřeno na fyzických telefonech, v Safari, Firefoxu a ve Windows. [QA a screenshoty](web/docs/qa/phase-1/rebuild/README.md).
- **Předání** — Fáze 1 `review`, schválení čeká. Obrázky se načítají z `beko-engineering.cz`, před nasazením je přenést do repozitáře a ověřit práva. Počet odborníků je na webu BEKO nejednotný (150+ a 100+), použito 150+ z úvodní stránky.

### 2026-11-05 — SF Pro, technické nadpisy a propracovanější LP podle Sentry (Codex)

- **Upřesnění uživatele** — požadováno bezpatkové písmo, SF Pro pro text, nadpisy podobné přiloženému nápisu DESIGN. Nový pokyn opravuje předchozí patkovou interpretaci. Současně zadán modernější návrh podle Sentry, lehký liquid glass, hranaté rohy a více střídmých barev při převážně světlé prezentaci.
- **Změna** — hero nyní přímo vysvětluje vývoj výrobků a digitálních řešení a ukazuje skutečný E-BOAT. Méně obecných sloganů a opakovaných prvků. Čtyři barevně rozlišené obory, software jako společná plocha podle dvou potřeb, konkrétní výstupy etap, věcnější články a otázky před kontaktem. Původní barevné logo zůstává.
- **Základ** — SF Pro systémově na Apple platformách s popsanými fallbacky, lokální Michroma 400 latin/latin-ext s OFL. Source Serif odstraněn. Rádius obvykle 2 px, modaly 4 px. Blur headeru 20 px a panelů 18 px, vše nad světlými podklady. Uživatelský screenshot uložen pouze jako typografická reference, skicy se nevrátily.
- **UX** — sticky header, samostatná horní kotva, správný odstup cílových sekcí. Po volbě kontaktu v mobilním menu fokus pokračuje v kontaktu, Escape vrací fokus na spouštěč. Obsah etap a FAQ je oddělen od komponent.
- **Ověření** — finální lint, build a typecheck prošly. 1440/768/390/360 px bez přetékání, načtené fonty i obrázky. Menu Enter/Escape a focus trap, Tabs ArrowRight/Home/End, FAQ a cookie volba po reloadu. Návrat nahoru i kontakt ověřeny se sticky headerem. Žádná zachycená konzolová chyba. Meze kontroly jsou v QA.
- **Soubory a předání** — `web/app/`, `web/components/site/`, `web/content/site.ts`, fonty, README a dokumentace scope. [Aktuální QA a screenshoty](web/docs/qa/phase-1/sentry-glass/README.md). Fáze 1 `review`, schválení čeká. Předchozí sady jsou archiv, Fáze 2 zůstává `pending`.

### 2026-11-05 — Celá LP přepracována do světlého minimalistického směru (Codex)

- **Pokyn uživatele** — první návrh odmítnut. Výslovně zadán nový obsah i rozvržení, světlý gradient, Sentry a Scalemont jako hlavní reference, odstranění Monoflow, všech skic a sans písma. Barevnost jednotlivých bloků se bude ladit později.
- **Změna** — nový centrovaný hero, kratší popisy služeb, kompaktní firemní údaje, čtyři přepínané kroky spolupráce, dva produktové bloky, projekt E-BOAT, řádkový seznam článků, FAQ a kontakt. Header, footer, mobilní navigace a cookies mají společný světlý vzhled. Původní komponenty skic odstraněny.
- **UI a fonty** — shadcn Radix/radix-nova rozšířen o Tabs, Badge a Separator; Accordion použit i ve FAQ, Card včetně dílčích částí. V celém UI jsou lokální Source Serif 4 Variable roman/italic, latin/latin-ext s OFL. IBM Plex Sans/Mono odstraněny. Tokeny, pravidla a aktivní reference aktualizovány pro další spolupráci.
- **Soubory** — `web/app/`, `web/components/site/`, `web/components/ui/`, `web/content/site.ts`, README, `beko-redesign-scope/docs/`, PROGRESS, AGENTS, project.json a generovaný přehled. [Aktuální QA a screenshoty](web/docs/qa/phase-1/light-redesign/README.md); původní sada je archiv odmítnuté iterace.
- **Ověření** — lint, build a typecheck prošly. Prohlížečová kontrola při 1440/768/390/360 px bez vodorovného přetékání. Načtené serif fonty ověřeny i na ovladačích, všechny obrázky funkční. Tabs ověřeny šipkou a Home/End, FAQ otevřením a zavřením, navigace klávesnicí a Escape s návratem fokusu a odemčením scrollu. Vlastní cookie volba přežila reload, dialog se vejde na mobil. Žádná zachycená konzolová chyba. Meze kontroly jsou v QA.
- **Předání** — nová LP `review`, bez vizuálního schválení. Fáze 2 zůstává `pending`. Další připomínky a barevné ladění patří do Fáze 1.

### 2026-11-05 — Připravena Fáze 1 podle nového redesign scope (Codex)

- **Zadání** — podle pokynu uživatele prostudován nový balíček a implementována pouze Fáze 1. Monoflow vede kompozici, Sentry omezený světelný akcent, Scalemont návaznost interakcí. Výchozí odvození i realizace jsou zaznamenané v rozhodnutích.
- **Změna** — celá LP s technickou SVG sestavou, čtyřmi službami, vývojovým postupem, softwarem, skutečným renderem E-BOAT, doloženými firemními údaji, články a kontaktem. Sdílený header a footer, desktopové podkategorie, mobilní Sheet/Accordion a cookie předvolby. Odkazy mimo první lokální stránku vedou označeně na originál.
- **Základ** — bezplatný shadcn/ui Radix / radix-nova, společné barevné tokeny, lokální IBM Plex Sans a Mono s licencemi. Node 22.14.0 a npm 10.9.2, npm lockfile, příkaz typecheck a noindex. Žádné generované bitmapy ani další animační knihovna.
- **Soubory a odkazy** — `web/app/`, `web/components/`, `web/content/site.ts`, `web/public/`, `web/components.json`, `web/package.json`, `.nvmrc`, README a dokumentace nového scope. [QA a screenshoty](web/docs/qa/phase-1/README.md) obsahují první pohled i plnou stránku pro desktop, tablet a dvě mobilní šířky.
- **Ověření** — `npm run lint`, `npm run build`, `npm run typecheck` prošly. Produkční audit bez nálezů. U01/U02/U11 ověřeny v prohlížeči v rozsahu jedné lokální stránky, včetně klávesnice, návratu fokusu, blokování scrollu a cookie předvoleb po obnovení. Žádné vodorovné přetékání při 1440/768/390/360 px, žádná zachycená konzolová chyba. Meze kontroly jsou v QA včetně neprovedeného běhového přepnutí reduced motion a scénářů na budoucích URL.
- **Předání** — Fáze 1 `review`, bez schválení. Další fáze nezačala. Připomínky opravit lokálně v první fázi a obnovit screenshoty; po schválení navázat P02–P12 podle scope.

### 2026-11-04 — Odstraněn dosavadní návrh webu (Codex)

- **Změna** — na žádost uživatele odstraněny všechny dosavadní iterace návrhu, související komponenty, styly, přidané závislosti a pracovní zápisy. Aplikace byla vrácena k výchozímu commitu `6e0e78a`.
- **Předání** — projekt je připravený pro nový návrh. Zadání a dodané podklady zůstávají k dispozici v kořeni projektu.

### 2026-11-04 — Založen lokální projekt Next.js (Codex)

- **Změna** — ve složce `web/` je Next.js 16.4.5 s App Routerem, TypeScriptem, Tailwind CSS a npm lockfilem. Úvod má českou vývojovou stránku s názvem BEKO Engineering. Kořen projektu je lokální repozitář Git na větvi `main`. GitHub připojíme, až bude potřeba projekt sdílet.
- **Soubory** — `web/`, `README.md`, `.gitignore`, `CHANGELOG.md`.
- **Ověření** — lint i produkční build prošly. Vývojová stránka na `http://localhost:3000` vrátila HTTP 200. `npm audit --omit=dev` bez nálezů. Úplný audit hlásí středně závažné nálezy v závislostech ESLintu.
- **Předání** — pokračovat návrhem úvodu. Komponenty React Bits vybírat podle návrhu při implementaci.

### 2026-11-04 — Schválen rozsah dema a založeno předání (Codex)

Po prostudování dodaných podkladů uživatel schválil rozsah **22 stránek**. Demo bude vlastní web v Next.js a TypeScriptu.

| Oblast | Stránky | Počet |
|---|---|---:|
| Úvod | Domovská stránka | 1 |
| Služby | Rozcestník, Engineering, Design, Konstrukce, IT služby, AI řešení a Vzdělávání | 7 |
| Software | Rozcestník, SpinFire a BE-Play | 3 |
| Kariéra | Přehled a dva detaily pozic | 3 |
| O nás | Firemní profil, přehled interních projektů a jeden detail projektu | 3 |
| Blog | Výpis a dva články | 3 |
| Spolupráce a Kontakty | Samostatná stránka pro každou sekci | 2 |

- **Hlavní průchod** — z Konstrukce se přejde na Kontakty s předvybranou službou. Výběr jde změnit, kontaktní formulář funguje i bez předvýběru a po simulovaném odeslání zobrazí potvrzení. Demo nepředává údaje do firemních služeb.
- **Podrobnosti v rámci stránek** — čtyři kurzy na Vzdělávání, pobočky na Kontaktech a funkce, formáty, aktualizace a instalace na SpinFire. Samostatné archivy a zbývající detaily jsou odložené.
- **Otevřené volby** — konkrétní pozice, články, interní projekt a vizuální směr. CAD konstruktér a SW vývojář jsou navržené ukázky pozic.
- **Změněné soubory** — `CHANGELOG.md`, `AGENTS.md`, `CLAUDE.md`.
- **Ověření** — rozsah porovnán s potvrzením uživatele a dodaným briefem. Aplikační testy přijdou s implementací.

## Šablona zápisu

```markdown
### RRRR-MM-DD — Stručný název změny (Codex / Claude Code)

- **Změna nebo rozhodnutí** — co se změnilo a proč.
- **Soubory a odkazy** — dotčené cesty, případně commit nebo PR.
- **Ověření** — kontrola, příkaz nebo uživatelský scénář a výsledek.
- **Předání** — další krok, rozpracované části nebo blokátor, pokud jsou.
```
