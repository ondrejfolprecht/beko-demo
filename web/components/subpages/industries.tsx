import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/site/section-heading";
import { industries } from "@/content/site";

export function Industries() {
  return (
    <section id="obory" aria-labelledby="obory-title" tabIndex={-1} className="section-y bg-mist outline-none">
      <SectionHeading id="obory-title" title="Obory" />
      <ul className="mt-10 border-t border-line lg:mt-16">
        {industries.map((industry) => (
          <li key={industry.title} style={{ "--accent": `var(--${industry.accent})` } as CSSProperties} className="group relative isolate overflow-hidden border-b border-line">
            <span aria-hidden="true" className="absolute inset-0 -z-10 origin-left scale-x-0 bg-(--accent) opacity-25 transition-transform duration-500 ease-brand group-hover:scale-x-100" />
            <div className="wrap grid gap-x-16 gap-y-1 py-5 lg:grid-cols-2 lg:items-center lg:py-6">
              <h3 className="flex items-center gap-4 text-2xl font-semibold tracking-[-0.02em] lg:text-[2rem] lg:leading-tight">
                <span aria-hidden="true" className="size-3 shrink-0 bg-(--accent) transition-transform duration-500 ease-brand group-hover:rotate-90" />
                {industry.title}
              </h3>
              <p className="max-w-xl pl-7 text-[15px] leading-relaxed text-muted-foreground transition-colors group-hover:text-ink lg:pl-0 lg:text-base">{industry.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
