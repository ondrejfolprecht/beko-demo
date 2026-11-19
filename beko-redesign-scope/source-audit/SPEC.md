# Technická specifikace současného webu BEKO Engineering

Snímek veřejného webu z 4. 11. 2026. Rozsah pokrývá navigaci, typy obsahu, veřejné formuláře, odkazy do externích systémů a chování, které lze z veřejné části pozorovat.

## Jak specifikaci použít při implementaci

- `routes.json` je zdroj pro adresy, strom, pozorované odkazy a otevřená rozhodnutí o migraci. Obsahuje 71 veřejných HTML adres a další uzly pro kotvy, soubory, formuláře, skupiny a externí cíle.
- `forms.json` je zdroj pro šest typů interních formulářů, jejich výskyty, pole a varianty. Obsahuje také veřejné vstupy do externích oznamovacích formulářů.
- `SPEC.md` vysvětluje logiku a obsahuje kontrolní scénáře. Strom a diagram čtou data vygenerovaná z obou JSON souborů.
- Údaj označený jako pozorovaný vychází z veřejného HTML, prohlížeče nebo XML mapy. Odvozený model popisuje vztahy viditelné zvenčí. Stav `unverified` a hodnota `null` označují údaj k ověření. U pole `required` může `null` znamenat variantu podle stránky. Pak je konkrétní hodnota v `fieldOverrides`.
- Při zadání změny vyhledej dotčené uzly podle ID, zkontroluj výskyty a odpovídající scénář. U položek M01–M07 eviduj rozhodnutí o cílovém chování samostatně. Identifikátory polí v JSON jsou pracovní názvy. Pozorované HTML názvy jsou uložené zvlášť a samy o sobě nedokládají serverové API.

## Adresy, navigace a stavy

- Základní doména je https://beko-engineering.cz/. Stabilní ID typu `/kariera/cad-konstrukter/` odpovídá cestě. ID začínající `#` označuje kotvu a `@` označuje skupinu, rozhraní, soubor, formulář nebo externí cíl.
- `tree` zachycuje informační hierarchii od úvodu. Rozbalení větve není důkaz, že mezi každými dvěma uzly existuje přímý odkaz. Například pobočky mají ve stromu vlastní skupinu, zatímco jejich veřejné adresy pocházejí z XML mapy.
- `links` zachycuje kontextové odkazy ze stránek. `common` zachycuje odkazy z hlavičky, patičky a cookie lišty. Každý záznam obsahuje ID cíle, pokud je v inventáři, původní URL, popisek a umístění. Skutečné menu lze rekonstruovat z položek `header` a jejich polohy ve stromu. Globální vstup do EWA vede přes stránku Whistleblowing v patičce.
- `htmlEvidence` uchovává pozorovaný HTTP stav, výslednou URL, canonical a robots, pokud byly k dispozici. Pět archivů štítků při automatickém načtení vrátilo HTTP 202 a obsah se následně zobrazil při ruční kontrole. Zachovej oba údaje jako odlišná pozorování.
- `urlChecks` uchovává konkrétní případy přesměrování, odpovědí 403/404 a chybu certifikátu. HTTP stav po přesměrování je stav cílové odpovědi. Přesný kód přesměrování u starých adres vyžaduje další ověření.

## Obsahový model odvozený z veřejné části

