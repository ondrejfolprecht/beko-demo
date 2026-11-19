"use client";

import { useInView } from "motion/react";
import { useRef } from "react";

/**
 * Company figure whose last digit rolls into place once, like a counter on a measuring instrument.
 * The final value is what the server renders; the roll is a CSS animation that only starts in view.
 */
export function FigureValue({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.8 });
  const text = String(value);
  const last = Number(text.at(-1));
  const strip = [4, 3, 2, 1, 0].map((step) => (last - step + 10) % 10);

  return (
    <span ref={ref} className="inline-flex">
      <span className="sr-only">{text}{suffix}</span>
      <span aria-hidden="true" className="inline-flex">
        {text.slice(0, -1)}
        <span className="figure-roll" data-rolling={seen || undefined}>
          <span className="figure-roll-strip">
            {strip.map((digit, index) => <span key={index}>{digit}</span>)}
          </span>
        </span>
        {suffix}
      </span>
    </span>
  );
}
