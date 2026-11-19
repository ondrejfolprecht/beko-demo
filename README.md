# BEKO Engineering

Redesign je rozdělený do šesti fází podle [nového scope](beko-redesign-scope/START-HERE.md). Aplikace v `web/` navazuje na čistý základ Next.js. Aktuální stav fáze a předání jsou v [PROGRESS.md](beko-redesign-scope/PROGRESS.md) a souhrn změn v [CHANGELOG.md](CHANGELOG.md).

## Lokální spuštění

Ověřeno s Node.js 22.14.0 a npm 10.9.2. Požadavek aplikace je Node.js alespoň 22.14.0 a npm alespoň 10. Doporučená verze je také v `.nvmrc`.

Z kořene projektu spusť v běžném terminálu nebo ve Windows PowerShellu následující příkazy.

```bash
cd web
npm ci
npm run dev
```

Otevři [localhost:3000](http://localhost:3000/). Pro další spuštění stačí `npm run dev`. Pro náhled pouze na loopbacku použij `npm run dev -- --hostname 127.0.0.1`.

## Ověření

Spouští se v `web/`.

```bash
npm run lint
npm run build
npm run typecheck
```

Produkční náhled sestavené aplikace spustíš příkazem `npm run start`.

## Fáze 1

Světlá landing page, která představuje BEKO jako prvotřídního dodavatele technologických firem. Části a jejich stav jsou v [LANDING-PARTS.md](beko-redesign-scope/docs/LANDING-PARTS.md).

Fungují kotvy, rozbalovací navigace, mobilní menu, výběr poboček na interaktivní mapě, přímý telefon a e-mail a cookie předvolby uložené v zařízení. Odkazy se šipkou vedou na stávající web BEKO. Další lokální stránky, formuláře a filtry mají navazující fáze. CMS, doručování a produkční analytika mají samostatnou produkční etapu. Demo má metadata `noindex`.

## UI a obsah

- Next.js 16.4.5, React 19.3.0, TypeScript, Tailwind CSS 4, Motion 14 a MapLibre GL přes shadcn registr mapcn. Přesné verze jsou v `web/package-lock.json`.
- shadcn/ui, základ Radix a styl `radix-nova`, konfigurace v `web/components.json`. Komponenty jsou upravené přímo v `web/components/ui/`.
- Sekce LP jsou v `web/components/sections/`, sekce pro budoucí podstránky v `web/components/subpages/`, animace v `web/components/motion/`, sdílené části v `web/components/site/`, obsah v `web/content/site.ts`, tokeny v `web/app/globals.css`.
- Text používá SF Pro systémově na Apple zařízeních, jinde Segoe UI nebo Arial. SF se do repozitáře nebalí.
- Hlavní nadpisy používají Michromu 400. Soubory a OFL licence jsou v `web/public/fonts/`, zdroj `@fontsource/michroma@5.3.0`.
- Pravidla vzhledu a textů včetně zákazů AI rukopisu jsou v [DESIGN.md](beko-redesign-scope/docs/DESIGN.md).

## Zdrojové podklady a oprávnění

- Logo pochází z uživatelem dodaného `BekoLogo.svg`. Pro web je z něj připravená barevná varianta v `web/public/brand/`.
- Mapové podklady poskytuje CARTO a OpenStreetMap. Před produkcí ověřit licenční podmínky. Worker MapLibre je v `web/public/maplibre/`, po aktualizaci balíčku `maplibre-gl` ho znovu zkopíruj.
- Loga v hero jsou stažená ze Simple Icons a Wikimedia Commons, [zdroje](web/public/images/logos/SOURCES.md). Výběr firem určil uživatel. Vztahy a práva k logům musí před zveřejněním potvrdit BEKO.
- Případové studie vycházejí z článků na `beko-engineering.cz`.
- Pozadí hero jsou uživatelem dodané vygenerované vizualizace konceptu auta (`LightDesktop`, `DarkDesktop`, `LightMobile`, `DarkMobile` v kořeni projektu), optimalizované do `web/public/images/hero/`. Nejde o skutečný projekt BEKO.
- Fotografie, rendery a obrazovky softwaru pocházejí z `beko-engineering.cz` a načítají se přes `next/image`, adresy jsou v `web/content/site.ts`. Demo proto potřebuje připojení k internetu. Použití je pro interní demo. Před zveřejněním oprávnění ověří vlastník BEKO a obrázky se přenesou do repozitáře.
- [Firemní údaje a kontakt](https://beko-engineering.cz/), [SpinFire](https://beko-engineering.cz/spinfire/) a [BE-Play](https://beko-engineering.cz/be-play/) vycházejí z veřejného webu.
- Licence shadcn komponent je v `web/components/ui/LICENSE.md`. Lucide ikony mají licenci ISC v jejich npm balíčku.
- Originální reference a jejich původ eviduje `beko-redesign-scope/references/manifest.json`. Slouží jako podklad návrhu.

## Kontrola vzhledu

[Aktuální screenshoty a výsledky](web/docs/qa/phase-1/rebuild/README.md) obsahují desktop 1440 × 900, tablet 768 × 1024, mobil 390 × 844, šířku 360 px, celé stránky a reduced motion. Omezení kontroly jsou ve stejném záznamu.
