import { Activity, Factory, GitBranch } from "lucide-react";
import type { MillingTrainDetail } from "@/lib/content";

type TrainMetricsStripProps = {
  train: MillingTrainDetail;
  accent: string;
};

export default function TrainMetricsStrip({ train, accent }: TrainMetricsStripProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="flex gap-3 rounded-md border border-[var(--border)] bg-white p-4 shadow-sm">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accent}14`, color: accent }}
        >
          <Factory className="h-4 w-4" aria-hidden />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-olive">Typical plants</p>
          <p className="mt-1 text-sm leading-snug text-charcoal-muted">{train.typicalPlants}</p>
        </div>
      </div>

      <div className="flex gap-3 rounded-md border border-[var(--border)] bg-white p-4 shadow-sm">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accent}14`, color: accent }}
        >
          <Activity className="h-4 w-4" aria-hidden />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-olive">Key metrics</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {train.keyMetrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-[var(--border)] bg-ivory-muted/60 px-2 py-0.5 text-[11px] font-medium text-charcoal"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-3 rounded-md border border-[var(--border)] bg-white p-4 shadow-sm sm:col-span-2 lg:col-span-1">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accent}14`, color: accent }}
        >
          <GitBranch className="h-4 w-4" aria-hidden />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-olive">Between stages</p>
          <p className="mt-1 text-sm leading-snug text-charcoal-muted">{train.infrastructure}</p>
        </div>
      </div>
    </div>
  );
}
