import { useEffect, useState } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { navLinks, profile } from "../content";
import { useActiveSection, useResumeAvailable } from "../hooks";

const ids = ["about", "experience", "expertise", "direction", "case-studies", "capabilities", "recognition", "education", "contact"];

export default function SiteNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const current = useActiveSection(ids);
  const active = navLinks.some((l) => l.id === current) ? current : current === "direction" ? "expertise" : current === "capabilities" || current === "recognition" ? "case-studies" : "";
  const resume = useResumeAvailable();
  const [light, setLight] = useState(() => document.documentElement.dataset.theme === "light");
  const toggleTheme = () => {
    const next = light ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    setLight(!light);
    try { localStorage.setItem("theme", next); } catch { /* ignore */ }
  };

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        scrolled || open ? "border-b border-line/70 bg-ink/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 font-display" aria-label="ASM Abdullah, back to top">
          <span className="text-lg font-semibold tracking-tight">ASM</span>
          <span className="font-display text-lg font-semibold uppercase tracking-tight">Abdullah</span>
          <span aria-hidden className="hidden text-line sm:inline">/</span>
          <span className="hidden font-mono text-[0.66rem] uppercase tracking-[0.18em] text-mute sm:inline">Team Lead</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`relative py-2 text-sm transition-colors duration-300 ${active === l.id ? "text-ivory" : "text-mute hover:text-ivory"}`}
              >
                {l.label}
                <span
                  aria-hidden
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-signal transition-transform duration-500 ease-out ${active === l.id ? "scale-x-100" : "scale-x-0"}`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {resume ? (
            <a href={profile.resumePath} download={profile.resumeFileName} className="hidden min-h-[40px] items-center gap-2 border border-signal px-4 text-sm text-signal transition hover:bg-signal hover:text-ink sm:inline-flex">
              <Download size={15} aria-hidden /> View Resume
            </a>
          ) : (
            <a href="#contact" className="hidden min-h-[40px] items-center border border-line px-4 text-sm text-ivory transition hover:border-signal hover:text-signal sm:inline-flex">
              Get in touch
            </a>
          )}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
            className="inline-flex h-11 w-11 items-center justify-center text-ivory transition hover:text-signal"
          >
            {light ? <Moon size={19} aria-hidden /> : <Sun size={19} aria-hidden />}
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden border-t border-line/70 bg-ink transition-[opacity,transform,visibility] duration-300 ease-out ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="wrap flex flex-col py-3">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`flex min-h-[52px] items-center justify-between border-b border-line/50 font-display text-xl ${active === l.id ? "text-signal" : "text-ivory"}`}
              >
                {l.label}
                <span aria-hidden className="font-mono text-xs text-mute">→</span>
              </a>
            </li>
          ))}
          {resume && (
            <li>
              <a href={profile.resumePath} download={profile.resumeFileName} className="mt-4 btn-primary w-full">
                <Download size={17} aria-hidden /> View Resume
              </a>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
