"use client";

import { cn } from "cn";
import { useInView } from "motion/react";
import { useRef, type CSSProperties, type ElementType } from "react";

type SplitTextProps = {
  text: string;
  as?: ElementType;
  id?: string;
  by?: "word" | "letter";
  /** Words rendered with the blue gradient, used for one phrase at most. */
  highlight?: string[];
  className?: string;
  delay?: number;
  step?: number;
  /** Plays on first paint from CSS. Use for the headline above the fold. */
  auto?: boolean;
  /** Ends the line after the word with this ending, for a break that follows the sentence. */
  breakAfter?: string;
  /** Mutes every word after the one with this ending, for a heading that trails off in grey. */
  muteAfter?: string;
};

export function SplitText({ text, as: Tag = "h2", id, by = "letter", highlight = [], className, delay = 0, step = 28, auto = false, breakAfter, muteAfter }: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  let index = 0;
  const words = text.split(" ");
  const muteFrom = muteAfter ? words.findIndex((word) => word.endsWith(muteAfter)) + 1 : 0;

  return (
    <Tag id={id} className={className} style={{ "--split-delay": `${delay}ms`, "--split-step": `${step}ms` } as CSSProperties}>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden="true" data-in={inView || undefined} data-auto={auto || undefined} className="inline-block">
        {words.map((word, wordIndex) => {
          const highlighted = highlight.includes(word);
          const wordMuted = muteFrom > 0 && wordIndex >= muteFrom;
          return (
            <span key={wordIndex} className={wordMuted ? "text-muted-foreground" : undefined}>
              {wordIndex > 0 && " "}
              {by === "word" ? (
                <span className="split-mask">
                  <span className={cn("split-glyph", highlighted && "ink-gradient")} style={{ "--i": index++ } as CSSProperties}>{word}</span>
                </span>
              ) : (
                <span className="inline-block whitespace-nowrap">
                  {Array.from(word).map((letter, letterIndex) => (
                    <span key={letterIndex} className="split-mask">
                      <span className={cn("split-glyph", highlighted && "ink-gradient")} style={{ "--i": index++ } as CSSProperties}>{letter}</span>
                    </span>
                  ))}
                </span>
              )}
              {breakAfter && word.endsWith(breakAfter) && <br />}
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
