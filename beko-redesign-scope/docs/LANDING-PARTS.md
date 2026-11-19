# Části landing page

Struktura a pořadí vycházejí z [dokumentu s textacemi](../BEKO_Landing_page_texty.docx). Landing se upravuje po jednotlivých částech a každý krok schvaluje uživatel. Dne 8. 11. 2026 uživatel výslovně zadal celkovou revizi napříč LP; změny vizuálu a implementace jsou popsány v QA refinement. Další obsahové části dál vznikají postupně.

V kódu odpovídá každé části jeden obal `data-part` v `web/app/page.tsx`.

| Část | Stav | Současná komponenta | Co dokument přidává nebo mění |
|---|---|---|---|
| 01 Hero a hlavní sdělení | Schváleno uživatelem | `hero.tsx`, `hero-background.tsx` | Hotovo: vlastní nadpis a podnadpis od uživatele mimo dokument, výzvy z varianty A |
| 02 Klientská loga | Schváleno uživatelem, je součástí hero | `client-logos.tsx` | Hotovo: nadpis a výběr log od uživatele. Vztahy a loga musí potvrdit BEKO |
| 03 Představení firmy a čísla | Schváleno uživatelem, nově pod čísly video k posouzení | `about.tsx`, `about-video.tsx` | Varianty textu, mise, hodnoty, historie, potvrzená čísla |
| 04 Služby a jejich použití | Schváleno uživatelem | `services.tsx` | Úvod, dvě sady textů do karet, záchytná věta pod službami |
| 05 Projekty a výsledky | Schváleno uživatelem | `projects-teaser.tsx` | Software jako jeden z boxů, zákaznický příběh EA Partner |
| 06 Průběh a formy spolupráce | Průběh schválen uživatelem, za ním pás s claimem | `process.tsx`, `claim-band.tsx` | Čtyři kroky místo současných pěti, tři formy zapojení, texty k důvěře |
| 07 Blog a newsletter | Postaveno podle dokumentu, čeká na schválení | `blog.tsx`, `newsletter-form.tsx` | Celá část včetně formuláře a stavových textů |
| 08 Časté otázky | Postaveno podle dokumentu, čeká na schválení | `faq.tsx` | Hotovo: nadpis, úvod a šest otázek z dokumentu, výzva Zeptat se přímo |
| 09 Pobočky a kontakt | Krátký pás, čeká na schválení | `contact-band.tsx` | Na pokyn uživatele jen závěrečný pás s výzvou, e-mailem a telefonem. Formulář a mapa (`contact.tsx`, `contact-form.tsx`, `office-map.tsx`) patří na stránku Kontakt |
| 10 Footer | Postaveno podle dokumentu, čeká na schválení | `site-footer.tsx` | Hotovo: světlá patička, podpis značky z varianty A, čtyři skupiny odkazů, řádek s kariérou, informace a předvolby |

Blok Standardy byl na pokyn uživatele odstraněn. Mezi částmi 06 a 07 je místo něj velký pohyblivý pás s claimem BEKO: NO LIMITS.

Tmavý režim podporuje celá landing page. Bez uložené volby se řídí nastavením systému, přepínač v hlavičce volbu uloží. Popis tokenů je v [QA tmavého režimu](../../web/docs/qa/phase-1/dark-mode/README.md).

Dokument ke každé části uvádí varianty A, B a C. Uživatel vybírá při práci na dané části. Texty označené v dokumentu k potvrzení musí před publikací schválit BEKO.
