import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutCredentials, brochurePoints, faqItems, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "About, FAQ & Brochure",
  description:
    "About Florice Milling consulting, capabilities brochure download, and FAQ for mill owners planning upgrades.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-surface border-b border-[var(--border)] section-pad">
        <div className="container-content grid items-center gap-10 lg:grid-cols-2">
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
          <figure className="overflow-hidden rounded-sm border border-[var(--border)] bg-ivory-card shadow-lift">
            <Image
              src="/about/plant-consultant.png"
              alt="Consultant assessing milling plant equipment on site with laptop and clipboard"
              width={1024}
              height={1024}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCredentials.map((cred) => (
            <div key={cred.label} className="card-surface text-center">
              <strong className="block font-display text-3xl text-olive">{cred.value}</strong>
              <span className="mt-2 block text-sm text-charcoal-muted">{cred.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-surface section-pad">
        <div className="container-content grid gap-10 lg:grid-cols-2">
          <div className="card-surface flex flex-col justify-center border border-olive/20 bg-ivory-card">
            <span className="text-xs font-semibold uppercase tracking-wide text-olive">Capabilities Overview</span>
            <p className="mt-4 font-display text-3xl text-charcoal">Florice Milling Spare & Solution</p>
            <p className="mt-2 text-sm text-charcoal-muted">Rice · Wheat · Grain Processing Consulting</p>
          </div>
          <div>
            <p className="eyebrow">Capabilities Brochure</p>
            <h2 className="text-3xl font-display">Download our consulting capabilities overview</h2>
            <p className="mt-3 text-charcoal-muted">
              A concise reference for mill owners, project managers, and operations teams.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {brochurePoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-olive">·</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/florice-capabilities-brochure.pdf" className="btn btn-primary" download>
                Download PDF Brochure
              </a>
              <span className="text-xs text-charcoal-muted">Updated June 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content">
          <p className="eyebrow">How We Work</p>
          <h2 className="text-3xl font-display">Our five-stage consulting process</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
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

      <section id="faq" className="section-surface section-pad">
        <div className="container-content max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="text-3xl font-display">Questions mill owners ask when planning upgrades</h2>
          <div className="mt-8 space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item card-surface group">
                <summary className="cursor-pointer list-none font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span className="text-olive group-open:rotate-45 transition">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-charcoal-muted">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-charcoal-muted">
            Still have questions about your upgrade?{" "}
            <Link href="/contact" className="font-semibold text-olive hover:text-olive-dark">
              Request a consultation
            </Link>{" "}
            — we respond within one business day.
          </p>
        </div>
      </section>
    </>
  );
}
