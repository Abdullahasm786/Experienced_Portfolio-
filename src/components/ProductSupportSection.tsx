import { useEffect, useState, type CSSProperties } from "react";
import { directionModules, interests, resolutionSteps } from "../content";
import { useInView, usePrefersReducedMotion } from "../hooks";
import { Reveal, SectionHeader } from "./ui";

// Graphic D: a signal travels Listen → Investigate → Coordinate → Resolve → Follow Up.
function ResolutionPath() {
  const [ref, inView] = useInView<HTMLDivElement>(0.4);
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setStep(i);
      if (i >= resolutionSteps.length - 1) clearInterval(t);
    }, 900);
    return () => clearInterval(t);
  }, [inView, reduced]);

  const pct = (step / (resolutionSteps.length - 1)) * 100;
  return (
    <div ref={ref} className="border border-line bg-ink2 p-6 md:p-10">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl tracking-tight">The resolution path</h3>
        <p className="eyebrow">Select a stage</p>
      </div>
      <div className="relative">
        <span aria-hidden className="absolute left-[1.1rem] top-4 bottom-4 w-px bg-line md:inset-x-5 md:bottom-auto md:top-[1.2rem] md:h-px md:w-auto" />
        <span aria-hidden className="absolute bottom-4 left-[1.1rem] top-4 w-px origin-top bg-signal transition-transform duration-700 ease-out md:hidden" style={{ transform: `scaleY(${pct / 100})` }} />
        <span aria-hidden className="absolute inset-x-5 top-[1.2rem] hidden h-px origin-left bg-signal transition-transform duration-700 ease-out md:block" style={{ transform: `scaleX(${pct / 100})` }} />
        <ol className="relative grid gap-5 md:grid-cols-5 md:gap-3">
          {resolutionSteps.map((s, i) => (
            <li key={s.name}>
              <button type="button" onClick={() => setStep(i)} aria-current={step === i ? "step" : undefined} className="group flex w-full items-center gap-4 text-left md:flex-col md:items-start md:gap-3">
                <span className={`relative z-10 grid h-[2.4rem] w-[2.4rem] shrink-0 place-items-center rounded-full border font-mono text-xs transition-colors duration-500 ${i <= step ? "border-signal bg-signal text-ink" : "border-line bg-ink text-mute group-hover:border-mute"} ${i === step ? "ring-4 ring-signal/25" : ""}`}>
                  {i + 1}
                </span>
                <span className={`font-display text-lg transition-colors ${i === step ? "text-ivory" : "text-mute"}`}>{s.name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-8 border-t border-line pt-5 text-mute" aria-live="polite">
        <span className="mr-2 font-serif text-xl italic text-ember">{resolutionSteps[step].name}.</span>
        {resolutionSteps[step].text}
      </p>
    </div>
  );
}

export default function ProductSupportSection() {
  return (
    <section id="direction" className="bg-ink2 py-24 md:py-36">
      <div className="wrap">
        <SectionHeader label="04 / Direction" title={<>Customer-first thinking. <span className="text-signal">Technology-focused growth.</span></>}>
          <p>Product support requires more than providing an answer. It requires understanding the reported issue, collecting useful information, documenting the investigation, coordinating with the right people, and communicating the next steps. My customer operations experience provides a foundation for developing these capabilities in technology environments.</p>
        </SectionHeader>

        <Reveal><p className="eyebrow mb-6">Transferable experience &amp; career direction</p></Reveal>
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {directionModules.map((m, i) => (
            <Reveal key={m.id} delay={i * 100} className="bg-ink2">
              <article className="h-full p-7 md:p-9">
                <p className="font-mono text-xs tracking-[0.18em] text-ember">MODULE {m.id}</p>
                <h3 className="mt-3 font-display text-3xl tracking-tight">{m.name}</h3>
                <ul className="mt-6 space-y-3 text-mute">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-3"><span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-signal" />{p}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h3 className="font-display text-2xl tracking-tight">Career interests</h3>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {interests.map((x) => <li key={x} className="py-3 font-display text-xl">{x}</li>)}
            </ul>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={100}>
            <div className="h-full border border-dashed border-line p-7 md:p-9">
              <p className="eyebrow mb-3">Future technical projects</p>
              <p className="font-display text-2xl tracking-tight">Placeholder</p>
              <p className="mt-3 max-w-md text-mute">This space is reserved for genuine technical projects once they are completed and supplied. Nothing is claimed here yet.</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16"><Reveal><ResolutionPath /></Reveal></div>
      </div>
    </section>
  );
}
