import { Phone, MessageCircle, Send } from "lucide-react";
import { contact } from "@/lib/site-data";

export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 p-3 backdrop-blur-lg safe-bottom lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex items-center justify-between gap-2 max-w-md">
        {/* Call Action */}
        <a
          href={contact.phoneHref}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-card py-2.5 px-2 text-[0.7rem] font-medium uppercase tracking-wider text-foreground transition-all active:scale-[0.98] active:bg-muted"
        >
          <Phone className="h-3.5 w-3.5 text-accent shrink-0" />
          <span>Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-emerald-600/30 bg-emerald-50 dark:bg-emerald-950/20 py-2.5 px-2 text-[0.7rem] font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400 transition-all active:scale-[0.98]"
        >
          <MessageCircle className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Enquire Action */}
        <a
          href="#enquire"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-md bg-accent py-2.5 px-2 text-[0.7rem] font-medium uppercase tracking-wider text-accent-foreground shadow-sm transition-all active:scale-[0.98] active:bg-accent/90"
        >
          <Send className="h-3.5 w-3.5 shrink-0" />
          <span>Enquire</span>
        </a>
      </div>
    </div>
  );
}
