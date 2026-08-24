import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { contact } from "@/lib/site-data";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Spaces", href: "#spaces" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
        <a
          href="#home"
          className={cn(
            "min-w-0 truncate font-display text-lg tracking-[0.28em] transition-colors sm:text-xl",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
        >
          M L BUSINESS PARK
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "text-[0.8rem] tracking-wide transition-colors",
                    scrolled
                      ? "text-muted-foreground hover:text-accent"
                      : "text-primary-foreground/80 hover:text-primary-foreground",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#enquire"
            className={cn(
              "hidden border px-5 py-2.5 text-[0.7rem] tracking-[0.18em] uppercase transition-colors sm:inline-block",
              scrolled
                ? "border-accent bg-accent text-accent-foreground hover:bg-accent/90"
                : "border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-foreground",
            )}
          >
            Enquire Now
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={cn("lg:hidden", scrolled ? "text-foreground" : "text-primary-foreground")}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-lg tracking-[0.28em]">M L</span>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="mt-6 flex flex-col gap-1 px-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-display text-3xl"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 px-5">
            <a
              href="#enquire"
              onClick={() => setOpen(false)}
              className="bg-accent px-6 py-4 text-center text-xs tracking-[0.18em] text-accent-foreground uppercase"
            >
              Enquire Now
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-border px-6 py-4 text-xs tracking-[0.18em] uppercase"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
