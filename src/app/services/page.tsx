import type { Metadata } from "next";
import ConsultingSectorsGrid from "@/components/services/ConsultingSectorsGrid";
import PostCommissioningGrid from "@/components/services/PostCommissioningGrid";
import ProjectManagementPhases from "@/components/services/ProjectManagementPhases";
import ServicesPageHero from "@/components/services/ServicesPageHero";
import WhyFloricePanel from "@/components/services/WhyFloricePanel";
import Reveal from "@/components/ui/Reveal";
import {
  consultingPage,
  consultingSectors,
  consultingValueProps,
  postCommissioningServices,
  projectManagementPhases,
} from "@/lib/content";
import { sectionBandClass } from "@/lib/cn";
import { Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Projects",
  description:
    "End-to-end technical consulting and project management for greenfield and brownfield agro-industrial projects — rice, flour, pulses, and grain processing plants.",
};

export default function ServicesPage() {
  const { totalPlantCostCallout } = consultingPage;

  return (
    <>
      <ServicesPageHero hero={consultingPage.hero} />

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(1)}`}>
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Core Sectors</p>
            <h2 className="text-3xl font-display">Plants We Engineer & Manage</h2>
          </Reveal>
          <Reveal delay={60} className="mt-8">
            <ConsultingSectorsGrid items={consultingSectors} />
          </Reveal>
        </div>
      </section>

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(2)}`}>
        <div className="container-content">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Project Management</p>
                <h2 className="text-3xl font-display">Six Phases to Startup</h2>
              </div>
              <div className="flex items-center gap-3 rounded-md border border-olive/25 bg-olive/5 px-4 py-3">
                <Calculator className="h-5 w-5 shrink-0 text-olive" aria-hidden />
                <p className="text-xs font-semibold text-olive sm:text-sm">{totalPlantCostCallout}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80} className="mt-8">
            <ProjectManagementPhases phases={projectManagementPhases} />
          </Reveal>
        </div>
      </section>

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(3)}`}>
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">After Commissioning</p>
            <h2 className="text-3xl font-display">Operational Support</h2>
          </Reveal>
          <Reveal delay={60} className="mt-8">
            <PostCommissioningGrid items={postCommissioningServices} />
          </Reveal>
        </div>
      </section>

      <section className={`section-pad ${sectionBandClass(4)}`}>
        <div className="container-content">
          <Reveal>
            <WhyFloricePanel items={consultingValueProps} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
