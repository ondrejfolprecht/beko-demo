import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ExternalLink } from "@/components/site/external-link";
import { SectionHeading } from "@/components/site/section-heading";
import { articles } from "@/content/site";

export function Articles() {
  return (
    <section id="blog" aria-labelledby="blog-title" tabIndex={-1} className="section-y outline-none">
      <SectionHeading id="blog-title" title="Blog" />
      <ul className="wrap mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:mt-16">
        {articles.items.map((article) => (
          <li key={article.href}>
            <a href={article.href} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden bg-mist">
                <Image src={article.image.src} alt={article.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.03]" />
              </div>
              <p className="mt-4 text-[13px] text-muted-foreground">{article.type}, {article.date}</p>
              <h3 className="mt-1 flex items-start justify-between gap-6 text-xl leading-snug font-semibold tracking-[-0.015em] transition-colors group-hover:text-blue lg:text-2xl">
                {article.title}
                <ArrowUpRight aria-hidden="true" className="mt-1 size-5 shrink-0" />
              </h3>
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted-foreground">{article.text}</p>
            </a>
          </li>
        ))}
      </ul>
      <div className="wrap mt-8"><ExternalLink href={articles.href} className="text-[15px]">Všechny články</ExternalLink></div>
    </section>
  );
}
