import Image from "next/image";
import Link from "next/link";
import type { SparePartCategory } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

type SparePartsCatalogProps = {
  categories: SparePartCategory[];
};

export default function SparePartsCatalog({ categories }: SparePartsCatalogProps) {
  return (
    <div className="space-y-0">
      {categories.map((category, index) => (
        <section
          key={category.id}
          id={category.anchor}
          className={`scroll-mt-24 border-b border-[var(--border)] section-pad ${
            index % 2 === 0 ? "bg-white" : "section-surface"
          }`}
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

                <div className="card-surface">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-olive">Parts we coordinate</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {category.parts.map((part) => (
                      <li key={part} className="flex gap-2 text-sm text-charcoal">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" aria-hidden />
                        {part}
                      </li>
                    ))}
                  </ul>

                  {category.images && category.images.length > 0 ? (
                    <div className="mt-6 grid gap-4 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
                      {category.images.map((image) => (
                        <figure
                          key={image.src}
                          className="overflow-hidden rounded-md border border-[var(--border)] bg-[#f3f3f3]"
                        >
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-contain p-3"
                              sizes="(max-width: 640px) 100vw, 280px"
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

      <section className="section-surface section-pad">
        <Reveal>
          <div className="container-content max-w-3xl text-center">
            <p className="eyebrow">Not listed?</p>
            <h2 className="text-2xl font-display sm:text-3xl">Send your part list — we source beyond this catalogue</h2>
            <p className="mt-3 text-charcoal-muted">
              Pneumatic manifolds, packing line parts, parboiling line consumables, and custom fabricated items are
              quoted on request.
            </p>
            <Link href="/contact" className="btn btn-primary mt-8">
              Request a spare parts quote
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
