import { education, certification } from "../content";
import { Reveal, SectionHeader } from "./ui";

export default function EducationSection() {
  return (
    <section id="education" className="bg-ink2 py-24 md:py-36">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader label="08 / Education" title="A technology foundation." className="!mb-8" />
          <Reveal>
            <svg viewBox="0 0 200 120" className="hidden h-auto w-full max-w-xs lg:block" aria-hidden="true" fill="none" stroke="rgb(var(--c-line))">
              {[0, 1, 2, 3].map((i) => <rect key={i} x={20 + i * 14} y={14 + i * 12} width={120 - i * 28} height={90 - i * 24} />)}
              <rect x="20" y="14" width="120" height="90" stroke="rgb(var(--c-signal))" />
              <circle cx="164" cy="38" r="5" fill="rgb(var(--c-ember))" stroke="none" />
              <path d="M140 38h19" stroke="rgb(var(--c-ember))" />
            </svg>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pt-24">
          <ol className="relative border-l border-line pl-8">
            {education.map((e, i) => (
              <li key={e.degree} className="relative pb-12">
                <span aria-hidden className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-signal bg-ink2" />
                <Reveal delay={i * 100}>
                  <p className="font-display text-4xl tracking-tight text-signal">{e.year}</p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight">{e.degree}</h3>
                  <p className="mt-1 text-mute">{e.school}</p>
                  <p className="text-mute">{e.university}</p>
                </Reveal>
              </li>
            ))}
            <li className="relative">
              <span aria-hidden className="absolute -left-[2.4rem] top-1.5 h-2.5 w-2.5 rotate-45 bg-ember" />
              <Reveal>
                <p className="eyebrow">Certification</p>
                <p className="mt-1 font-display text-2xl tracking-tight">{certification}</p>
              </Reveal>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
