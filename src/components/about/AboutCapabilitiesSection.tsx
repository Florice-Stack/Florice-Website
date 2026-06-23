"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronUp, ClipboardList, FileDown, Package, Truck, type LucideIcon } from "lucide-react";
import type { capabilityGroups } from "@/lib/content";

type CapabilityGroup = (typeof capabilityGroups)[number];

const groupVisuals: Record<string, { icon: LucideIcon; tone: string }> = {
  services: { icon: ClipboardList, tone: "#5d4e67" },
  machinery: { icon: Truck, tone: "#7a5c1e" },
  "spare-parts": { icon: Package, tone: "#3d5c4a" },
};

export default function AboutCapabilitiesSection({ groups }: { groups: readonly CapabilityGroup[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mx-auto max-w-xl">
      <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-xl border border-olive/20 bg-gradient-to-br from-[#f0ebf4] via-white to-[#f5efe3] p-8 text-center shadow-card">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-olive/20 bg-white text-olive shadow-sm">
          <FileDown className="h-8 w-8" aria-hidden />
        </span>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-olive">Capabilities Overview</p>
        <p className="mt-2 font-display text-2xl text-charcoal sm:text-3xl">Florice Milling Spare & Solution</p>
        <p className="mt-2 text-sm text-charcoal-muted">Services · Auxiliary Machinery · Spare Parts</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Services & Projects", "Auxiliary machinery", "Spare parts catalogue", "Vendor-neutral"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-charcoal-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        {!expanded ? (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-olive motion-safe:transition-all motion-safe:duration-200 hover:gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
          >
            See more
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        ) : null}
      </div>

      {expanded ? (
        <div className="mt-10">
          <p className="eyebrow">Capabilities</p>
          <h2 className="text-3xl font-display">Consulting, auxiliary machinery & spare parts</h2>
          <p className="mt-3 text-charcoal-muted">
            One scope across project delivery, plant auxiliaries, and wear-part supply — aligned with our Services and
            Machinery & Spare Parts pages
          </p>

          <div className="mt-8 space-y-8">
            {groups.map((group) => {
              const visual = groupVisuals[group.id] ?? groupVisuals.services;
              const Icon = visual.icon;

              return (
                <div key={group.id}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${visual.tone}14`, color: visual.tone }}
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-olive">{group.eyebrow}</p>
                        <h3 className="mt-1 text-base font-semibold text-charcoal">{group.title}</h3>
                      </div>
                    </div>
                    <Link
                      href={group.href}
                      className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-olive hover:gap-1.5"
                    >
                      View page
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                  <ul className="mt-4 space-y-2 border-l-2 border-[var(--border)] pl-4 sm:pl-5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-charcoal-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-8">
            <a href="/florice-capabilities-brochure.pdf" className="btn btn-primary group" download>
              <FileDown className="h-4 w-4" aria-hidden />
              Download PDF Brochure
            </a>
            <span className="text-xs text-charcoal-muted">Updated June 2026</span>
          </div>

          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-olive hover:gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
          >
            <ChevronUp className="h-4 w-4" aria-hidden />
            Show less
          </button>
        </div>
      ) : null}
    </div>
  );
}
