# Kontroly funkčnosti a vizuálního směru

## Společné podmínky přijetí

Fáze je připravená k posouzení, když se aplikace sestaví, projde typecheckem a lintem a dokončí všechny scénáře aktuální fáze. Použij desktop 1440 × 900, mobil 390 × 844 a tablet 768 × 1024 px. Na nejméně jedné šabloně ověř i šířku 360 px. Delší české nadpisy a reálné položky menu se musejí vejít bez vodorovného přetékání.

Screenshoty ukládej do `web/docs/qa/phase-N/`. Ke každé sadě přidej adresu, rozměr, datum, režim pohybu a stručný výsledek. Srovnání prováděj při stejném obsahu a načtených fontech. Nestabilní moment animace zastup statickým stavem po dokončení. Novou vizuální změnu posuzuj vedle schválené LP.

## Scénáře

### U01 · Header a mobilní navigace

Otevři LP i jednu podstránku. Na desktopu ověř přístup k rozcestníku i k jeho dětem. Na mobilu otevři menu, rozbal Služby, přejdi na potomka a znovu menu otevři. Proveď totéž klávesnicí. Ověř viditelný fokus, Escape, návrat na spouštěč, uzamčení scrollu a rychlé otevření/zavření bez rozbitého stavu. Režim reduced motion zachová pořadí i dostupnost.

### U02 · LP a společný vzhled

Porovnej skutečnou LP se světlými částmi Sentry a Scalemont. Ověř jednoduchou hierarchii, hero s konkrétní nabídkou a skutečným projektem, barvy původního webu, SF Pro / Michroma, hranaté rohy, doložené důkazy o klientech a čtyři dostupné služby. Monoflow se nepoužívá. Podívej se na celou stránku, přechod světlá/tmavá, software, projekt a footer. Popiš konkrétně rozdíly kompozice, typografie, povrchů, komponent, grafiky a mobilu. V Fázi 1 se posuzuje celá stránka včetně nižších sekcí.

### U03 · Služba a obecná poptávka

Projdi LP → Služby → Konstrukce → Kontakty. Zvolená služba je vidět a lze ji změnit. Přímý vstup na Kontakty nabízí obecný dotaz. Neznámá hodnota kontextu vede k obecnému stavu. V Fázi 2 může koncový krok obsloužit společný lokální dialog. Od Fáze 3 ověř přímo P23 a variantu z BE-Play.

### U04 · Kurzy

Otevři čtyři karty kurzu a ověř všechny čtyři kotvy včetně standardního kurzu. Každá poptávka přebírá konkrétní kurz do viditelného pole. Změna kurzu je možná. Z obecného vstupu lze požádat bez konkrétního kurzu. Ověř chybu e-mailu a místní potvrzení.

### U05 · Software, demo a soubory

Projdi Software → SpinFire a BE-Play. Ověř demo z produktu a z článku EA Partner, který ho v cílové ukázce může nabídnout jako související akci. V dalších původních vstupech mimo rozsah zůstává označený odkaz. Ověř dostupnost datových formátů, instalace, přehledu funkcí a aktualizací jako lokálních sekcí nebo označeného originálu. Přímé stažení eBooku zůstává PDF. EXE otevírej jen jako odkaz ke stažení. Ověř zavření dema, fokus a všechny formulářové stavy. Chybný alternativní odkaz se použije až po ověření platné náhrady.

### U06 · Kariéra a varianty pozic

Ve výpisu vyber lokalitu, ověř počet výsledků a nulový výsledek, pak filtr zruš. Otevři CAD konstruktéra a SW vývojáře. Tlačítko u shrnutí dovede k formuláři. Ověř seznam lokalit, správnou povinnost telefonu a lokality a obě přílohy podle výchozího inventáře. Do dema vlož testovací CV a testovací motivační dopis, potom soubor vyměň. Ostatních devět nabídek je dostupných označeným původním odkazem.

### U07 · Spolupráce

Ověř obě formy spolupráce a všechny čtyři obory. Volitelné údaje jsou dostupné a lze je přeskočit. Vyber dva testovací soubory, jeden odeber a ověř seznam před simulací odeslání. Pole a příjemce budoucí integrace mají zachovaný mapovatelný identifikátor.

### U08 · Firma, projekty a kontakty

