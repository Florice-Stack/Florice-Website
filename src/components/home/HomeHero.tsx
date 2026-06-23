import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import type { homeHero, homeTrustLine } from "@/lib/content";

type HeroContent = typeof homeHero;
type TrustItem = (typeof homeTrustLine)[number];

export default function HomeHero({
  content,
  trustLine,
}: {
  content: HeroContent;
  trustLine: readonly TrustItem[];
}) {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="container-content py-10 sm:py-12 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:gap-12">
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow mb-2">{content.eyebrow}</p>
              <h1 className="max-w-2xl text-[1.75rem] leading-[1.12] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]">
                {content.title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-muted sm:text-lg">
                {content.description}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={content.primaryCta.href} className="btn btn-primary">
                  {content.primaryCta.label}
                </Link>
                <Link href={content.secondaryCta.href} className="btn btn-outline">
                  {content.secondaryCta.label}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-[var(--border)] pt-6 sm:grid-cols-4 lg:gap-x-6">
                {trustLine.map((item) => (
                  <li key={item.label} className="min-w-0">
                    <strong className="block font-display text-xl font-bold leading-none text-olive sm:text-2xl">
                      {item.value}
                    </strong>
                    <span className="mt-1.5 block text-xs leading-snug text-charcoal-muted sm:text-sm">{item.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <figure className="interactive-media glass-panel overflow-hidden rounded-xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 440px"
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
