const items = ["Customer Operations", "Escalation Management", "SLA & KPI Monitoring", "CSAT & NPS", "Coaching & Performance", "Root Cause Analysis", "CRM Documentation", "Product Support Direction"];

export default function Marquee() {
  const row = items.concat(items);
  return (
    <div aria-hidden="true" className="marquee border-y border-line bg-ink2/60 py-4">
      <div className="marquee-track">
        {row.concat(row).map((t, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-display text-lg tracking-tight text-mute md:text-xl">
            {t}
            <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 0l1.6 5.4L14 7l-5.4 1.6L7 14l-1.6-5.4L0 7l5.4-1.6z" fill="rgb(var(--c-ember))" /></svg>
          </span>
        ))}
      </div>
    </div>
  );
}
