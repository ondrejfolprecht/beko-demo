"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { projectsTeaser } from "@/content/site";

const AUTOPLAY_MS = 4500;

/** Horizontal strip of tall project cards that runs out to the right edge of the viewport. */
export function ProjectCarousel({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const reduced = useReducedMotion() ?? false;
  const inView = useInView(rootRef, { amount: 0.4 });
  const [edges, setEdges] = useState({ start: true, end: false });
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const held = hovered || focused;
  const autoplay = playing && !reduced;

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const start = track.scrollLeft < 8;
    const end = track.scrollLeft + track.clientWidth > track.scrollWidth - 8;
    setEdges((previous) => previous.start === start && previous.end === end ? previous : { start, end });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const step = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: reduced ? "auto" : "smooth" });
  }, [reduced]);

  // Advances one card at a time while the strip is on screen and nobody is pointing at it or focused inside it.
  useEffect(() => {
    if (!autoplay || !inView || held) return;
    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || document.hidden) return;
      if (track.scrollLeft + track.clientWidth > track.scrollWidth - 8) track.scrollTo({ left: 0, behavior: "smooth" });
      else step(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [autoplay, inView, held, step]);

  return (
    <div
      ref={rootRef}
      className="mt-12 lg:mt-16"
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <ul
        ref={trackRef}
        id="projekty-carousel"
        onPointerDown={() => setPlaying(false)}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          setPlaying(false);
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") step(event.key === "ArrowLeft" ? -1 : 1);
          else event.currentTarget.scrollTo({ left: event.key === "Home" ? 0 : event.currentTarget.scrollWidth, behavior: reduced ? "auto" : "smooth" });
        }}
        aria-label="Vybrané projekty"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-[max(var(--gutter),calc((100%_-_1344px)/2))] pb-2 [scroll-padding-inline:max(var(--gutter),calc((100%_-_1344px)/2))] [scrollbar-width:none] focus-visible:outline-offset-[-2px] [&::-webkit-scrollbar]:hidden"
      >
        {projectsTeaser.items.map((project) => (
          <li
            key={project.title}
            className="w-[min(78vw,20rem)] shrink-0 snap-start lg:w-[21rem]"
          >
            <a href={project.href} className="group relative block aspect-[3/4] overflow-hidden bg-mist">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 1024px) 336px, 78vw"
                className="object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.05]"
              />
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-scrim/85 via-scrim/40 to-transparent" />
              <span className="absolute top-4 left-4 grid max-w-[calc(100%-2rem)] grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2 bg-background px-2.5 py-1.5 text-xs font-medium text-foreground">
                <span aria-hidden="true" className="size-2" style={{ background: `var(--${project.accent})` }} />
                {project.tag}
                <span className="tag-detail">
                  <span className="text-muted-foreground">{project.detail}</span>
                </span>
              </span>
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                <span className="min-w-0">
                  <span className="block text-2xl leading-tight font-semibold tracking-[-0.02em]">{project.title}</span>
                  <span className="mt-1.5 block text-sm leading-snug text-white/80">{project.text}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 transition-transform duration-300 ease-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="sr-only"> (stávající web BEKO)</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="wrap mt-8 flex flex-wrap items-center justify-between gap-4">
        {children}
        <div className="ml-auto flex items-center gap-2">
          {/* Hidden by CSS rather than by render, so server and client markup stay the same when motion is reduced. */}
          <button
            type="button"
            aria-label={playing ? "Pozastavit automatický posun" : "Spustit automatický posun"}
            aria-controls="projekty-carousel"
            onClick={() => setPlaying((value) => !value)}
            className="grid size-12 place-items-center border border-line text-muted-foreground transition-colors duration-200 hover:border-ink hover:text-ink motion-reduce:hidden"
          >
            {playing ? <Pause aria-hidden="true" className="size-4" /> : <Play aria-hidden="true" className="size-4" />}
          </button>
          <button
            type="button"
            aria-label="Předchozí projekty"
            aria-controls="projekty-carousel"
            disabled={edges.start}
            onClick={() => { setPlaying(false); step(-1); }}
            className="grid size-12 place-items-center border border-ink transition-colors duration-200 hover:bg-ink hover:text-background disabled:pointer-events-none disabled:border-line disabled:text-muted-foreground/50"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Další projekty"
            aria-controls="projekty-carousel"
            disabled={edges.end}
            onClick={() => { setPlaying(false); step(1); }}
            className="grid size-12 place-items-center border border-ink transition-colors duration-200 hover:bg-ink hover:text-background disabled:pointer-events-none disabled:border-line disabled:text-muted-foreground/50"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
