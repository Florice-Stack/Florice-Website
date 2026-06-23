import {
  ClipboardList,
  Cog,
  Gauge,
  LayoutGrid,
  PlayCircle,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { services } from "@/lib/content";

type Service = (typeof services)[number];

const serviceVisuals: Record<
  string,
  { icon: LucideIcon; accent: string; barFrom: string; barTo: string }
> = {
  "Plant Assessment": {
    icon: ClipboardList,
    accent: "#5d4e67",
    barFrom: "#8a7a94",
    barTo: "#f0ebf4",
  },
  "Machinery Selection": {
    icon: Cog,
    accent: "#4a5568",
    barFrom: "#c5cdd8",
    barTo: "#eef1f4",
  },
  "Process Optimization": {
    icon: Gauge,
    accent: "#7a5c1e",
    barFrom: "#d4bc8a",
    barTo: "#f5efe3",
  },
  "Expansion Planning": {
    icon: LayoutGrid,
    accent: "#3b5bdb",
    barFrom: "#c5d7fa",
    barTo: "#e8f0fe",
  },
  "Commissioning Support": {
    icon: PlayCircle,
    accent: "#3d5c4a",
    barFrom: "#b8d4c4",
    barTo: "#edf3f0",
  },
  "Technical Troubleshooting": {
    icon: Wrench,
    accent: "#9b4d6a",
    barFrom: "#f5c2d4",
    barTo: "#fce8ef",
  },
};

export default function ServiceCardsGrid({ items }: { items: readonly Service[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((service) => {
        const visual = serviceVisuals[service.title] ?? serviceVisuals["Plant Assessment"];
        const Icon = visual.icon;

        return (
          <article
            key={service.title}
            className="group overflow-hidden rounded-md glass-panel motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lift"
          >
            <div
              className="h-1.5"
              style={{ background: `linear-gradient(to right, ${visual.barFrom}, ${visual.barTo})` }}
              aria-hidden
            />
            <div className="p-6">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 glass-panel-strong motion-safe:transition-transform motion-safe:duration-200 group-hover:scale-105"
                  style={{ borderColor: visual.barFrom, color: visual.accent }}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-copper">{service.tag}</span>
                  <h3 className="mt-1 text-lg font-semibold">{service.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">{service.description}</p>
              <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4 text-sm text-charcoal">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
