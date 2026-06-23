import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import type { homeClosingCta } from "@/lib/content";

type ClosingContent = typeof homeClosingCta;

export default function HomeClosingCta({ content }: { content: ClosingContent }) {
  return (
    <section className="section-pad">
      <div className="container-content">
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          <Reveal>
            <article className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-white p-6 shadow-card sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-olive">Consulting</p>
              <h2 className="mt-2 text-xl font-display sm:text-2xl">{content.consulting.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-muted sm:text-base">
                {content.consulting.description}
              </p>
              <Link href={content.consulting.cta.href} className="btn btn-primary mt-6 w-fit">
                {content.consulting.cta.label}
              </Link>
            </article>
          </Reveal>

          <Reveal delay={70}>
            <article className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-olive">Machinery & Spare Parts</p>
              <h2 className="mt-2 text-xl font-display sm:text-2xl">{content.supply.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-muted sm:text-base">
                {content.supply.description}
              </p>
              <Link href={content.supply.cta.href} className="btn btn-outline mt-6 w-fit">
                {content.supply.cta.label}
              </Link>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
