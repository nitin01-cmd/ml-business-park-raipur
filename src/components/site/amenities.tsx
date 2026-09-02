import { Car, ArrowUpDown, Building2, MapPin, Building, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { photos } from "@/lib/site-data";

const amenitiesList = [
  {
    icon: Car,
    title: "Dedicated Parking",
    text: "Convenient parking facilities for occupants, customers and visitors.",
    tag: "Convenience",
    image: photos.commercialUnits,
    imageAlt: "Ground floor parking and vehicle access area at ML Business Park Raipur",
    imagePos: "object-center",
  },
  {
    icon: ArrowUpDown,
    title: "Lift Facilities",
    text: "Convenient vertical access for smooth movement throughout the building.",
    tag: "Accessibility",
    image: photos.premiumWorkspaces,
    imageAlt: "Executive lift corridor and elevator access lobby at ML Business Park Raipur",
    imagePos: "object-center",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    text: "Flexible commercial spaces designed for offices, businesses and professional setups.",
    tag: "Workspaces",
    image: photos.rent1,
    imageAlt: "Furnished modern office space interior at ML Business Park Raipur",
    imagePos: "object-center",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    text: "Excellent accessibility and connectivity to important parts of the city.",
    tag: "Connectivity",
    image: photos.facade,
    imageAlt: "Exterior commercial building elevation in Ramsagar Para, Raipur",
    imagePos: "object-top",
  },
  {
    icon: Building,
    title: "Modern Infrastructure",
    text: "A professional environment designed to support modern business requirements.",
    tag: "Infrastructure",
    image: photos.customBusinessSpaces,
    imageAlt: "High-spec modern commercial floor plate and infrastructure at ML Business Park",
    imagePos: "object-center",
  },
  {
    icon: ShieldCheck,
    title: "Business-Friendly Environment",
    text: "A comfortable and professional environment for businesses, employees and visitors.",
    tag: "Professional",
    image: photos.arcade,
    imageAlt: "Professional open commercial arcade and business environment at ML Business Park",
    imagePos: "object-center",
  },
];

export function Amenities() {
  return (
    <section
      id="amenities"
      className="relative bg-secondary/40 py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Subtle ambient lighting backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Key Amenities & Features</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.12] sm:text-5xl lg:text-6xl font-normal text-foreground">
            Everything Your Business Needs
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground font-light max-w-2xl">
            Modern facilities and thoughtfully planned infrastructure designed for businesses,
            customers and visitors.
          </p>
        </Reveal>

        {/* 3x2 on Desktop (lg:grid-cols-3), 2x3 on Tablet (md:grid-cols-2), 1x6 on Mobile (grid-cols-1) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-7 lg:gap-8">
          {amenitiesList.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 80}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-350 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5"
            >
              <div>
                {/* Visual Image Showcase Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] ${item.imagePos}`}
                  />
                  {/* Subtle gradient overlay to enhance visual depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />

                  {/* Floating Category Tag */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-full border border-white/25 bg-black/60 px-3 py-1 text-[0.65rem] font-medium tracking-[0.16em] uppercase text-white backdrop-blur-md">
                    <span>{item.tag}</span>
                  </div>

                  {/* Floating Number Badge */}
                  <div className="absolute top-3.5 right-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-background/85 font-mono text-[0.68rem] font-semibold text-foreground shadow-sm backdrop-blur-md">
                    0{i + 1}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-accent">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <item.icon className="h-4 w-4" aria-hidden />
                    </div>
                    <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-accent">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl sm:text-[1.65rem] font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground font-light">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 pb-5 pt-0 sm:px-7 sm:pb-6">
                <div className="flex items-center justify-between border-t border-border/60 pt-4 text-[0.7rem] text-muted-foreground/80">
                  <span className="tracking-wider uppercase font-medium">ML Business Park</span>
                  <span className="font-mono text-xs text-accent">0{i + 1} / 06</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
