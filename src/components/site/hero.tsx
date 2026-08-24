import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { photos } from "@/lib/site-data";

export function Hero() {
  const [offset, setOffset] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.18, 120));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-primary">
      <img
        src={photos.facade}
        alt="M L Business Park commercial complex facade in Ramsagar Para, Raipur"
        fetchPriority="high"
        className="absolute inset-0 h-[115%] w-full object-cover"
        style={{ transform: `translateY(-${offset}px) scale(1.04)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-16 lg:px-10 lg:pb-24">
        <div
          className="max-w-3xl transition-all duration-1000 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(28px)",
          }}
        >
          <p className="eyebrow text-primary-foreground/70">
            Commercial Property · Raipur, Chhattisgarh
          </p>
          <h1 className="mt-5 font-display text-[3rem] leading-[0.95] tracking-[0.02em] text-primary-foreground sm:text-7xl lg:text-8xl">
            M L BUSINESS PARK
          </h1>
          <p className="mt-6 max-w-xl font-display text-2xl leading-snug text-primary-foreground/90 sm:text-3xl">
            Commercial Spaces Designed for Business.
          </p>
          <p className="mt-3 text-sm text-primary-foreground/70">Ramsagar Para, Raipur</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#spaces"
              className="bg-primary-foreground px-8 py-4 text-[0.7rem] tracking-[0.2em] text-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Spaces
            </a>
            <a
              href="#enquire"
              className="border border-primary-foreground/60 px-8 py-4 text-[0.7rem] tracking-[0.2em] text-primary-foreground uppercase transition-colors duration-300 hover:bg-primary-foreground/10"
            >
              Enquire Now
            </a>
          </div>

          <p className="mt-10 flex items-center gap-2 text-xs tracking-wide text-primary-foreground/70">
            <MapPin className="h-4 w-4" aria-hidden />
            Ramsagar Para, Raipur, Chhattisgarh
          </p>
        </div>
      </div>
    </section>
  );
}
