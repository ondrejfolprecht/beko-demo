# Začni tady

Rozbal celý ZIP do jedné složky na domácím PC a otevři tuto složku v Codexu jako projekt. Ponech vedle sebe dokumenty, reference i složku `source-audit/`. Vizuální přehled otevřeš souborem `index.html` v běžném prohlížeči. Dokumenty lze číst i bez něj.

## První zpráva pro Codex

> Přečti AGENTS.md, START-HERE.md a dokumenty, na které odkazují. Prohlédni přibalené reference. Začni Fází 1 podle docs/SCOPE.md a stav veď v PROGRESS.md. Vytvoř aplikaci ve web/. Dokonči celou landing page včetně mobilní navigace a porovnání s referencemi. Potom mi ji ukaž ke schválení. Při běžných rozhodnutích v rámci fáze pokračuj samostatně.

Pokud aplikace v `web/` už existuje, tento pokyn znamená navázat na její aktuální stav. Při návratu do projektu napiš „Pokračuj v aktuální fázi podle PROGRESS.md“. Po schválení LP napiš „Schvaluji Fázi 1, pokračuj Fází 2“.

## Co je uvnitř

- `docs/SCOPE.md` určuje šest fází, výstupy a přechody mezi nimi.
- `docs/DESIGN.md` určuje společný vzhled a úpravy shadcn komponent.
- `docs/PAGES.md` určuje obsahovou a funkční strukturu všech 25 cílových stránek.
- `docs/QA.md` obsahuje kontrolní scénáře a podmínky předání.
- `docs/REFERENCES.md` vysvětluje roli každé reference a snímky z videí.
- `docs/DECISIONS.md` je stručný záznam výchozích voleb a pozdějších schválení.
- `PROGRESS.md` je místo pro stav práce a předání mezi jednotlivými chaty.
- `project.json` je strojově čitelný seznam stránek, fází a scénářů.
- `references/originals/` obsahuje všech pět dodaných souborů beze změny. `references/frames/` obsahuje náhledy pro rychlé prohlížení.
- `source-audit/` obsahuje mapu současného webu, původní specifikaci, UX audit a inventář adres a formulářů.

## K čemu je tento balíček

Cílem je soudržný prezentační web se skutečnými stránkami a kompletními ukázkovými cestami. Články a pozice budou lokální data. V první fázi se vytváří použitelný frontend, který půjde dál rozvíjet v témže repozitáři. Rozsah začíná LP a postupně roste na 25 stránek.

Pokročilé produkční napojení potřebuje později vlastníka a přístupy BEKO. Odesílání žádostí se v tomto rozsahu simuluje lokálně. Volba CMS zůstává otevřená. Spuštění vývoje může vyžadovat internet pro instalaci balíčků a fontů. Samotný tento dokumentační web a přibalené reference fungují offline.

## Jak upravovat zadání

Texty upravuj v souborech Markdown. Při změně rozsahu udržuj shodný seznam v `project.json` a `docs/PAGES.md`. Vzhled přehledu je v `brief.css`, jeho šablona v `tools/overview-template.tmpl`.

Po úpravě dokumentů obnov `index.html` příkazem `python3 tools/build-overview.py` z kořene této složky. Na Windows lze použít `py tools/build-overview.py`. Generátor potřebuje jen Python 3, bez dalších balíčků. Pro běžné prohlížení ho spouštět nemusíš. Vývojářský agent má po změně zadání přehled znovu vygenerovat.
