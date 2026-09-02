import { Reveal } from "./reveal";
import { photos } from "@/lib/site-data";
import { MapPin, Navigation, Building2, Building, Users, ShieldCheck } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    n: "01",
    title: "Strategic Location",
    text: "Positioned in the commercial center of Raipur with prime road presence.",
  },
  {
    icon: Navigation,
    n: "02",
    title: "Convenient Accessibility",
    text: "Effortless connectivity for employees, regular visitors, and logistics.",
  },
  {
    icon: Building2,
    n: "03",
    title: "Commercial-Ready Spaces",
    text: "Versatile floor plates ready for immediate commercial and office setup.",
  },
  {
    icon: Building,
    n: "04",
    title: "Modern Infrastructure",
    text: "Built to support modern enterprise workflows and professional standards.",
  },
  {
    icon: Users,
    n: "05",
    title: "Visitor Convenience",
    text: "Dedicated on-site parking and elevator access for seamless customer visits.",
  },
  {
    icon: ShieldCheck,
    n: "06",
    title: "Professional Environment",
    text: "A well-maintained commercial atmosphere fostering business growth.",
  },
];

export function Why() {
  return (
    <section id="why" className="relative bg-secondary/40 py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 items-center">
          {/* Left: Premium visual from existing website */}
          <Reveal className="relative min-w-0">
            <div className="relative rounded-xl overflow-hidden border border-border shadow-xl">
              <img
                src={photos.corridor}
                alt="Glass-fronted office suites and executive corridor at ML Business Park"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[0.68rem] tracking-[0.2em] uppercase font-medium text-accent">
                  ML Business Park Raipur
                </span>
                <p className="mt-1 font-display text-2xl sm:text-3xl text-white font-medium">
                  Designed for Distinction
                </p>
                <p className="mt-2 text-xs text-white/80 max-w-md">
                  Premium architecture and functional commercial infrastructure built for modern
                  enterprises.
                </p>
              </div>
            </div>
            {/* Architectural accent badge */}
            <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-3 rounded-lg border border-border bg-background p-4 shadow-xl">
              <span className="font-display text-3xl font-semibold text-accent">Raipur</span>
              <div className="text-[0.7rem] text-muted-foreground leading-tight">
                <span className="block font-medium text-foreground">Prime Commercial Hub</span>
                <span>Ramsagar Para</span>
              </div>
            </div>
          </Reveal>

          {/* Right: Key Business Advantages */}
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow">Why Choose This Space</p>
              <h2 className="mt-4 font-display text-3xl leading-[1.12] sm:text-5xl lg:text-6xl font-normal">
                Built for Modern Business
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground font-light max-w-xl">
                Every detail at ML Business Park is planned to provide operational efficiency,
                corporate visibility, and everyday ease.
              </p>
            </Reveal>

            <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5">
              {advantages.map((adv, i) => (
                <Reveal
                  key={adv.n}
                  delay={i * 60}
                  className="group flex items-start gap-4 rounded-lg border border-border/70 bg-card p-4 sm:p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md hover:-translate-x-0.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-accent/20 bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <adv.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg sm:text-xl font-medium text-foreground transition-colors group-hover:text-accent">
                        {adv.title}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground/70">{adv.n}</span>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground font-light">
                      {adv.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
