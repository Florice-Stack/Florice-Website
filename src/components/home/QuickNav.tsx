import { ArrowRight, Cog, Factory, Gauge, Package, Wrench } from "lucide-react";
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
    title: "Spare Parts",
    href: "/spare-parts",
    description: "Whitener screens, polisher cams, belts, sifter frames, and mill consumables",
  },
  {
    icon: Gauge,
    title: "Milling Trains",
    href: "/milling-trains",
    description: "Rice and flour process flows explained stage by stage",
  },
  {
    icon: Gauge,
    title: "Projects",
    href: "/work",
    description: "Rice, flour, and parboiling case studies with measured outcomes",
  },
  {
    icon: Wrench,
    title: "Machinery",
    href: "/work#machinery",
    description: "Equipment categories we specify, commission, and troubleshoot",
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
        <div className="grid gap-4 sm:grid-cols-2">
          {areas.map(({ icon: Icon, title, href, description }, index) => (
            <Reveal key={href} delay={index * 70}>
              <Link href={href} className="group card-interactive flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-olive/10 text-olive motion-safe:transition-transform motion-safe:duration-200 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="flex items-center gap-2 text-lg font-semibold text-charcoal">
                    {title}
                    <ArrowRight
                      className="h-4 w-4 motion-safe:transition-all motion-safe:duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:opacity-100 opacity-60"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-1 block text-sm text-charcoal-muted">{description}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
