import type { Metadata } from "next";
import Link from "next/link";
import { outcomes, projects, machineryGroups } from "@/lib/content";
import ProjectCaseCard, { ProjectSummaryStrip } from "@/components/work/ProjectCaseCard";
import MachineryGrid from "@/components/work/MachineryGrid";

export const metadata: Metadata = {
  title: "Projects & Machinery",
  description:
    "Selected rice, flour, and parboiling engagements with measured outcomes, plus machinery categories we specify and troubleshoot.",
};

export default function WorkPage() {
  return (
    <>
      <section className="section-surface border-b border-[var(--border)] section-pad">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="eyebrow">Selected Engagements</p>
            <h1 className="text-4xl sm:text-5xl">Recent work on rice, wheat, and parboiling lines</h1>
            <p className="mt-4 text-lg text-charcoal-muted">
              Real plant challenges with scope, intervention, and measured results — not generic marketing claims.
            </p>
          </div>
          <div className="mt-10">
            <ProjectSummaryStrip projectCount={projects.length} />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content space-y-8">
          {projects.map((project) => (
            <ProjectCaseCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section-surface section-pad border-y border-[var(--border)]">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Measured Outcomes</p>
            <h2 className="section-heading">What mill owners report after engagement</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-md border border-[var(--border)] bg-white p-5 shadow-card"
              >
                <span className="font-display text-3xl font-bold text-olive">{outcome.value}</span>
                <h3 className="mt-2 font-semibold">{outcome.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="machinery" className="section-pad">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="eyebrow">Machinery Expertise</p>
            <h2 className="text-3xl font-display sm:text-4xl">
              Equipment categories we specify, commission, and troubleshoot
            </h2>
            <p className="mt-3 text-charcoal-muted">
              We work across OEM and retrofit installations — evaluating fit for your grain, climate, and maintenance
              capability, not brand preference.
            </p>
          </div>
          <div className="mt-10">
            <MachineryGrid groups={machineryGroups} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Discuss your plant
            </Link>
            <Link href="/milling-trains" className="btn btn-outline">
              Explore milling trains
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