- **Služba a detail služby.** Rozcestník Služby odkazuje na Engineering, IT služby, AI řešení a Vzdělávání. Design a Konstrukce jsou detaily pod Engineeringem. Úvod zároveň odkazuje přímo na některé detaily. Obecná cesta pro poptávku vede přes Kontakt v menu.
- **Kurz.** Jeden kurz je sekce se samostatnou kotvou na `/vzdelavani/`. Čtyři kurzy sdílejí jednu stránku a formulář poptávky. Ve viditelných polích není samostatný výběr kurzu. Přenos kontextu kurzu skrytým polem nebo serverovou logikou nebyl ověřen.
- **Produkt a materiál.** Software sdružuje SpinFire a BE-Play. SpinFire má stránky s funkcemi, datovými formáty, aktualizacemi a instalací. Vedle produktových stránek existují přímé soubory PDF a EXE a externí dokumentace. Modal dema se otevírá z více stránek i z jednoho článku.
- **Pracovní pozice.** Každý detail má vlastní URL. Z pohledu návštěvníka sdílí pozice základ přihlášky, přičemž každá určuje volby místa a povinnost některých polí. `forms.json` ukládá variantu podle URL pozice. Vztah mezi volbou lokality a příjemcem žádosti čeká na ověření.
- **Článek, archiv a projekt.** Článek má vlastní adresu. Blog je výpis a archivy jsou další vstupy do redakčního obsahu. Výskyt newsletteru se eviduje po stránkách. Interní projekty jsou samostatné detaily seskupené pod O nás.
- **Pobočka.** Kontakty obsahují přehled pro Česko a Slovensko. O nás obsahuje také zahraniční odkazy. Adresy detailů poboček a technický archiv existují v XML mapě. Inventář adres sám o sobě neurčuje, zda je lze otevřít ze stávajícího přehledu.
- **Externí oznamovací služba.** BEKO zveřejňuje vstupní stránku. EWA má veřejný vstup pro nové hlášení, vstup k existujícímu hlášení a samostatné přihlášení řešitele. Ministerstvo představuje druhý odkazovaný systém.

## Formuláře a provozní hranice

Povinnost polí a volby vycházejí z veřejně zobrazeného formuláře a jeho HTML. Záznam `observedMarkup` obsahuje dostupné údaje o formuláři, například metodu `POST`, jména vstupů a ID modalu. U formulářů v zachyceném HTML chybí explicitní URL v atributu `action`. Síťový požadavek a serverová validace zůstávají k ověření.

### Nábor · F01

Pozorováno na `/kariera/` a 11 detailech v `forms.json` pod `@form-job`. Povinné jsou jméno, příjmení, e-mail, CV, motivační dopis a zaškrtnutí zpracování osobních údajů. Poznámka a volba odběru novinek jsou volitelné. Telefon je povinný u SW vývojáře. Povinnost místa a jeho volby jsou evidované pro každou pozici. Každá z obou příloh používá samostatný vstup pro jeden soubor.

Kontrolní scénář F01. Otevři z Kariéry CAD konstruktéra a SW vývojáře. U první pozice ověř povinné místo a volitelný telefon. U druhé ověř povinný telefon a volitelné místo. V obou detailech porovnej nabídku lokalit s daty dané stránky a ověř požadavek na obě přílohy.

K ověření u správce. Příjemce podle pozice či lokality, typy a limity příloh, zpracování souborů a údajů, reakce na úspěch nebo chybu a vazba volby newsletteru na jeho systém.

### SpinFire demo a soubory · F02

Pozorováno na `/spinfire/` a dalších pěti zdrojových stránkách v `@form-demo`. Tlačítko otevírá modal Elementor 3064. Formulář má povinný e-mail, telefon, společnost, jméno s příjmením a zaškrtnutí zpracování údajů. Interní název modalu v HTML je „Poptávka školení“. Instalační příručka odkazuje na EXE a na dokumentaci dodavatele. Vedlejší odkaz na demo má vlastní problém s certifikátem.

Kontrolní scénář F02. Otevři demo z produktu a z článku `/kdyz-dwg-viewer-nestaci/`. Ověř stejný typ formuláře a pole. Ze stránky produktu sleduj samostatný odkaz eBooku přímo na PDF. Z příručky ověř odkaz na soubor EXE bez spouštění instalátoru.

K ověření u správce. Příjemce a systém pro žádosti, způsob poskytnutí demo licence a chování po odeslání.

