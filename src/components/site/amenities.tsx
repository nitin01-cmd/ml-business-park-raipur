import {
  Clock,
  MapPin,
  Building2,
  Car,
  ShieldCheck,
  Route,
  ArrowUpDown,
  Briefcase,
} from "lucide-react";
import { Reveal } from "./reveal";

const amenities = [
  {
    icon: Clock,
    title: "24/7 Access",
    text: "Unrestricted access to your workspace anytime, day or night.",
  },
  {
    icon: MapPin,
    title: "Prime City Location",
    text: "Strategically positioned in Raipur for strong visibility and accessibility.",
  },
  {
    icon: Building2,
    title: "Premium Spaces",
    text: "Modern and customizable office and commercial spaces for growing businesses.",
  },
  {
    icon: Car,
    title: "Ample Parking",
    text: "Dedicated and secure parking facilities for tenants and visitors.",
  },
  {
    icon: ShieldCheck,
    title: "Top-Tier Security",
    text: "24/7 surveillance and professional security arrangements.",
  },
  {
    icon: Route,
    title: "Easy Connectivity",
    text: "Convenient access to major roads and transport routes.",
  },
  {
    icon: ArrowUpDown,
    title: "Elevators",
    text: "Convenient lift access for occupants and visitors.",
  },
  {
    icon: Briefcase,
    title: "Business-Friendly Environment",
    text: "A professional environment designed for comfortable and productive working.",
  },
];

export function Amenities() {
  return (
    <section id="amenities" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Amenities</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Everything Your Business Needs Under One Roof.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 4) * 70}
              className="group border-b border-border py-9 sm:pr-8"
            >
              <a.icon
                className="h-5 w-5 text-accent transition-transform duration-500 group-hover:-translate-y-1"
                aria-hidden
              />
              <h3 className="mt-5 font-display text-2xl">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
