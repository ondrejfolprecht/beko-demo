import { Button, ButtonArrow } from "@/components/ui/button";
import { company, contact } from "@/content/site";

/** Closing call to action of the landing page. The full contact section with the form and the map belongs to the contact page. */
export function ContactBand() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" tabIndex={-1} className="contact-band py-(--section) text-white outline-none [&_a:focus-visible]:outline-white">
      <div className="wrap">
        <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <h2 id="kontakt-title" className="display-section text-[clamp(1.625rem,3vw,2.75rem)]! leading-[1.3]! [text-wrap:balance]">{contact.title}</h2>
          <div className="mt-6 lg:mt-1">
            <p className="max-w-xl text-[17px] leading-relaxed text-white">{contact.band.text}</p>
            <div className="mt-7 flex flex-col gap-x-8 gap-y-5 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild variant="outline" size="split" className="justify-between border-white! bg-white! text-[#0e1524]! hover:bg-white/90! max-sm:w-full">
                <a href={contact.band.href}>
                  {contact.band.action}
                  <span className="sr-only"> (stávající web BEKO)</span>
                  <ButtonArrow external />
                </a>
              </Button>
              <div className="flex flex-col gap-1 text-[15px] font-medium">
                <a href={`mailto:${company.email}`} className="underline decoration-white/40 underline-offset-6 hover:decoration-white">{company.email}</a>
                <a href={company.phoneHref} className="whitespace-nowrap underline decoration-white/40 underline-offset-6 hover:decoration-white">{company.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
