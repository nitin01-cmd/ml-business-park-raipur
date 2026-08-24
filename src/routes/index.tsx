import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Spaces } from "@/components/site/spaces";
import { Amenities } from "@/components/site/amenities";
import { Gallery } from "@/components/site/gallery";
import { Location } from "@/components/site/location";
import { Why } from "@/components/site/why";
import { Enquiry } from "@/components/site/enquiry";
import { MobileActions } from "@/components/site/mobile-actions";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Spaces />
        <Amenities />
        <Gallery />
        <Location />
        <Why />
        <Enquiry />
      </main>
      <footer className="border-t border-border bg-background pt-8 pb-24 text-center text-xs text-muted-foreground lg:pb-8">
        <p>
          © {new Date().getFullYear()} ML Business Park, Ramsagar Para, Raipur. All rights
          reserved.
        </p>
      </footer>
      <MobileActions />
    </div>
  );
}

