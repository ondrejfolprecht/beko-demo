"use client";

import { cn } from "cn";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useRef, useState } from "react";
import { Button, ButtonArrow } from "@/components/ui/button";
import { process } from "@/content/site";

const { steps } = process;

export function Process() {
  const rail = useRef<HTMLOListElement>(null);
  const [reached, setReached] = useState(0);
  const { scrollYProgress } = useScroll({ target: rail, offset: ["start 72%", "end 62%"] });
  const progress = useMotionValue(0.02);
  const scale = useSpring(progress, { stiffness: 120, damping: 30 });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    progress.set(Math.max(progress.get(), value));
    setReached((previous) => Math.max(previous, Math.min(steps.length - 1, Math.floor(value * steps.length))));
  });

  return (
    <section id="proces" aria-labelledby="proces-title" tabIndex={-1} className="bg-mist py-(--section) outline-none">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="proces-title" className="display-section leading-[1.3]! [text-wrap:balance] lg:text-[min(3.2vw,3rem)]">{process.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted-foreground [text-wrap:balance]">{process.lead}</p>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <ol ref={rail} className="grid gap-y-10 lg:grid-cols-4 lg:gap-x-8">
            {steps.map((step, index) => {
              const active = index <= reached;
              return (
                <li key={step.id} className="relative z-10 flex flex-col pl-9 lg:pt-10 lg:pl-0">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute top-1 left-0 size-[15px] border transition-colors duration-300 motion-reduce:transition-none motion-reduce:border-blue motion-reduce:bg-blue lg:top-0",
                      active ? "border-blue bg-blue" : "border-line bg-surface"
                    )}
                  />
                  <h3 className={cn("text-[1.375rem] leading-tight font-semibold tracking-[-0.02em] transition-colors duration-300 motion-reduce:transition-none motion-reduce:text-ink", active ? "text-ink" : "text-muted-foreground")}>{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              );
            })}
          </ol>
          <span aria-hidden="true" className="pointer-events-none absolute top-0 bottom-0 left-[7px] w-px bg-line lg:top-[7px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full" />
          <motion.span aria-hidden="true" style={{ scaleY: scale }} className="pointer-events-none absolute top-0 bottom-0 left-[6px] w-[3px] origin-top bg-blue motion-reduce:transform-none! lg:hidden" />
          <motion.span aria-hidden="true" style={{ scaleX: scale }} className="pointer-events-none absolute top-[6px] right-0 left-0 hidden h-[3px] origin-left bg-blue motion-reduce:transform-none! lg:block" />
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <Button asChild variant="outline" size="split">
            <a href={process.href}>
              {process.action}
              <ButtonArrow />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
