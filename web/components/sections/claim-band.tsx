"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { claim } from "@/content/site";

/** One moving line: the claim twice with the BEKO mark between, so the line always spans the viewport. */
function Line({ text, x, outline = false }: { text: string; x: MotionValue<string>; outline?: boolean }) {
  return (
    <motion.p style={{ x }} className={`flex w-max items-center whitespace-nowrap ${outline ? "claim-outline" : ""}`}>
      <span>{text}</span>
      <Image src="/brand/beko-mark.webp" alt="" width={596} height={499} unoptimized className="mx-[0.35em] h-[0.75em] w-auto shrink-0 translate-y-[0.069em]" />
      <span>{text}</span>
    </motion.p>
  );
}

/** The brand claim as two oversized lines that drift in opposite directions while the page scrolls. */
export function ClaimBand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const first = useTransform(scrollYProgress, [0, 1], reduced ? ["-12%", "-12%"] : ["0%", "-24%"]);
  const second = useTransform(scrollYProgress, [0, 1], reduced ? ["-20%", "-20%"] : ["-32%", "-8%"]);

  return (
    <div className="overflow-x-clip py-(--section)">
      <p className="sr-only">{claim.text}</p>
      <div ref={ref} aria-hidden="true" className="claim-band select-none">
        <Line text={claim.lines[0]} x={first} />
        <Line text={claim.lines[1]} x={second} outline />
      </div>
    </div>
  );
}