### Poptávka školení · F03

Pozorováno na `/vzdelavani/`. Rozcestník nabízí základní, standardní, rozšířený a rekvalifikační kurz jako kotvy. Tlačítko „Získat nabídku“ otevírá modal Elementor 2281. Jméno a e-mail jsou povinné, telefon a poznámka volitelné.

Kontrolní scénář F03. Zkontroluj cíle všech čtyř karet a samostatně cíl horní upoutávky na standardní kurz. Rozdíl eviduj pod M02. Otevři poptávku a ověř uvedená pole.

K ověření u správce. Přenos konkrétního kurzu v odeslaných datech, příjemce a potvrzení.

### Obecný kontakt · F04

Pozorováno na `/kontakty/`. Formulář `@form-contact` je vložený do stránky. Povinné jsou jméno, příjmení, e-mail, firma a zaškrtnutí zpracování údajů. Telefon, poznámka a odběr novinek jsou volitelné.

Kontrolní scénář F04. Otevři kontakty z hlavičky a patičky. Oba vstupy mají vést ke stejné stránce. U formuláře ověř samostatné přepínače pro zpracování údajů a odběr novinek a rozdílnou povinnost těchto dvou voleb.

K ověření u správce. Příjemce, ukládání dotazu, reakce po odeslání a chování nepovinného odběru novinek.

### Spolupráce · F05

Pozorováno na `/spoluprace/`. Vložený formulář `@form-partner` obsahuje povinnou volbu OSVČ nebo společnost a výběr ze čtyř oborů. Povinné jsou také jméno, příjmení, společnost, e-mail, telefon, IČO a zaškrtnutí zpracování údajů. Poznámka, webová adresa, adresa a soubor jsou volitelné. HTML u přílohy dovoluje více souborů a obsahuje atribut `data-maxsize="20"`. Jednotka, rozsah a vynucení tohoto limitu čekají na ověření.

Kontrolní scénář F05. Ověř možnosti obou výběrů podle JSON a jejich povinnost. Ověř, že rozhraní dovolí vybrat více souborů a že příloha je volitelná.

K ověření u správce. Případná podmíněná pravidla podle typu spolupráce, validace IČO, příjemce podle oboru, formáty a limity příloh a zpracování žádosti.

### Newsletter · F06

Pozorováno na blogu, článcích a archivních výpisech. Samostatný formulář `@form-news` vyžaduje e-mail. Inventář zachycuje 26 výskytů. Volitelné zaškrtnutí odběru v kontaktu a náboru má vlastní ID pole. Jejich vztah k samostatnému formuláři se řeší při ověření integrace.

Kontrolní scénář F06. Ověř formulář a povinný e-mail na blogu, detailu článku a jednom potvrzeném archivu. Konkrétní výskyty porovnej s `instances`.

K ověření u správce. Poskytovatel newsletteru, seznamy a případná segmentace, potvrzení odběru, duplicity, odhlášení a synchronizace z kontaktního či náborového formuláře.

### Oznámení · F07

Pozorováno na `/whistleblowing/` a ve veřejném rozhraní EWA. Nové hlášení má krok s identifikací a potvrzením a krok s předmětem, kategorií, vztahem k organizaci, popisem a přílohami. Ve druhém kroku jsou v rozhraní označené předmět a popis jako povinné. EWA odděluje přístup oznamovatele k existujícímu hlášení od přihlášení řešitele. Na stránce ministerstva se při kontrole zobrazil shortcode a kontakty.

Kontrolní scénář F07. Z patičky otevři Whistleblowing, poté ověř vstup do EWA včetně identifikátoru organizace a obě samostatné přihlašovací cesty. Ověř, že je dostupný také samostatný odkaz na ministerstvo. Průchod lze provést bez přihlášení a bez vytvoření hlášení.

K ověření u správce. Vlastník provozu, požadavky na organizaci a odkazy EWA a případný dohodnutý náhradní postup pro externí formulář.

