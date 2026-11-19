"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Scroll-linked image movement; the document keeps its native scrolling and geometry. */
export function ScrollScene({ children, kind = "image", className = "" }: {
  children: ReactNode;
  kind?: "hero" | "film" | "image";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: kind === "hero" ? ["start start", "end start"] : ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], kind === "hero" ? ["0px", "100px"] : ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], kind === "film" ? [0.82, 1, 1] : kind === "hero" ? [1, 1.04, 1.09] : [1.14, 1.14, 1.14]);

  return (
    <div ref={ref} className={className} data-scroll-scene={kind}>
      <motion.div
        className={`scroll-scene-inner ${kind === "film" ? "origin-center" : "absolute inset-0"}`}
        style={{ scale: reduced ? 1 : scale, y: reduced || kind === "film" ? 0 : y }}
      >{children}</motion.div>
    </div>
  );
}
