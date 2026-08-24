import { Reveal } from "./reveal";
import { photos } from "@/lib/site-data";

const reasons = [
  { n: "01", title: "Strategic Location", text: "Positioned in the commercial heart of Raipur." },
  {
    n: "02",
    title: "High Visibility",
    text: "A prominent location with strong commercial presence.",
  },
  {
    n: "03",
    title: "Flexible Property Options",
    text: "Spaces designed for different business sizes and requirements.",
  },
  {
    n: "04",
    title: "Modern Facilities",
    text: "Essential infrastructure for comfortable day-to-day operations.",
  },
  {
    n: "05",
    title: "Accessibility",
    text: "Convenient connectivity for employees, customers and visitors.",
  },
  {
    n: "06",
    title: "Investment Potential",
    text: "A commercial property positioned within a developing and increasingly connected business zone.",
  },
];

export function Why() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-10 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow">Why here</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.1] sm:text-5xl">
              Why Businesses Choose ML Business Park
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-10 hidden lg:block">
            <img
              src={photos.corridor}
              alt="Business corridor with professional office units at ML Business Park"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </Reveal>
        </div>

        <div className="min-w-0">
          {reasons.map((r, i) => (
            <Reveal
              key={r.n}
              delay={i * 60}
              className="group grid grid-cols-[auto_minmax(0,1fr)] gap-4 sm:gap-6 border-b border-border py-5 sm:py-7 first:border-t"
            >
              <span className="font-display text-base sm:text-lg font-semibold text-accent">{r.n}</span>
              <div className="min-w-0">
                <h3 className="font-display text-xl sm:text-2xl transition-colors group-hover:text-accent">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
