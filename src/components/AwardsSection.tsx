import { awards } from "../content";
import { Reveal, SectionHeader } from "./ui";

// Graphic E: original thin-line award marks. Quarter = a ring split in four with one segment lit; Month = twelve ticks with one lit.
function Mark({ kind }: { kind: "quarter" | "month" }) {
  const ticks = Array.from({ length: 12 }, (_, i) => i);
  return (
    <svg viewBox="0 0 200 200" className="h-auto w-full max-w-[200px]" aria-hidden="true">
      <circle cx="100" cy="100" r="86" fill="none" stroke="rgb(var(--c-line))" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="rgb(var(--c-line))" strokeDasharray="2 5" />
      {kind === "quarter" ? (
        <>
          <path d="M100 14V186M14 100H186" stroke="rgb(var(--c-line))" />
          <path d="M100 100L100 14A86 86 0 0 1 186 100Z" fill="rgb(var(--c-ember))" fillOpacity=".14" stroke="rgb(var(--c-ember))" strokeWidth="1.5" />
          <path d="M100 56 L110 92 L146 100 L110 108 L100 144 L90 108 L54 100 L90 92 Z" fill="none" stroke="rgb(var(--c-ivory))" strokeWidth="1.2" />
        </>
      ) : (
        <>
          {ticks.map((i) => (
            <line key={i} x1="100" y1="14" x2="100" y2={i === 3 ? 38 : 28} stroke={i === 3 ? "rgb(var(--c-ember))" : "rgb(var(--c-mute))"} strokeWidth={i === 3 ? 2.5 : 1.2} transform={`rotate(${i * 30} 100 100)`} />
          ))}
          <circle cx="100" cy="100" r="28" fill="none" stroke="rgb(var(--c-ivory))" strokeWidth="1.2" />
          <path d="M100 100L100 78" stroke="rgb(var(--c-ivory))" strokeWidth="1.5" />
          <path d="M100 100L116 108" stroke="rgb(var(--c-ember))" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="3" fill="rgb(var(--c-ivory))" />
        </>
      )}
    </svg>
  );
}

export default function AwardsSection() {
  return (
    <section id="recognition" className="py-20 md:py-28">
      <div className="wrap">
        <SectionHeader label="07 / Recognition" title="Leadership, recognised." />
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {awards.map((a, i) => (
            <Reveal key={a.kind} delay={i * 120} className="bg-ink transition-colors duration-300 hover:bg-signal/5">
              <article className="flex h-full flex-col items-start gap-8 p-8 sm:flex-row sm:items-center md:p-10">
                <div className="w-36 shrink-0 sm:w-44"><Mark kind={a.kind} /></div>
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-ember">AWARD 0{i + 1}</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight sm:text-3xl">{a.title}</h3>
                  <p className="mt-3 text-mute">{a.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
