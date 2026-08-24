import { useState, type FormEvent } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "./reveal";
import { contact } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(120).optional(),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255).or(z.literal("")),
  spaceRequired: z.string().trim().max(80).optional(),
  area: z.string().trim().max(50).optional(),
  floor: z.string().trim().max(50).optional(),
  message: z.string().trim().max(1000).optional(),
});

const field =
  "w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

export function Enquiry() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    form.reset();
    toast.success("Enquiry received", {
      description: "Our team will get back to you shortly.",
    });
  }

  return (
    <section id="enquire" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <Reveal className="min-w-0">
          <p className="eyebrow">Enquiry</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
            Looking for the Right Space for Your Business?
          </h2>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-muted-foreground">
            Tell us what you need and our team will help you find the right commercial space at M L
            Business Park.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 border border-foreground/25 px-6 py-3.5 text-[0.68rem] tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/25 px-6 py-3.5 text-[0.68rem] tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <form onSubmit={onSubmit} noValidate className="grid gap-7 sm:grid-cols-2">
            <Field label="Name" name="name" error={errors["name"]} required />
            <Field label="Company / Business Name" name="company" />
            <Field label="Phone Number" name="phone" type="tel" error={errors["phone"]} required />
            <Field label="Email" name="email" type="email" error={errors["email"]} />
            <div className="flex flex-col gap-1.5">
              <label htmlFor="spaceRequired" className="eyebrow">
                Space Required
              </label>
              <select id="spaceRequired" name="spaceRequired" className={field} defaultValue="">
                <option value="">Select an option</option>
                <option>Office Space</option>
                <option>Commercial Unit</option>
                <option>Premium Workspace</option>
                <option>Custom Business Space</option>
              </select>
            </div>
            <Field label="Approximate Area" name="area" placeholder="e.g. 800 sq. ft." />
            <Field label="Preferred Floor" name="floor" placeholder="e.g. First floor" />
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="message" className="eyebrow">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                maxLength={1000}
                className={`${field} resize-none`}
                placeholder="Tell us about your requirement"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-accent px-8 py-4 text-[0.7rem] tracking-[0.2em] text-accent-foreground uppercase transition-opacity hover:opacity-90 sm:w-auto"
              >
                Request a Callback
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string | undefined;
  error?: string | undefined;
  required?: boolean | undefined;
  placeholder?: string | undefined;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="eyebrow">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        placeholder={placeholder}
        className={field}
      />
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}
