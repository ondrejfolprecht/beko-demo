"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

function Word({ children, progress, start, end, reduced }: { children: string; progress: MotionValue<number>; start: number; end: number; reduced: boolean }) {
  const opacity = useTransform(progress, [start, end], [reduced ? 1 : 0.16, 1]);
  return <motion.span style={{ opacity }} data-reveal>{children}</motion.span>;
}

/** Paragraph whose words turn from pale to solid ink as the reader scrolls through it. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 88%", "end 62%"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index}>
          {index > 0 && " "}
          <Word progress={scrollYProgress} start={index / words.length} end={(index + 1.5) / words.length} reduced={reduced}>{word}</Word>
        </span>
      ))}
    </p>
  );
}
