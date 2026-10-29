import type { CSSProperties } from "react";
import { useInView } from "../hooks";
import { Reveal, SectionHeader } from "./ui";

// Progression from one node to a connected team network.
function TeamNetwork() {
  const [ref, go] = useInView<SVGSVGElement>(0.3);
  const team: [number, number][] = [[250, 90], [320, 170], [250, 250], [330, 330], [240, 400], [150, 160], [160, 280], [110, 380]];
  const links: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 2], [6, 7], [4, 7], [1, 3]];
  return (
    <svg ref={ref} viewBox="0 0 400 480" role="img" aria-label="Diagram: a single node on the left grows into a connected network of nodes, representing the move from individual contributor to team leader." className={`${go ? "go" : ""} h-auto w-full`}>
      <g stroke="rgb(var(--c-line))" strokeWidth=".6">{[100, 200, 300].map((x) => <line key={x} x1={x} y1="20" x2={x} y2="460" />)}{[120, 240, 360].map((y) => <line key={y} x1="20" y1={y} x2="380" y2={y} />)}</g>
      <circle cx="40" cy="240" r="9" fill="rgb(var(--c-ember))" />
      <circle cx="40" cy="240" r="18" fill="none" stroke="rgb(var(--c-ember))" strokeWidth=".8" className="pulse" />
      <text x="26" y="272" fill="rgb(var(--c-mute))" fontSize="9" fontFamily="ui-monospace,monospace">L1</text>
      <path pathLength={1} className="draw" style={{ "--d": ".2s" } as CSSProperties} d="M49 240C100 240 120 200 150 160M49 240C110 240 120 280 160 280M49 240C130 240 190 240 250 250" fill="none" stroke="rgb(var(--c-ember))" strokeWidth="1.2" />
      <g stroke="rgb(var(--c-signal))" strokeWidth="1" fill="none">
        {links.map(([a, b], i) => (
          <path key={i} pathLength={1} className="draw" style={{ "--d": `${0.8 + i * 0.12}s` } as CSSProperties} d={`M${team[a][0]} ${team[a][1]}L${team[b][0]} ${team[b][1]}`} />
        ))}
      </g>
      {team.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 ? 8 : 5} className="fade-in" style={{ "--d": `${0.9 + i * 0.12}s` } as CSSProperties} fill={i === 2 ? "rgb(var(--c-signal))" : "rgb(var(--c-ink2))"} stroke="rgb(var(--c-signal))" strokeWidth="1.2" />
      ))}
      <text x="226" y="290" fill="rgb(var(--c-signal))" fontSize="9" fontFamily="ui-monospace,monospace">TEAM LEADER</text>
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="wrap">
        <SectionHeader label="01 / About" title="From the frontline to the bigger picture." />
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal className="space-y-6 text-[1.08rem] leading-[1.75] text-mute">
              <p>My journey began in frontline customer support, where I learned to understand customer issues, maintain accurate CRM records, and resolve queries clearly. I progressed into a Team Leader role, coordinating multiple support queues, monitoring service performance, coaching advisors, and managing escalations that required cross-functional attention.</p>
              <p>These experiences shaped how I approach problems: listen carefully, establish the facts, identify the next action, communicate clearly, and follow through.</p>
              <p>With an MCA and a background in Computer Technology, I am interested in applying that approach to customer operations and product support within technology-driven organizations.</p>
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="mt-14 border-l-2 border-ember pl-6 md:pl-8">
                <p className="font-serif text-[clamp(1.7rem,3.4vw,2.7rem)] italic leading-[1.15] text-ivory">
                  “Good support is not just about answering questions. It is about creating clarity and ownership.”
                </p>
                <footer className="eyebrow mt-4">Personal positioning statement</footer>
              </blockquote>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5" delay={150}>
            <div className="mx-auto max-w-md border border-line bg-ink2 p-4 lg:sticky lg:top-28">
              <TeamNetwork />
              <p className="eyebrow mt-2 px-1">Individual → Connected team</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
