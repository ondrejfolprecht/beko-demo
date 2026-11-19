import { Button, ButtonArrow } from "@/components/ui/button";
import { projectsTeaser } from "@/content/site";
import { ProjectCarousel } from "./project-carousel";

export function ProjectsTeaser() {
  return (
    <section id="projekty" aria-labelledby="projekty-title" tabIndex={-1} className="overflow-x-clip py-(--section) outline-none">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <h2 id="projekty-title" className="display-section leading-[1.3]! [text-wrap:balance] lg:text-[min(3.2vw,3rem)]">{projectsTeaser.title}</h2>
          <p className="max-w-xl lg:pt-1 text-[17px] leading-relaxed text-muted-foreground [text-wrap:balance]">{projectsTeaser.lead}</p>
        </div>
      </div>
      <ProjectCarousel>
        <Button asChild variant="outline" size="split">
          <a href={projectsTeaser.href}>
            {projectsTeaser.action}
            <span className="sr-only"> (stávající web BEKO)</span>
            <ButtonArrow external />
          </a>
        </Button>
      </ProjectCarousel>
    </section>
  );
}
