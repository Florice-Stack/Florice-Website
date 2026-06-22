import { missionItems } from "@/lib/content";
import { missionVisuals, SectionIcon } from "@/components/home/sectionVisuals";
import Reveal from "@/components/ui/Reveal";

export default function MissionStrip() {
  return (
    <section className="section-surface border-y border-[var(--border)] py-12">
      <div className="container-content grid gap-5 md:grid-cols-3">
        {missionItems.map((item, index) => {
          const visual = missionVisuals[item.title] ?? missionVisuals["Build reliability"];

          return (
            <Reveal key={item.title} delay={index * 80}>
              <div className="interactive-scope overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-card motion-safe:transition-all motion-safe:duration-200">
                <div className="h-1" style={{ backgroundColor: visual.accent }} aria-hidden />
                <div className="px-5 py-5 md:text-left">
                  <SectionIcon visual={visual} />
                  <h3 className="mt-4 font-display text-xl font-bold text-olive">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
