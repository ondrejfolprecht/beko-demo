import { About } from "@/components/sections/about";
import { Blog } from "@/components/sections/blog";
import { ClaimBand } from "@/components/sections/claim-band";
import { ContactBand } from "@/components/sections/contact-band";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { ProjectsTeaser } from "@/components/sections/projects-teaser";
import { Services } from "@/components/sections/services";
import { Assistant } from "@/components/site/assistant";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

/** Parts and their order follow beko-redesign-scope/BEKO_Landing_page_texty.docx. Part 02 sits inside the hero. */
export default function Home() {
  return (
    <>
      <a href="#obsah" className="fixed top-2 left-2 z-50 -translate-y-20 bg-blue px-4 py-2.5 text-white focus:translate-y-0">
        Přejít k obsahu
      </a>
      <div id="top" />
      <SiteHeader />
      <main id="obsah" tabIndex={-1} className="outline-none">
        <div data-part="01-hero">
          <Hero />
        </div>
        <div data-part="03-predstaveni-firmy">
          <About />
        </div>
        <div data-part="04-sluzby">
          <Services />
        </div>
        <div data-part="05-projekty">
          <ProjectsTeaser />
        </div>
        <div data-part="06-spoluprace">
          <Process />
          <ClaimBand />
        </div>
        <div data-part="07-blog-newsletter">
          <Blog />
        </div>
        <div data-part="08-caste-otazky">
          <Faq />
        </div>
        <div data-part="09-kontakt">
          <ContactBand />
        </div>
      </main>
      <div data-part="10-footer">
        <SiteFooter />
      </div>
      <Assistant />
    </>
  );
}
