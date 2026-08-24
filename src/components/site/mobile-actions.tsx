import { Phone, MessageCircle, Send } from "lucide-react";
import { contact } from "@/lib/site-data";

export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 p-3.5 backdrop-blur-md safe-bottom lg:hidden shadow-lg">
      <div className="mx-auto flex items-center justify-between gap-2 max-w-md">
        <a
          href={contact.phoneHref}
          className="flex flex-1 items-center justify-center gap-1.5 rounded border border-border bg-secondary/80 py-2.5 px-2 text-[0.7rem] font-medium uppercase tracking-wider text-foreground transition-colors active:bg-secondary"
        >
          <Phone className="h-4 w-4 text-accent" />
          <span>Call</span>
        </a>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded border border-emerald-600/30 bg-emerald-950/10 py-2.5 px-2 text-[0.7rem] font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400 transition-colors active:bg-emerald-950/20"
        >
          <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#enquire"
          className="flex flex-1 items-center justify-center gap-1.5 rounded bg-accent py-2.5 px-2 text-[0.7rem] font-medium uppercase tracking-wider text-accent-foreground shadow-sm transition-opacity active:opacity-90"
        >
          <Send className="h-3.5 w-3.5" />
          <span>Enquire</span>
        </a>
      </div>
    </div>
  );
}
