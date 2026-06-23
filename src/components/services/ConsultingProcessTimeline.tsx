import {
  BarChart3,
  ListChecks,
  Search,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { processSteps } from "@/lib/content";

type Step = (typeof processSteps)[number];

const stepVisuals: Record<string, { icon: LucideIcon; tone: string }> = {
  Diagnose: { icon: Search, tone: "#5d4e67" },
  Evaluate: { icon: BarChart3, tone: "#4a5568" },
  Recommend: { icon: ListChecks, tone: "#7a5c1e" },
  Implement: { icon: Wrench, tone: "#3d5c4a" },
  Stabilize: { icon: ShieldCheck, tone: "#3b5bdb" },
};

const compactSummaries: Record<string, string> = {
  Diagnose: "Walk-through, shift logs, and operator interviews.",
  Evaluate: "Benchmark yield and energy vs comparable mills.",
  Recommend: "Prioritized actions with cost and recovery gain.",
  Implement: "Install oversight, settings, and training.",
  Stabilize: "Monitor cycles and lock parameters into SOPs.",
};

export default function ConsultingProcessTimeline({ steps }: { steps: readonly Step[] }) {
  return (
    <div className="overflow-hidden rounded-md glass-panel">
      <div className="border-b border-[var(--border)] px-4 py-3 sm:px-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-olive">Engagement flow</p>
        <p className="mt-0.5 text-xs text-charcoal-muted">
          Five linked stages from first walk-through to stable production
        </p>
      </div>

      <div className="relative px-3 py-4 sm:px-5 sm:py-5">
        <div
          className="pointer-events-none absolute left-[12%] right-[12%] top-[2.15rem] hidden h-px bg-olive/20 lg:block"
          aria-hidden
        />

        <div className="grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-1.5 lg:gap-y-0" role="list">
          {steps.map((step) => {
            const visual = stepVisuals[step.title] ?? stepVisuals.Diagnose;
            const Icon = visual.icon;
            const summary = compactSummaries[step.title] ?? step.description;

            return (
              <div key={step.step} className="flex flex-col items-center px-1 text-center" role="listitem">
                <div
                  className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-xl border-2 glass-panel-strong"
                  style={{ borderColor: visual.tone }}
                >
                  <div
                    className="absolute inset-0.5 rounded-lg opacity-20"
                    style={{ backgroundColor: visual.tone }}
                    aria-hidden
                  />
                  <Icon className="relative h-4 w-4" style={{ color: visual.tone }} aria-hidden />
                  <span
                    className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-olive text-[8px] font-bold text-white"
                    aria-hidden
                  >
                    {step.step.replace(/^0/, "")}
                  </span>
                </div>
                <h3 className="mt-2 text-xs font-semibold leading-tight">{step.title}</h3>
                <p className="mt-1 text-[10px] leading-snug text-charcoal-muted">{summary}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
