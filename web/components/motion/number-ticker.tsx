"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/** Server-renders the final value, so the figure is correct before and without JavaScript. */
export function NumberTicker({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!inView || reduced || !element) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (current) => { element.textContent = `${Math.round(current)}${suffix}`; },
    });
    return () => controls.stop();
  }, [inView, reduced, suffix, value]);

  return <span ref={ref}>{value}{suffix}</span>;
}
