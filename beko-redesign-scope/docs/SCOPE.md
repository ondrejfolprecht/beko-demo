# Projektový scope a postup v šesti fázích

**Verze 1.1 · 5. 11. 2026 · Přenositelné zadání pro implementaci**

Vizuální změna podle uživatele nahrazuje původní směr. LP je světlá, s bezpatkovým SF Pro pro text, technickými nadpisy Michroma, hranatými rohy a barvami původního webu BEKO. Dekorativní kresby jen tam, kde je uživatel výslovně požaduje. Reference jsou Sentry a Scalemont; Monoflow je vypuštěn. Aktuální provedení určuje DESIGN.md. Funkční rozsah a hranice fází se nemění.

## Cíl a výsledek

Vytvořit soudržný web BEKO Engineering v Next.js a TypeScriptu s vlastním designem postaveným na bezplatném shadcn/ui. Práce začíná celou landing page a postupuje k přehledovým a detailním šablonám. Výsledný rozsah je přesně 25 lokálních stránek podle `project.json`, včetně dvou článků a dvou variant kariérní přihlášky. Aplikace zůstává v témže repozitáři a má být použitelná pro další rozvoj.

Hlavní problém předchozího postupu byl vizuální drift mezi stránkami a dalšími referencemi. Projekt proto používá jednu vizuální smlouvu, schválenou LP a opakovanou kontrolu jejích screenshotů. Dílčí zpětná vazba se zapracuje do konkrétní části. Plošná změna systému vyžaduje explicitní rozhodnutí.

## Zdroje a jejich priorita

1. Aktuální výslovný pokyn uživatele a jeho schválení.
2. `AGENTS.md`, tento scope, `DESIGN.md`, `PAGES.md` a `QA.md`.
3. Schválená rozhodnutí a skutečná LP zaznamenaná v `DECISIONS.md`.
4. Přibalené reference s rolemi popsanými v `REFERENCES.md`.
5. Původní inventář, specifikace a audit v `source-audit/` jako doklad dosavadního webu.

Vizuální hierarchii určuje `DESIGN.md`. Funkční rozdíly oproti původnímu webu se řídí cílovým zadáním jednotlivé stránky a jeho schválenými změnami. Zpětnou vazbu a schválení vždy krátce zaznamenej.

## Pravidla práce

- Vyber a dokonči aktuální fázi. Všechny její technické podkroky, opravy a běžné kontroly proveď samostatně. Na konci se čeká na posouzení výsledku uživatelem. Pokyn pro jednu fázi autorizuje právě tuto fázi.
- Začni skutečnými referencemi. Před stavbou sepiš krátké konkrétní odvození kompozice, typografie, prostoru, grafiky a pohybu. Pak vytvoř LP podle tohoto odvození. Přípravné tokeny a miniukázka komponent jsou vnitřním krokem téže fáze.
- U každé nové šablony přenes výchozí grid, typografii, ovládání a rytmus schválené LP. Změnu sdílené komponenty ověř i na již hotových stránkách.
- Při problému s konkrétní částí nejdřív oprav tuto část. Důvod většího přestavění popiš a zapiš do rozhodnutí před plošnou změnou.
- Udržuj `PROGRESS.md` po každé relaci. Při obnovení práce prohlédni skutečné soubory a aktuální stav. Fáze má být reprodukovatelná i po změně chatu.
- Všechny ovládací prvky musejí mít definovanou akci. U budoucích stránek během rozpracování zobraz připravovaný stav nebo označený odkaz na originál. Ve finálním rozsahu je všech 25 lokálních cílů funkčních.

## Fáze 1 · Základ a celá landing page

**Vstupy.** `START-HERE.md`, `DESIGN.md`, všechny obrazové reference a videosnímky, P01, U01/U02/U11 z QA. Počet lokálních stránek po fázi je 1.

**1A · Převod referencí a technický základ.** Prohlédni Sentry.webp a snímky Sentry a Scalemont. Monoflow nepoužívej. Zaznamenej jejich role. Založ `web/` s Next.js App Routerem, TypeScriptem a Tailwindem. Použij podporovanou stabilní kombinaci Node.js a balíčků, ulož přesné verze do lockfile a dolož požadovanou verzi Node v README. Inicializuj shadcn a zaznamenej jeho base/registry. Založ tokeny, lokální display font a systémový SF Pro podle DESIGN.md a společné varianty ovládání. Použij jeden správce balíčků, výchozí je npm.

**1B · Proporce a vizuální motiv.** Vytvoř header, hero a první navazující sekci. Použij čistou sazbu bez technických skic; pro případovou ukázku pouze doložené obrazové podklady BEKO. Ověř poměr textu a grafiky v desktopovém i mobilním pohledu. V témže průchodu oprav nesoulad s referencemi. Obsahový obraz má vyhrazený prostor.

