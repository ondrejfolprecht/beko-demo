import { ScrollScene } from "@/components/motion/scroll-scene";
import { Entrance } from "@/components/motion/entrance";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { blog } from "@/content/site";
import { NewsletterForm } from "./newsletter-form";

export function Blog() {
  return (
    <section id="blog" aria-labelledby="blog-title" tabIndex={-1} className="pb-(--section) outline-none">
      <div className="wrap">
        <div className="border-t border-line pt-8 lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:pt-10">
          <h2 id="blog-title" className="display-section text-[clamp(1.625rem,3vw,2.75rem)]! leading-[1.3]! [text-wrap:balance]">{blog.title}</h2>
          <div className="mt-6 lg:mt-1">
            <p className="max-w-xl text-[17px] leading-relaxed text-muted-foreground">{blog.lead}</p>
            <a href={blog.href} className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-medium underline decoration-line underline-offset-8 hover:decoration-ink">
              {blog.action}<ArrowUpRight aria-hidden="true" className="size-4" />
              <span className="sr-only"> (stávající web BEKO)</span>
            </a>
          </div>
        </div>

        <ul className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
          {blog.items.map((article, index) => (
            <Entrance as="li" kind={index === 0 ? "media" : "item"} order={index} key={article.href} className={index === 0 ? "lg:row-span-2" : "border-t border-line pt-6 lg:pb-6"}>
              <a href={article.href} className={index === 0 ? "group block" : "group grid grid-cols-[6rem_minmax(0,1fr)] gap-5 sm:grid-cols-[9rem_minmax(0,1fr)]"}>
                <div className={`relative block overflow-hidden bg-mist ${index === 0 ? "aspect-[16/9]" : "aspect-square"}`}>
                  <ScrollScene className="absolute inset-0">
                  <Image src={article.image.src} alt={article.image.alt} fill sizes={index === 0 ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 640px) 144px, 96px"} className="object-cover" />
                  </ScrollScene>
                </div>
                <span className={`block min-w-0 ${index === 0 ? "mt-5" : ""}`}>
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span>{article.type}</span>
                    {"date" in article && <span>{article.date}</span>}
                  </span>
                  <span className={`mt-2 block leading-tight font-semibold tracking-[-0.02em] group-hover:underline decoration-line underline-offset-4 ${index === 0 ? "text-2xl lg:text-3xl" : "text-lg sm:text-xl"}`}>{article.title}</span>
                  <span className={`mt-3 text-[15px] leading-relaxed text-muted-foreground ${index === 0 ? "block max-w-xl" : "hidden sm:block"}`}>{article.text}</span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                    {article.type === "Software" ? "Prohlédnout SpinFire" : blog.read}
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </span>
                <span className="sr-only"> (stávající web BEKO)</span>
              </a>
            </Entrance>
          ))}
        </ul>

        <div className="newsletter-panel mt-14 px-6 py-8 sm:px-8 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-12">
          <div>
            <h3 className="max-w-md text-2xl leading-tight font-semibold tracking-[-0.02em] [text-wrap:balance]">{blog.newsletter.title}</h3>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted-foreground">{blog.newsletter.text}</p>
          </div>
          <div className="mt-6 lg:mt-0"><NewsletterForm /></div>
        </div>
      </div>
    </section>
  );
}
