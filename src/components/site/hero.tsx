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
        className="absolute inset-0 h-[115%] w-full object-cover object-center"
        style={{ transform: `translateY(-${offset}px) scale(1.04)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-end px-5 pt-32 pb-10 text-center lg:px-10 lg:pb-16">
        <div
          className="mx-auto flex max-w-4xl flex-col items-center text-center transition-all duration-1000 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(28px)",
          }}
        >
          <h1 className="whitespace-nowrap font-display text-xl font-bold leading-tight tracking-[0.02em] text-white drop-shadow-xl sm:text-3xl md:text-4xl lg:text-5xl">
            Commercial Spaces Designed for Business Success.
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#spaces"
              className="bg-accent px-8 py-4 text-[0.7rem] tracking-[0.2em] text-accent-foreground uppercase transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore Spaces
            </a>
            <a
              href="#enquire"
              className="border border-white/60 bg-black/40 px-8 py-4 text-[0.7rem] tracking-[0.2em] text-white uppercase backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              Enquire Now
            </a>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm font-medium tracking-wide text-white/95 drop-shadow-md sm:text-base">
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            Ramsagar Para, Raipur, Chhattisgarh
          </p>
        </div>
      </div>
    </section>
  );
}
