import { SplitText } from "@/components/motion/split-text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { questions } from "@/content/site";

export function Faq() {
  return (
    <section aria-labelledby="dotazy-title" className="section-y border-t border-line">
      <div className="wrap grid gap-x-16 gap-y-8 lg:grid-cols-2">
        <SplitText id="dotazy-title" text="Dotazy" className="display-section" />
        <Accordion type="single" collapsible className="border-t border-line">
          {questions.map((question) => (
            <AccordionItem key={question.title} value={question.title}>
              <AccordionTrigger className="min-h-16 py-4 text-lg lg:text-xl">{question.title}</AccordionTrigger>
              <AccordionContent className="max-w-xl pb-5 text-[15px] leading-relaxed text-muted-foreground lg:text-base">
                <p>{question.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
