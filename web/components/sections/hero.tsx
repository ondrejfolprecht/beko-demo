import type { CSSProperties } from "react";
import { SplitText } from "@/components/motion/split-text";
import { Button, ButtonArrow } from "@/components/ui/button";
import { hero } from "@/content/site";
import { ClientLogos } from "./client-logos";
import { HeroBackground } from "./hero-background";

export function Hero() {
  return (
    // Portrait height follows the content, so the car always sits right under the buttons.
    <section
      aria-labelledby="hero-title"
      data-theme-scope
      className="relative isolate -mt-(--header) flex overflow-clip [@media(min-aspect-ratio:1/1)]:min-h-[max(100svh,38rem)] pt-(--header) transition-colors duration-700"
    >
      <HeroBackground />
      <div className="hero-copy wrap pt-10 max-lg:text-center md:pt-12 lg:pt-[clamp(3rem,13vh_-_2.5rem,6rem)]">
        <SplitText
          as="h1"
          id="hero-title"
          auto
          by="word"
          step={70}
          text={hero.title}
          breakAfter={hero.titleBreakAfter}
          className="display-hero"
        />
        <p className="hero-lead rise-in mt-5 max-w-2xl text-[17px] leading-relaxed text-ink [text-wrap:pretty] max-lg:mx-auto max-lg:max-w-md max-lg:text-base max-lg:leading-snug max-lg:[text-wrap:balance] lg:mt-8 lg:max-w-xl lg:text-base" style={{ "--delay": "350ms" } as CSSProperties}>
          {hero.lead}
        </p>
        <div className="hero-actions rise-in mt-7 flex gap-3 max-lg:mx-auto max-lg:max-w-sm max-sm:flex-col sm:max-lg:max-w-none sm:max-lg:justify-center lg:mt-8" style={{ "--delay": "500ms" } as CSSProperties}>
          <Button asChild size="split" className="max-sm:w-full lg:h-[42px] lg:gap-4 lg:pl-4 lg:text-sm">
            <a href="#kontakt">
              <span className="max-sm:flex-1 max-sm:pl-12 max-sm:text-center">{hero.primaryAction}</span>
              <ButtonArrow className="lg:w-[42px]" />
            </a>
          </Button>
          <Button asChild variant="outline" className="h-12 border-[0.5px]! bg-background/30 backdrop-blur-md max-sm:w-full lg:h-[42px] lg:px-4 lg:text-sm">
            <a href="#projekty">{hero.secondaryAction}</a>
          </Button>
        </div>
      </div>
      <ClientLogos />
    </section>
  );
}
