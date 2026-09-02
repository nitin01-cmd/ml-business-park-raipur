import { HelpCircle, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { faqs, contact } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 items-start">
          {/* Left Column: Heading & Quick Support Card */}
          <Reveal className="min-w-0">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] sm:text-5xl lg:text-6xl font-normal">
              Clear Answers for Your Business
            </h2>
            <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground font-light">
              Find quick answers regarding commercial units, leasing inquiries, on-site facilities,
              and location specifications at ML Business Park.
            </p>

            {/* Quick Contact Box */}
            <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground">
                    Have a specific requirement?
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Our leasing team is available to answer any questions.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={contact.phoneHref}
                  className="flex min-h-[42px] flex-1 items-center justify-center gap-1.5 rounded bg-accent px-4 py-2 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-accent-foreground transition-all hover:bg-accent/90"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Us
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[42px] flex-1 items-center justify-center gap-1.5 rounded border border-border px-4 py-2 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />{" "}
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Accordion Questions */}
          <Reveal delay={100} className="min-w-0">
            <div className="rounded-xl border border-border/80 bg-card p-4 sm:p-6 shadow-sm">
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b border-border/70 py-1 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left font-display text-lg sm:text-xl font-medium text-foreground hover:text-accent hover:no-underline py-4">
                      <span>{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-light pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
