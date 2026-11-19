import { cn } from "cn";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  id: string;
  title: string;
  lead?: string;
  highlight?: boolean;
  className?: string;
};

export function SectionHeading({ id, title, lead, highlight = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("wrap", className)}>
      <SplitText id={id} text={title} step={16} className="display-section max-w-5xl [text-wrap:balance]" highlight={highlight ? title.split(" ") : []} />
      {lead && (
        <Reveal className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground lg:mt-8 lg:ml-auto lg:w-1/2 lg:text-lg">
          <p>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
