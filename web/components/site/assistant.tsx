"use client";

import { ArrowRight, X } from "lucide-react";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { assistant, faq } from "@/content/site";

type Message = { id: number; from: "assistant" | "user"; text: string; link?: { label: string; href: string } };

/** Lower case without diacritics, so "Služby" and "sluzby" match the same keyword. */
const plain = (text: string) => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ /g, " ");

/** FAQ answers join the prepared topics; their keywords are the longer words of each question. */
const knowledge = [
  ...assistant.topics.map((topic) => ({ keywords: topic.keywords, answer: topic.answer, link: topic.link, weight: 2 })),
  ...faq.items.map((item) => ({
    keywords: plain(item.question).split(/[^a-z0-9]+/).filter((word) => word.length > 5).map((word) => word.slice(0, 6)),
    answer: item.answer,
    link: { label: "Časté otázky", href: "#caste-otazky" },
    weight: 1,
  })),
];

/** Picks the prepared answer whose keywords appear most often in the question. No model is involved. */
function reply(question: string): Pick<Message, "text" | "link"> {
  const words = plain(question).split(/[^a-z0-9-]+/).filter(Boolean);
  let best: (typeof knowledge)[number] | undefined;
  let bestScore = 0;
  for (const entry of knowledge) {
    const hits = entry.keywords.filter((keyword) => words.some((word) => (keyword.length <= 3 ? word === keyword : word.startsWith(keyword)))).length;
    const score = hits * entry.weight;
    if (score > bestScore) [best, bestScore] = [entry, score];
  }
  return best ? { text: best.answer, link: best.link } : { text: assistant.fallback };
}

/**
 * The BE-Assist face: a light rounded head with a dark visor, blue cap, red earpieces and a yellow antenna.
 * The eyes look around and blink, a green dot reads as "online", and on the button a speech bubble with
 * three dots pops up now and then.
 */
function Mark({ className, bubble = false }: { className?: string; bubble?: boolean }) {
  const id = useId();
  return (
    <svg viewBox="0 0 48 44" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={`${id}-head`} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#e9eef8" />
          <stop offset="1" stopColor="#b9c7e2" />
        </linearGradient>
        <linearGradient id={`${id}-blue`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--sky)" />
          <stop offset="0.5" stopColor="var(--blue)" />
          <stop offset="1" stopColor="var(--blue-deep)" />
        </linearGradient>
      </defs>
      <rect x="19" y="5" width="2" height="5" fill="var(--blue)" />
      <circle cx="20" cy="4" r="2.6" fill="var(--yellow)" />
      <rect x="0.5" y="19" width="6" height="12" rx="3" fill="var(--red)" />
      <rect x="33.5" y="19" width="6" height="12" rx="3" fill="var(--red)" />
      <rect x="13" y="7.5" width="14" height="6" rx="3" fill={`url(#${id}-blue)`} />
      <rect x="3.5" y="10" width="33" height="30" rx="13" fill={`url(#${id}-head)`} stroke="#0b1120" strokeOpacity="0.14" strokeWidth="0.75" />
      <rect x="8" y="16" width="24" height="16.5" rx="7.5" fill="#0b1120" />
      <g className="assistant-eyes" fill="var(--sky)">
        <rect x="13.4" y="20.5" width="4" height="7.5" rx="2" />
        <rect x="22.6" y="20.5" width="4" height="7.5" rx="2" />
      </g>
      <circle cx="34.5" cy="38" r="4.2" fill="#0b1120" />
      <circle cx="34.5" cy="38" r="2.8" fill="var(--lime)" />
      {bubble && (
        <g className="assistant-bubble">
          <path d="M33 0.5h11.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H36l-3.6 3.2 0.6-3.4a3 3 0 0 1-3-2.8v-6a3 3 0 0 1 3-3z" fill={`url(#${id}-blue)`} />
          <circle className="assistant-bubble-dot" cx="35" cy="6.5" r="1.1" fill="#fff" />
          <circle className="assistant-bubble-dot" cx="38.75" cy="6.5" r="1.1" fill="#fff" />
          <circle className="assistant-bubble-dot" cx="42.5" cy="6.5" r="1.1" fill="#fff" />
        </g>
      )}
    </svg>
  );
}

