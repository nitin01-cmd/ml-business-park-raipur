import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle, X, Check, Building, Layers, Maximize2 } from "lucide-react";
import { Reveal } from "./reveal";
import { spaces, contact, type Space } from "@/lib/site-data";

export function Spaces() {
  const [active, setActive] = useState<Space | null>(null);

  return (
    <section id="spaces" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Commercial Offerings</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] sm:text-5xl lg:text-6xl font-normal">
              Find the Right Space for Your Business
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-muted-foreground font-light">
              Explore customizable commercial floor plates, dedicated office setups, and
              ground-floor units.
            </p>
          </Reveal>
          <Reveal delay={100} className="shrink-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Contact us for availability & pricing</span>
            </div>
          </Reveal>
        </div>

        {/* Space Cards Grid */}
        <div className="mt-12 sm:mt-16 grid gap-8 md:grid-cols-2">
          {spaces.map((s, i) => (
            <Reveal
              key={s.id}
              delay={(i % 2) * 100}
              className="group flex flex-col justify-between rounded-lg border border-border/80 bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src={s.image}
                    alt={`${s.name} at ML Business Park, Raipur`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded bg-black/75 px-3 py-1 text-[0.65rem] font-medium tracking-wider uppercase text-white backdrop-blur-sm">
                      {s.type}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="rounded border border-accent/40 bg-background/90 px-2.5 py-1 text-[0.62rem] font-medium tracking-wider uppercase text-accent backdrop-blur-sm">
                      {s.availability}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground font-light">
                    {s.blurb}
                  </p>

                  {/* Specifications */}
                  <dl className="mt-5 grid grid-cols-3 gap-3 rounded-md border border-border/70 bg-muted/30 p-3.5 text-xs">
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        <Maximize2 className="h-3 w-3 text-accent" /> Area
                      </dt>
                      <dd className="mt-1 font-medium text-foreground text-xs truncate">
                        {s.area}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        <Layers className="h-3 w-3 text-accent" /> Floor
                      </dt>
                      <dd className="mt-1 font-medium text-foreground text-xs truncate">
                        {s.floor}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        <Building className="h-3 w-3 text-accent" /> Pricing
                      </dt>
                      <dd className="mt-1 font-medium text-foreground text-xs truncate">
                        {s.rent}
                      </dd>
                    </div>
                  </dl>

                  {/* Suitable For */}
                  <div className="mt-4 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Suitable for: </span>
                    <span>{s.suitableFor}</span>
                  </div>

                  {/* Key Facilities tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.amenities.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 rounded bg-secondary px-2.5 py-1 text-[0.68rem] text-secondary-foreground"
                      >
                        <Check className="h-3 w-3 text-accent" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0 flex flex-col sm:flex-row gap-2.5 border-t border-border/40 mt-4 pt-4">
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded border border-border bg-background px-4 py-2.5 text-[0.7rem] font-medium tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent active:bg-muted"
                >
                  <span>View Details</span> <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="#enquire"
                  className="flex min-h-[44px] flex-1 items-center justify-center rounded bg-accent px-4 py-2.5 text-[0.7rem] font-medium tracking-[0.16em] text-accent-foreground uppercase transition-all hover:bg-accent/90 active:scale-[0.98]"
                >
                  Enquire Now
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal View Details */}
      {active && <SpaceDetail space={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function SpaceDetail({ space, onClose }: { space: Space; onClose: () => void }) {
  const [selectedImg, setSelectedImg] = useState<string>(space.image);

  useEffect(() => {
    setSelectedImg(space.image);
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [space, onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/80 p-0 backdrop-blur-md sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={space.name}
      onClick={onClose}
    >
      <div
        className="relative min-h-screen w-full max-w-4xl bg-background sm:min-h-0 sm:my-8 sm:rounded-xl overflow-hidden shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-transform hover:scale-105 active:scale-95 border border-border"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Selected Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-muted">
          <img
            src={selectedImg}
            alt={`${space.name} at ML Business Park`}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="rounded bg-black/75 px-3 py-1 text-[0.65rem] font-medium tracking-wider uppercase text-white backdrop-blur-sm">
              {space.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-3xl sm:text-4xl font-medium">{space.name}</h3>
            <span className="rounded border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              {space.availability}
            </span>
          </div>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground font-light max-w-2xl">
            {space.blurb}
          </p>

          {/* Key Specifications */}
          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-lg border border-border bg-secondary/30 p-4 sm:grid-cols-4 sm:p-5">
            <div>
              <dt className="eyebrow">Area</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{space.area}</dd>
            </div>
            <div>
              <dt className="eyebrow">Floor</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{space.floor}</dd>
            </div>
            <div>
              <dt className="eyebrow">Availability</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{space.availability}</dd>
            </div>
            <div>
              <dt className="eyebrow">Pricing</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{space.rent}</dd>
            </div>
          </dl>

          {/* Suitable for and Amenities */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow">Recommended For</p>
              <p className="mt-2 text-xs sm:text-sm text-foreground/90">{space.suitableFor}</p>
            </div>
            <div>
              <p className="eyebrow">Included Facilities</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {space.amenities.map((a) => (
                  <li
                    key={a}
                    className="rounded border border-border bg-muted/60 px-2.5 py-1 text-[0.7rem] font-medium"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {space.gallery.length > 1 && (
            <div className="mt-6">
              <p className="eyebrow">Space Views</p>
              <div className="mt-2 flex gap-3 overflow-x-auto pb-1">
                {space.gallery.map((g, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImg(g)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded border transition-all ${
                      selectedImg === g
                        ? "border-accent ring-2 ring-accent/30"
                        : "border-border opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={g}
                      alt={`Thumbnail ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 border-t border-border pt-6">
            <a
              href="#enquire"
              onClick={onClose}
              className="flex min-h-[46px] flex-1 items-center justify-center rounded bg-accent px-7 py-3 text-[0.7rem] font-medium tracking-[0.18em] text-accent-foreground uppercase transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Enquire for this Space
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded border border-border px-7 py-3 text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent active:bg-muted"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> WhatsApp
              Direct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
