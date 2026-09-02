import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Amenities } from "@/components/site/amenities";
import { Spaces } from "@/components/site/spaces";
import { Why } from "@/components/site/why";
import { Location } from "@/components/site/location";
import { Gallery } from "@/components/site/gallery";
import { Faq } from "@/components/site/faq";
import { Enquiry } from "@/components/site/enquiry";
import { MobileActions } from "@/components/site/mobile-actions";
import { contact } from "@/lib/site-data";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <SiteNav />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Business Overview / Value Proposition */}
        <About />

        {/* 3. Key Amenities & Features */}
        <Amenities />

        {/* 4. Commercial Spaces */}
        <Spaces />

        {/* 5. Why Choose Us */}
        <Why />

        {/* 6. Location Advantage */}
        <Location />

        {/* 7. Gallery / Infrastructure */}
        <Gallery />

        {/* 8. Professional FAQ */}
        <Faq />

        {/* 9. Strong Business Enquiry CTA */}
        <Enquiry />
      </main>

      {/* 10. Comprehensive Commercial Footer */}
      <footer className="border-t border-border bg-card pt-16 pb-28 text-muted-foreground lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="space-y-4">
              <span className="font-display text-lg sm:text-xl font-semibold tracking-wider text-foreground">
                ML BUSINESS PARK
              </span>
              <p className="text-xs leading-relaxed text-muted-foreground font-light">
                Modern commercial spaces, executive office suites, and flexible floor layouts in
                Ramsagar Para, Raipur, Chhattisgarh.
              </p>
              <div className="flex items-center gap-2 text-xs text-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Leasing Inquiries Open</span>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <p className="eyebrow text-foreground">Quick Navigation</p>
              <ul className="mt-4 space-y-2 text-xs">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#amenities" className="hover:text-accent transition-colors">
                    Key Amenities
                  </a>
                </li>
                <li>
                  <a href="#spaces" className="hover:text-accent transition-colors">
                    Commercial Spaces
                  </a>
                </li>
                <li>
                  <a href="#why" className="hover:text-accent transition-colors">
                    Why ML Business Park
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-accent transition-colors">
                    Location Advantage
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-accent transition-colors">
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-accent transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Address & Plus Code */}
            <div>
              <p className="eyebrow text-foreground">Property Location</p>
              <div className="mt-4 space-y-2 text-xs leading-relaxed">
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{contact.address}</span>
                </p>
                <p className="pt-1 text-[0.7rem] text-muted-foreground">
                  <span className="font-medium text-foreground">Plus Code: </span>
                  {contact.plusCode}
                </p>
                <a
                  href={contact.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline pt-2 font-medium"
                >
                  <span>Get Driving Directions</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Contact & Hours */}
            <div>
              <p className="eyebrow text-foreground">Connect With Us</p>
              <div className="mt-4 space-y-3 text-xs">
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent shrink-0" />
                  <span>{contact.phone}</span>
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-500 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>WhatsApp Enquiry</span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent shrink-0" />
                  <span>{contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} ML Business Park, Ramsagar Para, Raipur. All rights
              reserved.
            </p>
            <p className="text-[0.7rem]">Commercial Real Estate • Raipur, Chhattisgarh</p>
          </div>
        </div>
      </footer>

      {/* 11. Sticky Mobile Contact Bar */}
      <MobileActions />
    </div>
  );
}
