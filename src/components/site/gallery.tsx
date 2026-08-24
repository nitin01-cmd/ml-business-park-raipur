import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./reveal";
import { galleryImages } from "@/lib/site-data";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") {
        setOpen((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
      }
      if (e.key === "ArrowRight") {
        setOpen((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-10 lg:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-4 font-display text-3xl leading-[1.1] sm:text-5xl lg:text-6xl">
          Explore M L Business Park
        </h2>
      </Reveal>

      <div className="mt-10 sm:mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {galleryImages.map((img, i) => (
          <Reveal key={i} delay={(i % 3) * 80} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04] ${
                  i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close gallery"
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition-transform active:scale-95 hover:bg-black/80"
            onClick={() => setOpen(null)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Nav buttons */}
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition-transform active:scale-95 hover:bg-black/80 sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition-transform active:scale-95 hover:bg-black/80 sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % galleryImages.length);
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative flex flex-col items-center max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[open]!.src}
              alt={galleryImages[open]!.alt}
              className="max-h-[75vh] w-auto max-w-full rounded-md object-contain shadow-2xl"
            />
            <p className="mt-4 text-center text-xs sm:text-sm text-white/90 max-w-md px-4 font-light">
              {galleryImages[open]!.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
