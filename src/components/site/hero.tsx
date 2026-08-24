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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-end px-4 pt-28 pb-12 text-center sm:px-6 lg:px-10 lg:pb-16">
        <div
          className="mx-auto flex max-w-4xl flex-col items-center text-center transition-all duration-1000 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(28px)",
          }}
        >
          <h1 className="font-display text-2xl font-semibold leading-[1.15] tracking-tight text-white drop-shadow-xl sm:text-4xl md:text-5xl lg:text-6xl">
            Commercial Spaces Designed for Business Success.
          </h1>

          <div className="mt-7 flex w-full flex-col sm:w-auto sm:flex-row justify-center gap-3.5">
            <a
              href="#spaces"
              className="flex min-h-[44px] w-full items-center justify-center bg-accent px-8 py-3.5 text-[0.725rem] font-medium tracking-[0.2em] text-accent-foreground uppercase transition-all duration-300 hover:bg-accent/90 hover:shadow-lg active:scale-[0.98] sm:w-auto"
            >
              Explore Spaces
            </a>
            <a
              href="#enquire"
              className="flex min-h-[44px] w-full items-center justify-center border border-white/60 bg-black/40 px-8 py-3.5 text-[0.725rem] font-medium tracking-[0.2em] text-white uppercase backdrop-blur-sm transition-all duration-300 hover:bg-white/20 active:scale-[0.98] sm:w-auto"
            >
              Enquire Now
            </a>
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs font-medium tracking-wide text-white/90 drop-shadow-md sm:text-sm md:text-base">
            <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            <span>Ramsagar Para, Raipur, Chhattisgarh</span>
          </p>
        </div>
      </div>
    </section>
  );
}
