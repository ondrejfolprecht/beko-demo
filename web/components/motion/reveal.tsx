"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

type RevealProps = ComponentProps<typeof motion.div> & { delay?: number };

export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  return (
    <motion.div
      data-reveal
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
