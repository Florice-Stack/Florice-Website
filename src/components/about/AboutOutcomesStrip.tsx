import type { outcomes } from "@/lib/content";

type Outcome = (typeof outcomes)[number];

export default function AboutOutcomesStrip({ items }: { items: readonly Outcome[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:divide-x lg:divide-[var(--border)]">
      {items.map((outcome) => (
        <div key={outcome.title} className="px-0 text-center lg:px-6">
          <span className="font-display text-3xl font-bold text-olive sm:text-4xl">{outcome.value}</span>
          <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide text-charcoal">{outcome.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{outcome.description}</p>
        </div>
      ))}
    </div>
  );
}
