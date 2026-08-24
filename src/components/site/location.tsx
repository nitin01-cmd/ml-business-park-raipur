import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "./reveal";
import { contact } from "@/lib/site-data";

export function Location() {
  return (
    <section id="location" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal className="min-w-0">
            <p className="eyebrow">Location</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
              Located Where Business Happens.
            </h2>
            <p className="mt-7 text-[0.95rem] leading-relaxed text-muted-foreground">
              Situated in the bustling commercial heart of Raipur, M L Business Park offers
              a strategic location with visibility and convenient connectivity for
              businesses, employees and visitors.
            </p>

            <div className="mt-9 space-y-6 border-t border-border pt-8">
              <div>
                <p className="eyebrow">Address</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed">{contact.address}</p>
              </div>
              <div>
                <p className="eyebrow">Google Plus Code</p>
                <p className="mt-2 text-sm">{contact.plusCode}</p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={contact.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/25 px-6 py-3.5 text-[0.68rem] tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent"
              >
                <MapPin className="h-4 w-4" /> View Location
              </a>
              <a
                href={contact.directions}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-[0.68rem] tracking-[0.18em] text-accent-foreground uppercase"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Map showing M L Business Park, Ramsagar Para, Raipur"
                src={contact.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full lg:h-[520px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
