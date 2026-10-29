import { roles } from "../content";
import { Reveal, SectionHeader } from "./ui";
import QueueMap from "./QueueMap";

// Graphic C: compact horizontal (desktop) / vertical (mobile) career line.
function CareerLine() {
  const items = [
    { y: "2024", t: "Level 1 Advisor", c: "rgb(var(--c-signal))" },
    { y: "2025", t: "Transition to Team Leader", c: "rgb(var(--c-ember))" },
    { y: "2026", t: "End of listed employment period", c: "rgb(var(--c-mute))" },
  ];
  return (
    <Reveal>
      <ol aria-label="Career line" className="relative mb-20 grid gap-8 border-y border-line py-8 md:grid-cols-3 md:gap-0">
        <span aria-hidden className="absolute left-[7px] top-8 bottom-8 w-px bg-line md:hidden" />
        <span aria-hidden className="absolute left-0 right-0 top-[3.05rem] hidden h-px bg-line md:block" />
        {items.map((it, i) => (
          <li key={it.y} className="relative pl-8 md:pl-0 md:pt-0">
            <span aria-hidden className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 bg-ink md:static md:mb-4 md:block" style={{ borderColor: it.c, background: i === 1 ? it.c : undefined }} />
            <p className="font-display text-3xl tracking-tight" style={{ color: i === 1 ? it.c : undefined }}>{it.y}</p>
            <p className="mt-1 text-sm text-mute">{it.t}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export default function CareerTimeline() {
  return (
    <section id="experience" className="bg-ink2 py-20 md:py-28">
      <div className="wrap">
        <SectionHeader label="02 / Experience" title="Growth through responsibility." />
        <CareerLine />

        <div className="relative">
          <span aria-hidden className="absolute bottom-0 left-[9px] top-2 w-px bg-gradient-to-b from-signal via-line to-line md:left-[calc(25%-1px)]" />
          {roles.map((r, i) => (
            <div key={r.title}>
              <article className="relative grid gap-4 pb-6 pl-10 md:grid-cols-12 md:gap-10 md:pl-0">
                <span aria-hidden className="absolute left-0 top-2 h-5 w-5 rounded-full border-2 border-signal bg-ink md:left-[calc(25%-10px)]" style={i === 0 ? { background: "rgb(var(--c-signal))" } : undefined} />
                <div className="md:col-span-3 md:pr-12 md:text-right">
                  <Reveal>
                    <p className="font-display text-xl text-signal">{r.period}</p>
                    <p className="mt-1 text-sm text-mute">{r.company}</p>
                  </Reveal>
                </div>
                <div className="md:col-span-8 md:col-start-5">
                  <Reveal delay={80}>
                    <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.3rem)] font-medium leading-tight tracking-tight">{r.title}</h3>
                    {r.tags.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs tracking-[0.16em] text-signal" aria-label="Queues led">
                        {r.tags.map((t) => <li key={t}>{t}</li>)}
                      </ul>
                    )}
                    <ul className="mt-6 divide-y divide-line/60 border-y border-line/60">
                      {r.points.map((p) => (
                        <li key={p} className="flex gap-4 py-3 text-mute">
                          <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-signal" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </article>
              {i === 0 && (
                <div className="relative grid gap-4 py-12 pl-10 md:grid-cols-12 md:gap-10 md:pl-0" aria-label="Promotion from Level 1 Advisor to Team Leader">
                  <span aria-hidden className="absolute left-[3px] top-[3.35rem] h-[13px] w-[13px] rotate-45 bg-ember md:left-[calc(25%-7px)]" />
                  <div className="md:col-span-8 md:col-start-5">
                    <Reveal>
                      <p className="font-serif text-2xl italic text-ember">May 2025 — Advisor to Team Leader</p>
                      <p className="mt-1 text-sm text-mute">Same organization, wider responsibility: from owning my own queue targets to leading others through theirs.</p>
                    </Reveal>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h3 className="font-display text-3xl leading-tight tracking-tight">Four queues, one flow of ownership.</h3>
              <p className="mt-4 text-mute">Hover, focus or tap a node to see how each queue fits the support environment I led.</p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-8"><QueueMap /></Reveal>
        </div>
      </div>
    </section>
  );
}
