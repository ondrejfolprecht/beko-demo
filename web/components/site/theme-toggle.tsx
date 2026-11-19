"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "beko-theme";
const CHANGE_EVENT = "beko-theme-change";

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#080c16" : "#ffffff");
}

function subscribe(listener: () => void) {
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const sync = () => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* System preference remains available. */ }
    applyTheme(saved === "dark" || (saved !== "light" && system.matches));
    listener();
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) sync();
  };
  window.addEventListener(CHANGE_EVENT, listener);
  window.addEventListener("storage", onStorage);
  system.addEventListener("change", sync);
  return () => {
    window.removeEventListener(CHANGE_EVENT, listener);
    window.removeEventListener("storage", onStorage);
    system.removeEventListener("change", sync);
  };
}

const isDark = () => document.documentElement.classList.contains("dark");

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  function toggle() {
    const next = !isDark();
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // The choice still applies to this page when storage is blocked.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <Button variant="ghost" size="icon" aria-label={dark ? "Přepnout na světlý režim" : "Přepnout na tmavý režim"} onClick={toggle}>
      {dark ? <Sun aria-hidden="true" className="size-5" /> : <Moon aria-hidden="true" className="size-5" />}
    </Button>
  );
}
