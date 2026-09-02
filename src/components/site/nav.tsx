import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { contact } from "@/lib/site-data";

const links = [
  { label: "Home", href: "#home" },
  { label: "Overview", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Spaces", href: "#spaces" },
  { label: "Why Us", href: "#why" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-10 lg:py-4">
        <a href="#home" className="flex min-w-0 items-center font-display transition-colors">
          <span
            className={cn(
              "truncate text-[0.8rem] font-medium tracking-[0.16em] transition-colors drop-shadow-sm sm:text-sm sm:tracking-[0.22em]",
              scrolled ? "text-foreground" : "text-white",
            )}
          >
            ML BUSINESS PARK
          </span>
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "text-[0.8rem] tracking-wide transition-colors hover:underline underline-offset-4",
                    scrolled
                      ? "text-muted-foreground hover:text-accent"
                      : "text-primary-foreground/90 hover:text-primary-foreground",
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
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md border border-white/20 transition-colors lg:hidden active:scale-95",
              scrolled
                ? "border-border text-foreground bg-muted/50"
                : "text-primary-foreground bg-black/20 backdrop-blur-xs",
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background/98 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <span className="font-display text-xs sm:text-sm font-semibold tracking-[0.18em]">
              ML BUSINESS PARK
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-muted text-foreground active:scale-95"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative mx-5 my-4 overflow-hidden rounded-lg border border-border bg-muted shrink-0">
            <img
              src="/navbar-logo.png"
              alt="ML Business Park Commercial Complex Poster"
              className="h-36 w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 flex flex-col justify-end">
              <p className="font-display text-lg text-white font-medium">ML Business Park</p>
              <p className="text-xs text-white/80">Ramsagar Para, Raipur, Chhattisgarh</p>
            </div>
          </div>

          <ul className="flex flex-col gap-0.5 px-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border/60 py-3.5 font-display text-xl font-medium tracking-wide text-foreground transition-colors active:text-accent"
                >
                  <span>{l.label}</span>
                  <span className="text-xs text-muted-foreground">→</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 px-5 pt-6 pb-10">
            <a
              href="#enquire"
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] items-center justify-center bg-accent px-6 py-3.5 text-center text-xs tracking-[0.18em] text-accent-foreground uppercase font-medium rounded active:opacity-90"
            >
              Enquire Now
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[44px] items-center justify-center gap-2 border border-border px-6 py-3 text-xs tracking-[0.18em] uppercase font-medium rounded text-foreground active:bg-muted"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> WhatsApp
              Direct
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
