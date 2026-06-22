import { Factory, Gauge, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Gauge,
    label: "Recovery & yield",
    detail: "Head rice, flour extraction, broken %",
    tone: "#7a5c1e",
    bg: "#f5efe3",
  },
  {
    icon: Factory,
    label: "Equipment & layout",
    detail: "Capacity, capex, install clearance",
    tone: "#4a5568",
    bg: "#eef1f4",
  },
  {
    icon: TrendingUp,
    label: "Stable operations",
    detail: "Downtime, aspiration, shift parameters",
    tone: "#3d5c4a",
    bg: "#edf3f0",
  },
];

export default function ServicesHeroVisual() {
  return (
    <div
      className="overflow-hidden rounded-md border border-[var(--border)] bg-white shadow-card"
      role="img"
      aria-label="Consulting scope across recovery, equipment, and stable mill operations"
    >
      <div className="border-b border-[var(--border)] bg-ivory-muted/40 px-5 py-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-olive">Consulting scope</p>
        <p className="mt-1 text-sm text-charcoal-muted">Where Florice engagements typically focus</p>
      </div>

      <div className="grid divide-y divide-[var(--border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;

          return (
            <div key={pillar.label} className="flex flex-col items-center px-5 py-8 text-center">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white shadow-sm"
                style={{ backgroundColor: pillar.bg, color: pillar.tone }}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="mt-4 text-sm font-semibold">{pillar.label}</h2>
              <p className="mt-2 text-xs leading-relaxed text-charcoal-muted">{pillar.detail}</p>
            </div>
          );
        })}
      </div>

      <div className="border-t border-[var(--border)] px-5 py-3">
        <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-charcoal-muted">
          <span className="rounded-full bg-olive/10 px-2.5 py-1 text-olive">Rice</span>
          <span className="rounded-full bg-slate/10 px-2.5 py-1 text-slate">Wheat</span>
          <span className="rounded-full bg-[#edf3f0] px-2.5 py-1 text-[#3d5c4a]">Parboiling</span>
          <span className="rounded-full bg-[#f3ebf4] px-2.5 py-1 text-olive">Handling systems</span>
        </div>
      </div>
    </div>
  );
}
