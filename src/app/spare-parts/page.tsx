import type { Metadata } from "next";
import MachineryProductsGrid from "@/components/spare-parts/MachineryProductsGrid";
import SparePartsCatalog from "@/components/spare-parts/SparePartsCatalog";
import SparePartsCategoryNav from "@/components/spare-parts/SparePartsCategoryNav";
import SparePartsPrinciplesGrid from "@/components/spare-parts/SparePartsPrinciplesGrid";
import SparePartsProcessFlow from "@/components/spare-parts/SparePartsProcessFlow";
import Reveal from "@/components/ui/Reveal";
import {
  machineryIntro,
  machineryProducts,
  sparePartsCategories,
  sparePartsIntro,
  sparePartsPrinciples,
  sparePartsProcess,
} from "@/lib/content";
import { sectionBandClass } from "@/lib/cn";

const CATALOG_BAND_OFFSET = 4;

export const metadata: Metadata = {
  title: "Machinery & Spare Parts",
  description:
    "Complete milling and processing machinery — flour mills, rice mills, pulse and besan plants — plus spare parts for whiteners, polishers, sifters, belts, and mill consumables.",
};

export default function SparePartsPage() {
  return (
    <>
      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(0)}`}>
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Machinery & spare parts</p>
            <h1 className="max-w-5xl text-4xl sm:text-5xl lg:max-w-none">{sparePartsIntro.title}</h1>
          </Reveal>

          <Reveal delay={40}>
            <div className="mt-5 grid gap-4 lg:mt-6 lg:grid-cols-2 lg:gap-10">
              <p className="text-base leading-relaxed text-charcoal-muted sm:text-lg">{sparePartsIntro.description}</p>
              <p className="text-base leading-relaxed text-charcoal-muted sm:text-lg">{sparePartsIntro.note}</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <SparePartsCategoryNav categories={sparePartsCategories} className="mt-8 border-t border-[var(--border)] pt-8" />
          </Reveal>
        </div>
      </section>

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(1)}`}>
        <div className="container-content">
          <Reveal>
            <p className="eyebrow text-center">Our approach</p>
            <h2 className="section-heading text-center">Right equipment, quality parts, practical lead times</h2>
          </Reveal>
          <Reveal delay={60}>
            <SparePartsPrinciplesGrid items={sparePartsPrinciples} />
          </Reveal>
        </div>
      </section>

      <section
        id="machinery-lines"
        className={`scroll-mt-24 border-b border-[var(--border)] section-pad ${sectionBandClass(2)}`}
      >
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">{machineryIntro.eyebrow}</p>
            <h2 className="text-3xl font-display sm:text-4xl">{machineryIntro.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted sm:text-lg">
              {machineryIntro.description}
            </p>
          </Reveal>
          <Reveal delay={60} className="mt-10">
            <MachineryProductsGrid products={machineryProducts} />
          </Reveal>
        </div>
      </section>

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(3)}`}>
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Spare parts catalogue</p>
            <h2 className="text-2xl font-display sm:text-3xl">Wear parts and consumables by machine type</h2>
            <p className="mt-3 max-w-3xl text-sm text-charcoal-muted sm:text-base">
              Browse common categories below — or send photos and part numbers for items not listed.
            </p>
          </Reveal>
        </div>
      </section>

      <SparePartsCatalog categories={sparePartsCategories} bandOffset={CATALOG_BAND_OFFSET} />

      <section className={`section-pad ${sectionBandClass(CATALOG_BAND_OFFSET + sparePartsCategories.length + 1)}`}>
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">How ordering works</p>
            <h2 className="text-3xl font-display">From specification to dispatch</h2>
          </Reveal>
          <Reveal delay={60} className="mt-10">
            <SparePartsProcessFlow steps={sparePartsProcess} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
