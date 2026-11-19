"use client";

import { useMemo, useRef, useState, useSyncExternalStore, type MouseEvent } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { legal } from "@/content/site";
import { Roll } from "./roll";

const storageKey = "beko-demo-consent-v1";
const changeEvent = "beko-consent-change";
const cookieName = "beko_demo_consent";

type Consent = { version: 1; necessary: true; analytics: boolean; marketing: boolean };
let memoryChoice: string | null = null;

function snapshot() {
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) return stored;
  } catch { /* Některé režimy prohlížeče blokují Web Storage. */ }
  try {
    const cookie = document.cookie.split("; ").find(value => value.startsWith(`${cookieName}=`));
    if (cookie) return decodeURIComponent(cookie.slice(cookieName.length + 1));
  } catch { /* Poslední možností je volba v paměti aktuální stránky. */ }
  return memoryChoice;
}

function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(changeEvent, listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(changeEvent, listener);
  };
}

function parseChoice(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const choice = JSON.parse(raw);
    return choice.version === 1 && choice.necessary === true
      && typeof choice.analytics === "boolean" && typeof choice.marketing === "boolean"
      ? choice : null;
  } catch { return null; }
}

export function CookiePreferences() {
  const raw = useSyncExternalStore(subscribe, snapshot, () => undefined);
  const saved = useMemo(() => parseChoice(raw ?? null), [raw]);
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const opener = useRef<HTMLElement | null>(null);

  function openPreferences(event: MouseEvent<HTMLButtonElement>) {
    opener.current = event.currentTarget;
    setAnalytics(saved?.analytics ?? false);
    setMarketing(saved?.marketing ?? false);
    setOpen(true);
  }

  function save(analyticsChoice: boolean, marketingChoice: boolean) {
    const choice: Consent = { version: 1, necessary: true, analytics: analyticsChoice, marketing: marketingChoice };
    memoryChoice = JSON.stringify(choice);
    try { localStorage.setItem(storageKey, memoryChoice); }
    catch { /* Volba v paměti zůstane funkční i při zablokovaném úložišti. */ }
    try {
      document.cookie = `${cookieName}=${encodeURIComponent(memoryChoice)}; Path=/; Max-Age=15552000; SameSite=Lax`;
    } catch { /* Nastavení je použitelné i při zablokovaných cookies. */ }
    window.dispatchEvent(new Event(changeEvent));
    setOpen(false);
    setAnnouncement("Nastavení cookies je uložené.");
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="font-medium" onClick={openPreferences}><Roll>Nastavení cookies</Roll></button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="max-h-[calc(100dvh-2rem)] gap-0 overflow-y-auto p-0 sm:max-w-lg"
          onCloseAutoFocus={(event) => {
            if (!opener.current?.isConnected) return;
            event.preventDefault();
            opener.current.focus({ preventScroll: true });
          }}
        >
          <div className="flex items-center justify-between gap-4 border-b border-line py-2 pr-2 pl-6">
            <DialogTitle className="text-lg font-semibold">Nastavení cookies</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" aria-label="Zavřít nastavení cookies"><X aria-hidden="true" className="size-5" /></Button>
            </DialogClose>
          </div>
          <DialogDescription className="px-6 pt-5 text-[15px]">
            Vyberte, které volitelné cookies povolíte. Ukázka redesignu ukládá jen tuto volbu ve vašem zařízení.
          </DialogDescription>
          <div className="px-6 py-3">
            {[
              { id: "cookies-necessary", label: "Nezbytné", text: "Uložení nastavení a základní fungování webu." },
              { id: "cookies-analytics", label: "Analytické", text: "Měření návštěvnosti webu.", checked: analytics, change: setAnalytics },
              { id: "cookies-marketing", label: "Marketingové", text: "Obsah a reklama podle vašich zájmů.", checked: marketing, change: setMarketing },
            ].map((category) => (
              <div key={category.id} className="flex items-center justify-between gap-6 border-b border-line py-4 last:border-b-0">
                <div>
                  <label htmlFor={category.id} className="block text-[15px] font-medium">{category.label}</label>
                  <p className="text-[13px] text-muted-foreground">{category.text}</p>
                </div>
                <Switch id={category.id} checked={category.change ? category.checked : true} disabled={!category.change} onCheckedChange={category.change} />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line p-4 pl-6">
            <a className="text-[13px] underline underline-offset-3" href={legal.privacy}>Ochrana osobních údajů</a>
            <div className="flex flex-wrap gap-2">
              <Button variant="quiet" onClick={() => save(false, false)}>Jen nezbytné</Button>
              <Button onClick={() => save(analytics, marketing)}>Uložit</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {raw !== undefined && !saved && (
        <aside aria-label="Volba cookies" className="fixed right-4 bottom-4 left-4 z-30 border border-ink bg-background p-5 sm:left-auto sm:w-[26rem]">
          <p className="text-[15px]">
            Nezbytné cookies používáme vždy, analytické a marketingové jen s vaším souhlasem.{" "}
            <a className="underline underline-offset-3" href={legal.privacy}>Ochrana osobních údajů</a>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button className="flex-1" onClick={() => save(true, true)}>Přijmout vše</Button>
            <Button className="flex-1" variant="quiet" onClick={() => save(false, false)}>Jen nezbytné</Button>
            <Button className="flex-1" variant="ghost" onClick={openPreferences}>Nastavení</Button>
          </div>
        </aside>
      )}
      <span className="sr-only" role="status">{announcement}</span>
    </>
  );
}