/** BE-Assist: a demo assistant in the bottom right corner. It answers from prepared texts and says so. */
export function Assistant() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: 0, from: "assistant", text: assistant.greeting }]);
  const launcher = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);

  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight });
  }, [messages, thinking]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // The button stays out of the first screen and arrives with the first scroll. Once shown, it stays.
  useEffect(() => {
    const reveal = () => { if (window.scrollY > 40) setShown(true); };
    reveal();
    window.addEventListener("scroll", reveal, { passive: true });
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  function close() {
    setOpen(false);
    launcher.current?.focus();
  }

  function ask(question: string) {
    const text = question.trim();
    if (!text || thinking) return;
    setMessages((current) => [...current, { id: current.length, from: "user", text }]);
    setThinking(true);
    timer.current = window.setTimeout(() => {
      setMessages((current) => [...current, { id: current.length, from: "assistant", ...reply(text) }]);
      setThinking(false);
    }, 700);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(input.current?.value ?? "");
    if (input.current) input.current.value = "";
  }

  const fresh = messages.length === 1;

  return (
    <div inert={!shown} data-shown={shown || undefined} className="assistant-root fixed right-4 bottom-4 z-20 flex flex-col items-end gap-3 print:hidden">
      {open && (
        <section
          id="be-assist"
          role="dialog"
          aria-label={assistant.name}
          onKeyDown={(event) => { if (event.key === "Escape") close(); }}
          className="assistant-panel flex max-h-[min(34rem,calc(100dvh-7.5rem))] w-[min(24rem,calc(100vw-2rem))] flex-col border border-ink bg-background text-foreground"
        >
          <header className="flex items-center gap-3 border-b border-line py-2 pr-2 pl-4">
            <Mark className="h-9 w-auto shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-display text-[13px] leading-tight tracking-[-0.02em] uppercase">{assistant.name}</p>
              <p className="text-xs text-muted-foreground">{assistant.role}</p>
            </div>
            <button type="button" onClick={close} className="grid size-11 shrink-0 place-items-center transition-colors hover:bg-mist">
              <X aria-hidden="true" className="size-5" />
              <span className="sr-only">{assistant.close}</span>
            </button>
          </header>

          <div ref={log} role="log" aria-live="polite" tabIndex={0} className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain p-4 text-[15px] leading-relaxed">
            {messages.map((message) => (
              message.from === "user" ? (
                <p key={message.id} className="max-w-[85%] self-end bg-blue px-3.5 py-2.5 text-white">
                  <span className="sr-only">Vy: </span>{message.text}
                </p>
              ) : (
                <div key={message.id} className="max-w-[90%] self-start bg-mist px-3.5 py-2.5">
                  <p><span className="sr-only">{assistant.name}: </span>{message.text}</p>
                  {message.link && (
                    <a href={message.link.href} className="mt-2 inline-flex min-h-8 items-center gap-2 text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-ink">
                      {message.link.label}<ArrowRight aria-hidden="true" className="size-4" />
                    </a>
                  )}
                </div>
              )
            ))}
            {thinking && (
              <p className="flex items-center gap-1.5 self-start bg-mist px-3.5 py-3.5">
                <span className="sr-only">{assistant.thinking}</span>
                {["var(--blue)", "var(--red)", "var(--yellow)"].map((color, index) => (
                  <span key={color} aria-hidden="true" className="assistant-dot size-2" style={{ background: color, animationDelay: `${index * 140}ms` }} />
                ))}
              </p>
            )}
            {fresh && (
              <ul className="mt-1 flex flex-col items-start gap-2">
                {assistant.suggestions.map((suggestion) => (
                  <li key={suggestion}>
                    <button type="button" onClick={() => ask(suggestion)} className="min-h-9 border border-line px-3 text-left text-sm font-medium transition-colors hover:border-ink">
                      {suggestion}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form onSubmit={submit} className="border-t border-line p-3">
            <div className="flex">
              <label htmlFor="be-assist-input" className="sr-only">{assistant.placeholder}</label>
              <input
                ref={input}
                id="be-assist-input"
                type="text"
                autoComplete="off"
                maxLength={300}
                placeholder={assistant.placeholder}
                aria-describedby="be-assist-demo"
                className="h-11 min-w-0 flex-1 border border-line bg-surface px-3 text-base transition-colors outline-none placeholder:text-muted-foreground/70 hover:border-ink/40 focus-visible:border-blue focus-visible:ring-2 focus-visible:ring-blue/25"
              />
              <button type="submit" disabled={thinking} className="grid size-11 shrink-0 place-items-center bg-blue text-white transition-colors hover:bg-blue-deep disabled:opacity-50">
                <ArrowRight aria-hidden="true" className="size-4" />
                <span className="sr-only">{assistant.send}</span>
              </button>
            </div>
            <p id="be-assist-demo" className="mt-2 text-xs text-muted-foreground">{assistant.demo}</p>
          </form>
        </section>
      )}

      <button
        ref={launcher}
        type="button"
        aria-expanded={open}
        aria-controls="be-assist"
        onClick={() => (open ? close() : setOpen(true))}
        className="group flex h-14 items-center gap-3 border border-line bg-background/80 pr-4 pl-3 text-foreground backdrop-blur-xl backdrop-saturate-150 max-sm:px-3 transition-colors hover:border-ink"
      >
        {open ? <X aria-hidden="true" className="mx-1 size-6" /> : <Mark bubble className="h-10 w-auto overflow-visible" />}
        <span aria-hidden="true" className="font-display text-[13px] tracking-[-0.02em] uppercase max-sm:hidden">{assistant.name}</span>
        <span className="sr-only">{open ? assistant.close : assistant.open}</span>
      </button>
    </div>
  );
}
