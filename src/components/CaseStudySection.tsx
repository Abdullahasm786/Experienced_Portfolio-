import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { caseStudies } from "../content";
import { Reveal, SectionHeader } from "./ui";

function Glyph({ kind }: { kind: "hub" | "bars" | "flow" }) {
  const p = { viewBox: "0 0 120 90", fill: "none", "aria-hidden": true, className: "h-auto w-full max-w-[220px]" } as const;
  if (kind === "hub")
    return (
      <svg {...p}>
        <g stroke="rgb(var(--c-signal))" strokeWidth="1.2"><path d="M60 45L18 16M60 45L102 16M60 45L18 74M60 45L102 74" /></g>
        {[[18, 16], [102, 16], [18, 74], [102, 74]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="5" fill="rgb(var(--c-ink))" stroke="rgb(var(--c-signal))" strokeWidth="1.2" />)}
        <circle cx="60" cy="45" r="9" fill="rgb(var(--c-ember))" />
      </svg>
    );
  if (kind === "bars")
    return (
      <svg {...p}>
        <path d="M10 80h100" stroke="rgb(var(--c-line))" />
        {[[16, 40], [38, 56], [60, 30], [82, 50]].map(([x, h]) => <rect key={x} x={x} y={80 - h} width="14" height={h} fill="none" stroke="rgb(var(--c-signal))" strokeWidth="1.2" />)}
        <path d="M16 38L45 24L67 44L96 14" stroke="rgb(var(--c-ember))" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    );
  return (
    <svg {...p}>
      <path d="M10 45h30l20-26h20M60 19v0M40 45l20 26h20" stroke="rgb(var(--c-signal))" strokeWidth="1.2" />
      <rect x="4" y="38" width="12" height="14" fill="none" stroke="rgb(var(--c-signal))" />
      <path d="M80 19h12M80 71h12" stroke="rgb(var(--c-signal))" strokeWidth="1.2" />
      <circle cx="104" cy="19" r="6" fill="none" stroke="rgb(var(--c-signal))" />
      <circle cx="104" cy="71" r="6" fill="rgb(var(--c-ember))" />
    </svg>
  );
}

export default function CaseStudySection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div className="wrap">
        <SectionHeader label="05 / Case Studies" title="Every issue has a path to clarity.">
          <p className="border-l-2 border-ember pl-4 text-base">Illustrative case studies based on relevant work patterns. They are not verified company projects or measured business results.</p>
        </SectionHeader>

        <ul className="border-t border-line">
          {caseStudies.map((c, i) => {
            const isOpen = open === i;
            return (
              <li key={c.n} className="border-b border-line">
                <Reveal delay={i * 80}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`case-${c.n}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="group flex w-full items-center gap-4 py-7 text-left md:gap-10 md:py-9"
                    >
                      <span className={`font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-none tracking-tighter transition-colors ${isOpen ? "text-signal" : "text-mute/40 group-hover:text-mute"}`}>{c.n}</span>
                      <span className="flex-1 font-display text-[clamp(1.35rem,2.8vw,2.3rem)] leading-tight tracking-tight">{c.title}</span>
                      <ChevronDown aria-hidden className={`shrink-0 text-mute transition-transform duration-500 ease-out ${isOpen ? "rotate-180 text-signal" : ""}`} />
                    </button>
                  </h3>
                </Reveal>
                <div id={`case-${c.n}`} role="region" aria-label={c.title} className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className={`grid gap-10 pb-12 transition-opacity duration-500 md:grid-cols-12 ${isOpen ? "opacity-100" : "opacity-0"}`} {...(!isOpen && { inert: "" as unknown as undefined })}>
                      <div className="md:col-span-3"><Glyph kind={c.kind} /></div>
                      <div className="md:col-span-4">
                        <p className="eyebrow mb-3">Problem</p>
                        <p className="font-serif text-2xl italic leading-snug">{c.scenario}</p>
                        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-signal">{c.skills.map((s) => <li key={s}>{s}</li>)}</ul>
                      </div>
                      <div className="md:col-span-5">
                        <p className="eyebrow mb-3">Approach</p>
                        <ol className="space-y-2.5">
                          {c.steps.map((s, k) => (
                            <li key={s} className="flex gap-3 text-mute"><span className="font-mono text-xs leading-[1.9] text-signal">{String(k + 1).padStart(2, "0")}</span>{s}</li>
                          ))}
                        </ol>
                        <p className="eyebrow mb-2 mt-8">Outcome</p>
                        <p className="text-ivory">{c.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
