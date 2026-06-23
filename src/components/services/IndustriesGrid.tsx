import { CircleDot, Cpu, Droplets, Filter, Package, Wheat, type LucideIcon } from "lucide-react";
import type { industries } from "@/lib/content";

type Industry = (typeof industries)[number];

const industryVisuals: Record<string, { icon: LucideIcon; tone: string; bg: string }> = {
  "Rice Milling": { icon: CircleDot, tone: "#7a5c1e", bg: "#f5efe3" },
  "Wheat Flour Milling": { icon: Wheat, tone: "#4a5568", bg: "#eef1f4" },
  "Grain Cleaning & Grading": { icon: Filter, tone: "#3d5c4a", bg: "#edf3f0" },
  "Pulses & Lentils": { icon: Droplets, tone: "#2f6f6d", bg: "#e6f6f4" },
  "Packaging Lines": { icon: Package, tone: "#5d4e67", bg: "#f3ebf4" },
  "Modernization Projects": { icon: Cpu, tone: "#3b5bdb", bg: "#e8f0fe" },
};

export default function IndustriesGrid({ items }: { items: readonly Industry[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((industry) => {
        const visual = industryVisuals[industry.title] ?? {
          icon: CircleDot,
          tone: "#5d4e67",
          bg: "#f3ebf4",
        };
        const Icon = visual.icon;

        return (
          <article
            key={industry.title}
            className="group flex gap-4 glass-panel rounded-md p-5 shadow-card motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lift"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl motion-safe:transition-transform motion-safe:duration-200 group-hover:scale-105"
              style={{ backgroundColor: visual.bg, color: visual.tone }}
            >
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate">{industry.label}</span>
              <h3 className="mt-1 font-semibold">{industry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{industry.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
