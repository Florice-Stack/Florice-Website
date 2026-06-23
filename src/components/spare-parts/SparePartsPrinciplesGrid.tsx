import { Clock3, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import type { sparePartsPrinciples } from "@/lib/content";

type Principle = (typeof sparePartsPrinciples)[number];

const principleVisuals: Record<string, { icon: LucideIcon; tone: string; bg: string }> = {
  "Right part, first time": { icon: ShieldCheck, tone: "#5d4e67", bg: "#f0ebf4" },
  "Competitive sourcing": { icon: Scale, tone: "#4a5568", bg: "#eef1f4" },
  "Fastest practical delivery": { icon: Clock3, tone: "#7a5c1e", bg: "#f5efe3" },
};

export default function SparePartsPrinciplesGrid({ items }: { items: readonly Principle[] }) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {items.map((item) => {
        const visual = principleVisuals[item.title] ?? principleVisuals["Right part, first time"];
        const Icon = visual.icon;

        return (
          <article
            key={item.title}
            className="overflow-hidden glass-panel rounded-md text-center"
          >
            <div className="h-1" style={{ backgroundColor: visual.tone }} aria-hidden />
            <div className="px-5 py-5">
              <span
                className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: visual.bg, color: visual.tone }}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg">{item.title}</h3>
              <p className="mt-3 text-sm text-charcoal-muted">{item.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
