import Link from "next/link";
import { sparePartsClosingCta } from "@/lib/content";

export default function SparePartsClosingCta() {
  return (
    <div className="glass-panel rounded-md p-6 shadow-card sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
      <div className="max-w-2xl">
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
