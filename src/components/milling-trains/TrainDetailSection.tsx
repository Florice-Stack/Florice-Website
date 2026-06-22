import type { ReactNode } from "react";
import type { MillingTrainDetail } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

type TrainDetailSectionProps = {
  train: MillingTrainDetail;
  diagram: ReactNode;
  delay?: number;
};

export default function TrainDetailSection({ train, diagram, delay = 0 }: TrainDetailSectionProps) {
  return (
    <section id={train.anchor} className="scroll-mt-24 border-b border-[var(--border)] section-pad last:border-b-0">
      <div className="container-content">
        <Reveal delay={delay}>
          <p className="eyebrow">{train.eyebrow}</p>
          <h2 className="max-w-3xl text-3xl font-display sm:text-4xl">{train.title}</h2>
          <p className="mt-4 max-w-3xl text-charcoal-muted">{train.overview}</p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md border border-[var(--border)] bg-white p-4">
              <dt className="text-[10px] font-bold uppercase tracking-wide text-olive">Typical plants</dt>
              <dd className="mt-2 text-sm text-charcoal-muted">{train.typicalPlants}</dd>
            </div>
            <div className="rounded-md border border-[var(--border)] bg-white p-4">
              <dt className="text-[10px] font-bold uppercase tracking-wide text-olive">Key metrics</dt>
              <dd className="mt-2 text-sm text-charcoal-muted">{train.keyMetrics.join(" · ")}</dd>
            </div>
            <div className="rounded-md border border-[var(--border)] bg-white p-4 sm:col-span-2 lg:col-span-1">
              <dt className="text-[10px] font-bold uppercase tracking-wide text-olive">Between stages</dt>
              <dd className="mt-2 text-sm text-charcoal-muted">{train.infrastructure}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={delay + 60} className="mt-10">
          {diagram}
        </Reveal>

        <div className="mt-12 space-y-4">
          {train.steps.map((step, index) => (
            <Reveal key={step.id} delay={delay + 80 + index * 40}>
              <article className="card-surface grid gap-4 lg:grid-cols-[minmax(140px,180px)_1fr] lg:gap-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-olive">
                    Stage {index + 1}
                  </span>
                  <h3 className="mt-1 text-xl font-display">{step.title}</h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-charcoal-muted">{step.description}</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-charcoal">Typical equipment</p>
                      <ul className="mt-2 space-y-1 text-sm text-charcoal-muted">
                        {step.equipment.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-olive" aria-hidden>
                              ·
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-md border border-[var(--border)] bg-ivory-muted/50 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-olive">Where we consult</p>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{step.consultingFocus}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
