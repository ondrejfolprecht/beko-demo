# UX audit a plán modernizace webu BEKO Engineering

**4. 11. 2026 · Podklad pro rozhodnutí a implementaci**

Největší tření je v cestě k akci. Uchazeč musí na mobilu dlouho hledat přihlášku, zájemce o kurz může skončit u jiné nabídky a některé odkazy na pobočky vedou na úvod. Modernizaci bych začal opravou těchto cest a společným chováním formulářů. Pak má smysl měnit navigaci a šablony stránek.

Audit vychází z inventáře 71 veřejných HTML adres a z cílené kontroly reprezentativních stránek v prohlížeči, včetně mobilního zobrazení 390 × 844 px. Vychází také z `SPEC.md`, `routes.json` a `forms.json` v balíčku. **Pozorování** popisuje stav webu, **návrh** popisuje cílovou změnu a **rozhodnutí** vyžaduje potvrzení vlastníka funkce. K dispozici byla veřejná část. Doručení formulářů, administrace, analytika a terénní data o rychlosti zůstávají k ověření. [Živý web BEKO](https://beko-engineering.cz/) · [XML mapa](https://beko-engineering.cz/sitemap_index.xml)

## Pořadí práce

| Priorita | Změna | Pracnost | Podmínka nasazení |
|---|---|---|---|
| **P0** | Opravit cíle kurzů, poboček, zásad a alternativního dema. Prověřit funkční oznamovací vstupy. | Malá až střední | Vlastník potvrdí sporné cíle a projde se skutečná cesta z místa kliknutí. |
| **P0** | Zpřístupnit volby cookies a upravit ovládání formulářových dialogů. | Malá až střední | Ověření s klávesnicí, dotykem a v čistém profilu. |
| **P1** | Nasadit sdílené chování formulářů. Pilotovat na náboru a poptávce školení. | Střední až velká | Srovnání polí, příloh, příjemců a potvrzení se současným webem ve stagingu. |
| **P1** | Zkrátit cestu k přihlášce, kurzu, demu, stažení a pobočce. | Střední | Scénáře lze dokončit na mobilu i bez myši a původní adresy mají funkční cíle. |
| **P2** | Zjednodušit úvod a menu, upravit archivy a zrychlit šablony. | Střední | Kontrola všech typů obsahu, navigačních cest a měření před a po změně. |

P0 opravuje doložené chování nebo chrání důležitý vstup. P1 snižuje tření v hlavních cestách. P2 řeší širší orientaci a výkon. Pracnost je orientační a závisí hlavně na přístupu k nastavení formulářů a jejich integracím.

## 1. Formuláře a hlavní cesty

### UX-01 · Společné chování formulářů · P1

**Pozorování.** Veřejná část má šest typů interních formulářů ve 46 výskytech. Rozdíly jsou v délce, povinnosti polí a přílohách. Například náborové kontaktní vstupy CAD konstruktéra neměly ve zkoumaném HTML nastavený `autocomplete`. Stav doručení a hlášky po odeslání nelze z veřejného formuláře potvrdit. [Přihláška CAD konstruktéra](https://beko-engineering.cz/kariera/cad-konstrukter/) · [Kontakty](https://beko-engineering.cz/kontakty/)

**Úprava.** Zavést společná pravidla pro popisky, nápovědu, označení povinných polí, chyby a potvrzení. Použít vhodné typy vstupů a automatické doplnění jména, e-mailu, telefonu a firmy. Po neúspěšném pokusu ukázat chybu u pole a u delších formulářů i souhrn s odkazy na chyby. Zachovat zadané hodnoty při opravě a rozlišit probíhající odeslání, úspěch a selhání spojení. Úspěch zobrazit po potvrzení serverem. Opakování po výpadku a dvojklik ošetřit tak, aby nevznikla druhá žádost. [W3C · Validace formulářů](https://www.w3.org/WAI/tutorials/forms/validation/) · [GOV.UK · Souhrn chyb](https://design-system.service.gov.uk/components/error-summary/)

**Hotovo, když** všech šest typů projde úspěchem, chybou pole a opakováním po výpadku ve stagingu. U každého se porovná cílová integrace, příjemce, data, přílohy, stav potvrzení a stávající souhlasy. Při opravě chyby se ověří i chování příloh. Pokud prohlížeč vyžaduje jejich nový výběr, rozhraní to konkrétně vysvětlí.

### UX-02 · Nábor a přílohy · P1

**Pozorování.** U CAD konstruktéra začínal formulář při šířce 390 px přibližně 2 924 px od horního okraje dokumentu. Při kontrole jsem nenašel viditelný odkaz z úvodu detailu přímo k žádosti. Všech 11 přihlášek vyžaduje CV a motivační dopis. Pravidla telefonu a lokality se liší. [Kariéra](https://beko-engineering.cz/kariera/) · [CAD konstruktér](https://beko-engineering.cz/kariera/cad-konstrukter/) · [SW vývojář](https://beko-engineering.cz/kariera/sw-vyvojar/)

**Úprava.** Hned u názvu pozice nabídnout přímý skok k přihlášce. U ní zopakovat název a dostupné lokality. Použít jednu šablonu přihlášky s konfigurací podle pozice. U příloh před výběrem uvést povolené typy a limity potvrzené správcem. Po výběru ukázat název souboru a umožnit výměnu či odebrání. Použít nativní výběr souboru i na mobilu. U pozice s jedinou lokalitou lze potvrzenou hodnotu předvyplnit a viditelně uvést. [GOV.UK · Nahrávání souborů](https://design-system.service.gov.uk/components/file-upload/)

**Rozhodnutí HR.** Prověřit, zda nábor potřebuje povinný motivační dopis při prvním kontaktu. Pokud ne, ponechat možnost nahrání a změnit povinnost až po schválení. Stejně posoudit povinný telefon u SW vývojáře a význam lokality pro doručení žádosti.

**Hotovo, když** z každého detailu stačí jedna akce k přihlášce, všech 11 variant přijímá správné lokality a staging ověří obě přílohy včetně jejich výměny a chybového stavu. Volba newsletteru zůstává samostatná a volitelná.

### UX-03 · Školení s přenosem kontextu · P0 + P1

**Pozorování.** Horní upoutávka na standardní kurz vede na kotvu rozšířeného kurzu. Čtyři kurzy mají vlastní kotvy a společnou poptávku. Ve viditelných polích poptávky není výběr kurzu. Případný přenos kontextu na server čeká na ověření. [Vzdělávání](https://beko-engineering.cz/vzdelavani/)

**Úprava.** Opravit chybnou kotvu. Hned v přehledu zpřístupnit srovnání všech čtyř kurzů podle cílové skupiny, předpokladů a doloženého rozsahu. U každého detailu nabídnout poptávku se zvoleným kurzem. V témže formuláři umožnit změnu nebo obecný dotaz. Před odesláním viditelně ukázat zvolený kurz. Stávající čtyři kotvy ponechat funkční.

**Hotovo, když** každá karta otevře správný detail a jeho poptávka převezme odpovídající kurz. Ve stagingu se ověří, že příjemce dostane stejnou hodnotu, kterou návštěvník viděl, a že stále lze poslat obecnou poptávku.

### UX-04 · SpinFire demo, eBook a instalace · P0 + P1

**Pozorování.** Demo je modal ze šesti adres včetně článku o DWG. eBook s ceníkem je přímý odkaz na PDF a příručka má samostatný odkaz na EXE a dokumentaci. U alternativního odkazu na demo prohlížeč odmítl certifikát. Na produktové stránce byl zachycen odkaz `http://z`. Při kontrole modal přesunul fokus na zavírací tlačítko a po jeho aktivaci ho vrátil na spouštěč. Stisk Escape v prověřené konfiguraci modal nezavřel. [SpinFire](https://beko-engineering.cz/spinfire/) · [Instalační příručka](https://beko-engineering.cz/spinfire/prirucka-spinfire/)

**Úprava.** Na produktové stránce odlišit tři cíle podle úlohy návštěvníka. Vyžádat demo, stáhnout eBook s ceníkem a najít instalaci nebo podporu. Pro demo použít jeden formulář s adresovatelným vstupem. Stávajících šest spouštěčů může dál otevírat dialog nad stejnou logikou. Dialog má mít český název, zavření klávesou Escape, zřetelné zavírací tlačítko a návrat fokusu. Doplnit funkční přímý vstup, pokud se dialog nenačte. Se správcem potvrdit platné náhrady obou chybných odkazů. [W3C · Vzor modálního dialogu](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

**Rozhodnutí obchodu.** Ověřit, k čemu se používá telefon a firma a zda je obchod potřebuje ještě před poskytnutím dema. Výchozí migrace zachová stávající pravidla. Případné zkrácení polí je samostatná změna.

**Hotovo, když** šest vstupů otevírá stejný typ žádosti, všechny odkazy na PDF zůstávají přímé a fungují vstupy do datových formátů, přehledu funkcí, aktualizací, příručky, instalátoru i dokumentace dodavatele.

### UX-05 · Spolupráce s menší počáteční zátěží · P1

**Pozorování.** Na mobilu je jeden formulář se 13 viditelnými poli a volbami, z nichž devět je povinných. Mezi povinnými jsou forma spolupráce, obor, firma, telefon a IČO. Formulář umožňuje přiložit více souborů. Rozhraní má česká pole a anglický odesílací ovladač. [Spolupráce](https://beko-engineering.cz/spoluprace/)

**Úprava.** Řadit otázky podle rozhodnutí návštěvníka. Nejprve forma a obor, potom kontaktní a identifikační údaje. Seskupit volitelný web, adresu a přílohy pod doplňující údaje s viditelným přístupem. Zachovat poznámku a možnost přidat více souborů. Použít jednotnou češtinu u ovládání a hlášek. Začít jedním formulářem s oddíly. K rozdělení na více obrazovek přistoupit jen tehdy, pokud prototyp prokáže jednodušší průchod.

**Rozhodnutí vlastníka spolupráce.** Ověřit, zda se IČO, název společnosti a telefon vyžadují u OSVČ i společnosti už při prvním kontaktu. Případné odložení do druhé fáze musí zachovat jejich získání tam, kde jsou potřeba.

**Hotovo, když** lze dokončit všechny kombinace obou forem a čtyř oborů a příjemce dostane správné údaje i více příloh. Ověřit, že volitelné údaje lze najít, vyplnit i přeskočit.

### UX-06 · Kontakt a newsletter · P1

**Pozorování.** Obecný dotaz je součást stránky Kontakty. Povinná je i firma. Samostatný newsletter má jediné povinné pole a je na blogu, článcích i archivních výpisech. Kontaktní a náborový formulář mají navíc samostatnou volitelnou volbu odběru. Propojení těchto vstupů s poskytovatelem newsletteru čeká na ověření. [Kontakty](https://beko-engineering.cz/kontakty/) · [Blog](https://beko-engineering.cz/blog/) · [Přihláška CAD konstruktéra](https://beko-engineering.cz/kariera/cad-konstrukter/)

**Úprava.** Na kontaktu rozlišit rychlý telefon či e-mail, vyhledání pobočky a odeslání dotazu. Ze stránek služeb odkázat na kontaktní formulář přímo a předat zvolenou službu jako viditelný, upravitelný kontext. Povinnost firmy přehodnotit, pokud se přes kontakt obsluhují i jednotlivci. Newsletter ponechat jako krátkou, samostatnou akci. Do společného formulářového chování zahrnout potvrzení a stav již přihlášené adresy podle možností integrace.

**Hotovo, když** obecný dotaz stále funguje bez výběru služby, kontakt je použitelný i jako přímý telefon nebo e-mail a všechny evidované vstupy newsletteru mají odpovídající pokračování. Nepovinný odběr se nemění v podmínku kontaktu ani náboru.

## 2. Orientace a dostupnost funkcí

### UX-07 · Pobočky a důležité odkazy · P0

**Pozorování.** Osm odkazů na detail pobočky v sekci O nás vede na úvod, přestože samostatné adresy poboček existují. Kontakty jsou rozdělené podle Česka a Slovenska. [O nás](https://beko-engineering.cz/o-nas/) · [Kontakty](https://beko-engineering.cz/kontakty/) · [XML mapa](https://beko-engineering.cz/sitemap_index.xml)

**Úprava a ověření.** Sjednotit seznam a detaily nad jedním zdrojem údajů. Každou pobočku propojit s vlastní ověřenou URL. Nabídnout přímé volání a případně e-mail či odkaz na trasu, pokud je údaj k dispozici. Zachovat existující zahraniční odkazy. Ověřit všech osm oprav z O nás, přímé adresy poboček a stejný telefon či adresu na seznamu i detailu. Souvisí s M01 a M04 v inventáři.

### UX-08 · Cookies a právní vstupy · P0

**Pozorování.** V prověřeném mobilním zobrazení bylo v cookie liště vidět tlačítko pro přijetí. Odmítnutí a předvolby byly v HTML, ale v tomto stavu se nezobrazovaly. Relativní odkaz na zásady se z vnořené stránky Kariéry rozbil. V zásadách je také odkaz `/kontakt`, který při inventarizaci vrátil 403. [Úvod](https://beko-engineering.cz/) · [Kariéra](https://beko-engineering.cz/kariera/) · [Zásady zpracování údajů](https://beko-engineering.cz/ochrana-osobnich-udaju/)

**Úprava a ověření.** V čistém stavu nabídnout srozumitelný přístup k přijetí, odmítnutí a nastavení. Zachovat možnost volbu později změnit. Použít správný cíl zásad z každé úrovně webu. V čistém profilu projít každou volbu na úvodu a na vnořené stránce. Ověřit přetrvání volby, změnu nastavení, dostupnost klávesnicí a odpovídající načítání skriptů podle schválené konfigurace správce.

### UX-09 · Externí oznamovací systém · P0

**Pozorování.** Z patičky vede cesta přes Whistleblowing do EWA nebo na ministerstvo. EWA odděluje nové hlášení, otevření existujícího hlášení a vstup řešitele. Na stránce ministerstva se v předchozím průchodu zobrazil technický zápis formuláře a kontakty. [Whistleblowing BEKO](https://beko-engineering.cz/whistleblowing/) · [Vstup ministerstva](https://oznamovatel.justice.cz/chci-podat-oznameni/)

**Úprava a ověření.** Zachovat vstup z patičky a jasně odlišit účely obou externích cest. Na stránce BEKO dát před přechodem vědět, že návštěvník pokračuje do externí služby. Ověřit adresu EWA včetně identifikátoru organizace, všechny tři vstupy a aktuální oficiální adresu ministerstva s vlastníkem procesu. Koncový test vést po otevření formuláře nebo přihlašovací obrazovky. Funkčnost odeslání lze prověřit v dohodnutém testovacím prostředí.

### UX-10 · Úvod, menu a dlouhé stránky · P2

**Pozorování.** Úvod používá dva karusely s nabídkou služeb a projektů. V přístupnostním stromu se opakovaly kopie odkazů na stejné položky. Mobilní navigace má rozbalovací větve. Ve službách, produktech a kariéře vedou důležité akce často přes delší obsah nebo další úroveň. [Úvod](https://beko-engineering.cz/) · [Služby](https://beko-engineering.cz/sluzby/) · [Software](https://beko-engineering.cz/software/)

**Úprava.** Zobrazit všechny současné odkazy z karuselů jako statické položky ve dvou sekcích. Využít krátký souhrn a přímé odkazy na hlavní úlohy. V menu oddělit odkaz na rozcestník od ovladače pro rozbalení. U dlouhých stránek použít navigaci v rámci stránky a stálé kotvy. Na detailech služeb usnadnit cestu k obecnému kontaktu, u produktů k akci i technické podpoře. Přehledy a podrobnosti udržet dostupné přímo z URL. [W3C · Navigace s rozbalovacími sekcemi](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)

**Hotovo, když** jde na telefonu i klávesnicí otevřít rodičovský rozcestník i jeho potomky, viditelný fokus nezakrývá hlavička a všechny služby, projekty a cíle původních karuselů mají přímý vstup. Ověřit i návrat z detailu a načtení odkazu s kotvou.

### UX-11 · Blog, archivy a produktové stránky · P2

**Pozorování.** V prověřených rubrikách a štítcích se opakoval stejný výpis článků. Archiv poboček zobrazuje blogovou šablonu. BE-Play je v menu a v rozcestníku, ale pozorované HTML mělo `noindex` a stránka chyběla v XML mapě. [Blog](https://beko-engineering.cz/blog/) · [Rubrika SpinFire](https://beko-engineering.cz/category/spinfire/) · [BE-Play](https://beko-engineering.cz/be-play/)

**Úprava a ověření.** Pokud se archivy používají jako filtry, vracet skutečně odpovídající články a umožnit kopírovat stav filtru jako URL. Zobrazit také stav bez výsledků. Zvlášť řešit archiv poboček. U nevyužitých adres rozhodnout podle reálných vstupů a odkazů, kam mají návštěvníka dovést. O indexaci BE-Play rozhodnout s vlastníkem. Ověřit přímé adresy článků, fungování filtrů, samostatný přístup k produktům a newsletter na evidovaných typech výpisu.

### UX-12 · Přístupnost a rychlost šablon · P1 + P2

Přístupnost ověřit na skutečných cestách. Pracovat s cílem WCAG 2.2 AA. Prioritu mají popisky, viditelný a nezakrytý fokus, klávesnice, cíle na dotyk, změna rozložení při zvětšení, textové chyby a oznamování výsledku odeslání. Ověřit na telefonu, s klávesnicí a alespoň s jednou čtečkou obrazovky. Automatická kontrola je doplněk ručního průchodu. [W3C · WCAG 2.2](https://www.w3.org/TR/WCAG22/)

Výkon nejprve změřit na úvodu, pozici, SpinFire a stránce s formulářem. Podle měření řešit velikost obrázků, rezervaci prostoru před načtením, odložené načítání obsahu pod prvním zobrazením a skripty spouštěné zbytečně na všech šablonách. Po nasazení sledovat 75. percentil reálných návštěv samostatně pro mobil a desktop. Referenční cíle jsou LCP do 2,5 s, INP do 200 ms a CLS do 0,1. Bez dostatku terénních dat porovnat opakovaná laboratorní měření ve stejném prostředí. [Google · Core Web Vitals](https://web.dev/articles/vitals)

## 3. Postup implementace a kontrola zachování funkcí

1. **Založit kontrolní seznam z inventáře.** Každý uzel a cesta dostane cílovou URL nebo odpovídající akci. Zvlášť evidovat kotvy, soubory, modaly, externí vstupy a přesměrování. U staré adresy s novým cílem ověřit přímý přechod bez řetězu. Využít rozhodnutí M01–M07 z `routes.json`.
2. **Nejdřív opravit P0.** Odkazy, kotvy a přístup k volbám opravit samostatně. Cíle, které nelze určit z veřejného webu, přiřadit vlastníkovi. Ověřit z konkrétní stránky a navigačního prvku.
3. **Zmapovat produkční integrace před výměnou formulářů.** Správce potvrdí příjemce, ukládání dat, formáty příloh, případné návaznosti na CRM a newsletter, potvrzení a hlášky. Ve stagingu použít testovací příjemce a syntetické údaje.
4. **Pilotovat nábor a školení.** Porovnat průchod starou a novou verzí pro CAD konstruktéra, SW vývojáře a standardní kurz. Nejprve změnit vstup a rozhraní nad stávajícím doručováním, pokud to integrace umožní. Změnu příjemce nebo integrace nasadit samostatně. Po ověření rozšířit společná pravidla na kontakt, spolupráci, newsletter a SpinFire demo.
5. **Před spuštěním projít matici níže.** K ověření použít scénáře F01–F08 ze `SPEC.md` i kontroly v auditu. U každé změny zaznamenat výsledek a vlastníka. Chybějící doručení nebo ztracený vstup řešit před přepnutím. U formulářů si připravit návrat na předchozí rozhraní a potvrzené doručování.
6. **Po spuštění ověřit běžné cesty a chybové stavy.** Měřit počet kroků k akci, dokončení z otevřeného formuláře, chyby při validaci a doručení a nefunkční přechody. Do událostí ukládat typ formuláře, krok a kód chyby. Hodnoty polí, kontakty, názvy příloh a obsah hlášení do analytiky neposílat. Pro EWA vyhodnocovat dostupnost veřejného vstupu.

| Funkce k zachování | Kontrola před vydáním |
|---|---|
| **Navigace a obsah** | Všech 71 evidovaných HTML adres má funkční cíl nebo schválené přesměrování. Služby, produkty, projekty, články, pobočky a archivy jsou dostupné z odpovídajících vstupů. |
| **Nábor** | Všech 11 variant, lokality, oba typy příloh, poznámka, souhlasy a správné směrování žádostí. |
| **SpinFire a BE-Play** | Šest vstupů do dema, eBook přímo jako PDF, dokumentace, funkce, formáty, aktualizace, instalace a samostatný vstup BE-Play. |
| **Vzdělávání** | Všechny čtyři kotvy, poptávka konkrétního kurzu i obecná poptávka. |
| **Kontakt a spolupráce** | Telefon a e-mail, české i slovenské pobočky, oba typy partnerů, všechny obory, přílohy a potvrzený příjemce. |
| **Newsletter** | 26 evidovaných výskytů má stejnou nebo schválenou náhradní cestu k odběru. Samostatná volba v náboru a kontaktu má potvrzenou návaznost. |
| **Cookies, zásady a oznámení** | Přijetí, odmítnutí, předvolby a pozdější změna, funkční zásady, veřejné vstupy EWA a odkaz na ministerstvo. |

Položku implementace lze uzavřít, když má schválenou cílovou změnu, doloženou kontrolu zachování funkce a ověřené chování při chybě. Čísla v auditu popisují snímek současného webu. Seznam jednotlivých výskytů zůstává v JSON inventáři.
