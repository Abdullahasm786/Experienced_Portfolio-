import type { CSSProperties } from "react";
import { ArrowDownRight } from "lucide-react";
import SignalField from "./SignalField";
import Marquee from "./Marquee";
import { ResumeButton } from "./ui";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-0 md:pt-32">
      <div className="wrap grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="lg:col-span-7">
          <p className="eyebrow rise mb-8 max-w-md leading-relaxed" style={d(0)}>
            Customer Operations / Support Leadership / Product Support
          </p>
          <h1 className="font-display text-[clamp(2.4rem,9.6vw,4.9rem)] font-medium leading-[0.95] lg:text-[clamp(3.2rem,5.1vw,5rem)] lg:whitespace-nowrap tracking-[-0.04em]">
            <span className="rise block" style={d(100)}>I make complex</span>
            <span className="rise block" style={d(220)}>customer problems</span>
            <span className="rise gradient-text block" style={d(340)}>easier to solve.</span>
          </h1>
          <p className="rise mt-8 max-w-xl text-[1.08rem] leading-relaxed text-mute" style={d(520)}>
            I'm Abdullah A S M, a customer support professional with experience leading 15+ advisors, managing complex escalations, and improving operational visibility. I'm interested in bringing my customer-first mindset and analytical approach to product-based technology teams.
          </p>
          <div className="rise mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" style={d(660)}>
            <a href="#experience" className="btn-primary">
              Explore My Experience <ArrowDownRight size={18} aria-hidden />
            </a>
            <ResumeButton />
            <a href="#contact" className="link-line py-3 text-ivory sm:ml-2">Contact Me</a>
          </div>
        </div>

        <div className="rise relative lg:col-span-5" style={d(300)}>
          <div className="hero-frame relative mx-auto aspect-[600/640] w-full max-w-[520px] p-3">
            <i aria-hidden className="tick tl" /><i aria-hidden className="tick tr" /><i aria-hidden className="tick bl" /><i aria-hidden className="tick br" />
            <SignalField />
            <dl className="absolute left-5 top-5 font-mono text-[0.62rem] uppercase leading-[1.9] tracking-[0.16em] text-mute">
              <dt className="sr-only">Location</dt><dd>Bangalore, India</dd>
              <dt className="sr-only">Field</dt><dd>Customer Support / Operations</dd>
            </dl>
            <p className="absolute bottom-5 right-5 font-serif text-xl italic text-ember sm:text-2xl">Clarity in every interaction.</p>
          </div>
          <div className="chip float absolute -left-2 bottom-24 sm:-left-6"><span aria-hidden className="h-2 w-2 rounded-full bg-ember" /><span><b className="font-display text-lg">15+</b> Advisors Led</span></div>
          <div className="chip float absolute -right-1 top-14 sm:-right-4" style={{ animationDelay: "-2.5s" }}><span aria-hidden className="h-2 w-2 rounded-full bg-signal" /><span><b className="font-display text-lg">02</b> Leadership Awards</span></div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}
