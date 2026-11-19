"use client";

import { cn } from "cn";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { TileReveal } from "@/components/motion/tile-reveal";
import { ExternalLink } from "@/components/site/external-link";
import { ImageStack } from "@/components/site/image-stack";
import { SectionHeading } from "@/components/site/section-heading";
import { SpecList } from "@/components/site/spec-list";
import { Badge } from "@/components/ui/badge";
import { services } from "@/content/site";

const stackImages = services.map((service) => service.image);

export function ServicesDetail() {
  const [active, setActive] = useState(0);
  const articles = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(articles.current.indexOf(entry.target as HTMLElement));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    articles.current.forEach((article) => article && observer.observe(article));
    return () => observer.disconnect();
  }, []);

  const current = services[active];

  return (
    <section id="sluzby" aria-labelledby="sluzby-title" tabIndex={-1} className="section-y bg-mist outline-none">
      <SectionHeading id="sluzby-title" title="Služby" />

      <div className="wrap mt-10 grid gap-x-16 lg:mt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          {services.map((service, index) => (
            <article
              key={service.id}
              ref={(element) => { articles.current[index] = element; }}
              style={{ "--accent": `var(--${service.accent})` } as CSSProperties}
              className={cn(
                "relative border-l border-line pb-14 pl-5 transition-opacity duration-500 last:pb-0 md:pl-8 lg:min-h-[72vh] lg:pb-24",
                index !== active && "lg:opacity-30"
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-0 -left-px h-full w-[3px] origin-top bg-(--accent) transition-transform duration-700 ease-brand",
                  index === active ? "lg:scale-y-100" : "lg:scale-y-0"
                )}
              />
              <div className="relative mb-6 aspect-[16/9] overflow-hidden lg:hidden">
                <Image src={service.image.src} alt={service.image.alt} fill sizes="100vw" className="object-cover" />
                <TileReveal columns={9} rows={6} base="var(--mist)" seed={index + 2} />
              </div>
              <h3 className="text-[1.75rem] leading-tight font-semibold tracking-[-0.025em] lg:text-[2rem]">{service.title}</h3>
              <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{service.text}</p>
              <div className="mt-6"><SpecList specs={service.specs} /></div>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
                {service.links.map((link) => <li key={link.href}><ExternalLink href={link.href}>{link.label}</ExternalLink></li>)}
              </ul>
            </article>
          ))}
        </div>

        <div aria-hidden="true" className="sticky top-[calc(var(--header)+2rem)] hidden aspect-[4/3] max-h-[calc(100svh-var(--header)-4rem)] w-full lg:block">
          <ImageStack images={stackImages} active={active} sizes="(min-width: 1344px) 760px, 56vw" className="absolute inset-0 overflow-hidden" />
          <TileReveal columns={9} rows={8} base="var(--mist)" seed={3} />
          <Badge className="absolute top-4 left-4 z-[1] h-9 gap-2.5 border-white/60 bg-white/70 px-3 text-[15px] backdrop-blur-xl">
            <span className="size-3 transition-colors duration-500" style={{ background: `var(--${current.accent})` }} />
            {current.title}
          </Badge>
        </div>
      </div>
    </section>
  );
}
