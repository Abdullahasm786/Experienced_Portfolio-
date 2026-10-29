import type { CSSProperties, ReactNode } from "react";
import { Download } from "lucide-react";
import { useInView, useResumeAvailable } from "../hooks";
import { profile } from "../content";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${inView ? "in-view" : ""} ${className}`} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

export function SectionHeader({ label, title, children, className = "" }: { label: string; title: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <header className={`mb-12 md:mb-16 ${className}`}>
      <Reveal>
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-signal" />
          {label}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="h2 max-w-4xl">{title}</h2>
      </Reveal>
      {children && (
        <Reveal delay={160}>
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-mute">{children}</div>
        </Reveal>
      )}
    </header>
  );
}

/** Resume CTA. Only becomes a live download once the real PDF is being served. */
export function ResumeButton({ variant = "ghost", label = "Download My Resume" }: { variant?: "ghost" | "primary"; label?: string }) {
  const ok = useResumeAvailable();
  if (!ok) {
    return (
      <span
        role="note"
        className="btn-disabled"
        title={`Add ${profile.resumeFileName} to the /public folder to enable this download.`}
      >
        <Download size={17} aria-hidden /> Resume – upload pending
      </span>
    );
  }
  return (
    <a href={profile.resumePath} download={profile.resumeFileName} className={variant === "primary" ? "btn-primary" : "btn-ghost"}>
      <Download size={17} aria-hidden /> {label}
    </a>
  );
}
