"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink } from "@/components/site/external-link";
import { SectionHeading } from "@/components/site/section-heading";
import { SpecList } from "@/components/site/spec-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { caseStudies } from "@/content/site";
import { FlowDiagram } from "./flow-diagram";

export function CaseStudies() {
  const [active, setActive] = useState(caseStudies.items[0].id);

  return (
    <section id="reference" aria-labelledby="reference-title" tabIndex={-1} className="section-y bg-mist outline-none">
      <SectionHeading id="reference-title" title="Reference" lead={caseStudies.lead} />
      <div className="wrap mt-10 lg:mt-14">
        <Tabs value={active} onValueChange={setActive}>
          <TabsList aria-label="Případové studie" className="-mx-(--gutter) gap-7 overflow-x-auto px-(--gutter) [scrollbar-width:none] lg:mx-0 lg:gap-12 lg:px-0">
            {caseStudies.items.map((item) => (
              <TabsTrigger key={item.id} value={item.id} className="shrink-0 text-lg font-semibold tracking-[-0.015em] lg:min-h-16 lg:text-2xl">
                {item.client}
                {active === item.id && (
                  <motion.span layoutId="case-indicator" className="absolute inset-x-0 bottom-0 h-[3px] bg-blue" transition={{ type: "spring", stiffness: 380, damping: 36 }} />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {caseStudies.items.map((item) => (
            <TabsContent
              key={item.id}
              value={item.id}
              className="mt-8 grid items-stretch gap-x-16 gap-y-8 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:duration-500 lg:mt-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
            >
              <div className="flex flex-col">
                <p className="text-[15px] text-muted-foreground">{item.sector}</p>
                <h3 className="mt-2 text-[1.75rem] leading-[1.15] font-semibold tracking-[-0.025em] lg:text-[2.25rem]">{item.title}</h3>
                <div className="mt-6"><SpecList specs={item.steps} /></div>
                {item.quote && (
                  <figure className="mt-6 border-l-[3px] border-blue pl-4">
                    <blockquote className="text-[17px] leading-snug font-medium">„{item.quote}“</blockquote>
                    <figcaption className="mt-1.5 text-[13px] text-muted-foreground">{item.author}, {item.client}</figcaption>
                  </figure>
                )}
                <ExternalLink href={item.href} className="mt-6 w-fit text-[15px]">Celý příběh</ExternalLink>
              </div>

              <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-linear-to-br from-blue-deep via-blue to-sky p-5 sm:p-8 xl:p-10">
                <FlowDiagram steps={item.flow} />
                <ul className="flex flex-wrap gap-x-8 gap-y-1 border-t border-white/30 pt-4 text-[15px] font-medium text-white">
                  {item.facts.map((fact) => <li key={fact}>{fact}</li>)}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
