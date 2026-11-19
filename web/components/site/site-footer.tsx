import { Entrance } from "@/components/motion/entrance";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { Button, ButtonArrow } from "@/components/ui/button";
import { company, footer, legal } from "@/content/site";
import logoDark from "@/public/brand/beko-logo-dark.webp";
import logo from "@/public/brand/beko-logo.webp";
import { CookiePreferences } from "./cookie-preferences";
import { ExternalLink } from "./external-link";
import { Roll } from "./roll";

const isExternal = (href: string) => href.startsWith("http");

export function SiteFooter() {
  return (
    <footer className="site-footer pb-24 sm:pb-16 2xl:pb-0">
      <div className="wrap flex flex-col gap-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div>
          <h2 className="text-2xl leading-tight font-semibold lg:text-[1.75rem] tracking-[-0.02em] [text-wrap:balance]">{footer.career.title}</h2>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted-foreground">{footer.career.text}</p>
        </div>
        <div className="shrink-0">
          <Button asChild variant="outline" size="split" className="justify-between max-sm:w-full">
            <a href={footer.career.href}>
              {footer.career.action}
              <span className="sr-only"> (stávající web BEKO)</span>
              <ButtonArrow external />
            </a>
          </Button>
        </div>
      </div>

      <div className="wrap grid gap-x-8 gap-y-10 border-t border-line py-14 text-[15px] sm:grid-cols-2 xl:grid-cols-[1.6fr_repeat(4,minmax(0,1fr))] lg:py-16">
        <div className="sm:col-span-2 xl:col-span-1 xl:pr-8">
          <a href="#top" aria-label="BEKO Engineering, zpět na začátek" className="inline-flex min-h-11 items-center"><Image src={logo} alt="" width={140} unoptimized className="h-auto w-[132px] dark:hidden" /><Image src={logoDark} alt="" width={140} unoptimized className="hidden h-auto w-[132px] dark:block" /></a>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">{footer.signature}</p>
          <ul className="mt-6 flex flex-col gap-2 font-medium">
            <li><a href={company.phoneHref} className="inline-flex min-h-8 items-center"><Roll>{company.phone}</Roll></a></li>
            <li><a href={`mailto:${company.email}`} className="inline-flex min-h-8 items-center"><Roll>{company.email}</Roll></a></li>
            <li><ExternalLink href={company.linkedin} note="LinkedIn BEKO Engineering" className="min-h-8">{footer.linkedin}</ExternalLink></li>
          </ul>
        </div>

        {footer.groups.map((group, index) => (
          <Entrance key={group.title} order={index}>
          <nav aria-label={group.title}>
            <h2 className="text-[13px] font-medium text-muted-foreground">{group.title}</h2>
            <ul className="mt-4 flex flex-col gap-1">
              {group.links.map((link) => (
                <li key={link.label}>
                  {isExternal(link.href)
                    ? <ExternalLink href={link.href} className="min-h-9">{link.label}</ExternalLink>
                    : <a href={link.href} className="inline-flex min-h-9 items-center font-medium"><Roll>{link.label}</Roll></a>}
                </li>
              ))}
            </ul>
          </nav>
          </Entrance>
        ))}
      </div>

      <div className="wrap flex flex-col gap-6 border-t border-line py-8 text-[13px] text-muted-foreground lg:flex-row lg:items-start lg:justify-between">
        <p className="leading-relaxed">
          © {new Date().getFullYear()} {company.legalName}<br />
          {company.address}<br />
          {company.registration}
        </p>
        <nav aria-label="Informace a předvolby">
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-foreground">
            <li><ExternalLink href={legal.privacy} className="min-h-9">Ochrana osobních údajů</ExternalLink></li>
            <li className="flex min-h-9 items-center"><CookiePreferences /></li>
            <li><ExternalLink href={legal.reporting} className="min-h-9">Whistleblowing</ExternalLink></li>
          </ul>
        </nav>
        <a href="#top" className="inline-flex min-h-9 items-center gap-2 font-medium text-foreground">
          <Roll>{footer.top}</Roll>
          <ArrowUp aria-hidden="true" className="size-4" />
        </a>
      </div>
    </footer>
  );
}
