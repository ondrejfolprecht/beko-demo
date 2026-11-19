"use client";

import type { ElementType, PointerEvent, ReactNode } from "react";

/** Passes the pointer position to cards as CSS variables, without re-rendering on every move. */
export function SpotlightGroup({ children, className, as: Tag = "ul" }: { children: ReactNode; className?: string; as?: ElementType }) {
  function track(event: PointerEvent<HTMLElement>) {
    const card = (event.target as HTMLElement).closest<HTMLElement>(".spotlight-card");
    if (!card) return;
    const box = card.getBoundingClientRect();
    card.style.setProperty("--x", `${event.clientX - box.left}px`);
    card.style.setProperty("--y", `${event.clientY - box.top}px`);
  }

  return <Tag className={className} onPointerMove={track}>{children}</Tag>;
}
