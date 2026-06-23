import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MachineryProduct } from "@/lib/content";

const productAccents: Record<string, { barFrom: string; barTo: string }> = {
  "belt-conveyor": { barFrom: "#d4bc8a", barTo: "#f5efe3" },
  "screw-conveyor": { barFrom: "#c5cdd8", barTo: "#eef1f4" },
  "bucket-elevator": { barFrom: "#b8d4c4", barTo: "#edf3f0" },
  "pneumatic-line": { barFrom: "#c5d7fa", barTo: "#e8f0fe" },
  spouting: { barFrom: "#8a7a94", barTo: "#f0ebf4" },
  ducting: { barFrom: "#f0d9b8", barTo: "#fef3e8" },
  magnets: { barFrom: "#5d4e67", barTo: "#f3ebf4" },
  tanks: { barFrom: "#f5c2d4", barTo: "#fce8ef" },
};

type MachineryProductsGridProps = {
  products: readonly MachineryProduct[];
  notListedNote: string;
  notListedCta: string;
};

export default function MachineryProductsGrid({ products, notListedNote, notListedCta }: MachineryProductsGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => {
        const accent = productAccents[product.id] ?? productAccents["belt-conveyor"];

        return (
          <article
            key={product.id}
            id={product.anchor}
            className="group scroll-mt-24 overflow-hidden rounded-md border border-[var(--border)] bg-white shadow-card motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lift"
          >
            <div
              className="h-1.5"
              style={{ background: `linear-gradient(to right, ${accent.barFrom}, ${accent.barTo})` }}
              aria-hidden
            />
            <figure className="interactive-media overflow-hidden border-b border-[var(--border)] bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
            </figure>
            <div className="flex h-full flex-col p-5">
              <h3 className="text-lg font-semibold leading-snug text-charcoal">{product.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{product.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[var(--border)] bg-ivory-muted/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-charcoal-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <Link
                href="/spare-parts/quote"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-olive motion-safe:transition-all motion-safe:duration-200 group-hover:gap-2.5"
              >
                Request quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        );
      })}

      <div className="flex h-full flex-col items-center justify-center px-2 py-6 text-center sm:px-4">
        <p className="max-w-sm text-sm leading-relaxed text-charcoal-muted sm:text-base">{notListedNote}</p>
        <Link href="/spare-parts/quote" className="btn btn-primary mt-5">
          {notListedCta}
        </Link>
      </div>
    </div>
  );
}
