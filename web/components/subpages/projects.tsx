import { cn } from "cn";
import Image from "next/image";
import { TileReveal } from "@/components/motion/tile-reveal";
import { ExternalLink } from "@/components/site/external-link";
import { SectionHeading } from "@/components/site/section-heading";
import { projects } from "@/content/site";
import { ProjectFeature } from "./project-feature";

const layout = ["lg:col-span-6", "lg:col-span-3 lg:mt-24", "lg:col-span-3"];

export function Projects() {
  return (
    <section id="projekty" aria-labelledby="projekty-title" tabIndex={-1} className="section-y bg-mist outline-none">
      <SectionHeading id="projekty-title" title="Projekty" lead={projects.lead} />
      <ProjectFeature />
      <ul className="wrap mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12">
        {projects.others.map((project, index) => (
          <li key={project.title} className={cn(layout[index], index === 0 && "sm:col-span-2")}>
            <article className="group">
              <div className={cn("relative overflow-hidden bg-white", index === 0 ? "aspect-[888/597]" : "aspect-[888/597] sm:aspect-[4/5] lg:aspect-[888/900]")}>
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
                />
                <TileReveal columns={index === 0 ? 9 : 6} rows={index === 0 ? 7 : 8} base="var(--mist)" seed={index * 5 + 11} />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.015em]">{project.title}</h3>
              <p className="mt-1 max-w-md text-[15px] leading-relaxed text-muted-foreground">{project.text}</p>
              <ExternalLink href={project.href} className="mt-2 text-[15px]">Detail</ExternalLink>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
