import { Reveal } from "./reveal";
import { photos } from "@/lib/site-data";
import { Building2, Compass, Layers, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Compass, title: "Prime Location", detail: "Ramsagar Para, Raipur" },
  { icon: Building2, title: "Modern Infrastructure", detail: "Built for today's businesses" },
  { icon: Layers, title: "Flexible Spaces", detail: "Multiple commercial options" },
  { icon: ShieldCheck, title: "Business Ready", detail: "Essential facilities under one roof" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 items-center">
        <Reveal className="min-w-0">
          <p className="eyebrow">Business Overview</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.12] sm:text-5xl lg:text-6xl font-normal">
            A Better Address for <br className="hidden sm:inline" />
            Better Business.
          </h2>
          <div className="mt-6 space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground font-light">
            <p>
              ML Business Park is a new-generation commercial development designed to provide modern
              workspaces in one of Raipur's strategically positioned commercial areas.
            </p>
            <p>
              Located in Ramsagar Para, the project combines accessibility, visibility and essential
              business amenities to create a practical, high-value environment for enterprises and
              professionals.
            </p>
            <p>
              The property offers multiple commercial space options suitable for diverse business
              requirements, team sizes, and functional layouts.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <div className="overflow-hidden rounded-xl border border-border shadow-md">
            <img
              src={photos.arcade}
              alt="Open commercial arcade on the ground floor of ML Business Park"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg border border-border shadow-sm">
              <img
                src={photos.corridor}
                alt="Glass-fronted office corridor at ML Business Park"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border shadow-sm">
              <img
                src={photos.office}
                alt="Meeting room and office interior at ML Business Park"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 sm:mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 80}
            className="flex items-start gap-3.5 rounded-lg border border-border/80 bg-card p-5 sm:p-6 transition-all hover:border-accent/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-medium text-foreground">
                {s.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
