"use client";

import { CircleCheck } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { Button, ButtonArrow } from "@/components/ui/button";
import { blog, legal } from "@/content/site";

const { newsletter } = blog;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Newsletter sign-up. The demo has no mailing service, so a valid address only shows the confirmation. */
export function NewsletterForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "invalid" | "done">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();
    const valid = EMAIL.test(email);
    setStatus(valid ? "done" : "invalid");
    if (!valid) inputRef.current?.focus();
  }

  if (status === "done") {
    return (
      <div role="status" tabIndex={-1} ref={(node) => { node?.focus(); }} className="flex gap-3 border border-line bg-surface p-5">
        <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-text" />
        <div>
          <p className="text-[15px] leading-relaxed font-medium">{newsletter.success}</p>
          <p className="mt-1 text-sm text-muted-foreground">{newsletter.demo}</p>
        </div>
      </div>
    );
  }

  const invalid = status === "invalid";

  return (
    <form noValidate onSubmit={submit}>
      <label htmlFor="newsletter-email" className="text-sm font-medium">{newsletter.label}</label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          ref={inputRef}
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder={newsletter.placeholder}
          aria-invalid={invalid || undefined}
          required
          aria-describedby={invalid ? "newsletter-error newsletter-note newsletter-demo" : "newsletter-note newsletter-demo"}
          onChange={() => invalid && setStatus("idle")}
          className="h-12 w-full min-w-0 border border-line sm:flex-1 bg-surface px-4 text-base transition-colors outline-none placeholder:text-muted-foreground/70 hover:border-ink/40 focus-visible:border-blue focus-visible:ring-2 focus-visible:ring-blue/25 aria-invalid:border-danger"
        />
        <Button type="submit" size="split" className="justify-between max-sm:w-full">
          {newsletter.action}
          <ButtonArrow />
        </Button>
      </div>
      {invalid && (
        <p id="newsletter-error" role="alert" className="mt-2 text-sm text-danger">{newsletter.invalid}</p>
      )}
      <p id="newsletter-note" className="mt-3 text-sm text-muted-foreground">
        {newsletter.note}{" "}
        <a href={legal.privacy} className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">{newsletter.privacy}</a>
      </p>
      <p id="newsletter-demo" className="mt-2 text-xs text-muted-foreground">Ukázkový formulář. E-mail se neukládá ani neodesílá.</p>
    </form>
  );
}
