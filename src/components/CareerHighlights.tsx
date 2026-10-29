import { highlights } from "../content";
import { Reveal } from "./ui";

function Accent({ i }: { i: number }) {
  const common = { width: 56, height: 20, viewBox: "0 0 56 20", fill: "none", "aria-hidden": true } as const;
  if (i === 0) return <svg {...common}><path d="M2 10h24M30 10h24" stroke="rgb(var(--c-signal))" strokeWidth="1.5" /><circle cx="28" cy="10" r="3" fill="rgb(var(--c-ink))" stroke="rgb(var(--c-signal))" /></svg>;
  if (i === 1) return <svg {...common}>{[6, 18, 30, 42].map((x, k) => <circle key={x} cx={x} cy={k % 2 ? 6 : 14} r="3" fill="rgb(var(--c-signal))" />)}<path d="M6 14L18 6L30 14L42 6" stroke="rgb(var(--c-signal))" strokeWidth="1" opacity=".6" /></svg>;
  if (i === 2) return <svg {...common}><circle cx="10" cy="10" r="6" stroke="rgb(var(--c-ember))" strokeWidth="1.5" /><circle cx="30" cy="10" r="6" stroke="rgb(var(--c-ember))" strokeWidth="1.5" /><circle cx="30" cy="10" r="2" fill="rgb(var(--c-ember))" /></svg>;
  return <svg {...common}><path d="M2 2h16v16H2zM10 2v16M2 10h16" stroke="rgb(var(--c-signal))" strokeWidth="1" /></svg>;
}

export default function CareerHighlights() {
  return (
    <section aria-label="Career highlights" className="border-y border-line bg-ink2">
      <div className="wrap">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <li key={h.label} className={`border-line py-9 pr-4 lg:py-14 ${i % 2 ? "pl-5 border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:pl-8" : ""}`}>
              <Reveal delay={i * 90}>
                <Accent i={i} />
                <p className="mt-4 font-display text-[clamp(2.8rem,6.5vw,5.6rem)] font-medium leading-none tracking-[-0.05em]">{h.value}</p>
                <p className="mt-3 text-sm font-medium">{h.label}</p>
                <p className="mt-1 text-xs text-mute">{h.note}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
