import Image from "next/image";
import type { CSSProperties } from "react";
import { clientLogos } from "@/content/site";

function LogoList({ decorative = false }: { decorative?: boolean }) {
  return (
    <ul aria-hidden={decorative || undefined} className="flex shrink-0 items-center">
      {clientLogos.items.map((logo) => (
        <li key={logo.src} className="flex h-12 shrink-0 items-center px-5 lg:h-10">
          {/* The brightness and invert filter turns any logo into a white silhouette. */}
          <Image
            src={logo.src}
            alt={decorative ? "" : logo.name}
            width={logo.width}
            height={logo.height}
            unoptimized
            loading="eager"
            className="client-logo max-w-none brightness-0 invert"
            style={{ "--logo-width": logo.width, "--logo-height": logo.height } as CSSProperties}
          />
        </li>
      ))}
    </ul>
  );
}

export function ClientLogos() {
  return (
    <div data-part="02-klientska-loga" className="absolute inset-x-0 bottom-0">
      <section aria-labelledby="klienti-title" className="wrap pb-4 lg:pb-6">
        <div className="max-w-xl max-lg:mx-auto max-lg:text-center lg:max-w-lg">
          <h2 id="klienti-title" className="text-[15px] font-medium text-white lg:text-[13px]">{clientLogos.title}</h2>
          <div className="marquee mt-1.5 lg:mt-1 lg:-ml-5">
            <div className="marquee-track">
              <LogoList />
              <LogoList decorative />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
