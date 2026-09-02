import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Send, CheckCircle2, Building, Mail, MapPin } from "lucide-react";
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
  "w-full rounded-md border border-border bg-card px-3.5 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-1 focus:ring-accent";

export function Enquiry() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
    form.reset();
    toast.success("Enquiry Received Successfully", {
      description: "Our commercial leasing team will contact you shortly.",
    });
  }

  return (
    <section
      id="enquire"
      className="relative py-20 sm:py-28 lg:py-32 bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 items-start">
          {/* Left Column: CTA Messaging & Direct Contacts */}
          <Reveal className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[0.65rem] font-medium tracking-[0.2em] text-white uppercase backdrop-blur-sm">
              Commercial Leasing Desk
            </span>

            <h2 className="mt-4 font-display text-3xl leading-[1.12] sm:text-5xl lg:text-6xl font-normal text-white">
              Find the Right Space for Your Business
            </h2>

            <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-white/80 font-light">
              Have questions about availability, commercial spaces or facilities? Get in touch with
              our team.
            </p>

            {/* Direct Action Buttons: Call, WhatsApp, Email */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={contact.phoneHref}
                className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded bg-accent px-6 py-3 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-accent-foreground transition-all hover:bg-accent/90 active:scale-[0.98]"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded border border-white/30 bg-white/10 px-6 py-3 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-white backdrop-blur-sm transition-colors hover:bg-white/20 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp Us
              </a>
            </div>

            {/* Property Contact Info */}
            <div className="mt-10 space-y-4 border-t border-white/15 pt-6 text-xs text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Interactive Enquiry Form */}
          <Reveal delay={120} className="min-w-0">
            <div className="rounded-xl border border-white/15 bg-background/95 p-6 sm:p-8 text-foreground shadow-2xl backdrop-blur-md">
              <h3 className="font-display text-2xl font-medium text-foreground">
                Request Space Availability
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Fill out your details below and our team will get back to you with matching space
                options.
              </p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center justify-center rounded-lg border border-emerald-600/30 bg-emerald-500/10 p-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                  <h4 className="mt-4 font-display text-2xl font-medium text-foreground">
                    Thank You!
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-sm">
                    Your enquiry has been received. Our representative will contact you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded bg-accent px-6 py-2.5 text-xs font-medium tracking-wider uppercase text-accent-foreground"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    name="name"
                    error={errors["name"]}
                    placeholder="e.g. Rahul Sharma"
                    required
                  />
                  <Field
                    label="Business / Company Name"
                    name="company"
                    placeholder="e.g. Apex Enterprises"
                  />
                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    error={errors["phone"]}
                    placeholder="e.g. +91 98765 43210"
                    required
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    error={errors["email"]}
                    placeholder="e.g. rahul@company.com"
                  />

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="spaceRequired" className="eyebrow">
                      Space Type
                    </label>
                    <select
                      id="spaceRequired"
                      name="spaceRequired"
                      className={field}
                      defaultValue=""
                    >
                      <option value="">Select space type</option>
                      <option value="Office Space">Office Space (500 - 3,500 sq. ft.)</option>
                      <option value="Commercial Unit">Commercial Unit (800 - 4,000 sq. ft.)</option>
                      <option value="Premium Workspace">
                        Premium Workspace (1,200 - 5,000 sq. ft.)
                      </option>
                      <option value="Custom Business Space">
                        Custom Business Space (Customizable)
                      </option>
                    </select>
                  </div>

                  <Field
                    label="Required Area (approx)"
                    name="area"
                    placeholder="e.g. 1,500 sq. ft."
                  />

                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="message" className="eyebrow">
                      Additional Details / Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      maxLength={1000}
                      className={`${field} resize-none`}
                      placeholder="Specify preferred floor, moving timeline, or any specific requirements..."
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded bg-accent px-8 py-3 text-[0.7rem] font-medium tracking-[0.2em] text-accent-foreground uppercase transition-all hover:bg-accent/90 active:scale-[0.98]"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Submit Business Enquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
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
