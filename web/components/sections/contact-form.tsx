"use client";

import { CircleCheck } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { Button, ButtonArrow } from "@/components/ui/button";
import { contact, legal } from "@/content/site";

const { form } = contact;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const control =
  "w-full min-w-0 border border-line bg-surface px-4 text-base transition-colors outline-none placeholder:text-muted-foreground/70 hover:border-ink/40 focus-visible:border-blue focus-visible:ring-2 focus-visible:ring-blue/25 aria-invalid:border-danger";

function validate(data: FormData): Errors {
  const value = (key: Field) => String(data.get(key) ?? "").trim();
  const errors: Errors = {};
  if (!value("name")) errors.name = form.name.missing;
  if (!value("email")) errors.email = form.email.missing;
  else if (!EMAIL.test(value("email"))) errors.email = form.email.invalid;
  if (!value("message")) errors.message = form.message.missing;
  return errors;
}

function Label({ htmlFor, children, optional = false }: { htmlFor: string; children: string; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium">
      {children}
      {optional && <span className="font-normal text-muted-foreground"> ({form.optional})</span>}
    </label>
  );
}

/** Contact form. The demo has no backend, so a valid message only shows the confirmation after a short pause. */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(new FormData(event.currentTarget));
    setErrors(found);
    const first = (["name", "email", "message"] as const).find((key) => found[key]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    window.setTimeout(() => setStatus("done"), 700);
  }

  function clear(field: Field) {
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  }

  if (status === "done") {
    return (
      <div role="status" tabIndex={-1} ref={(node) => { node?.focus(); }} className="flex gap-3 border border-line bg-surface p-6 outline-none">
        <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue" />
        <div>
          <p className="text-[17px] leading-relaxed font-medium">{form.success}</p>
          <p className="mt-2 text-sm text-muted-foreground">{form.demo}</p>
        </div>
      </div>
    );
  }

  const describe = (field: Field, hint?: string) => [errors[field] && `contact-${field}-error`, hint].filter(Boolean).join(" ") || undefined;
  const error = (field: Field) =>
    errors[field] && <p id={`contact-${field}-error`} className="mt-2 text-sm text-danger">{errors[field]}</p>;

  return (
    <form ref={formRef} noValidate onSubmit={submit} aria-describedby="contact-demo" className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
      <div>
        <Label htmlFor="contact-name">{form.name.label}</Label>
        <input
          id="contact-name" name="name" type="text" autoComplete="name" required
          placeholder={form.name.placeholder}
          aria-invalid={Boolean(errors.name) || undefined}
          aria-describedby={describe("name")}
          onChange={() => clear("name")}
          className={`${control} mt-2 h-12`}
        />
        {error("name")}
      </div>

      <div>
        <Label htmlFor="contact-email">{form.email.label}</Label>
        <input
          id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" required
          placeholder={form.email.placeholder}
          aria-invalid={Boolean(errors.email) || undefined}
          aria-describedby={describe("email", "contact-email-hint")}
          onChange={() => clear("email")}
          className={`${control} mt-2 h-12`}
        />
        {error("email")}
        <p id="contact-email-hint" className="mt-2 text-[13px] text-muted-foreground">{form.email.hint}</p>
      </div>

      <div>
        <Label htmlFor="contact-company" optional>{form.company.label}</Label>
        <input id="contact-company" name="company" type="text" autoComplete="organization" aria-describedby="contact-company-hint" className={`${control} mt-2 h-12`} />
        <p id="contact-company-hint" className="mt-2 text-[13px] text-muted-foreground">{form.company.hint}</p>
      </div>

      <div>
        <Label htmlFor="contact-phone" optional>{form.phone.label}</Label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" aria-describedby="contact-phone-hint" className={`${control} mt-2 h-12`} />
        <p id="contact-phone-hint" className="mt-2 text-[13px] text-muted-foreground">{form.phone.hint}</p>
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="contact-message">{form.message.label}</Label>
        <textarea
          id="contact-message" name="message" required rows={6}
          placeholder={form.message.placeholder}
          aria-invalid={Boolean(errors.message) || undefined}
          aria-describedby={describe("message")}
          onChange={() => clear("message")}
          className={`${control} mt-2 block min-h-40 resize-y py-3 leading-relaxed`}
        />
        {error("message")}
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p id="contact-demo" className="max-w-md text-[13px] leading-relaxed text-muted-foreground">
          {form.demo}{" "}
          <a href={legal.privacy} className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">Ochrana osobních údajů</a>
        </p>
        <Button type="submit" size="split" disabled={status === "sending"} className="justify-between max-sm:w-full">
          {form.action}
          <ButtonArrow />
        </Button>
      </div>
      <p role="status" className="sr-only">{status === "sending" ? form.sending : ""}</p>
    </form>
  );
}
