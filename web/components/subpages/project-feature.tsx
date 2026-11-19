"use client";

import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { projects } from "@/content/site";
import { ExternalLink } from "@/components/site/external-link";

/** The photo starts at content width and opens to the full viewport while scrolling. */
export function ProjectFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "start 25%"] });
  const inset = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 7, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [reduced ? 1 : 1.14, 1]);
  const clipPath = useMotionTemplate`inset(0 ${inset}% 0 ${inset}%)`;
  const { feature } = projects;

  return (
    <div ref={ref} className="relative mt-10 lg:mt-16">
      <motion.div style={{ clipPath }} className="relative aspect-[4/3] overflow-hidden bg-[#7d4a33] sm:aspect-[2437/1200]">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image src={feature.image.src} alt={feature.image.alt} fill quality={85} sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      <div className="wrap lg:absolute lg:inset-x-0 lg:bottom-10">
        <div className="relative z-[1] -mt-8 ml-auto max-w-lg border border-white/60 bg-white/92 p-5 backdrop-blur-xl lg:mt-0 lg:bg-white/72 lg:p-6">
          <h3 className="text-2xl font-semibold tracking-[-0.02em]">{feature.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed">{feature.text}</p>
          <ExternalLink href={feature.href} className="mt-4 text-[15px]">Projekt E-BOAT</ExternalLink>
        </div>
      </div>
    </div>
  );
}
