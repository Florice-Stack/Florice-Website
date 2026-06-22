import { Compass, Cog } from "lucide-react";
import type { MillingTrainDetail } from "@/lib/content";
import { getTrainStageVisual } from "@/lib/millingTrainVisuals";

type TrainStageTimelineProps = {
  train: MillingTrainDetail;
  accent: string;
};

export default function TrainStageTimeline({ train, accent }: TrainStageTimelineProps) {
  return (
    <ol className="relative space-y-5">
      {train.steps.map((step, index) => {
        const visual = getTrainStageVisual(train.id, step.id);
        const tone = visual?.tone ?? accent;
        const isLast = index === train.steps.length - 1;

        return (
          <li key={step.id} id={`${train.anchor}-${step.id}`} className="relative scroll-mt-28">
            {!isLast ? (
              <div
                className="absolute left-[1.35rem] top-12 hidden h-[calc(100%+0.25rem)] w-px bg-gradient-to-b from-olive/25 to-olive/10 sm:block"
                aria-hidden
              />
            ) : null}

            <article className="grid gap-4 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-5">
              <div className="flex sm:flex-col sm:items-center">
                <div
                  className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 bg-white shadow-sm"
                  style={{ borderColor: tone }}
                >
                  <div
                    className="absolute inset-0.5 rounded-lg opacity-20"
                    style={{ backgroundColor: tone }}
                    aria-hidden
                  />
                  <div className="relative scale-[0.62] text-charcoal" style={{ color: accent }}>
                    {visual?.icon}
                  </div>
                  <span
                    className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold text-white"
                    style={{ backgroundColor: accent }}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-md border border-[var(--border)] bg-white shadow-card">
                <div className="h-1" style={{ backgroundColor: tone }} aria-hidden />

                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-display sm:text-xl">{step.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{step.description}</p>

                  <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                    <div>
                      <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-charcoal">
                        <Cog className="h-3.5 w-3.5 text-olive" aria-hidden />
                        Typical equipment
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {step.equipment.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[var(--border)] bg-ivory-muted/50 px-2.5 py-1 text-[11px] text-charcoal-muted"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className="rounded-md border p-3"
                      style={{ borderColor: `${accent}33`, backgroundColor: `${accent}08` }}
                    >
                      <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-olive">
                        <Compass className="h-3.5 w-3.5" aria-hidden />
                        Where we consult
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{step.consultingFocus}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
