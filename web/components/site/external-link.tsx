import { cn } from "cn";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";
import { Roll } from "./roll";

/** Link to the current BEKO website. The arrow is the visible mark, the screen reader gets it in words. */
export function ExternalLink({ children, className, note = "stávající web BEKO", ...props }: ComponentProps<"a"> & { children: string; note?: string }) {
  return (
    <a className={cn("inline-flex items-center gap-1.5 font-medium", className)} {...props}>
      <Roll>{children}</Roll>
      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
      <span className="sr-only"> ({note})</span>
    </a>
  );
}
