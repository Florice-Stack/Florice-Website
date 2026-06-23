import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { homeSectorVisuals, SectionIcon } from "@/components/home/sectionVisuals";
import Reveal from "@/components/ui/Reveal";
import type { homeSectors } from "@/lib/content";

type Sector = (typeof homeSectors)[number];

export default function HomeSectorsBand({ sectors }: { sectors: readonly Sector[] }) {
  return (
    <section className="section-surface border-b border-[var(--border)] py-12 sm:py-14">
      <div className="container-content">
        <Reveal className="mb-8 max-w-2xl">
          <p className="eyebrow">Where we work</p>
          <h2 className="text-2xl font-display sm:text-3xl">Rice, flour, pulses & grain processing plants</h2>
        </Reveal>

        <div className="grid gap-0 divide-y divide-[var(--border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {sectors.map((sector, index) => {
            const visual = homeSectorVisuals[sector.title] ?? homeSectorVisuals["Rice milling"];

            return (
              <Reveal key={sector.title} delay={index * 50} className="px-0 py-5 sm:px-5 sm:py-6 lg:px-6">
                <SectionIcon visual={visual} size="sm" />
                <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-olive">{sector.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{sector.description}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-8">
          <Link
            href="/milling-trains"
            className="group inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm font-semibold text-charcoal shadow-card hover:border-olive/30 hover:text-olive"
          >
            Explore rice & flour milling trains stage by stage
            <ArrowRight className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
