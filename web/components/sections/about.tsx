import { FigureValue } from "@/components/motion/figure-value";
import { ScrollScene } from "@/components/motion/scroll-scene";
import { about } from "@/content/site";
import { AboutVideo } from "./about-video";

/** One BEKO colour per figure, in the order of the logo mosaic. */
const figureColors = ["var(--blue-text)", "var(--red)", "var(--yellow-text)", "var(--lime-text)"];

export function About() {
  return (
    <section aria-label="O společnosti" className="pt-[calc(var(--section)*0.5)] pb-(--section)">
      <div className="wrap">
        <p
          className="max-w-[60rem] text-[1.375rem] leading-[1.25] font-medium tracking-[-0.02em] [text-wrap:pretty] md:text-[2.25rem] md:leading-[1.2] xl:text-[2.75rem]"
        >{about.statement}</p>
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:mt-24 lg:grid-cols-4">
          {about.figures.map((figure, index) => (
            <div key={figure.label} className="flex flex-col-reverse justify-end gap-2">
              <dt className="text-sm text-muted-foreground">{figure.label}</dt>
              <dd className="display-figure w-fit text-[2.25rem] md:text-5xl xl:text-[3.5rem]" style={{ color: figureColors[index] }}>
                <FigureValue value={figure.value} suffix={figure.suffix} />
              </dd>
            </div>
          ))}
        </dl>
        <ScrollScene kind="film" className="mt-16 lg:mt-24">
          <AboutVideo />
        </ScrollScene>
      </div>
    </section>
  );
}
