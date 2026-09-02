import { useEffect, useState } from "react";
import { MapPin, ArrowRight, ShieldCheck, Car, Building, ArrowUpDown } from "lucide-react";
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
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-primary"
    >
      {/* Background Hero Image with Parallax */}
      <img
        src={photos.facade}
        alt="ML Business Park commercial complex exterior facade in Ramsagar Para, Raipur"
        fetchPriority="high"
        className="absolute inset-0 h-[115%] w-full object-cover object-center"
        style={{ transform: `translateY(-${offset}px) scale(1.04)` }}
      />
      {/* Subtle luxury gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/75" />

      {/* Main Hero Content */}
      <div className="relative mx-auto flex flex-1 w-full max-w-7xl flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6 lg:px-10">
        <div
          className="mx-auto flex max-w-4xl flex-col items-center text-center transition-all duration-1000 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(24px)",
          }}
        >
          {/* Eyebrow / Category Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.68rem] font-medium tracking-[0.2em] text-white uppercase backdrop-blur-md">
            <span>Commercial Spaces & Offices</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>Raipur</span>
          </div>

          {/* Headline: WHAT + WHY */}
          <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            Commercial Spaces Designed for Business Success.
          </h1>

          {/* Subtitle: Value proposition */}
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-white/85 sm:text-sm md:text-base font-light">
            Modern office suites, retail-ready commercial units, and flexible floor layouts in the
            prime business corridor of Raipur.
          </p>

          {/* Location Badge: WHERE */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-white/95 sm:text-sm">
            <MapPin className="h-4 w-4 text-accent shrink-0" aria-hidden />
            <span>Ramsagar Para, Raipur, Chhattisgarh</span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex w-full flex-col sm:w-auto sm:flex-row justify-center items-center gap-3.5">
            <a
              href="#spaces"
              className="group flex min-h-[46px] w-full items-center justify-center gap-2 bg-accent px-8 py-3.5 text-[0.725rem] font-medium tracking-[0.2em] text-accent-foreground uppercase transition-all duration-300 hover:bg-accent/90 hover:shadow-xl active:scale-[0.98] sm:w-auto rounded-sm"
            >
              <span>Explore Spaces</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#enquire"
              className="flex min-h-[46px] w-full items-center justify-center border border-white/40 bg-white/10 px-8 py-3.5 text-[0.725rem] font-medium tracking-[0.2em] text-white uppercase backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/70 active:scale-[0.98] sm:w-auto rounded-sm"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>

      {/* Highlights bar at the bottom */}
      <div className="relative border-t border-white/15 bg-black/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-6 text-white/90">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Building className="h-4 w-4 text-accent shrink-0" />
              <span className="truncate">Flexible Commercial Spaces</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Car className="h-4 w-4 text-accent shrink-0" />
              <span className="truncate">Dedicated Parking</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <ArrowUpDown className="h-4 w-4 text-accent shrink-0" />
              <span className="truncate">Lift Facilities</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
              <span className="truncate">24/7 Security & Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
