import Image from "next/image";
import ServicesHeroVisual from "@/components/services/ServicesHeroVisual";
import type { consultingPage } from "@/lib/content";

type Hero = (typeof consultingPage)["hero"];

export default function ServicesPageHero({ hero }: { hero: Hero }) {
  return (
    <section className="relative border-b border-[var(--border)] bg-charcoal">
      <div className="relative aspect-[16/11] w-full sm:aspect-[21/9] lg:aspect-[24/8]">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/25"
          aria-hidden
        />

        <div className="absolute inset-0 flex items-center">
          <div className="container-content w-full py-8 sm:py-10 lg:py-12">
            <h1 className="max-w-2xl text-3xl font-display font-bold text-white sm:text-4xl lg:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">{hero.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Greenfield", "Brownfield", "Modernisation"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] glass-nav">
        <div className="container-content py-6">
          <ServicesHeroVisual />
        </div>
      </div>
    </section>
  );
}
