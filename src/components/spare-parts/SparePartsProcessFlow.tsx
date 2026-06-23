import { CheckCircle2, PackageSearch, Truck, Wrench, type LucideIcon } from "lucide-react";
import type { sparePartsProcess } from "@/lib/content";

type ProcessStep = (typeof sparePartsProcess)[number];

const stepVisuals: Record<string, { icon: LucideIcon; tone: string }> = {
  Identify: { icon: PackageSearch, tone: "#5d4e67" },
  "Confirm fit": { icon: CheckCircle2, tone: "#4a5568" },
  "Quote & ship": { icon: Truck, tone: "#7a5c1e" },
  "Install support": { icon: Wrench, tone: "#3d5c4a" },
};

export default function SparePartsProcessFlow({ steps }: { steps: readonly ProcessStep[] }) {
  return (
    <div className="overflow-hidden rounded-md glass-panel">
      <div className="relative px-4 py-5 sm:px-6 sm:py-6">
        <div
          className="pointer-events-none absolute left-[12%] right-[12%] top-[2.15rem] hidden h-px bg-olive/20 lg:block"
          aria-hidden
        />

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-2 lg:gap-y-0">
          {steps.map((step) => {
            const visual = stepVisuals[step.title] ?? stepVisuals.Identify;
            const Icon = visual.icon;

            return (
              <li key={step.step} className="relative z-[1] flex flex-col items-center px-1 text-center">
                <div
                  className="relative flex h-11 w-11 items-center justify-center rounded-xl border-2 glass-panel-strong"
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
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold">{step.title}</h3>
                <p className="mt-1 text-[11px] leading-snug text-charcoal-muted">{step.description}</p>
              </li>
            );
          })}
        </ol>

        <div
          className="mx-auto mt-5 h-1 max-w-full rounded-full opacity-80"
          style={{
            background: `linear-gradient(to right, ${steps.map((step) => stepVisuals[step.title]?.tone ?? "#5d4e67").join(", ")})`,
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}
