"use client";

import { useState } from "react";
import { ArrowRight, Building2, Calculator, Workflow, type LucideIcon } from "lucide-react";
import ServiceDetailModal from "@/components/services/ServiceDetailModal";
import { consultingScopePillars } from "@/lib/content";

type Pillar = (typeof consultingScopePillars)[number];

const pillarVisuals: Record<string, { icon: LucideIcon; tone: string; bg: string }> = {
  "greenfield-brownfield": { icon: Building2, tone: "#7a5c1e", bg: "#f5efe3" },
  "design-commissioning": { icon: Workflow, tone: "#4a5568", bg: "#eef1f4" },
  "cost-controlled": { icon: Calculator, tone: "#3d5c4a", bg: "#edf3f0" },
};

export default function ServicesHeroVisual() {
  const [activePillar, setActivePillar] = useState<Pillar | null>(null);

  return (
    <>
      <div className="overflow-hidden rounded-md glass-panel">
        <div className="grid divide-y divide-[var(--border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {consultingScopePillars.map((pillar) => {
            const visual = pillarVisuals[pillar.id] ?? pillarVisuals["greenfield-brownfield"];
            const Icon = visual.icon;

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillar(pillar)}
                className="flex w-full touch-manipulation flex-col items-start px-4 py-4 text-left sm:items-center sm:px-5 sm:py-5 sm:text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
              >
                <div className="flex items-center gap-3 sm:flex-col">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: visual.bg, color: visual.tone }}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 sm:mt-1">
                    <p className="text-sm font-semibold leading-snug">{pillar.label}</p>
                    <p className="text-xs text-charcoal-muted">{pillar.detail}</p>
                  </div>
                </div>
                <span className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-olive motion-safe:transition-all motion-safe:duration-200 hover:gap-2 sm:mx-auto">
                  See more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <ServiceDetailModal
        open={activePillar !== null}
        title={activePillar?.label ?? ""}
        subtitle={activePillar?.detail}
        overview={activePillar?.details.overview ?? ""}
        highlights={activePillar?.details.highlights ?? []}
        onClose={() => setActivePillar(null)}
        ctaLabel="Discuss project scope"
      />
    </>
  );
}
