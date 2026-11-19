# 25 cílových stránek a pokrytí funkcí

Tento seznam určuje cílovou ukázku. Původní audit obsahuje 71 HTML adres. Výběr níže pokrývá všechny hlavní rodiny uživatelských cest v demu pomocí 25 lokálních stránek, sdílených komponent a označených externích odkazů.

Pro obsah a původní URL použij `source-audit/routes.json` a `source-audit/forms.json`. V detailu staré mapy jsou odkazy na zdroje. Při chybějícím podkladu použij stručný označený ukázkový text a zaznamenej to. Nové obchodní reference, statistiky a certifikace musí mít doložený zdroj.

## Přehled implementace

| ID | Stránka | URL | Fáze | Šablona |
|---|---|---|---|---|
| P01 | Úvod / landing page | `/` | 1 | landing |
| P02 | Služby | `/sluzby/` | 2 | overview |
| P03 | Engineering | `/engineering/` | 2 | overview |
| P04 | Design | `/design/` | 2 | service |
| P05 | Konstrukce | `/konstrukce/` | 2 | service |
| P06 | IT služby | `/it-sluzby/` | 2 | service |
| P07 | AI řešení | `/ai-reseni/` | 2 | service |
| P08 | Vzdělávání | `/vzdelavani/` | 2 | course |
| P09 | Software | `/software/` | 2 | overview |
| P10 | SpinFire Insight | `/spinfire/` | 2 | product |
| P11 | BE-Play | `/be-play/` | 2 | product |
| P12 | Aktualizace SpinFire | `/spinfire/novinky-a-aktualizace/` | 2 | release |
| P13 | Kariéra | `/kariera/` | 3 | jobs |
| P14 | CAD konstruktér | `/kariera/cad-konstrukter/` | 3 | job |
| P15 | SW vývojář | `/kariera/sw-vyvojar/` | 3 | job |
| P16 | Spolupráce | `/spoluprace/` | 3 | form |
| P17 | O nás | `/o-nas/` | 4 | company |
| P18 | Interní projekty | `/interni-projekty/` | 4 | projects |
| P19 | BEKO E-BOAT | `/beko-e-boat/` | 4 | project |
| P20 | Blog | `/blog/` | 4 | articles |
| P21 | Automatizace EA Partner | `/automatizace-ea-partner/` | 4 | article |
| P22 | Průvodce architekturou RAG | `/kompletni-pruvodce-architekturou-rag-2026/` | 4 | article |
| P23 | Kontakty | `/kontakty/` | 3 | contact |
| P24 | Ochrana osobních údajů | `/ochrana-osobnich-udaju/` | 5 | legal |
| P25 | Whistleblowing | `/whistleblowing/` | 5 | legal |

## Funkční vymezení

Funkční ukázka zahrnuje navigaci, čtení všech cílových stránek, formuláře a jejich varianty, výběr souborů, filtrování, galerii, právní informace a správu cookie předvoleb. Odesílání je lokální simulace. Instalátor, PDF a EWA používají označené externí cíle. Toto rozdělení se zobrazí i v předávacím README aplikace.

Detaily funkcí SpinFire, datové formáty a instalace se v této verzi zobrazí jako sekce na P10. Doplnit původní odkazy na úplné příručky. Staré samostatné URL se při případném ostrém nasazení řeší migrační mapou. V této fázi jde o záměrný rozsah prototypu. Funkce stahování a podpory zůstávají dostupné.

Ostatní pozice, projekty a články v přehledech otevři na původním webu s viditelným označením „Původní web“. Odkazy mimo rozsah mají být skutečné. Během nehotových fází má položka budoucí lokální stránky stav „Připravujeme v další fázi“ nebo označený odkaz na originál. Na konci Fáze 5 jsou lokální cíle ze seznamu plně dostupné.

## Specifikace po stránkách

### P01 · Úvod / landing page

Cesta `/` · Fáze 1 · šablona `landing`.

**Úloha návštěvníka.** Přesvědčit velkého zákazníka, že BEKO je prvotřídní dodavatel, a dovést ho ke kontaktu nebo do služeb.

**Skladba.** Hero s animovanou skicou na gradientu z barev BEKO, představení firmy s čísly, carousel klientů, stručné karty služeb, mapa procesu spolupráce s výzvou k akci na případové studie, krátké projekty, standardy s interaktivní mapou poboček a kontakt. SF Pro pro text, Michroma pro hlavní nadpisy, hranaté rohy, barvy původního webu.

**Ověřitelné chování.** Mobilní menu, skoky mezi sekcemi, odkazy na dostupné části a cookie předvolby. Scénáře U01, U02, U11.

### P02 · Služby

Cesta `/sluzby/` · Fáze 2 · šablona `overview`.

**Úloha návštěvníka.** Vybrat oblast podle potřeby zákazníka.

**Skladba.** Čtyři oblasti se srozumitelnými přínosy, odvětví, odkazy na detaily a obecná poptávka.

**Ověřitelné chování.** Přímé odkazy a kontakt s kontextem zvolené služby. Scénáře U03.

### P03 · Engineering

