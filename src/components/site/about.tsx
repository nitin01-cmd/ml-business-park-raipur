import { Reveal } from "./reveal";
import { photos } from "@/lib/site-data";

const stats = [
  { title: "Prime Location", detail: "Ramsagar Para, Raipur" },
  { title: "Modern Infrastructure", detail: "Built for today's businesses" },
  { title: "Flexible Spaces", detail: "Multiple commercial options" },
  { title: "Business Ready", detail: "Essential facilities under one roof" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-10 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
        <Reveal className="min-w-0">
          <p className="eyebrow">About the property</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.1] sm:text-5xl lg:text-6xl">
            A Better Address for <br className="hidden sm:inline" />
            Better Business.
          </h2>
          <div className="mt-6 space-y-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            <p>
              ML Business Park is a new-generation commercial project designed to provide modern
              workspaces in one of Raipur's strategically positioned commercial areas.
            </p>
            <p>
              Located in Ramsagar Para, the project combines accessibility, visibility and essential
              business amenities to create a practical environment for modern companies and
              professionals.
            </p>
            <p>
              The property offers multiple commercial space options suitable for different business
              requirements and budget ranges.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <div className="overflow-hidden rounded-md">
            <img
              src={photos.arcade}
              alt="Open commercial arcade on the ground floor of ML Business Park"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
            />
          </div>
          <div className="mt-3.5 grid grid-cols-2 gap-3.5">
            <img
              src={photos.corridor}
              alt="Glass-fronted office corridor at ML Business Park"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-md object-cover"
            />
            <img
              src={photos.office}
              alt="Meeting room and office interior at ML Business Park"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-md object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-14 sm:mt-20 grid gap-px border-t border-border pt-px sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 90}
            className="border-b border-border py-6 sm:py-8 lg:border-b-0"
          >
            <h3 className="font-display text-xl sm:text-2xl">{s.title}</h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
