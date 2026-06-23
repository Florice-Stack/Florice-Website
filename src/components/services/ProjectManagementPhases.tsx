"use client";

import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  ClipboardList,
  FileSpreadsheet,
  Hammer,
  HardHat,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import ServiceDetailModal from "@/components/services/ServiceDetailModal";
import type { projectManagementPhases } from "@/lib/content";

type Phase = (typeof projectManagementPhases)[number];

const phaseVisuals: Record<string, { icon: LucideIcon; tone: string; bg: string }> = {
  "01": { icon: FileSpreadsheet, tone: "#5d4e67", bg: "#f3ebf4" },
  "02": { icon: LayoutGrid, tone: "#4a5568", bg: "#eef1f4" },
  "03": { icon: ClipboardList, tone: "#7a5c1e", bg: "#f5efe3" },
  "04": { icon: HardHat, tone: "#3d5c4a", bg: "#edf3f0" },
  "05": { icon: Hammer, tone: "#3b5bdb", bg: "#e8f0fe" },
  "06": { icon: Calculator, tone: "#9b4d6a", bg: "#fce8ef" },
};

export default function ProjectManagementPhases({ phases }: { phases: readonly Phase[] }) {
  const [activePhase, setActivePhase] = useState<Phase | null>(null);

  return (
    <>
      <div className="space-y-6">
        <div className="hidden overflow-x-auto lg:block">
          <div className="flex min-w-0 items-center justify-between gap-1 glass-panel rounded-md px-4 py-5">
            {phases.map((phase, index) => {
              const visual = phaseVisuals[phase.step] ?? phaseVisuals["01"];
              const Icon = visual.icon;
              const isLast = index === phases.length - 1;

              return (
                <div key={phase.step} className="flex min-w-0 flex-1 items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActivePhase(phase)}
                    className="flex min-w-0 flex-col items-center rounded-lg px-1 py-1 text-center touch-manipulation motion-safe:transition-colors motion-safe:duration-200 hover:bg-ivory-muted/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
                  >
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: visual.bg, color: visual.tone }}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="mt-2 text-[10px] font-bold text-olive">{phase.step}</span>
                    <span className="mt-0.5 line-clamp-2 text-[11px] font-semibold leading-tight">{phase.title}</span>
                  </button>
                  {!isLast ? <div className="mx-1 h-px flex-1 bg-olive/20" aria-hidden /> : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase) => {
            const visual = phaseVisuals[phase.step] ?? phaseVisuals["01"];
            const Icon = visual.icon;

            return (
              <button
                key={phase.step}
                type="button"
                onClick={() => setActivePhase(phase)}
                className="group w-full touch-manipulation overflow-hidden glass-panel rounded-md text-left motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
              >
                <div className="h-1" style={{ backgroundColor: visual.tone }} aria-hidden />
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl motion-safe:transition-transform motion-safe:duration-200 group-hover:scale-105"
                      style={{ backgroundColor: visual.bg, color: visual.tone }}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-olive">
                        Phase {phase.step.replace(/^0/, "")}
                      </span>
                      <h3 className="mt-1 text-base font-semibold leading-snug">{phase.title}</h3>
                    </div>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {phase.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-charcoal-muted"
                        style={{ backgroundColor: `${visual.tone}10` }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-olive motion-safe:transition-all motion-safe:duration-200 group-hover:gap-2">
                    See more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <ServiceDetailModal
        open={activePhase !== null}
        title={activePhase?.title ?? ""}
        subtitle={activePhase ? `Phase ${activePhase.step.replace(/^0/, "")}` : undefined}
        overview={activePhase?.details.overview ?? ""}
        highlights={activePhase?.details.highlights ?? []}
        highlightsLabel="Deliverables"
        onClose={() => setActivePhase(null)}
        ctaLabel="Discuss this phase"
      />
    </>
  );
}
