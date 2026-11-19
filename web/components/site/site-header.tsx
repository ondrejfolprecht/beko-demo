"use client";

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { company, navigation } from "@/content/site";
import logoDark from "@/public/brand/beko-logo-dark.webp";
import logo from "@/public/brand/beko-logo.webp";
import { LanguageTag } from "./language-tag";
import { Roll } from "./roll";
import { ThemeToggle } from "./theme-toggle";

const topLevelItem = "nav-tile flex h-(--header) items-center gap-1.5 px-4 text-[15px] font-medium outline-none focus-visible:outline-offset-[-6px]";

function navAccent(color: string) {
  return { "--nav-accent": `var(--${color})` } as CSSProperties;
}

/** One BEKO colour per top-level item, in menu order. */
const navAccents = [navAccent("blue-text"), navAccent("sky-text"), navAccent("yellow-text"), navAccent("red"), navAccent("lime-text")];

function DesktopNavigation() {
  return (
    <NavigationMenu delayDuration={0} skipDelayDuration={0} className="hidden max-w-none justify-start border-l border-line pl-2 min-[1100px]:flex" aria-label="Hlavní navigace">
      <NavigationMenuList>
        {navigation.map((item, index) => (
          <NavigationMenuItem key={item.label}>
            {item.children.length > 0 ? (
              <>
                <NavigationMenuPrimitive.Trigger style={navAccents[index]} className={`group ${topLevelItem}`}>
                  {item.label}
                  <ChevronDown aria-hidden="true" className="size-3.5 transition-transform duration-300 ease-brand group-data-open:rotate-180" />
                </NavigationMenuPrimitive.Trigger>
                <NavigationMenuContent className="p-0">
                  <div className="w-[34rem] p-2">
                    <ul className="grid grid-cols-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavigationMenuLink asChild>
                            <a href={child.href} className="group/link flex flex-col items-start gap-0.5 p-3 transition-colors hover:bg-mist focus-visible:bg-mist focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-blue-text! focus-visible:outline-offset-[-3px]!">
                              <span className="flex items-center gap-1 text-[15px] font-medium">
                                {child.label}
                                <ArrowUpRight aria-hidden="true" className="size-3.5 opacity-0 transition-opacity group-hover/link:opacity-100 group-focus-visible/link:opacity-100" />
                              </span>
                              <span className="text-[13px] leading-snug text-muted-foreground">{child.description}</span>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center border-t border-line px-3 py-2 text-[13px]">
                    <NavigationMenuLink asChild>
                      <a href={item.href} className="flex items-center gap-1 font-medium whitespace-nowrap text-ink hover:text-blue-text">
                        {item.overview}
                        <ArrowUpRight aria-hidden="true" className="size-3.5" />
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <a href={item.href} style={navAccents[index]} className={topLevelItem}>
                  <Roll>{item.label}</Roll>
                  <span className="sr-only"> (stávající web BEKO)</span>
                </a>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNavigation() {
  const focusAfterClose = useRef<string | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1100px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Otevřít menu" className="-mr-3 min-[1100px]:hidden">
          <Menu aria-hidden="true" className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        data-theme-scope
        side="right"
        showCloseButton={false}
        className="w-full max-w-none gap-0 overflow-y-auto p-0 data-[side=right]:w-full data-[side=right]:sm:max-w-md"
        onCloseAutoFocus={(event) => {
          const target = focusAfterClose.current && document.getElementById(focusAfterClose.current);
          focusAfterClose.current = null;
          if (target) {
            event.preventDefault();
            target.focus({ preventScroll: true });
          }
        }}
      >
        <div className="flex h-(--header) shrink-0 items-center justify-between border-b border-line px-(--gutter)">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <LanguageTag />
          <div className="-mr-3 flex items-center gap-1">
            <ThemeToggle />
            <SheetClose asChild>
              <Button variant="ghost" size="icon" aria-label="Zavřít menu">
                <X aria-hidden="true" className="size-5" />
              </Button>
            </SheetClose>
          </div>
        </div>
        <SheetDescription className="sr-only">Hlavní navigace webu.</SheetDescription>
        <nav aria-label="Hlavní navigace" className="px-(--gutter)">
          <Accordion type="multiple" defaultValue={[navigation[0].label]}>
            {navigation.map((item) => (
              <AccordionItem key={item.label} value={item.label}>
                {item.children.length > 0 ? (
                  <>
                    <AccordionTrigger className="min-h-16 text-2xl font-medium">{item.label}</AccordionTrigger>
                    <AccordionContent className="pb-4">
                      {[{ label: item.overview, href: item.href }, ...item.children].map((child) => (
                        <SheetClose key={child.href} asChild>
                          <a href={child.href} className="flex min-h-11 items-center justify-between gap-4 text-[17px] text-muted-foreground">
                            {child.label}
                            <ArrowUpRight aria-hidden="true" className="size-4" />
                          </a>
                        </SheetClose>
                      ))}
                    </AccordionContent>
                  </>
                ) : (
                  <SheetClose asChild>
                    <a href={item.href} className="flex min-h-16 items-center justify-between text-2xl font-medium">
                      {item.label}
                      <ArrowUpRight aria-hidden="true" className="size-5" />
                    </a>
                  </SheetClose>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </nav>
        <div className="mt-auto flex flex-col gap-4 p-(--gutter)">
          <SheetClose asChild>
            <Button asChild className="h-13 w-full">
              <a href="#kontakt" onClick={() => { focusAfterClose.current = "kontakt"; }}>Kontakt</a>
            </Button>
          </SheetClose>
          <a href={company.phoneHref} className="text-center text-[15px] font-medium">{company.phone}</a>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  return (
    <header data-theme-scope className="sticky top-0 z-40 border-b border-line bg-background/72 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-700">
      <div className="wrap flex h-(--header) items-stretch">
        <a href="#top" aria-label="BEKO Engineering, na začátek stránky" className="flex shrink-0 items-center pr-6">
          <Image src={logo} alt="" width={140} unoptimized preload className="h-auto w-[116px] xl:w-[132px] dark:hidden" />
          <Image src={logoDark} alt="" width={140} unoptimized className="hidden h-auto w-[116px] xl:w-[132px] dark:block" />
        </a>
        <DesktopNavigation />
        <div className="ml-auto hidden items-center gap-5 border-l border-line pl-3 min-[1100px]:flex">
          <div className="flex items-center gap-1">
            <LanguageTag />
            <ThemeToggle />
          </div>
          <a href={company.phoneHref} className="text-[15px] font-medium whitespace-nowrap hover:text-blue-text">{company.phone}</a>
          <Button asChild>
            <a href="#kontakt"><Roll>Kontakt</Roll></a>
          </Button>
        </div>
        <div className="ml-auto flex items-center min-[1100px]:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
