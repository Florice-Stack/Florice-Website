import { missionItems } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function MissionStrip() {
  return (
    <section className="section-surface border-y border-[var(--border)] py-12">
      <div className="container-content grid gap-8 md:grid-cols-3">
        {missionItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <div className="interactive-scope rounded-xl border border-transparent px-4 py-5 text-center motion-safe:transition-all motion-safe:duration-200 md:text-left">
              <h3 className="font-display text-xl font-bold text-olive">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
