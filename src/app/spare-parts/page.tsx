import type { Metadata } from "next";
import Link from "next/link";
import MachineryProductsGrid from "@/components/spare-parts/MachineryProductsGrid";
import SparePartsCatalog from "@/components/spare-parts/SparePartsCatalog";
import SparePartsOrderingSection from "@/components/spare-parts/SparePartsOrderingSection";
import Reveal from "@/components/ui/Reveal";
import {
  machineryIntro,
  machineryProducts,
  sparePartsCategories,
  sparePartsClosingCta,
  sparePartsIntro,
  sparePartsPrinciples,
  sparePartsProcess,
} from "@/lib/content";
import { sectionBandClass } from "@/lib/cn";

const CATALOG_BAND_OFFSET = 3;

export const metadata: Metadata = {
  title: "Machinery & Spare Parts",
  description:
    "Auxiliary machinery — belt and screw conveyors, bucket elevators, pneumatic lines, spouting, ducting, magnets, and tanks — plus a full spare parts catalogue for rice, flour, and grain mills",
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/spare-parts/quote" className="btn btn-primary">
                {sparePartsClosingCta.sparePartsButton}
              </Link>
              <Link href="#machinery-lines" className="btn btn-outline">
                View auxiliary machinery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="machinery-lines"
        className={`scroll-mt-24 border-b border-[var(--border)] section-pad ${sectionBandClass(1)}`}
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
            <MachineryProductsGrid
              products={machineryProducts}
              notListedNote={machineryIntro.notListedNote}
              notListedCta={machineryIntro.notListedCta}
            />
          </Reveal>
        </div>
      </section>

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(2)}`}>
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Spare parts catalogue</p>
            <h2 className="text-2xl font-display sm:text-3xl">Wear parts and consumables by machine type</h2>
            <p className="mt-3 max-w-3xl text-sm text-charcoal-muted sm:text-base">
              12 categories covering cleaning, milling, sifting, conveying, pneumatic, spouting, aspiration, and power
              transmission — send photos and part numbers for items not listed
            </p>
          </Reveal>
        </div>
      </section>

      <SparePartsCatalog categories={sparePartsCategories} bandOffset={CATALOG_BAND_OFFSET} />

      <section className={`section-pad ${sectionBandClass(CATALOG_BAND_OFFSET + sparePartsCategories.length + 1)}`}>
        <div className="container-content">
          <SparePartsOrderingSection principles={sparePartsPrinciples} steps={sparePartsProcess} />
        </div>
      </section>
    </>
  );
}
