"use client";

import { Check, ChevronDown } from "lucide-react";
import { DropdownMenu } from "radix-ui";

const languages = [
  { code: "CS", name: "Čeština", lang: "cs", current: true },
  { code: "EN", name: "English", lang: "en" },
  { code: "DE", name: "Deutsch", lang: "de" },
  { code: "FR", name: "Français", lang: "fr" },
  { code: "ES", name: "Español", lang: "es" },
];

/**
 * Language menu. Only Czech exists so far: the other languages show where the switch will be,
 * but they cannot be chosen and say so.
 */
export function LanguageTag() {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger className="group inline-flex h-8 items-center gap-1 border border-line pr-1 pl-2 text-[11px] font-semibold tracking-[0.04em] text-ink transition-colors hover:border-ink data-[state=open]:border-ink">
        <span aria-hidden="true">CS</span>
        <ChevronDown aria-hidden="true" className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        <span className="sr-only">Jazyk webu: čeština. Otevřít výběr jazyka</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={8} collisionPadding={16} aria-label="Jazyk webu" className="language-menu z-[60] min-w-24 border border-ink bg-background p-1 text-foreground">
          {languages.map((language) => (
            <DropdownMenu.Item
              key={language.code}
              lang={language.lang}
              disabled={!language.current}
              className="flex h-9 items-center gap-4 px-2.5 outline-none data-highlighted:bg-mist data-disabled:text-muted-foreground"
            >
              <span aria-hidden="true" className="flex-1 text-xs font-semibold tracking-[0.04em]">{language.code}</span>
              <span className="sr-only">{language.name}</span>
              {language.current
                ? <><Check aria-hidden="true" className="size-4 text-blue-text" /><span className="sr-only" lang="cs">, vybraný jazyk</span></>
                : <span lang="cs" className="text-[11px] text-muted-foreground">brzy</span>}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
