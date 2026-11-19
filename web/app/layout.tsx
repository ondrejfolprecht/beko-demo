import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEKO Engineering | BEKO: NO LIMITS",
  description: "Konstrukce, software a AI pro výrobce, kteří dodávají světovým značkám. 850+ projektů, certifikace TISAX a ISO 27001, pobočky v pěti zemích střední Evropy.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        {/* Applies the saved theme before the first paint, so the page does not flash. */}
        <script dangerouslySetInnerHTML={{ __html: 'var t;try{t=localStorage.getItem("beko-theme")}catch{}var d=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.querySelector(\'meta[name="theme-color"]\')?.setAttribute("content",d?"#080c16":"#ffffff")' }} />
        <link rel="preload" href="/fonts/michroma-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/michroma-latin-ext-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <noscript>
          <style>{".tiles{display:none}.split-glyph{transform:none}.sketch-stroke{stroke-dashoffset:0}[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
