"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const quickLinks = [
  { label: "Machinery & spare parts", href: "/spare-parts" },
  { label: "Milling trains", href: "/milling-trains" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/work" },
];

const stats = [
  { value: "120+", label: "Plant assessments" },
  { value: "20+ yrs", label: "Grain processing experience" },
  { value: "Independent", label: "Vendor-neutral consulting" },
];

export default function HeroContent() {
  return (
    <div className="min-w-0 lg:pr-2 xl:pr-4">
      <Reveal>
        <h1 className="text-[2rem] leading-[1.12] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
          Consulting for rice mills, flour mills, and grain processing plants.
        </h1>
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-charcoal-muted sm:text-[0.9375rem]">
          Florice Milling Spare & Solution supports mill owners with turnkey project guidance, pneumatic conveying
          review, machinery selection, process stabilization — from intake to bagging — and supplies genuine spare
          parts and maintenance solutions.
        </p>
      </Reveal>

      <Reveal delay={140}>
        <nav className="mt-6 flex flex-wrap gap-2" aria-label="Quick navigation">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-[var(--border)] bg-white px-3.5 py-1.5 text-xs font-semibold text-charcoal-muted transition-all duration-200 hover:border-olive hover:bg-olive/5 hover:text-olive"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Book a Consultation
          </Link>
          <Link href="/spare-parts/quote" className="btn btn-outline">
            Request Machinery or Parts
          </Link>
        </div>
      </Reveal>

      <Reveal delay={260}>
        <ul className="mt-10 grid max-w-full grid-cols-1 gap-5 border-t border-[var(--border)] pt-8 sm:grid-cols-3 sm:gap-4 lg:max-w-md xl:max-w-xl">
          {stats.map((stat, index) => (
            <li
              key={stat.label}
              className="interactive-stat min-w-0 motion-safe:transition-all motion-safe:duration-200"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <strong className="block font-display text-2xl font-bold leading-none text-olive">{stat.value}</strong>
              <span className="mt-2 block text-sm leading-snug text-charcoal-muted">{stat.label}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
