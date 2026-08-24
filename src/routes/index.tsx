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
      <footer className="border-t border-border bg-background py-8 text-center text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} M L Business Park, Ramsagar Para, Raipur. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
