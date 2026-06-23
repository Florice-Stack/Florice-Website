import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutCapabilitiesSection from "@/components/about/AboutCapabilitiesSection";
import { AboutFaqAccordion } from "@/components/about/AboutBrochurePanel";
import AboutCredentialsGrid from "@/components/about/AboutCredentialsGrid";
import AboutOutcomesStrip from "@/components/about/AboutOutcomesStrip";
import ConsultingProcessTimeline from "@/components/services/ConsultingProcessTimeline";
import Reveal from "@/components/ui/Reveal";
import { aboutCredentials, capabilityGroups, faqItems, outcomes, processSteps } from "@/lib/content";
import { sectionBandClass } from "@/lib/cn";

export const metadata: Metadata = {
  title: "About, FAQ & Brochure",
  description:
    "About Florice Milling consulting, capabilities brochure download, and FAQ for mill owners planning upgrades.",
};

export default function AboutPage() {
  return (
    <>
      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(0)}`}>
        <div className="container-content grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow">About Florice</p>
              <h1 className="text-4xl sm:text-5xl">Engineers who have commissioned mills — not just quoted them</h1>
              <p className="mt-4 text-charcoal-muted">
                Florice Milling Spare & Solution grew out of field work in rice and flour plants across South Asia, West
                Africa, and the Middle East. We advise on mill diagram design, pneumatic conveying, spouting and ducting,
                packing lines, and consumable spare parts coordination.
              </p>
              <p className="mt-4 text-charcoal-muted">
                We do not sell equipment. We specify it, supervise installation, tune the process, and coordinate
                fabricated structures when your plant needs them.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <figure className="interactive-media overflow-hidden rounded-xl border border-[var(--border)] bg-white motion-safe:transition-all motion-safe:duration-200">
              <Image
                src="/about/plant-consultant.png"
                alt="Professional Indian milling consultant assessing plant equipment on site"
                width={1024}
                height={1024}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section id="outcomes" className={`border-b border-[var(--border)] section-pad ${sectionBandClass(1)}`}>
        <div className="container-content">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Measured Outcomes</p>
              <h2 className="text-3xl font-display sm:text-4xl">Results from recent plant engagements</h2>
              <p className="mt-3 text-sm text-charcoal-muted sm:text-base">
                Typical ranges from recovery audits, pneumatic retrofits, and stabilization work — not marketing averages
              </p>
            </div>
          </Reveal>
          <Reveal delay={60} className="mt-10">
            <AboutOutcomesStrip items={outcomes} />
          </Reveal>
        </div>
      </section>

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(2)}`}>
        <div className="container-content">
          <Reveal>
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <p className="eyebrow">Our track record</p>
              <h2 className="text-3xl font-display sm:text-4xl">Experience across markets and project types</h2>
            </div>
            <AboutCredentialsGrid items={aboutCredentials} />
          </Reveal>
        </div>
      </section>

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(3)}`}>
        <div className="container-content">
          <Reveal>
            <AboutCapabilitiesSection groups={capabilityGroups} />
          </Reveal>
        </div>
      </section>

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(4)}`}>
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">How We Work</p>
            <h2 className="text-3xl font-display">Our five-stage consulting process</h2>
          </Reveal>
          <Reveal delay={60} className="mt-8">
            <ConsultingProcessTimeline steps={processSteps} />
          </Reveal>
        </div>
      </section>

      <section id="faq" className={`section-pad ${sectionBandClass(5)}`}>
        <div className="container-content max-w-3xl">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="text-3xl font-display">Questions about consulting, auxiliary machinery & spare parts</h2>
          </Reveal>
          <Reveal delay={60} className="mt-8">
            <AboutFaqAccordion items={faqItems} />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 text-sm text-charcoal-muted">
              Still have questions?{" "}
              <Link href="/contact" className="font-semibold text-olive hover:text-olive-dark">
                Request a consultation
              </Link>{" "}
              — we respond within one business day.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
