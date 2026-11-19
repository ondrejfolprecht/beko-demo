import { Entrance } from "@/components/motion/entrance";
import { ArrowUpRight, Boxes, BrainCircuit, DraftingCompass, GraduationCap, PenTool, Workflow, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { Button, ButtonArrow } from "@/components/ui/button";
import { navigation, serviceCards, type Accent } from "@/content/site";

/** Icon and BEKO colour per service, in menu order. */
const look: { icon: LucideIcon; accent: Accent }[] = [
  { icon: DraftingCompass, accent: "red" },
  { icon: PenTool, accent: "blue" },
  { icon: Boxes, accent: "yellow" },
  { icon: Workflow, accent: "sky" },
  { icon: BrainCircuit, accent: "lime" },
  { icon: GraduationCap, accent: "red" },
];

/** Text-safe tone of each accent on white, the pale brand tones get their deeper variant. */
const accentText: Record<Accent, string> = {
  blue: "var(--blue-text)",
  red: "var(--red)",
  sky: "var(--sky-text)",
  yellow: "var(--yellow-text)",
  lime: "var(--lime-text)",
};

export function Services() {
  const services = navigation[0].children;

  return (
    <section id="sluzby" aria-labelledby="sluzby-title" tabIndex={-1} className="bg-mist py-(--section) outline-none">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="sluzby-title" className="display-section leading-[1.3]! [text-wrap:balance] lg:text-[min(3.2vw,3rem)]">{serviceCards.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">{serviceCards.lead}</p>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <ul className="grid border-t border-l border-line bg-surface sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const { icon: Icon, accent } = look[index];
              return (
                <Entrance as="li" kind="service" order={index} key={service.href} className="service-card border-r border-b border-line" style={{ "--accent-text": accentText[accent] } as CSSProperties}>
                  <a href={service.href} className="group flex h-full flex-col p-6 sm:min-h-56 lg:p-8">
                    <span className="flex items-start justify-between">
                      <span className="flex h-10 items-center text-(--accent-text)">
                        <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-5 text-muted-foreground/60 transition-[translate,color] duration-300 ease-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                    </span>
                    <div className="mt-auto pt-6 sm:pt-10">
                      <h3 className="text-xl font-semibold tracking-[-0.02em]">{service.label}</h3>
                      <span className="mt-1.5 block text-[15px] leading-relaxed text-muted-foreground">{service.description}</span>
                    </div>
                    <span className="sr-only"> (stávající web BEKO)</span>
                  </a>
                </Entrance>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <Button asChild variant="outline" size="split">
            <a href={serviceCards.href}>
              {serviceCards.action}
              <span className="sr-only"> (stávající web BEKO)</span>
              <ButtonArrow external />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
