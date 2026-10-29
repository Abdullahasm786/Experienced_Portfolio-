import { useState, type CSSProperties } from "react";
import { Mail, Phone, Copy, Check, Linkedin, MapPin } from "lucide-react";
import { profile } from "../content";
import { useInView } from "../hooks";
import { Reveal, ResumeButton } from "./ui";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

// Signal lines that settle and resolve into the AAS monogram.
function ResolveMonogram() {
  const [ref, go] = useInView<SVGSVGElement>(0.4);
  const waves = [-26, 0, 26].map((o, i) => {
    const l = (s: number) => Array.from({ length: 30 }, (_, k) => {
      const x = s < 0 ? k * 9 : 540 + k * 9 + 9;
      const t = s < 0 ? k / 29 : 1 - k / 29;
      return `${k ? "L" : "M"}${x} ${(110 + o * (1 - t * 0.9) + Math.sin(k * 0.9 + i) * 22 * (1 - t)).toFixed(1)}`;
    }).join("");
    return [l(-1), l(1)];
  });
  const L = { stroke: "rgb(var(--c-ivory))", strokeWidth: 3.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;
  return (
    <svg ref={ref} viewBox="0 0 810 220" className={`${go ? "go" : ""} h-auto w-full`} role="img" aria-label="Signal lines settling into the ASM monogram">
      {waves.flat().map((d, i) => (
        <path key={i} pathLength={1} className="draw" d={d} fill="none" stroke="rgb(var(--c-signal))" strokeWidth="1.2" strokeOpacity={0.8} style={{ "--d": `${(i % 3) * 0.15}s`, animationDuration: "2.2s" } as CSSProperties} />
      ))}
      <g transform="translate(274 62)">
        <path pathLength={1} className="draw" {...L} style={{ "--d": "1.6s" } as CSSProperties} d="M0 96L32 0L64 96M12 62H52" />
        <path pathLength={1} className="draw" {...L} stroke="rgb(var(--c-signal))" style={{ "--d": "1.9s" } as CSSProperties} d="M152 18C144 2 92 0 92 28C92 54 152 46 152 72C152 98 100 96 90 78" />
        <path pathLength={1} className="draw" {...L} style={{ "--d": "2.2s" } as CSSProperties} d="M182 96V0L214 58L246 0V96" />
        <circle cx="266" cy="6" r="5" fill="rgb(var(--c-ember))" className="fade-in" style={{ "--d": "2.9s" } as CSSProperties} />
      </g>
    </svg>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState<"idle" | "ok" | "fail">("idle");
  const onCopy = async () => {
    const ok = await copyText(profile.email);
    setCopied(ok ? "ok" : "fail");
    setTimeout(() => setCopied("idle"), 2400);
  };
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-36">
      <div className="wrap">
        <Reveal><p className="eyebrow mb-5 flex items-center gap-3"><span aria-hidden className="h-px w-8 bg-signal" />09 / Contact</p></Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-[clamp(2.4rem,6.4vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.035em] text-balance max-w-5xl">
            Let's turn the next opportunity into <span className="text-signal">something meaningful.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6" delay={140}>
            <p className="max-w-xl text-lg leading-relaxed text-mute">I'm open to opportunities in customer support leadership, product support, technical support, and customer operations. If you're hiring for a role where customer empathy, analytical thinking, and operational ownership matter, I'd love to connect.</p>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={200}>
            <ul className="divide-y divide-line border-y border-line">
              <li className="flex items-center gap-4 py-4"><MapPin aria-hidden size={18} className="text-signal" /><span>{profile.location}</span></li>
              <li className="flex items-center gap-4 py-4"><Mail aria-hidden size={18} className="text-signal" /><a className="link-line break-all" href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li className="flex items-center gap-4 py-4"><Phone aria-hidden size={18} className="text-signal" /><a className="link-line" href={`tel:${profile.phoneHref}`}>{profile.phone}</a></li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${profile.email}`} className="btn-primary"><Mail size={17} aria-hidden /> Email Me</a>
              <a href={`tel:${profile.phoneHref}`} className="btn-ghost"><Phone size={17} aria-hidden /> Call</a>
              <button type="button" onClick={onCopy} className="btn-ghost">
                {copied === "ok" ? <Check size={17} aria-hidden /> : <Copy size={17} aria-hidden />}
                {copied === "ok" ? "Copied" : "Copy email"}
              </button>
              {profile.linkedinUrl && (
                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Linkedin size={17} aria-hidden /> LinkedIn</a>
              )}
              <ResumeButton />
            </div>
            <p className="mt-3 min-h-5 text-sm text-mute" role="status" aria-live="polite">
              {copied === "ok" && "Email address copied to clipboard."}
              {copied === "fail" && `Copy unavailable — email me at ${profile.email}`}
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-20 max-w-4xl"><ResolveMonogram /></div>
      </div>
    </section>
  );
}
