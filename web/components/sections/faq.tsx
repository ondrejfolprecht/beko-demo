import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/content/site";

/** Structured data for search engines, built from the same questions that are shown on the page. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export function Faq() {
  return (
    <section id="caste-otazky" aria-labelledby="faq-title" tabIndex={-1} className="bg-mist py-(--section) outline-none">
      <div className="wrap">
        <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-[calc(var(--header)+2.5rem)] lg:self-start">
            <h2 id="faq-title" className="display-section text-[clamp(1.625rem,3vw,2.75rem)]! leading-[1.3]! [text-wrap:balance]">{faq.title}</h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted-foreground">{faq.lead}</p>
          </div>

          <div className="mt-10 lg:mt-1">
            <Accordion type="single" collapsible defaultValue={faq.items[0].id} className="border-t border-line">
              {faq.items.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="data-[state=open]:border-blue-text">
                  <AccordionTrigger className="data-[state=open]:text-blue-text py-5 text-lg leading-snug font-semibold tracking-[-0.01em] lg:py-6 lg:text-xl">{item.question}</AccordionTrigger>
                  <AccordionContent className="max-w-2xl pr-10 pb-6 text-[15px] leading-relaxed text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-8 text-[15px] leading-relaxed text-muted-foreground">
              {faq.more}{" "}
              <a href={faq.href} className="inline-flex min-h-11 items-center gap-2 font-medium text-ink underline decoration-line underline-offset-8 hover:decoration-ink">
                {faq.action}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </section>
  );
}
