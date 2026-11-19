import { cn } from "cn";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { TileReveal } from "@/components/motion/tile-reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SpecList } from "@/components/site/spec-list";
import { Button, ButtonArrow } from "@/components/ui/button";
import { software } from "@/content/site";

export function Software() {
  return (
    <section id="software" aria-labelledby="software-title" tabIndex={-1} className="section-y outline-none">
      <SectionHeading id="software-title" title="Software" />
      <div className="wrap mt-10 flex flex-col gap-16 lg:mt-16 lg:gap-24">
        {software.products.map((product, index) => (
          <article key={product.title} className="grid items-center gap-x-16 gap-y-8 lg:grid-cols-12">
            <div className={cn("relative overflow-hidden bg-linear-to-br from-blue via-[#3a8ef7] to-[#cfe6fd] p-4 sm:p-8 lg:col-span-7 xl:p-12", index === 1 && "lg:order-last")}>
              <div className="relative border border-white/40 bg-white/25 p-1.5 backdrop-blur-sm">
                <Image src={product.image.src} alt={product.image.alt} width={product.image.width} height={product.image.height} quality={85} sizes="(min-width: 1024px) 50vw, 100vw" className="block h-auto w-full" />
              </div>
              <TileReveal columns={9} rows={7} seed={index * 13 + 4} />
            </div>
            <Reveal className="lg:col-span-5">
              <h3 className="text-[1.75rem] leading-tight font-semibold tracking-[-0.025em] lg:text-[2rem]">{product.title}</h3>
              <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{product.text}</p>
              <div className="mt-6"><SpecList specs={product.specs} /></div>
              <Button asChild size="split" variant="outline" className="mt-6">
                <a href={product.href}>
                  {product.action}
                  <span className="sr-only"> {product.title} (stávající web BEKO)</span>
                  <ButtonArrow external />
                </a>
              </Button>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
