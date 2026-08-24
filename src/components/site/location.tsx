import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "./reveal";
import { contact } from "@/lib/site-data";

export function Location() {
  return (
    <section id="location" className="bg-secondary/60 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal className="min-w-0">
            <p className="eyebrow">Location</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.1] sm:text-5xl">
              Located Where Business Happens.
            </h2>
            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Situated in the bustling commercial heart of Raipur, M L Business Park offers a
              strategic location with visibility and convenient connectivity for businesses,
              employees and visitors.
            </p>

            <div className="mt-8 space-y-5 border-t border-border pt-6">
              <div>
                <p className="eyebrow">Address</p>
                <p className="mt-1.5 max-w-md text-xs sm:text-sm leading-relaxed">{contact.address}</p>
              </div>
              <div>
                <p className="eyebrow">Google Plus Code</p>
                <p className="mt-1 text-xs sm:text-sm font-medium">{contact.plusCode}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={contact.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] items-center justify-center gap-2 border border-foreground/25 px-6 py-3 text-[0.68rem] font-medium tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent rounded active:bg-muted"
              >
                <MapPin className="h-4 w-4" /> View Location
              </a>
              <a
                href={contact.directions}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] items-center justify-center gap-2 bg-accent px-6 py-3 text-[0.68rem] font-medium tracking-[0.18em] text-accent-foreground uppercase rounded active:opacity-90"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <div className="overflow-hidden rounded-md border border-border shadow-sm">
              <iframe
                title="Map showing M L Business Park, Ramsagar Para, Raipur"
                src={contact.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] sm:h-[400px] lg:h-[520px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
