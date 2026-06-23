import Image from "next/image";
import SparePartsClosingCta from "@/components/spare-parts/SparePartsClosingCta";
import { type SparePartCategory } from "@/lib/content";
import { sectionBandClass } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";

type SparePartsCatalogProps = {
  categories: SparePartCategory[];
  bandOffset?: number;
};

export default function SparePartsCatalog({ categories, bandOffset = 0 }: SparePartsCatalogProps) {
  return (
    <div className="space-y-0">
      {categories.map((category, index) => (
        <section
          key={category.id}
          id={category.anchor}
          className={`scroll-mt-24 border-b border-[var(--border)] section-pad ${sectionBandClass(bandOffset + index)}`}
        >
          <div className="container-content">
            <Reveal delay={index * 30}>
              <div className="grid gap-8 lg:grid-cols-[minmax(220px,280px)_1fr] lg:gap-12">
                <div>
                  <p className="font-display text-4xl font-bold leading-none text-olive/25">{category.index}</p>
                  <p className="eyebrow mt-3">{category.eyebrow}</p>
                  <h2 className="text-2xl sm:text-3xl">{category.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{category.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {category.machineTags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[var(--border)] bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-charcoal-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="card-surface">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-olive">Parts we supply</p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {category.parts.map((part) => (
                        <li key={part} className="flex gap-2 text-sm text-charcoal">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" aria-hidden />
                          {part}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {category.images && category.images.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {category.images.map((image) => (
                        <figure
                          key={image.src}
                          className="interactive-media overflow-hidden rounded-xl border border-[var(--border)] bg-white motion-safe:transition-all motion-safe:duration-200"
                        >
                          <div className="relative aspect-[4/3] bg-ivory-muted/30">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-contain p-4"
                              sizes="(max-width: 640px) 100vw, 400px"
                            />
                          </div>
                          <figcaption className="border-t border-[var(--border)] bg-white px-3 py-2.5 text-center text-[11px] leading-snug text-charcoal-muted">
                            {image.caption}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className={`border-b border-[var(--border)] section-pad ${sectionBandClass(bandOffset + categories.length)}`}>
        <Reveal>
          <div className="container-content">
            <SparePartsClosingCta />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
