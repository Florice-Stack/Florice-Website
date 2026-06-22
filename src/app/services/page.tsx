import type { Metadata } from "next";
import Link from "next/link";
import ConsultingProcessTimeline from "@/components/services/ConsultingProcessTimeline";
import IndustriesGrid from "@/components/services/IndustriesGrid";
import ServiceCardsGrid from "@/components/services/ServiceCardsGrid";
import ServicesHeroVisual from "@/components/services/ServicesHeroVisual";
import Reveal from "@/components/ui/Reveal";
import { industries, outcomes, processSteps, services } from "@/lib/content";
import { sectionBandClass } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Plant assessments, machinery selection, process optimization, expansion planning, commissioning, and troubleshooting for rice and flour mills.",
};

export default function ServicesPage() {
  return (
    <>
      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(0)}`}>
        <div className="container-content">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:gap-12">
            <Reveal>
              <p className="eyebrow">Consulting Services</p>
              <h1 className="text-4xl sm:text-5xl">Technical support for operating mills</h1>
              <p className="mt-4 text-lg text-charcoal-muted">
                Every engagement starts with your production data and ends with parameters your operators can hold shift
                after shift.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <ServicesHeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(1)}`}>
        <div className="container-content">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">What we deliver</p>
                <h2 className="text-2xl font-display sm:text-3xl">Six consulting services for operating plants</h2>
              </div>
              <Link href="/contact" className="text-sm font-semibold text-olive hover:text-olive-dark">
                Request scope review →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <ServiceCardsGrid items={services} />
          </Reveal>
        </div>
      </section>

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(2)}`}>
        <div className="container-content">
          <Reveal>
            <p className="eyebrow text-center">Measured outcomes</p>
            <h2 className="section-heading text-center">What mill owners report after engagement</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome, index) => (
              <Reveal key={outcome.title} delay={index * 50}>
                <div className="rounded-md border border-[var(--border)] bg-white p-5 text-center shadow-card">
                  <span className="font-display text-3xl font-bold text-olive">{outcome.value}</span>
                  <h3 className="mt-2 font-semibold">{outcome.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{outcome.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(3)}`}>
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Industries Served</p>
            <h2 className="text-3xl font-display">Where our consultants work most often</h2>
          </Reveal>
          <Reveal delay={60} className="mt-8">
            <IndustriesGrid items={industries} />
          </Reveal>
        </div>
      </section>

      <section className={`section-pad ${sectionBandClass(4)}`}>
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">How We Work</p>
            <h2 className="text-3xl font-display">Five stages from plant walk-through to stable shift production</h2>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <ConsultingProcessTimeline steps={processSteps} />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Book a consultation
              </Link>
              <Link href="/work" className="btn btn-outline">
                View project examples
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
