"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Progressive enhancement: content is visible without JS; each entrance plays once. */
export function Entrance({ children, as: Tag = "div", kind = "item", order = 0, className = "", style }: {
  children: ReactNode;
  as?: "div" | "li";
  kind?: "item" | "media" | "service";
  order?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !window.IntersectionObserver) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Content already on screen (including restored scroll positions) never flashes.
    if (preference.matches || node.getBoundingClientRect().top < window.innerHeight) return;
    node.dataset.waiting = "true";
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      delete node.dataset.waiting;
      if (!preference.matches && !node.contains(document.activeElement)) node.dataset.entered = "true";
      observer.disconnect();
    }, { threshold: 0.08, rootMargin: "0px 0px -12% 0px" });
    observer.observe(node);
    return () => { observer.disconnect(); delete node.dataset.waiting; };
  }, []);

  return <Tag ref={ref} data-entrance={kind} className={className} style={{ ...style, "--entrance-order": order } as CSSProperties}>{children}</Tag>;
}
