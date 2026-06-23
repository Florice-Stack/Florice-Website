import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { homePillarVisuals, SectionIcon } from "@/components/home/sectionVisuals";
import Reveal from "@/components/ui/Reveal";
import type { homePillars } from "@/lib/content";

type Pillar = (typeof homePillars)[number];

export default function HomeBusinessPillars({ pillars }: { pillars: readonly Pillar[] }) {
  return (
    <section className="section-surface border-b border-[var(--border)] py-12 sm:py-14">
      <div className="container-content">
        <Reveal className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="eyebrow">What we do</p>
          <h2 className="text-2xl font-display sm:text-3xl">Three scopes, one partner</h2>
          <p className="mt-3 text-sm text-charcoal-muted sm:text-base">
            Consulting and project delivery, auxiliary machinery supply, and wear-part sourcing — aligned end to end
          </p>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          {pillars.map((pillar, index) => {
            const visual = homePillarVisuals[pillar.id] ?? homePillarVisuals.services;

            return (
              <Reveal key={pillar.id} delay={index * 70} className="h-full">
                <article className="flex h-full flex-col glass-panel rounded-xl p-5 sm:p-6">
                  <SectionIcon visual={visual} />
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-olive">{pillar.eyebrow}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-charcoal">{pillar.title}</h3>
                  <ul className="mt-4 flex-1 space-y-2">
                    {pillar.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-charcoal-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-olive/50" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pillar.href}
                    className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-olive hover:gap-2.5"
                  >
                    {pillar.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