**1C · Dokončení LP.** Dokonči skladbu všech osmi částí podle DESIGN.md, footer, mobilní menu a cookie předvolby. Akce mají skutečné cíle v rámci dostupného prototypu nebo označené původní odkazy. Dodej celou LP, její mikrointerakce a reduced-motion variantu.

**1D · Kontrola a předání.** Proveď build, lint, typecheck a vizuální porovnání. Ulož screenshoty 1440 × 900, 390 × 844 a 768 × 1024 a plné LP. Zapiš konkrétní rozdíly vůči referencím a oprav je před předáním. Doplň README se spuštěním a aktuální stav. Stav fáze nastav na `review`.

**Výstupy.** Běžící plná LP, společný header/footer, tokeny, mobilní navigace, cookie předvolby a první vizuální baseline. Schválení uživatele uzavírá Fázi 1. Když uživatel vyžádá změny, pokračuj v této fázi a aktualizuj screenshoty.

## Fáze 2 · Služby a software

**Vstupy.** Schválená Fáze 1, P02–P12, U03/U04/U05. Počet lokálních stránek po fázi je 12.

Nejprve vytvoř jednu přehledovou a jednu detailní šablonu a porovnej je s LP. Potom naplň služby, Engineering, Design, Konstrukci, IT, AI a vzdělávání. Na vzdělávání zachovej čtyři kotvy a připrav společnou poptávku s viditelným kontextem kurzu.

Software sdružuje SpinFire a BE-Play. U SpinFire odděl vyhodnocení produktu, poptávku dema a podporu. Funkce, formáty a instalace jsou v rozsahu této verze sekcemi produktového detailu. Samostatná stránka aktualizací používá lokální strukturovaná data. Přímé stažení PDF a přechod na instalátor zůstávají dostupné přes ověřené externí adresy. V demo prostředí se soubory nespouštějí.

Založ sdílený formulářový rámec, který bude v další fázi použit i pro další žádosti. Zatím plně zprovozni místní simulaci dema a školení. Obecné poptávkové akce mohou do dokončení P23 otevřít společný lokální dialog s totožným datovým kontraktem. Po Fázi 3 se sjednotí s kontaktní cestou.

**Výstupy.** 11 nových stránek, dvě varianty formuláře, kontext kurzu, veřejné soubory a odkazy, vyzkoušené scénáře U03–U05, regresní screenshot LP a dvou nových šablon. Schválení porovnává i jednotnost stylu.

## Fáze 3 · Kariéra a formuláře

**Vstupy.** Schválená Fáze 2, P13–P16 a P23, U03/U06/U07/U09. Počet lokálních stránek po fázi je 17.

Vytvoř kontaktní stránku, společnou logiku simulace formulářů a přenos kontextu služby nebo produktu přes URL. Obecný kontakt funguje i při přímém vstupu. Neznámý kontext zobraz jako obecný a návštěvník ho může změnit.

Kariéra obsahuje doložené pozice, lokální filtr a dva plné detaily. Formuláře načítají variantu podle pozice. Povinnosti a lokality vycházejí z `source-audit/forms.json`. Přímý skok k přihlášce je dostupný hned u shrnutí. CV a motivační dopis mají viditelné stavy výběru, výměny a chyby. Případnou změnu povinnosti dokumentů zapiš ke schválení HR. V tomto rozsahu zachovej výchozí údaje a funkce.

Partnerská spolupráce obslouží obě formy, všechny obory a vícesouborovou přílohu. Zkrácení uspořádáním volitelných údajů může snížit vizuální zátěž při zachování dostupnosti polí. Souhlasy a newsletter jsou oddělené.

**Výstupy.** Pět nových stránek a funkční lokální stavy prázdné, vyplněné, chybné, odesílání, simulovaný úspěch a simulovaná chyba. Chybový scénář lze zapnout veřejně popsaným demo přepínačem v náhledu. Ověření příloh používá syntetické soubory a schválené ukázkové limity. Původní neznámé produkční limity se zaznamenají zvlášť.

## Fáze 4 · Firma, projekty a blog

**Vstupy.** Schválená Fáze 3, P17–P22, U08/U10. Počet lokálních stránek po fázi je 23.

Doplň O nás, přehled projektů a E-BOAT jako plný detail s galerií. Česká a slovenská kontaktní místa odkazují na vlastní stabilní kotvy v P23. Externí zahraniční kontakty zůstávají označené. Používej jeden zdroj kontaktních údajů.

Blog používá lokální data a jednu šablonu článku se dvěma odlišnými tématy. Filtry se řídí skutečnými štítky položek. Prázdný stav dovolí filtr zrušit. Návrat zachová použitý filtr, pokud je součástí URL. Newsletter má místní simulaci. Další články a projekty odkazují viditelně na originál.

