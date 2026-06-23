import type { Metadata } from "next";
import Link from "next/link";
import RiceMillFlowDiagram from "@/components/diagrams/RiceMillFlowDiagram";
import FlourMillFlowDiagram from "@/components/diagrams/FlourMillFlowDiagram";
import ConsultantHeroVideo from "@/components/home/ConsultantHeroVideo";
import TrainDetailSection from "@/components/milling-trains/TrainDetailSection";
import Reveal from "@/components/ui/Reveal";
import { sectionBandClass } from "@/lib/cn";
import { flourMillingTrain, millingTrainsIntro, riceMillingTrain } from "@/lib/content";

export const metadata: Metadata = {
  title: "Milling Trains",
  description:
    "Detailed rice and wheat flour milling process trains — stage-by-stage equipment, metrics, and consulting focus from intake to bagging.",
};

export default function MillingTrainsPage() {
  return (
    <>
      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(0)}`}>
        <div className="container-content">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div className="max-w-xl text-left">
                <p className="eyebrow">Process overview</p>
                <h1 className="text-4xl sm:text-5xl">{millingTrainsIntro.title}</h1>
                <p className="mt-4 text-lg text-charcoal-muted">{millingTrainsIntro.description}</p>
              </div>
            </Reveal>
            <Reveal delay={80} className="min-w-0">
              <div className="interactive-media glass-panel overflow-hidden rounded-xl motion-safe:transition-all motion-safe:duration-200">
                <ConsultantHeroVideo />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TrainDetailSection
        train={riceMillingTrain}
        diagram={<RiceMillFlowDiagram variant="embedded" />}
        delay={0}
        sectionClassName={sectionBandClass(1)}
      />

      <TrainDetailSection
        train={flourMillingTrain}
        diagram={<FlourMillFlowDiagram variant="embedded" />}
        delay={0}
        sectionClassName={sectionBandClass(2)}
      />

      <section className={`section-pad ${sectionBandClass(3)}`}>
        <Reveal>
          <div className="container-content flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold text-olive sm:text-3xl">
                Need a walk-through of your plant&apos;s train?
              </h2>
              <p className="mt-3 text-charcoal-muted">
                Share capacity, grain type, and the stage costing you recovery or downtime — we&apos;ll map your layout
                and propose a scoped visit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Request assessment
              </Link>
              <Link href="/services" className="btn btn-outline">
                View services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
