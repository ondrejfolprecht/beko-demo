"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink } from "@/components/site/external-link";
import { ImageStack } from "@/components/site/image-stack";
import { SectionHeading } from "@/components/site/section-heading";
import { TileReveal } from "@/components/motion/tile-reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { designProcess } from "@/content/site";

const images = designProcess.steps.map((step) => step.image);

export function DesignProcess() {
  const [active, setActive] = useState(designProcess.steps[1].id);
  const activeIndex = designProcess.steps.findIndex((step) => step.id === active);

  return (
    <section id="design" aria-labelledby="design-title" tabIndex={-1} className="section-y outline-none">
      <SectionHeading id="design-title" title="Design" lead={designProcess.lead} highlight />

      <div className="wrap mt-10 lg:mt-16">
        <Tabs value={active} onValueChange={setActive}>
          <TabsList
            aria-label="Kroky návrhu"
            className="-mx-(--gutter) overflow-x-auto px-(--gutter) [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-5 lg:px-0"
          >
            {designProcess.steps.map((step) => (
              <TabsTrigger key={step.id} value={step.id} className="shrink-0 pr-7 lg:pr-3">
                {step.label}
                {active === step.id && (
                  <motion.span layoutId="design-step" className="absolute inset-x-0 bottom-0 h-[3px] bg-blue" transition={{ type: "spring", stiffness: 380, damping: 36 }} />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="relative mt-6 aspect-[3/2] overflow-hidden bg-mist sm:aspect-[2053/700]">
            <ImageStack images={images} active={activeIndex} sizes="(min-width: 1440px) 1344px, 100vw" className="absolute inset-0" />
            <TileReveal columns={14} rows={10} seed={9} />
          </div>

          {designProcess.steps.map((step) => (
            <TabsContent key={step.id} value={step.id} className="mt-6 grid gap-x-16 gap-y-3 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:duration-500 lg:mt-8 lg:grid-cols-2">
              <h3 className="text-2xl leading-tight font-semibold tracking-[-0.02em] lg:text-[2rem]">{step.title}</h3>
              <p className="max-w-xl text-[17px] leading-relaxed text-muted-foreground">{step.text}</p>
            </TabsContent>
          ))}
        </Tabs>
        <ExternalLink href={designProcess.href} className="mt-6 text-[15px] lg:ml-[calc(50%+2rem)]">Design podrobně</ExternalLink>
      </div>
    </section>
  );
}
