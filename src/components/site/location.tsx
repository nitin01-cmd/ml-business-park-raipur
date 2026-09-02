import { MapPin, Navigation, ArrowUpRight, Compass, ShieldCheck, Phone } from "lucide-react";
import { Reveal } from "./reveal";
import { contact } from "@/lib/site-data";

export function Location() {
  return (
    <section id="location" className="relative py-20 sm:py-28 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 items-start">
          {/* Left Column: Location Details */}
          <Reveal className="min-w-0">
            <p className="eyebrow">Strategic Location</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] sm:text-5xl lg:text-6xl font-normal">
              A Location That Works for Your Business
            </h2>
            <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground font-light">
              Situated in the bustling commercial area of Ramsagar Para in Raipur, ML Business Park
              offers high visibility, easy accessibility, and proximity to major commercial transit
              routes.
            </p>

            {/* Address & Plus Code Card */}
            <div className="mt-8 space-y-4 rounded-lg border border-border/80 bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="eyebrow">Exact Property Address</p>
                  <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-foreground">
                    {contact.address}
                  </p>
                </div>
              </div>

              <div className="border-t border-border/60 pt-3 flex items-start gap-3">
                <Compass className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="eyebrow">Google Plus Code</p>
                  <p className="mt-1 font-mono text-xs sm:text-sm font-semibold text-foreground">
                    {contact.plusCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Connectivity Points */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 rounded border border-border bg-card p-3">
                <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                <span className="text-muted-foreground">Prime Road Access</span>
              </div>
              <div className="flex items-center gap-2 rounded border border-border bg-card p-3">
                <Navigation className="h-4 w-4 text-accent shrink-0" />
                <span className="text-muted-foreground">Central Raipur Zone</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={contact.directions}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[46px] items-center justify-center gap-2 rounded bg-accent px-7 py-3 text-[0.7rem] font-medium tracking-[0.18em] text-accent-foreground uppercase transition-all hover:bg-accent/90 active:scale-[0.98]"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a
                href="#enquire"
                className="flex min-h-[46px] items-center justify-center gap-2 rounded border border-border bg-card px-7 py-3 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-foreground transition-colors hover:border-accent hover:text-accent active:bg-muted"
              >
                <span>Enquire Now</span> <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* Right Column: Integrated Interactive Map Container */}
          <Reveal delay={120} className="min-w-0">
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-2 shadow-xl">
              <div className="relative overflow-hidden rounded-lg">
                <iframe
                  title="Map showing ML Business Park in Ramsagar Para, Raipur"
                  src={contact.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[360px] sm:h-[420px] lg:h-[480px] w-full border-0"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3 p-3 text-xs bg-muted/40 rounded-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="font-medium">ML Business Park, Raipur</span>
                </div>
                <a
                  href={contact.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-accent hover:underline text-[0.72rem] tracking-wider uppercase inline-flex items-center gap-1"
                >
                  Open in Google Maps <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
