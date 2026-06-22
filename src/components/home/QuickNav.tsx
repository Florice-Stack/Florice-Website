import { ArrowRight, Cog, Factory, Gauge, Package } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const areas = [
  {
    icon: Factory,
    title: "Services",
    href: "/services",
    description: "Assessments, machinery specs, optimization, commissioning",
  },
  {
    icon: Package,
    title: "Machinery & Spare Parts",
    href: "/spare-parts",
    description: "Complete milling lines, spare parts, and mill consumables",
  },
  {
    icon: Gauge,
    title: "Milling Trains",
    href: "/milling-trains",
    description: "Rice and flour process flows explained stage by stage",
  },
  {
    icon: Cog,
    title: "About & FAQ",
    href: "/about",
    description: "How we work, capabilities brochure, upgrade planning answers",
  },
];

export default function QuickNav() {
  return (
    <section className="section-pad border-t border-[var(--border)]">
      <div className="container-content">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow">Start here</p>
          <h2 className="section-heading">Find what you need in one click</h2>
          <p className="mt-3 text-charcoal-muted">
            Instead of scrolling one long page, jump straight to the section that matches your plant challenge.
          </p>
        </Reveal>
        <div className="mx-auto grid w-full max-w-2xl gap-3 sm:grid-cols-2 sm:items-stretch">
          {areas.map(({ icon: Icon, title, href, description }, index) => (
            <Reveal key={href} delay={index * 70} className="h-full">
              <Link
                href={href}
                className="group flex h-full items-start gap-3 rounded-md border border-[var(--border)] bg-ivory-card p-4 shadow-card motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:border-olive/30 motion-safe:hover:shadow-lift"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-olive/10 text-olive motion-safe:transition-transform motion-safe:duration-200 group-hover:scale-110">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5 text-base font-semibold leading-snug text-charcoal">
                    {title}
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 motion-safe:transition-all motion-safe:duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:opacity-100 opacity-60"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-charcoal-muted">{description}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
