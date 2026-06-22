import type { Metadata } from "next";
import Link from "next/link";
import RiceMillFlowDiagram from "@/components/diagrams/RiceMillFlowDiagram";
import FlourMillFlowDiagram from "@/components/diagrams/FlourMillFlowDiagram";
import TrainDetailSection from "@/components/milling-trains/TrainDetailSection";
import Reveal from "@/components/ui/Reveal";
import { flourMillingTrain, millingTrainsIntro, riceMillingTrain } from "@/lib/content";

export const metadata: Metadata = {
  title: "Milling Trains",
  description:
    "Detailed rice and wheat flour milling process trains — stage-by-stage equipment, metrics, and consulting focus from intake to bagging.",
};

export default function MillingTrainsPage() {
  return (
    <>
      <section className="section-surface border-b border-[var(--border)] section-pad">
        <div className="container-content max-w-3xl">
          <Reveal>
            <p className="eyebrow">Process overview</p>
            <h1 className="text-4xl sm:text-5xl">{millingTrainsIntro.title}</h1>
            <p className="mt-4 text-lg text-charcoal-muted">{millingTrainsIntro.description}</p>
            <p className="mt-3 text-sm text-charcoal-muted">{millingTrainsIntro.note}</p>
          </Reveal>

          <Reveal delay={80}>
            <nav
              className="mt-8 flex flex-wrap gap-2"
              aria-label="Jump to milling train sections"
            >
              <a
                href="#rice-train"
                className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-semibold text-charcoal-muted motion-safe:transition-colors hover:border-olive hover:text-olive"
              >
                Rice milling train
              </a>
              <a
                href="#flour-train"
                className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-semibold text-charcoal-muted motion-safe:transition-colors hover:border-olive hover:text-olive"
              >
                Flour milling train
              </a>
            </nav>
          </Reveal>
        </div>
      </section>

      <TrainDetailSection
        train={riceMillingTrain}
        diagram={<RiceMillFlowDiagram variant="hero" />}
        delay={0}
      />

      <TrainDetailSection
        train={flourMillingTrain}
        diagram={<FlourMillFlowDiagram variant="hero" />}
        delay={0}
      />

      <section className="section-surface section-pad">
        <Reveal>
          <div className="container-content flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold text-olive sm:text-3xl">
                Need a walk-through of your plant&apos;s train?
              </h2>
              <p className="mt-3 text-charcoal-muted">
                Share your capacity, grain type, and which stage is causing recovery loss or downtime. We map your
                actual layout against the train and propose a scoped assessment or troubleshooting visit.
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