Cesta `/engineering/` · Fáze 2 · šablona `overview`.

**Úloha návštěvníka.** Rozlišit design a konstrukční vývoj.

**Skladba.** Vysvětlení rozsahu vývoje, přehled Design / Konstrukce, postup práce a používané nástroje.

**Ověřitelné chování.** Navigace do obou detailů a předání kontextu poptávky. Scénáře U03.

### P04 · Design

Cesta `/design/` · Fáze 2 · šablona `service`.

**Úloha návštěvníka.** Ukázat průběh návrhu a jeho výstupy.

**Skladba.** Krátký hero, možnosti spolupráce, kroky návrhu, ukázka výstupu, související projekt, FAQ.

**Ověřitelné chování.** Kontaktní akce s kontextem Design. Scénáře U03.

### P05 · Konstrukce

Cesta `/konstrukce/` · Fáze 2 · šablona `service`.

**Úloha návštěvníka.** Dovést zájemce o vývoj k poptávce.

**Skladba.** Služby a výstupy, proces od konceptu po dokumentaci, technická ukázka, technologie, související projekt.

**Ověřitelné chování.** Referenční cesta LP → Služby → Konstrukce → Kontakty. Scénáře U03.

### P06 · IT služby

Cesta `/it-sluzby/` · Fáze 2 · šablona `service`.

**Úloha návštěvníka.** Ukázat zakázkový vývoj a automatizaci.

**Skladba.** CAD automatizace, aplikace, integrace, embedded a způsoby spolupráce.

**Ověřitelné chování.** Kontaktní akce s kontextem IT. Scénáře U03.

### P07 · AI řešení

Cesta `/ai-reseni/` · Fáze 2 · šablona `service`.

**Úloha návštěvníka.** Vysvětlit cestu od analýzy dat k nasazení AI.

**Skladba.** AI Readiness, konkrétní třídy použití, integrace, provoz a FAQ.

**Ověřitelné chování.** Kontaktní akce s kontextem AI. Scénáře U03.

### P08 · Vzdělávání

Cesta `/vzdelavani/` · Fáze 2 · šablona `course`.

**Úloha návštěvníka.** Vybrat vhodný kurz a poptat ho.

**Skladba.** Srovnání čtyř kurzů a detailní sekce se stávajícími kotvami zakladni-kurz, standardni-kurz, rozsireny-kurz a rekvalifikacni-kurz.

**Ověřitelné chování.** Shadcn Dialog nebo inline formulář se zvoleným a změnitelným kurzem. Scénáře U04.

### P09 · Software

Cesta `/software/` · Fáze 2 · šablona `overview`.

**Úloha návštěvníka.** Vybrat produkt podle úlohy návštěvníka.

**Skladba.** SpinFire a BE-Play, srovnání účelu, oddělená cesta pro zájemce a stávajícího uživatele.

**Ověřitelné chování.** Odkazy na produkty a podporu. Scénáře U05.

### P10 · SpinFire Insight

Cesta `/spinfire/` · Fáze 2 · šablona `product`.

**Úloha návštěvníka.** Vyhodnotit produkt, otevřít demo nebo najít podporu.

**Skladba.** Přínosy, funkce, datové formáty jako sekce, FAQ a jasně oddělená podpora. Instalace jako sekce s odkazy na dokumentaci a EXE.

**Ověřitelné chování.** Žádost o demo, přímé PDF, externí instalátor, dokumentace a aktualizace. Scénáře U05.

### P11 · BE-Play

Cesta `/be-play/` · Fáze 2 · šablona `product`.

**Úloha návštěvníka.** Ukázat nástroj pro správu CATIA V5.

**Skladba.** Účel, hlavní funkce, požadavky, přínosy pro správce a kontaktní akce.

**Ověřitelné chování.** Poptávka produktu s předáním kontextu. Scénáře U03, U05.

### P12 · Aktualizace SpinFire

Cesta `/spinfire/novinky-a-aktualizace/` · Fáze 2 · šablona `release`.

**Úloha návštěvníka.** Najít konkrétní zprávu o vydání softwaru.

**Skladba.** Lokální seznam verzí s datem, dostupnými poznámkami a odkazy dodavatele. Data mohou sdílet editorovou strukturu s článkem.

**Ověřitelné chování.** Kotvy na verze a cesta do podpory či dema. Scénáře U05.

### P13 · Kariéra

Cesta `/kariera/` · Fáze 3 · šablona `jobs`.

**Úloha návštěvníka.** Vybrat relevantní nabídku práce.

**Skladba.** Firemní prostředí a seznam 11 doložených nabídek. Dva detaily jsou součástí této verze. Ostatní mají označený přechod na původní web.

**Ověřitelné chování.** Jednoduchý filtr lokality, počet výsledků a prázdný stav. Scénáře U06.

### P14 · CAD konstruktér

Cesta `/kariera/cad-konstrukter/` · Fáze 3 · šablona `job`.

**Úloha návštěvníka.** Přihlásit se na konstrukční pozici.

**Skladba.** Shrnutí, lokality, náplň a požadavky, benefity, přímý skok k přihlášce.

