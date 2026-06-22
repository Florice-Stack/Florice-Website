import type { Metadata } from "next";
import Link from "next/link";
import { industries, processSteps, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Plant assessments, machinery selection, process optimization, expansion planning, commissioning, and troubleshooting for rice and flour mills.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-surface border-b border-[var(--border)] section-pad">
        <div className="container-content max-w-3xl">
          <p className="eyebrow">Consulting Services</p>
          <h1 className="text-4xl sm:text-5xl">Technical support for operating mills</h1>
          <p className="mt-4 text-lg text-charcoal-muted">
            Every engagement starts with your production data and ends with parameters your operators can hold shift after
            shift.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-display">What we deliver</h2>
            <Link href="/contact" className="text-sm font-semibold text-olive hover:text-olive-dark">
              Request scope review →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="card-surface flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wide text-copper">{service.tag}</span>
                <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm text-charcoal-muted">{service.description}</p>
                <ul className="mt-4 space-y-1 border-t border-[var(--border)] pt-4 text-sm text-charcoal">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="text-olive">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface section-pad">
        <div className="container-content">
          <p className="eyebrow">Industries Served</p>
          <h2 className="text-3xl font-display">Where our consultants work most often</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.title} className="card-surface">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate">{industry.label}</span>
                <h3 className="mt-2 font-semibold">{industry.title}</h3>
                <p className="mt-2 text-sm text-charcoal-muted">{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content">
          <p className="eyebrow">How We Work</p>
          <h2 className="text-3xl font-display">Five stages from plant walk-through to stable shift production</h2>
          <ol className="mt-10 grid gap-4 lg:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.step} className="card-surface">
                <span className="text-xs font-semibold uppercase tracking-wide text-olive">Step {step.step}</span>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-charcoal-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
