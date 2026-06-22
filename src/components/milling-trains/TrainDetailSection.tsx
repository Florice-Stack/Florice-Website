import type { ReactNode } from "react";
import type { MillingTrainDetail } from "@/lib/content";
import { trainAccentColors } from "@/lib/millingTrainVisuals";
import TrainMetricsStrip from "@/components/milling-trains/TrainMetricsStrip";
import TrainStageTimeline from "@/components/milling-trains/TrainStageTimeline";
import Reveal from "@/components/ui/Reveal";

type TrainDetailSectionProps = {
  train: MillingTrainDetail;
  diagram: ReactNode;
  delay?: number;
  sectionClassName?: string;
};

export default function TrainDetailSection({
  train,
  diagram,
  delay = 0,
  sectionClassName = "",
}: TrainDetailSectionProps) {
  const accent = trainAccentColors[train.id] ?? "#5d4e67";

  return (
    <section
      id={train.anchor}
      className={`scroll-mt-24 border-b border-[var(--border)] section-pad last:border-b-0 ${sectionClassName}`}
    >
      <div className="container-content space-y-8">
        <Reveal delay={delay}>
          <div className="max-w-3xl">
            <p className="eyebrow">{train.eyebrow}</p>
            <h2 className="text-3xl font-display sm:text-4xl">{train.title}</h2>
            <p className="mt-4 text-charcoal-muted">{train.overview}</p>
          </div>
        </Reveal>

        <Reveal delay={delay + 40}>{diagram}</Reveal>

        <Reveal delay={delay + 60}>
          <TrainMetricsStrip train={train} accent={accent} />
        </Reveal>

        <Reveal delay={delay + 80}>
          <TrainStageTimeline train={train} accent={accent} />
        </Reveal>
      </div>
    </section>
  );
}
