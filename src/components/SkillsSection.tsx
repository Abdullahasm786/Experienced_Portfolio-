import { Users, Headset, Gauge, ChartColumn, Wrench } from "lucide-react";
import { skillGroups } from "../content";
import { Reveal, SectionHeader } from "./ui";

const icons = { users: Users, headset: Headset, gauge: Gauge, chart: ChartColumn, wrench: Wrench };

export default function SkillsSection() {
  return (
    <section id="capabilities" className="bg-ink2 py-24 md:py-36">
      <div className="wrap">
        <SectionHeader label="06 / Capabilities" title="What I bring to a support team." />
        <div className="grid border-t border-line md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon as keyof typeof icons];
            const wide = i < 3 ? "lg:col-span-2" : "lg:col-span-3";
            return (
              <Reveal key={g.name} delay={i * 70} className={`border-b border-line md:odd:border-r lg:border-r lg:last:border-r-0 ${wide} ${i === 3 ? "lg:border-r" : ""}`}>
                <section aria-labelledby={`sk-${i}`} className="p-6 md:p-8">
                  <Icon aria-hidden size={22} className={i === 4 ? "text-ember" : "text-signal"} strokeWidth={1.5} />
                  <h3 id={`sk-${i}`} className="mt-5 font-mono text-xs uppercase tracking-[0.18em]">{g.name}</h3>
                  <p className="mt-1 font-serif text-lg italic text-mute">{g.note}</p>
                  <ul className="mt-5">
                    {g.items.map((s) => (
                      <li key={s} className="group relative border-t border-line/60 py-2.5 text-[0.98rem] transition-[padding,color] duration-300 hover:pl-3 hover:text-signal">
                        {s}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
