import { useState } from "react";
import { modules } from "../content";
import { Reveal, SectionHeader } from "./ui";

function Marker({ id, on }: { id: string; on: boolean }) {
  const s = on ? "rgb(var(--c-signal))" : "rgb(var(--c-mute))";
  const p = { width: 34, height: 34, viewBox: "0 0 34 34", fill: "none", stroke: s, strokeWidth: 1.5, "aria-hidden": true } as const;
  if (id === "people") return <svg {...p}><circle cx="17" cy="9" r="3.5" /><circle cx="7" cy="25" r="3.5" /><circle cx="27" cy="25" r="3.5" /><path d="M15 12L9 22M19 12L25 22M11 25h12" /></svg>;
  if (id === "service") return <svg {...p}><path d="M4 26a13 13 0 0 1 26 0" /><path d="M17 26L24 14" /><circle cx="17" cy="26" r="2" fill={s} /></svg>;
  if (id === "customer") return <svg {...p}><path d="M27 17a10 10 0 1 1-4-8" /><path d="M24 4v6h-6" /></svg>;
  return <svg {...p}><path d="M5 28V18M13 28V10M21 28V15M29 28V6" /><path d="M3 29h28" /></svg>;
}

export default function OperationsSystem() {
  const [sel, setSel] = useState(0);
  const m = modules[sel];
  const place = ["lg:col-start-1 lg:row-start-1", "lg:col-start-3 lg:row-start-1", "lg:col-start-1 lg:row-start-3", "lg:col-start-3 lg:row-start-3"];

  return (
    <section id="expertise" className="py-24 md:py-36">
      <div className="wrap">
        <SectionHeader label="03 / Expertise" title="Seeing the system behind every issue." />

        <Reveal>
          <div className="relative grid gap-0 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto] lg:gap-y-0">
            {/* desktop connectors */}
            <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
              {[[17, 17], [83, 17], [17, 83], [83, 83]].map(([x, y], i) => (
                <line key={i} x1="50" y1="50" x2={x} y2={y} vectorEffect="non-scaling-stroke" stroke={sel === i ? "rgb(var(--c-signal))" : "rgb(var(--c-line))"} strokeWidth="1" style={{ transition: "stroke .3s" }} />
              ))}
            </svg>
            {/* mobile spine */}
            <span aria-hidden className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-line lg:hidden" />

            <div className="relative z-10 mb-4 flex items-center gap-4 pl-0 lg:col-start-2 lg:row-start-2 lg:mb-0 lg:flex-col lg:justify-center lg:py-14 lg:text-center">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-ember bg-ink lg:h-20 lg:w-20">
                <span className="h-2.5 w-2.5 rounded-full bg-ember lg:h-4 lg:w-4" />
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ivory">Customer Operations</p>
            </div>

            {modules.map((mod, i) => (
              <button
                key={mod.id}
                type="button"
                aria-pressed={sel === i}
                onClick={() => setSel(i)}
                onMouseEnter={() => setSel(i)}
                className={`relative z-10 flex items-start gap-4 py-5 text-left transition lg:max-w-[22rem] lg:border lg:bg-ink lg:p-6 ${place[i]} ${i % 2 ? "lg:justify-self-end" : ""} ${
                  sel === i ? "lg:border-signal" : "lg:border-line lg:hover:border-mute"
                }`}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-ink lg:border-0 lg:bg-transparent"><Marker id={mod.id} on={sel === i} /></span>
                <span>
                  <span className="font-mono text-[0.68rem] tracking-[0.18em] text-mute">MODULE {mod.n}</span>
                  <span className={`block font-display text-2xl tracking-tight ${sel === i ? "text-signal" : ""}`}>{mod.name}</span>
                  <span className="mt-1 block text-sm text-mute">{mod.blurb}</span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 border-t border-line pt-8" aria-live="polite">
          <p className="eyebrow mb-4">Module {m.n} · {m.name}</p>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {m.skills.map((s) => (
              <li key={s} className="flex items-center gap-3 border-b border-line/60 py-3 font-display text-lg">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal" />{s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