Z O nás přejdi na ČR/SR kontaktní místo a ověř správnou kotvu. Z projektů otevři E-BOAT, v galerii přejdi dál i zpět, zavři ji a zkontroluj návrat fokusu. Ostatní projekty mají označené cíle na původním webu. Telefony a e-maily se chovají jako přímé kontaktní odkazy. V O nás i Kontaktech jsou údaje ze stejného zdroje.

### U09 · Společné stavy formulářů

Každý z šesti typů interního formuláře ověř alespoň v prázdném, neplatném, validním, odesílacím, simulovaně úspěšném a simulovaně chybovém stavu. Chybové hlášení je u pole a případný souhrn dovolí přeskočit k chybě. Oprava zachová data. Dvojklik vytvoří jedno lokální dokončení. Tlačítko se při odesílání chová jednotně.

Soubory zůstávají v paměti zařízení. Limity a povolené formáty dema označ jako ukázkové a popiš před výběrem souboru. Otestuj nepovolený typ a překročení limitu bez uploadu. Newsletter zůstává samostatná nepovinná volba tam, kde ji má výchozí formulář. Zadané hodnoty ani obsah souborů se nesmějí propsat do analytiky nebo adresy stránky.

### U10 · Blog, článek a newsletter

Otevři Blog a filtr tématu. Ověř odpovídající články, prázdný stav a zrušení filtru. Oba lokální články používají stejnou šablonu i při různých délkách textu. Ověř návrat do výpisu a související SpinFire/AI. Samostatný newsletter má povinný e-mail, chybu a označené lokální potvrzení. Každý původní článek mimo rozsah má funkční označený odkaz.

### U11 · Cookies a zásady

V čistém stavu vyzkoušej zvlášť přijmout, odmítnout a vlastní předvolby. Po obnovení se volba zachová a z patičky ji lze změnit. Odkaz na zásady funguje z LP, vnořené kariérní stránky i modalu. Analytické kategorie lze přepnout, aniž by demo vyžadovalo skutečný měřicí účet. V předání je uvedeno, že integrace poskytovatelů a jejich právní konfigurace čekají na produkční fázi.

### U12 · Oznamovací vstupy

Z patičky otevři P25. Ověř odkaz do EWA s identifikátorem organizace, možnost nového oznámení a oddělené přihlášení oznamovatele a řešitele. Vedlejší odkaz na ministerstvo má svůj vlastní jasný účel a aktuálně ověřený cíl. Externí přechod je označený. Pro ověření dema stačí otevření veřejného vstupu.

## Finální kontrola všech 25 cest

Ve Fázi 6 z `project.json` vygeneruj nebo projdi seznam všech 25 URL. Každou otevři přímo a po refreshi. Ověř název stránky, metadata, aktivní menu a hlavní akci. Jeden smoke test může zachytit HTTP stav a očekávaný H1 všech cest. Důležité stavové přechody kontroluj funkčními testy nebo ručně. Výsledky označ podle skutečného způsobu provedení.

Zkontroluj všechny přímé i externí odkazy, kotvy, PDF, galerie, dialogy, filtry a přílohy. Skutečně neznámá adresa musí mít 404 s použitelným návratem. Demo má `noindex`. Z čisté kopie proveď `npm ci`, build, lint a typecheck podle README. Dokumentuj případné chybějící vstupy. Kód i assety používají relativní projektové cesty.

## Vizuální brána mezi fázemi

- Kompozice má shodné osy, proporce a prostorový rytmus jako schválená LP.
- Nadpisy, text, štítky a akce používají společné tokeny i na dlouhých českých textech.
- Čtyři oblasti služeb a dva produkty jsou ve stejné vizuální rodině. Přizpůsobení šablon se děje pomocí variant.
- Formulářová pole jsou čitelná. Světlé, tmavé, aktivní, chybové a fokusové stavy mají ověřený kontrast. Cílem je WCAG 2.2 AA.
- Vizuální reference je přenesená do samostatného designu BEKO. Použité skutečné fotografie, loga a tvrzení mají zdroj a stav oprávnění pro případné zveřejnění.
- Desktopová a mobilní varianta mají vědomě upravené rozvržení. Pohyb respektuje systémovou volbu reduced motion.

Pokud některá brána neprojde, oprav ji v aktuální fázi před předáním. Uživatel schvaluje běžící výsledek a konkrétní screenshoty.