**Výstupy.** Šest nových stránek, galerie, výpis s filtrem, dva články a newsletter. Screenshoty ověří, že dlouhá redakční stránka i galerie zůstávají součástí stejné rodiny jako LP.

## Fáze 5 · Důvěra a dokončení všech cest

**Vstupy.** Schválená Fáze 4, P24/P25, U11/U12 a úplná matice cest. Počet lokálních stránek po fázi je 25.

Doplň právní stránku a Whistleblowing. Převzaté právní texty označ datem zdroje a v předávacím seznamu je přiřaď k produkční kontrole vlastníkem BEKO. Oprav relativní odkazy ve všech formulářích a cookie liště. U externích oznamovacích vstupů ověř adresu a identifikátor organizace z inventáře.

Doplň přijetí, odmítnutí, vlastní výběr kategorií, uložení a pozdější změnu cookie předvoleb. Demo uchovává jen potřebnou volbu na zařízení. Analytické integrace mají připravený oddělený bod pro pozdější aktivaci. Předávací seznam uvádí, co potřebuje firemní účet a ověření.

Pro všech 25 cest doplň metadata, přehledné odkazy, aktivní navigaci, přímé načtení a užitečnou 404 pro skutečně neznámé adresy. Náhled má `noindex`; produkční indexaci zařaď do checklistu nasazení. Odkazy, které byly během vývoje připravované, nyní směřují na skutečné lokální cíle.

**Výstupy.** Poslední dvě stránky, všech 25 aktivních cest, žádné slepé odkazy v zamýšleném průchodu a jednotné chování souhlasu.

## Fáze 6 · Ověření, prezentace a předání

**Vstupy.** Schválená Fáze 5, kompletní QA. Počet lokálních stránek zůstává 25.

Projdi všechny U01–U12 a přímo načti každou adresu. Zkontroluj typické šířky, klávesnici, reduced motion, prázdné výsledky a formulářové chyby. Porovnej aktuální LP se schválenou baseline. Ověř alespoň jeden detail každé šablony a všechny dvě varianty žádosti.

Z čisté kopie ověř instalaci podle lockfile, build, typecheck a lint. Doplň README pro Windows i běžný terminál, přehled routes, použitých zdrojů a licencí, funkční/simulované/odložené části a kroky potřebné pro produkci. Nový commit či archiv nesmí vyžadovat původní absolutní cesty na autorově počítači.

Připrav krátký průchod pro CEO. LP a navigace → služba a kontext dotazu → software a demo → kariéra a žádost → blog a článek → kontakty a předvolby. Ukaž desktop i telefon. Kód lze předat v Git repozitáři nebo ZIPu. Náhled na hostingu se zveřejní až podle výslovného pokynu uživatele.

**Výstupy.** Reprodukovatelný zdroj, přehled kontrol, opravené blokující chyby, funkční prezentace a seznam přesně vymezených produkčních kroků.

## Architektura a předatelnost

| Vrstva | První rozsah | Budoucí pokračování |
|---|---|---|
| Stránky | Next.js App Router a sdílené šablony | Další detaily ve stejné aplikaci. |
| UI | shadcn + společné tokeny + vlastní sekce | Schválené varianty a další komponenty. |
| Obsah | Lokální typovaná data pro služby, produkty, články, pozice a kontakty | Jedno místo načítání lze připojit k vybranému CMS. |
| Formuláře | Sdílený model a lokální simulace | Serverové ověření, příjemci, doručování a ochrana před zneužitím. |
| Provoz | Lokální vývoj a sestavený náhled | Firemní hosting, redakce, přístupy, monitoring a odpovědný správce. |

Používej Server Components pro obsah a malé klientské komponenty pro interakce. UI potřebuje stabilní typy dat, například služba, pozice, článek a verze. Konkrétní adresy CMS a přístupové tokeny do komponent nepatří. Vrstva načítání má zůstat jednoduchá a odpovídat skutečným potřebám stránky.

Obsah může být v TypeScript objektech, JSON nebo MDX. Zvol jeden způsob pro daný typ a zaznamenej ho. Ukázkové obrázky musí mít rozměry, popisky a zdroj. Použité knihovny uzamkni lockfile. Licencované fonty a nutná oznámení přibal při implementaci.

## Hranice prvního rozsahu

První rozsah pokrývá funkčnost veřejného frontendu a demonstrační stavové přechody. Redakční přihlašování, MFA, databáze, skutečné ukládání CV, e-mailové doručování, produkční analytika a migrace všech původních URL se řeší jako další práce s vlastníkem BEKO. Každá odložená integrace má mít pojmenovaný bod napojení a kontrolní scénář. Přístupové údaje k jejímu dokončení nejsou předpokladem Fáze 1.
