import { ScrollScene } from "@/components/motion/scroll-scene";
import { getImageProps, type StaticImageData } from "next/image";
import darkDesktop from "@/public/images/hero/dark-desktop.webp";
import darkMobile from "@/public/images/hero/dark-mobile.webp";
import lightDesktop from "@/public/images/hero/light-desktop.webp";
import lightMobile from "@/public/images/hero/light-mobile.webp";

/** The landscape photo covers the hero, so on narrow windows it renders wider than the viewport. */
const LANDSCAPE_SIZES = "max(100vw, 178vh)";

function Scene({ desktop, mobile, night = false }: { desktop: StaticImageData; mobile: StaticImageData; night?: boolean }) {
  const shared = { alt: "", quality: 85 };
  const { props: { srcSet: desktopSet } } = getImageProps({ ...shared, src: desktop, sizes: LANDSCAPE_SIZES });
  const { props: { srcSet: mobileSet, ...image } } = getImageProps({
    ...shared,
    src: mobile,
    sizes: "100vw",
    // Only the day scene competes for first paint. The night scene loads quietly for the crossfade.
    loading: night ? "lazy" : "eager",
    fetchPriority: night ? "low" : "high",
  });

  return (
    <picture className={night ? "hero-scene hero-scene-night" : "hero-scene hero-scene-day"}>
      <source media="(min-aspect-ratio: 1/1)" srcSet={desktopSet} sizes={LANDSCAPE_SIZES} />
      <source media="(max-aspect-ratio: 1/1)" srcSet={mobileSet} sizes="100vw" />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
      <img {...image} />
    </picture>
  );
}

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <ScrollScene kind="hero" className="absolute inset-0">
      <Scene desktop={lightDesktop} mobile={lightMobile} />
      <Scene desktop={darkDesktop} mobile={darkMobile} night />
      </ScrollScene>
      <div className="hero-logo-scrim" />
    </div>
  );
}
