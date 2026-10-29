import { useState, type CSSProperties } from "react";
import { queues } from "../content";
import { useInView } from "../hooks";

const pos = [
  { x: 70, y: 170 },
  { x: 230, y: 90 },
  { x: 390, y: 170 },
  { x: 550, y: 90 },
];

export default function QueueMap() {
  const [sel, setSel] = useState(0);
  const [ref, go] = useInView<HTMLDivElement>(0.3);
  const q = queues[sel];
  return (
    <div ref={ref} className={`${go ? "go" : ""} border border-line bg-ink2 p-5 md:p-8`}>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl">The queue map</h3>
        <p className="eyebrow">Conceptual illustration</p>
      </div>
      <svg viewBox="0 0 620 250" className="h-auto w-full" role="group" aria-label="Queue map: L1 to L2 to Retention to SRD. Select a node to read about the queue.">
        <path pathLength={1} className="draw" style={{ "--d": ".2s", animationDuration: "2.4s" } as CSSProperties} fill="none" stroke="rgb(var(--c-line))" strokeWidth="1.5" d={`M${pos[0].x} ${pos[0].y} C 140 170, 150 90, ${pos[1].x} ${pos[1].y} S 330 170, ${pos[2].x} ${pos[2].y} S 480 90, ${pos[3].x} ${pos[3].y}`} />
        <path className="flow" fill="none" stroke="rgb(var(--c-signal))" strokeWidth="1.5" d={`M${pos[0].x} ${pos[0].y} C 140 170, 150 90, ${pos[1].x} ${pos[1].y} S 330 170, ${pos[2].x} ${pos[2].y} S 480 90, ${pos[3].x} ${pos[3].y}`} />
        {queues.map((n, i) => {
          const on = sel === i;
          return (
            <g
              key={n.id}
              tabIndex={0}
              role="button"
              aria-pressed={on}
              aria-label={`${n.name} queue`}
              onMouseEnter={() => setSel(i)}
              onFocus={() => setSel(i)}
              onClick={() => setSel(i)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setSel(i))}
              className="cursor-pointer outline-none [&:focus-visible_circle:first-child]:stroke-ivory"
            >
              <circle cx={pos[i].x} cy={pos[i].y} r={on ? 40 : 32} fill={on ? "rgb(var(--c-panel))" : "rgb(var(--c-ink))"} stroke={on ? "rgb(var(--c-signal))" : "rgb(var(--c-line))"} strokeWidth="1.5" style={{ transition: "r .3s, stroke .3s" }} />
              <circle cx={pos[i].x} cy={pos[i].y} r="46" fill="none" stroke="rgb(var(--c-signal))" strokeWidth=".6" opacity={on ? 0.6 : 0} />
              <text x={pos[i].x} y={pos[i].y + 4} textAnchor="middle" fill={on ? "rgb(var(--c-ivory))" : "rgb(var(--c-mute))"} fontSize={n.name.length > 3 ? 11 : 15} fontFamily="Space Grotesk, sans-serif" fontWeight="500">{n.name}</text>
              <text x={pos[i].x} y={pos[i].y + 62} textAnchor="middle" fill="rgb(var(--c-mute))" fontSize="9" fontFamily="ui-monospace,monospace">0{i + 1}</text>
            </g>
          );
        })}
      </svg>
      <p className="min-h-[4.5rem] max-w-2xl border-t border-line pt-4 text-mute" aria-live="polite">
        <span className="mr-2 font-display text-signal">{q.name}</span>
        {q.text}
      </p>
    </div>
  );
}
