import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./reveal";
import { galleryImages } from "@/lib/site-data";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          Explore M L Business Park
        </h2>
      </Reveal>

      <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {galleryImages.map((img, i) => (
          <Reveal key={i} delay={(i % 3) * 80} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-sm"
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
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close gallery"
            className="absolute top-5 right-5 text-background"
            onClick={() => setOpen(null)}
          >
            <X className="h-7 w-7" />
          </button>
          <img
            src={galleryImages[open]!.src}
            alt={galleryImages[open]!.alt}
            className="max-h-[85vh] w-auto max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