### Cookie lišta · F08

Veřejné HTML obsahuje přijetí, odmítnutí, zobrazení a uložení předvoleb. Zobrazení ovládacích prvků se může lišit. Patička odkazuje na zásady správnou absolutní adresou. Relativní odkaz v liště se chová různě podle zdrojové URL.

Kontrolní scénář F08. Ověř dostupnost nastavení z úvodu a z vnořené stránky. Ověř odkaz na zásady zvlášť v patičce a v liště. Pozorované odlišnosti jsou v M06 a v `urlChecks`.

K ověření u správce. Kategorie, použité nástroje, uložení předvoleb a pravidla načítání skriptů podle souhlasu.

## Rozhodnutí pro migraci

- **M01 · Pobočky.** Osm detailních odkazů míří na úvod. Určit cílové adresy a vztah mezi seznamem a detaily poboček.
- **M02 · Školení.** Horní upoutávka standardního kurzu vede na kotvu rozšířeného kurzu. Určit zamýšlený cíl této upoutávky.
- **M03 · BE-Play.** Je v menu i rozcestníku Software. HTML obsahuje `noindex` a adresa chybí v XML mapě. Potvrdit pravidla indexace.
- **M04 · Archivy.** Archiv poboček zobrazuje šablonu blogu. Rubriky a štítky opakují stejnou sadu článků. Určit, které archivní adresy mají smysl zachovat a zda se mají filtrovat podle vlastního kontextu.
- **M05 · SpinFire.** Evidovat podezřelý odkaz `http://z` a alternativní demo adresu s chybou certifikátu. Potvrdit platné náhrady.
- **M06 · Ochrana údajů.** Odkaz `/kontakt` v zásadách vrátil 403 a relativní odkaz z cookie lišty na Kariéře 404. Potvrdit cílové adresy a potřebná přesměrování.
- **M07 · Ministerstvo.** Při průchodu se zobrazil shortcode. Potvrdit používaný veřejný vstup s vlastníkem oznamovací cesty.

## Ověření před převzetím funkcí

- U všech šesti interních formulářů projít úspěch, odmítnutí neplatného vstupu a chybu doručení v testovacím prostředí s potvrzeným příjemcem. Podklady k odesílání, ukládání, přístupům a retenčním lhůtám získat od správce.
- Převést M01–M07 na schválená cílová pravidla. Pro měněné adresy zapsat starou URL, novou URL, očekávaný stav a výsledek kontroly.
- Ověřit menu, patičku a přímé vstupy do detailů, stažení, modalů i EWA. Provozní chování externích systémů ověřit s jejich správcem.
- Uvedené kontrolní scénáře jsou předloha pro ověření při implementaci. V rámci tohoto průchodu se veřejné formuláře neodesílaly.

## Zdroje a reprodukce

- [Veřejný web BEKO](https://beko-engineering.cz/) a [XML index webu](https://beko-engineering.cz/sitemap_index.xml)
- [Kariéra](https://beko-engineering.cz/kariera/) · [SpinFire](https://beko-engineering.cz/spinfire/) · [Vzdělávání](https://beko-engineering.cz/vzdelavani/)
- [Kontakty](https://beko-engineering.cz/kontakty/) · [Spolupráce](https://beko-engineering.cz/spoluprace/) · [Blog](https://beko-engineering.cz/blog/)
- [Vstup do oznamovacího systému](https://beko-engineering.cz/whistleblowing/) · [Oznamovací stránka ministerstva](https://oznamovatel.justice.cz/chci-podat-oznameni/)
- Po změně `routes.json`, `forms.json` nebo `SPEC.md` spusť `python3 build.py` ve složce balíčku. Výsledný `data.js` a samostatný náhled `mapa-beko.html` se vytvoří ze stejných dat. Znovu otevři `index.html` nebo samostatný náhled.
