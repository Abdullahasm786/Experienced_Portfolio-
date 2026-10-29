import { usePrefersReducedMotion } from "../hooks";

const N: [number, number][] = [
  [70, 90], [180, 60], [300, 110], [430, 70], [540, 140], [110, 200], [230, 230], [370, 200], [500, 260], [60, 330], [170, 380],
  [330, 320], [470, 390], [560, 430], [100, 470], [240, 500], [380, 480], [500, 540], [150, 580], [310, 590], [430, 610], [40, 560],
];
const E: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [2, 6], [2, 7], [6, 11], [7, 11], [5, 9], [9, 10], [10, 11], [11, 12],
  [12, 13], [8, 12], [10, 14], [14, 15], [15, 16], [16, 12], [11, 16], [15, 19], [16, 20], [17, 13], [17, 16], [18, 15], [19, 20], [18, 14], [21, 14], [3, 7],
];
const BLUE = new Set([2, 6, 10, 16, 5]);
const EMBER = new Set([12, 4]);
const small = (i: number) => i >= 17;

// Waveform: noisy on the left (a complex issue), settling into a clear line through the focal point.
const wave = (() => {
  const pts: string[] = [];
  for (let x = 30; x <= 570; x += 3) {
    const k = x < 330 ? 1 - (x - 30) / 300 : 0;
    const y = 320 + k * 62 * Math.sin(x / 8.5) * (0.55 + 0.45 * Math.sin(x / 31));
    pts.push(`${pts.length ? "L" : "M"}${x} ${y.toFixed(1)}`);
  }
  return pts.join("");
})();

export default function SignalField() {
  const reduced = usePrefersReducedMotion();
  return (
    <svg viewBox="0 0 600 640" className="go h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="sf-glow" cx="55%" cy="50%" r="50%">
          <stop offset="0" stopColor="rgb(var(--c-signal))" stopOpacity=".16" />
          <stop offset="1" stopColor="rgb(var(--c-signal))" stopOpacity="0" />
        </radialGradient>
        <path id="sf-route" d="M70 90 L180 60 L300 110 L230 230 L330 320" fill="none" />
        <path id="sf-route2" d="M560 430 L470 390 L330 320" fill="none" />
      </defs>
      <rect width="600" height="640" fill="url(#sf-glow)" />

      {/* coordinate grid */}
      <g stroke="rgb(var(--c-line))" strokeWidth=".6" opacity=".55">
        {[60, 120, 180, 240, 300, 360, 420, 480, 540].map((v) => (
          <line key={`v${v}`} x1={v} y1="20" x2={v} y2="620" />
        ))}
        {[80, 160, 240, 320, 400, 480, 560].map((v) => (
          <line key={`h${v}`} x1="20" y1={v} x2="580" y2={v} />
        ))}
      </g>
      <g fill="rgb(var(--c-mute))" fontSize="8" fontFamily="ui-monospace, monospace" opacity=".7">
        <text x="24" y="14">X 000</text>
        <text x="520" y="14">X 600</text>
        <text x="24" y="634">Y 640</text>
        <text x="40" y="300">ISSUE</text>
        <text x="512" y="310">CLARITY</text>
      </g>

      {/* connections */}
      <g fill="none" stroke="rgb(var(--c-signal))" strokeWidth="1" strokeOpacity=".5" strokeLinecap="round">
        {E.map(([a, b], i) => (
          <path
            key={i}
            pathLength={1}
            className={`draw ${small(a) || small(b) ? "sm-hide" : ""}`}
            style={{ "--d": `${0.3 + i * 0.07}s` } as React.CSSProperties}
            d={`M${N[a][0]} ${N[a][1]}L${N[b][0]} ${N[b][1]}`}
          />
        ))}
      </g>
      <g fill="none" stroke="rgb(var(--c-signal))" strokeWidth="1.2" strokeOpacity=".9">
        <path className="flow" d="M180 60L300 110L230 230L330 320" />
        <path className="flow" style={{ animationDelay: "-1.4s" }} d="M560 430L470 390L330 320" />
      </g>

      {/* waveform */}
      <path pathLength={1} className="draw" style={{ "--d": "0.6s", animationDuration: "2.6s" } as React.CSSProperties} d={wave} fill="none" stroke="rgb(var(--c-ivory))" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

      {/* nodes */}
      {N.map(([x, y], i) => {
        if (i === 11) return null;
        const c = EMBER.has(i) ? "rgb(var(--c-ember))" : BLUE.has(i) ? "rgb(var(--c-signal))" : "rgb(var(--c-mute))";
        const hi = EMBER.has(i) || BLUE.has(i);
        return (
          <g key={i} className={`fade-in ${small(i) ? "sm-hide" : ""}`} style={{ "--d": `${0.5 + i * 0.06}s` } as React.CSSProperties}>
            {hi && <circle cx={x} cy={y} r="11" fill="none" stroke={c} strokeWidth=".8" className="pulse" style={{ "--d": `${i * 0.25}s` } as React.CSSProperties} />}
            <circle cx={x} cy={y} r={hi ? 4.2 : 2.6} fill={hi ? c : "rgb(var(--c-ink2))"} stroke={c} strokeWidth="1" />
          </g>
        );
      })}

      {/* focal point: resolution */}
      <g className="fade-in" style={{ "--d": "1.4s" } as React.CSSProperties}>
        <circle cx="330" cy="320" r="40" fill="none" stroke="rgb(var(--c-signal))" strokeWidth=".8" strokeOpacity=".5" className="pulse" />
        <circle cx="330" cy="320" r="22" fill="none" stroke="rgb(var(--c-signal))" strokeWidth="1" />
        <circle cx="330" cy="320" r="7" fill="rgb(var(--c-ivory))" />
        <path d="M330 270v18M330 352v18M280 320h18M362 320h18" stroke="rgb(var(--c-ivory))" strokeWidth="1" strokeOpacity=".6" />
      </g>

      {/* travelling signals (SMIL, skipped when reduced motion is requested) */}
      {!reduced && (
        <>
          <circle r="3.2" fill="rgb(var(--c-ivory))">
            <animateMotion dur="5.5s" repeatCount="indefinite" begin="2.4s"><mpath href="#sf-route" /></animateMotion>
          </circle>
          <circle r="3.2" fill="rgb(var(--c-ember))">
            <animateMotion dur="4s" repeatCount="indefinite" begin="3s"><mpath href="#sf-route2" /></animateMotion>
          </circle>
        </>
      )}
    </svg>
  );
}
