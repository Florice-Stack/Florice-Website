import { heroScope } from "@/lib/content";
import ConsultantHeroVideo from "@/components/home/ConsultantHeroVideo";
import HeroContent from "@/components/home/HeroContent";
import { heroScopeVisuals, SectionIcon } from "@/components/home/sectionVisuals";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section>
      <div className="relative overflow-hidden border-b border-[var(--border)] bg-white">
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-olive/[0.04] blur-3xl"
          aria-hidden
        />

        <div className="container-content relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,440px)] lg:gap-10 xl:gap-16">
            <HeroContent />

            <Reveal delay={120} className="min-w-0">
              <div className="interactive-media overflow-hidden rounded-xl border border-[var(--border)] bg-white motion-safe:transition-all motion-safe:duration-200">
                <ConsultantHeroVideo />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="section-surface border-t border-[var(--border)]">
        <div className="container-content grid gap-0 divide-y divide-[var(--border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {heroScope.map((item, index) => {
            const visual = heroScopeVisuals[item.title] ?? heroScopeVisuals["Project support"];

            return (
              <Reveal key={item.title} delay={index * 60} className="px-0 py-6 sm:px-6">
                <div className="interactive-scope h-full rounded-lg px-2 py-1 motion-safe:transition-colors motion-safe:duration-200">
                  <SectionIcon visual={visual} size="sm" />
                  <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-olive">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-muted">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
