import Link from "next/link";
import { ClipboardList, Factory, Package } from "lucide-react";
import { sparePartsClosingCta } from "@/lib/content";

export default function SparePartsClosingCta() {
  return (
    <div className="rounded-md border border-[var(--border)] bg-white p-6 shadow-card sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
      <div className="max-w-2xl">
        <div className="mb-4 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-ivory-muted/60 px-3 py-1.5 text-[11px] font-semibold text-charcoal">
            <Factory className="h-3.5 w-3.5 text-olive" aria-hidden />
            Complete plant lines
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-ivory-muted/60 px-3 py-1.5 text-[11px] font-semibold text-charcoal">
            <Package className="h-3.5 w-3.5 text-olive" aria-hidden />
            Parts sourcing
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-ivory-muted/60 px-3 py-1.5 text-[11px] font-semibold text-charcoal">
            <ClipboardList className="h-3.5 w-3.5 text-olive" aria-hidden />
            Fit confirmed before dispatch
          </span>
        </div>
        <p className="eyebrow">{sparePartsClosingCta.eyebrow}</p>
        <h2 className="text-2xl font-display sm:text-3xl">{sparePartsClosingCta.title}</h2>
        {sparePartsClosingCta.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-3 text-sm text-charcoal-muted sm:text-base">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
        <Link href="/spare-parts/quote" className="btn btn-primary">
          {sparePartsClosingCta.sparePartsButton}
        </Link>
        <Link href="/services" className="btn btn-outline">
          {sparePartsClosingCta.consultingButton}
        </Link>
      </div>
    </div>
  );
}
