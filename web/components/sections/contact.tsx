import { ArrowDown } from "lucide-react";
import { company, contact } from "@/content/site";
import { ContactForm } from "./contact-form";
import { OfficeMap } from "./office-map";

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" tabIndex={-1} className="pb-(--section) outline-none">
      <div className="wrap">
        <div className="border-t border-line pt-8 lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:pt-10">
          <h2 id="kontakt-title" className="display-section text-[clamp(1.625rem,3vw,2.75rem)]! leading-[1.3]! [text-wrap:balance]">{contact.title}</h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground lg:mt-1">{contact.lead}</p>
        </div>

        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h3 className="text-2xl leading-tight font-semibold tracking-[-0.02em]">{contact.form.title}</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">{contact.form.text}</p>

            <dl className="mt-8 border-t border-line text-[15px]">
              <div className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <dt className="text-muted-foreground">E-mail</dt>
                <dd><a href={`mailto:${company.email}`} className="text-lg font-medium underline decoration-line underline-offset-6 hover:decoration-ink">{company.email}</a></dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <dt className="text-muted-foreground">Telefon</dt>
                <dd><a href={company.phoneHref} className="text-lg font-medium whitespace-nowrap underline decoration-line underline-offset-6 hover:decoration-ink">{company.phone}</a></dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <dt className="text-muted-foreground">Sídlo</dt>
                <dd className="sm:text-right">{company.address}</dd>
              </div>
            </dl>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{contact.note}</p>
            <a href="#pobocky" className="mt-3 inline-flex min-h-11 items-center gap-3 text-sm font-medium underline decoration-line underline-offset-8 hover:decoration-ink">
              {contact.officesLink}<ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>

          <div className="mt-10 lg:mt-1"><ContactForm /></div>
        </div>

        <div id="pobocky" tabIndex={-1} className="mt-16 outline-none lg:mt-24"><OfficeMap /></div>
      </div>
    </section>
  );
}
