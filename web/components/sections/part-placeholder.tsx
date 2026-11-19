import { Badge } from "@/components/ui/badge";

export type PartPlaceholderProps = {
  id: string;
  number: string;
  title: string;
  task: string;
  layout: "articles" | "questions";
};

function Ghost({ className }: { className: string }) {
  return <span className={`block bg-mist ${className}`} />;
}

/** Temporary outline of a part that is not built yet. Keeps its place in the page until its turn comes. */
export function PartPlaceholder({ id, number, title, task, layout }: PartPlaceholderProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} tabIndex={-1} className="section-y outline-none">
      <div className="wrap">
        <div className="border border-dashed border-input p-5 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 id={titleId} className="text-xl font-semibold tracking-[-0.02em] lg:text-2xl">{number} {title}</h2>
            <Badge>Připravujeme</Badge>
          </div>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{task}</p>

          <div aria-hidden="true" className="mt-6">
            {layout === "articles" ? (
              <>
                <div className="grid gap-4 md:grid-cols-3">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="flex flex-col gap-2.5">
                      <Ghost className="aspect-[16/9]" />
                      <Ghost className="h-4 w-4/5" />
                      <Ghost className="h-3 w-3/5" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-input pt-5">
                  <Ghost className="h-4 w-52" />
                  <Ghost className="h-11 w-full max-w-sm" />
                </div>
              </>
            ) : (
              <div className="border-t border-dashed border-input">
                {[0, 1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center justify-between gap-6 border-b border-dashed border-input py-4">
                    <Ghost className={`h-4 ${item % 2 ? "w-2/5" : "w-3/5"}`} />
                    <Ghost className="size-4 shrink-0" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
