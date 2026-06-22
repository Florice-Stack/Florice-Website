import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, Package } from "lucide-react";
import SparePartsQueryForm from "@/components/spare-parts/SparePartsQueryForm";
import { site, sparePartsQuoteChecklist, sparePartsQuoteIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Machinery & Spare Parts Quote",
  description:
    "Request a quote for milling machinery or spare parts — complete flour and rice mill lines, pulse and besan plants, whitener screens, belts, sifter frames, and more.",
};

export default function SparePartsQuotePage() {
  return (
    <section className="section-pad">
      <div className="container-content grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Machinery & Spare Parts Enquiry</p>
          <h1 className="text-4xl sm:text-5xl">{sparePartsQuoteIntro.title}</h1>
          <p className="mt-4 text-charcoal-muted">{sparePartsQuoteIntro.description}</p>
          <p className="mt-3 text-sm text-charcoal-muted">{sparePartsQuoteIntro.responseNote}</p>

          <div className="mt-8 card-surface border border-olive/20 bg-ivory-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-olive">Include in your enquiry</p>
            <ul className="mt-4 space-y-2 text-sm text-charcoal-muted">
              {sparePartsQuoteChecklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-olive" aria-hidden>
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-8 space-y-4">
            <li className="flex gap-3 text-sm">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-olive" aria-hidden />
              <a href={`mailto:${site.email}`} className="font-medium text-olive hover:text-olive-dark">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3 text-sm text-charcoal-muted">
              <Package className="mt-0.5 h-5 w-5 shrink-0 text-olive" aria-hidden />
              Browse the{" "}
              <Link href="/spare-parts" className="font-medium text-olive hover:text-olive-dark">
                machinery & spare parts catalogue
              </Link>{" "}
              for common lines and categories
            </li>
            <li className="flex gap-3 text-sm text-charcoal-muted">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-olive" aria-hidden />
              Quote response within one business day
            </li>
          </ul>

          <p className="mt-6 text-sm text-charcoal-muted">
            Need consulting instead of equipment?{" "}
            <Link href="/contact" className="font-semibold text-olive hover:text-olive-dark">
              Request a consultation
            </Link>
            .
          </p>
        </div>

        <SparePartsQueryForm />
      </div>
    </section>
  );
}
