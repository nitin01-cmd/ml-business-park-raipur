import { useState } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { Reveal } from "./reveal";
import { spaces, contact, type Space } from "@/lib/site-data";

export function Spaces() {
  const [active, setActive] = useState<Space | null>(null);

  return (
    <section id="spaces" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Available options</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            The Space Your Business Needs.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {spaces.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 100} className="group min-w-0">
              <div className="overflow-hidden rounded-sm bg-muted">
                <img
                  src={s.image}
                  alt={`${s.name} at M L Business Park, Raipur`}
                  loading="lazy"
                  className="aspect-[16/11] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-3xl">{s.name}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {s.blurb}
                  </p>
                </div>
                <span className="shrink-0 border border-accent/40 px-3 py-1 text-[0.6rem] tracking-[0.16em] text-accent uppercase">
                  {s.availability}
                </span>
              </div>

              <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5 text-sm">
                <div>
                  <dt className="eyebrow">Area</dt>
                  <dd className="mt-1">{s.area}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Floor</dt>
                  <dd className="mt-1">{s.floor}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Rent</dt>
                  <dd className="mt-1">{s.rent}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  className="inline-flex items-center gap-1.5 border border-foreground/25 px-5 py-3 text-[0.68rem] tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent"
                >
                  View Details <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="#enquire"
                  className="bg-accent px-5 py-3 text-[0.68rem] tracking-[0.18em] text-accent-foreground uppercase transition-opacity hover:opacity-90"
                >
                  Enquire for Rent
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <SpaceDetail space={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function SpaceDetail({ space, onClose }: { space: Space; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-foreground/70 p-0 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={space.name}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-background sm:my-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center bg-background/85 text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <img
          src={space.image}
          alt={`${space.name} at M L Business Park`}
          className="aspect-[16/9] w-full object-cover"
        />

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <p className="eyebrow">{space.type}</p>
          <h3 className="mt-3 font-display text-4xl">{space.name}</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {space.blurb}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4">
            {[
              ["Area", space.area],
              ["Floor", space.floor],
              ["Availability", space.availability],
              ["Rent", space.rent],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow">Suitable for</p>
              <p className="mt-2 text-sm text-muted-foreground">{space.suitableFor}</p>
            </div>
            <div>
              <p className="eyebrow">Amenities</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {space.amenities.map((a) => (
                  <li key={a} className="border border-border px-3 py-1 text-xs">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {space.gallery.map((g, i) => (
              <img
                key={i}
                src={g}
                alt={`${space.name} view ${i + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#enquire"
              onClick={onClose}
              className="bg-accent px-7 py-3.5 text-[0.68rem] tracking-[0.18em] text-accent-foreground uppercase"
            >
              Enquire Now
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/25 px-7 py-3.5 text-[0.68rem] tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
