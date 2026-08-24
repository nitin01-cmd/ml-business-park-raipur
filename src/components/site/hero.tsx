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
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="text-xs font-medium tracking-wider text-primary-foreground/90 uppercase">
              Prime Commercial Hub · Ramsagar Para
            </span>
          </div>

          <h1 className="font-display text-[3rem] leading-[0.95] tracking-[0.02em] text-primary-foreground sm:text-7xl lg:text-8xl">
            M L BUSINESS PARK
          </h1>
          <p className="mt-6 max-w-xl font-display text-2xl leading-snug text-primary-foreground/90 sm:text-3xl">
            Commercial Spaces Designed for Business Success.
          </p>
          <p className="mt-3 text-sm text-primary-foreground/75">
            Punjab Oil Mill Gali, Ramsagar Para, Raipur, Chhattisgarh 492009
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#spaces"
              className="bg-accent px-8 py-4 text-[0.7rem] tracking-[0.2em] text-accent-foreground uppercase transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore Spaces
            </a>
            <a
              href="#enquire"
              className="border border-primary-foreground/60 bg-black/30 px-8 py-4 text-[0.7rem] tracking-[0.2em] text-primary-foreground uppercase backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/20"
            >
              Enquire Now
            </a>
          </div>

          <p className="mt-10 flex items-center gap-2 text-xs tracking-wide text-primary-foreground/75">
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            Ramsagar Para, Raipur, Chhattisgarh
          </p>
        </div>
      </div>
    </section>
  );
}
