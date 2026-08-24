import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { Reveal } from "./reveal";
import { spaces, contact, type Space } from "@/lib/site-data";

export function Spaces() {
  const [active, setActive] = useState<Space | null>(null);

  return (
    <section id="spaces" className="bg-secondary/60 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Available options</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.1] sm:text-5xl lg:text-6xl">
            The Space Your Business Needs.
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-16 grid gap-x-10 gap-y-12 sm:gap-y-16 md:grid-cols-2">
          {spaces.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 100} className="group min-w-0 flex flex-col justify-between">
              <div>
                <div className="overflow-hidden rounded-sm bg-muted">
                  <img
                    src={s.image}
                    alt={`${s.name} at ML Business Park, Raipur`}
                    loading="lazy"
                    className="aspect-[16/11] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-2xl sm:text-3xl">{s.name}</h3>
                    <p className="mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {s.blurb}
                    </p>
                  </div>
                  <span className="shrink-0 border border-accent/40 px-2.5 py-1 text-[0.6rem] tracking-[0.16em] text-accent uppercase font-medium">
                    {s.availability}
                  </span>
                </div>

                <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4 text-xs sm:text-sm">
                  <div>
                    <dt className="eyebrow">Area</dt>
                    <dd className="mt-1 font-medium text-foreground text-xs sm:text-sm truncate">{s.area}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Floor</dt>
                    <dd className="mt-1 font-medium text-foreground text-xs sm:text-sm truncate">{s.floor}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Rent</dt>
                    <dd className="mt-1 font-medium text-foreground text-xs sm:text-sm truncate">{s.rent}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 border border-foreground/25 px-4 py-2.5 text-[0.68rem] font-medium tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent active:bg-muted"
                >
                  <span>View Details</span> <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="#enquire"
                  className="flex min-h-[44px] flex-1 items-center justify-center bg-accent px-4 py-2.5 text-[0.68rem] font-medium tracking-[0.18em] text-accent-foreground uppercase transition-opacity hover:opacity-90 active:scale-[0.98]"
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
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/75 p-0 backdrop-blur-sm sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={space.name}
      onClick={onClose}
    >
      <div
        className="relative min-h-screen w-full max-w-4xl bg-background sm:min-h-0 sm:my-6 sm:rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-transform active:scale-90"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-muted">
          <img
            src={space.image}
            alt={`${space.name} at ML Business Park`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-5 py-6 sm:px-8 sm:py-8">
          <p className="eyebrow">{space.type}</p>
          <h3 className="mt-2 font-display text-3xl sm:text-4xl">{space.name}</h3>
          <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {space.blurb}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-4 sm:grid-cols-4 sm:gap-6 sm:py-6">
            {[
              ["Area", space.area],
              ["Floor", space.floor],
              ["Availability", space.availability],
              ["Rent", space.rent],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-1 text-xs sm:text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div>
              <p className="eyebrow">Suitable for</p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{space.suitableFor}</p>
            </div>
            <div>
              <p className="eyebrow">Amenities</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {space.amenities.map((a) => (
                  <li key={a} className="border border-border bg-muted/40 px-2.5 py-1 text-[0.7rem] font-medium">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
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

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#enquire"
              onClick={onClose}
              className="flex min-h-[44px] items-center justify-center bg-accent px-7 py-3.5 text-[0.68rem] font-medium tracking-[0.18em] text-accent-foreground uppercase rounded active:opacity-90"
            >
              Enquire Now
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[44px] items-center justify-center gap-2 border border-foreground/25 px-7 py-3.5 text-[0.68rem] font-medium tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent rounded active:bg-muted"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> WhatsApp Direct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
