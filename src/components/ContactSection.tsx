import { useState, type CSSProperties } from "react";
import { Mail, Phone, Copy, Check, Linkedin, MapPin, ArrowUpRight, Download } from "lucide-react";
import { profile } from "../content";
import { useInView } from "../hooks";
import { Reveal } from "./ui";
import { useResumeAvailable } from "../hooks";

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
    <svg ref={ref} viewBox="0 0 810 220" className={`${go ? "go" : ""} h-auto w-full max-w-xs`} role="img" aria-label="Signal lines settling into the ASM monogram">
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
  const resume = useResumeAvailable();
  const track = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Abdullah A S M")}`;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent("Opportunity for Abdullah A S M")}`;

  const onCopy = async () => {
    const ok = await copyText(profile.email);
    setCopied(ok ? "ok" : "fail");
    setTimeout(() => setCopied("idle"), 2400);
  };

  // Try the device's mail app first; if nothing takes focus away from the page, open Gmail compose instead.
  const onEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    let left = false;
    const mark = () => { left = true; };
    window.addEventListener("blur", mark, { once: true });
    document.addEventListener("visibilitychange", mark, { once: true });
    window.location.href = mailto;
    setTimeout(() => {
      window.removeEventListener("blur", mark);
      if (!left) window.open(gmail, "_blank", "noopener,noreferrer");
    }, 900);
  };

  const Arrow = <ArrowUpRight aria-hidden size={20} className="arrow text-ember" />;
  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="wrap">
        <div className="panel-warm force-dark spot px-6 py-10 sm:px-10 md:px-12 md:py-12" onMouseMove={track}>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <Reveal><p className="eyebrow mb-4 flex items-center gap-3"><span aria-hidden className="h-px w-8 bg-ember" />09 / Contact</p></Reveal>
              <Reveal delay={80}>
                <h2 className="font-display text-[clamp(2rem,4.3vw,3.7rem)] font-medium leading-[1] tracking-[-0.03em] text-balance">
                  Let's turn the next opportunity into <span className="gradient-warm">something meaningful.</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-xl leading-relaxed text-mute">I'm open to opportunities in customer support leadership, product support, technical support, and customer operations. If you're hiring for a role where customer empathy, analytical thinking, and operational ownership matter, I'd love to connect.</p>
                <p className="mt-5 flex items-center gap-2 text-sm text-mute"><MapPin aria-hidden size={16} className="text-ember" /> {profile.location}</p>
              </Reveal>
              <div className="mt-6 hidden lg:block"><ResolveMonogram /></div>
            </div>

            <Reveal className="lg:col-span-6" delay={200}>
              <div className="grid gap-3 sm:grid-cols-2">
                <a href={mailto} onClick={onEmail} className="tile spot" onMouseMove={track}>
                  <span className="flex items-start justify-between"><Mail aria-hidden size={22} className="text-ember" />{Arrow}</span>
                  <span><span className="eyebrow block">Email</span><span className="mt-1 block break-words font-display text-[1.02rem] leading-tight">{profile.email}</span></span>
                </a>
                <a href={`tel:${profile.phoneHref}`} className="tile spot" onMouseMove={track}>
                  <span className="flex items-start justify-between"><Phone aria-hidden size={22} className="text-ember" />{Arrow}</span>
                  <span><span className="eyebrow block">Call</span><span className="mt-1 block font-display text-lg leading-tight">{profile.phone}</span></span>
                </a>
                {profile.linkedinUrl && (
                  <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="tile spot" onMouseMove={track}>
                    <span className="flex items-start justify-between"><Linkedin aria-hidden size={22} className="text-ember" />{Arrow}</span>
                    <span><span className="eyebrow block">LinkedIn</span><span className="mt-1 block font-display text-lg leading-tight">Abdullah A S M</span></span>
                  </a>
                )}
                {resume ? (
                  <a href={profile.resumePath} download={profile.resumeFileName} className="tile spot" onMouseMove={track}>
                    <span className="flex items-start justify-between"><Download aria-hidden size={22} className="text-ember" />{Arrow}</span>
                    <span><span className="eyebrow block">Resume</span><span className="mt-1 block font-display text-lg leading-tight">Download PDF</span></span>
                  </a>
                ) : (
                  <div role="note" className="tile border-dashed opacity-70"><Download aria-hidden size={22} className="text-mute" /><span><span className="eyebrow block">Resume</span><span className="mt-1 block font-display text-lg">Upload pending</span></span></div>
                )}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-mute">
                <button type="button" onClick={onCopy} className="inline-flex min-h-[40px] items-center gap-2 border border-line px-4 text-ivory transition hover:border-ember hover:text-ember">
                  {copied === "ok" ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
                  {copied === "ok" ? "Copied" : "Copy email"}
                </button>
                <span role="status" aria-live="polite">
                  {copied === "ok" && "Copied to clipboard."}
                  {copied === "fail" && `Copy unavailable — ${profile.email}`}
                  {copied === "idle" && <>No mail app opens? <a className="link-line text-ivory" href={gmail} target="_blank" rel="noopener noreferrer">Compose in Gmail</a></>}
                </span>
              </div>
            </Reveal>
          </div>
          <div className="mt-8 lg:hidden"><ResolveMonogram /></div>
        </div>
      </div>
    </section>
  );
}