**Ověřitelné chování.** Žádost s lokalitou, telefonem, CV, motivačním dopisem, poznámkou a volbou newsletteru podle výchozích dat. Scénáře U06, U09.

### P15 · SW vývojář

Cesta `/kariera/sw-vyvojar/` · Fáze 3 · šablona `job`.

**Úloha návštěvníka.** Prověřit druhou variantu stejné přihlášky.

**Skladba.** Stejná šablona pozice s daty SW vývojáře.

**Ověřitelné chování.** Povinný telefon a odlišná povinnost lokality. Stejná sdílená logika formuláře. Scénáře U06, U09.

### P16 · Spolupráce

Cesta `/spoluprace/` · Fáze 3 · šablona `form`.

**Úloha návštěvníka.** Nabídnout spolupráci jako OSVČ nebo společnost.

**Skladba.** Účel spolupráce, volby formy a oboru, jeden členěný formulář.

**Ověřitelné chování.** Všechny kombinace forem/oborů, více příloh, volitelné údaje a simulované potvrzení. Scénáře U07, U09.

### P17 · O nás

Cesta `/o-nas/` · Fáze 4 · šablona `company`.

**Úloha návštěvníka.** Vysvětlit zázemí firmy a navést na kontakt či portfolio.

**Skladba.** Kompetence, hodnoty, ověřené informace, odkazy na kontaktní místa, projekty a kariéru.

**Ověřitelné chování.** Jednotné odkazy na pobočky v kontaktní stránce a na zahraniční zdroje. Scénáře U08.

### P18 · Interní projekty

Cesta `/interni-projekty/` · Fáze 4 · šablona `projects`.

**Úloha návštěvníka.** Vybrat ukázku vlastní vývojové práce.

**Skladba.** Čtyři doložené projekty jako přehled. E-BOAT má lokální detail. Ostatní mají označený přechod na původní detail.

**Ověřitelné chování.** Přechod na projekt a související služby. Scénáře U08.

### P19 · BEKO E-BOAT

Cesta `/beko-e-boat/` · Fáze 4 · šablona `project`.

**Úloha návštěvníka.** Ukázat design a konstrukci na konkrétním projektu.

**Skladba.** Vlastní přehled projektu, obrazová galerie, koncept a technické informace dostupné v podkladech.

**Ověřitelné chování.** Galerie klávesnicí i dotykem a související kontakt. Scénáře U08.

### P20 · Blog

Cesta `/blog/` · Fáze 4 · šablona `articles`.

**Úloha návštěvníka.** Prohlédnout redakční obsah a přihlásit se k odběru.

**Skladba.** Přehled osmi doložených článků. Dva mají lokální detail. Ostatní vedou označeně na původní web.

**Ověřitelné chování.** Filtr tématu, prázdný stav, newsletter a návrat z článku. Scénáře U10.

### P21 · Automatizace EA Partner

Cesta `/automatizace-ea-partner/` · Fáze 4 · šablona `article`.

**Úloha návštěvníka.** Ukázat společnou šablonu článku na případové studii.

**Skladba.** Nadpis, perex, metadata dostupná v podkladech, čitelný text, obrazový obsah a související SpinFire.

**Ověřitelné chování.** Newsletter a přechod na produkt. Scénáře U10, U05.

### P22 · Průvodce architekturou RAG

Cesta `/kompletni-pruvodce-architekturou-rag-2026/` · Fáze 4 · šablona `article`.

**Úloha návštěvníka.** Ověřit stejnou šablonu s odlišným tématem a délkou.

**Skladba.** Tentýž redakční systém s technickým textem a návazností na AI služby.

**Ověřitelné chování.** Sdílení prostým odkazem, související obsah a newsletter. Scénáře U10, U03.

### P23 · Kontakty

Cesta `/kontakty/` · Fáze 3 · šablona `contact`.

**Úloha návštěvníka.** Najít pobočku nebo odeslat obecný dotaz.

**Skladba.** ČR/SR a všechny doložené kontaktní pobočky se stabilními kotvami, telefon/e-mail a formulář.

**Ověřitelné chování.** Kontext služby z URL, obecný vstup, volitelný newsletter, chyby a lokální potvrzení. Scénáře U03, U08, U09.

### P24 · Ochrana osobních údajů

Cesta `/ochrana-osobnich-udaju/` · Fáze 5 · šablona `legal`.

**Úloha návštěvníka.** Zachovat dostupné informace o zpracování údajů.

**Skladba.** Čitelná právní šablona s dokumentem doloženým současným webem a jeho zdrojem.

**Ověřitelné chování.** Odkazy ze všech formulářů i patičky, bez slepých relativních cest. Scénáře U11.

### P25 · Whistleblowing

Cesta `/whistleblowing/` · Fáze 5 · šablona `legal`.

**Úloha návštěvníka.** Najít správný veřejný oznamovací vstup.

**Skladba.** Shrnutí dostupných cest a přímé odkazy do EWA a na ministerstvo.

**Ověřitelné chování.** Jasný externí přechod, EWA včetně organizace a dostupné přístupy pro oznamovatele/řešitele. Scénáře U12.

