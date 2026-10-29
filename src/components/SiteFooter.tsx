import { ArrowUp } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl">Abdullah A S M</p>
          <p className="mt-1 text-sm text-mute">Customer Support / Operations / Product Support</p>
          <p className="text-sm text-mute">Bangalore, India</p>
        </div>
        <a href="#top" className="group inline-flex min-h-[44px] items-center gap-2 text-sm text-mute transition hover:text-signal">
          Back to top
          <ArrowUp aria-hidden size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  );
}
