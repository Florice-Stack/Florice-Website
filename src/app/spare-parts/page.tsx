import type { Metadata } from "next";
import Link from "next/link";
import SparePartsCatalog from "@/components/spare-parts/SparePartsCatalog";
import Reveal from "@/components/ui/Reveal";
import {
  sparePartsCategories,
  sparePartsConsumables,
  sparePartsIntro,
  sparePartsOrderChecklist,
  sparePartsPrinciples,
  sparePartsProcess,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Spare Parts",
  description:
    "Rice mill and flour mill spare parts — whitener screens, polisher cams, destoner decks, sifter frames, belts, and consumables coordinated by Florice.",
};

export default function SparePartsPage() {
  return (
    <>
      <section className="section-surface border-b border-[var(--border)] section-pad">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Parts catalogue</p>
            <h1 className="max-w-4xl text-4xl sm:text-5xl">{sparePartsIntro.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-charcoal-muted">{sparePartsIntro.description}</p>
            <p className="mt-3 max-w-3xl text-sm text-charcoal-muted">{sparePartsIntro.note}</p>
          </Reveal>

          <Reveal delay={80}>
            <nav
              className="mt-8 flex flex-wrap gap-2"
              aria-label="Jump to spare parts categories"
            >
              {sparePartsCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.anchor}`}
                  className="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold text-charcoal-muted motion-safe:transition-colors hover:border-olive hover:text-olive"
                >
                  {category.index} {category.eyebrow}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--border)] section-pad">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow text-center">Our approach</p>
            <h2 className="section-heading text-center">Quality parts, clear pricing, practical lead times</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {sparePartsPrinciples.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="card-surface h-full text-center">
                  <h3 className="font-display text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm text-charcoal-muted">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SparePartsCatalog categories={sparePartsCategories} />

      <section className="border-b border-[var(--border)] section-pad">
        <div className="container-content grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{sparePartsConsumables.title}</p>
            <p className="text-charcoal-muted">{sparePartsConsumables.description}</p>
            <ul className="mt-6 space-y-2">
              {sparePartsConsumables.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-charcoal">
                  <span className="text-olive" aria-hidden>
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="card-surface border border-olive/20 bg-ivory-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-olive">What to send with your enquiry</p>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-muted">
                {sparePartsOrderChecklist.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-olive" aria-hidden>
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-surface section-pad">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">How ordering works</p>
            <h2 className="text-3xl font-display">From part identification to dispatch</h2>
          </Reveal>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sparePartsProcess.map((step, index) => (
              <Reveal key={step.step} delay={index * 50}>
                <li className="card-surface h-full">
                  <span className="text-xs font-semibold uppercase tracking-wide text-olive">Step {step.step}</span>
                  <h3 className="mt-2 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-muted">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200}>
            <div className="mt-12 flex flex-col gap-6 rounded-md border border-[var(--border)] bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <h2 className="font-display text-xl font-bold text-olive sm:text-2xl">Need parts during a breakdown?</h2>
                <p className="mt-2 text-sm text-charcoal-muted">
                  Mark your enquiry as urgent and include photos. We prioritize screens, belts, rubber rolls, and
                  aspiration items that block production.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Request spare parts
                </Link>
                <Link href="/services" className="btn btn-outline">
                  View consulting services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
