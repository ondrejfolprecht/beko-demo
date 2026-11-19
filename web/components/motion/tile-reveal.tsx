"use client";

import { useInView } from "motion/react";
import { useRef, type CSSProperties } from "react";

const accents = ["var(--blue)", "var(--yellow)", "var(--red)", "var(--lime)", "var(--sky)"];

/** Stable pseudo-random value, so server and client render the same mosaic. */
function noise(seed: number) {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
}

type TileRevealProps = {
  columns?: number;
  /** Enough rows of square tiles to cover the tallest aspect ratio of the parent. */
  rows?: number;
  /** Starts on mount instead of waiting for the element to enter the viewport. */
  immediate?: boolean;
  delay?: number;
  base?: string;
  seed?: number;
};

export function TileReveal({ columns = 8, rows = 5, immediate = false, delay = 0, base = "var(--background)", seed = 1 }: TileRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="tiles"
      data-in={(!immediate && inView) || undefined}
      data-auto={immediate || undefined}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {Array.from({ length: columns * rows }, (_, index) => {
        const order = noise(index + seed);
        const colored = noise(index * 3 + seed) > 0.86;
        return (
          <span
            key={index}
            style={{
              "--d": `${delay + Math.round(order * 620) + (colored ? 240 : 0)}ms`,
              background: colored ? accents[Math.floor(noise(index * 7 + seed) * accents.length)] : base,
            } as CSSProperties}
          />
        );
      })}
    </div>
  );
}
