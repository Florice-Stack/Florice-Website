"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sparkles, Workflow } from "lucide-react";
import ServiceDetailModal from "@/components/services/ServiceDetailModal";
import type { consultingValueProps } from "@/lib/content";

type ValueProp = (typeof consultingValueProps)[number];

type WhyFloricePanelProps = {
  items: readonly ValueProp[];
};

const valueVisuals: Record<string, { icon: typeof Workflow; tone: string; bg: string }> = {
  "End-to-End Expertise": { icon: Workflow, tone: "#5d4e67", bg: "#f3ebf4" },
  "Unmatched Value": { icon: Sparkles, tone: "#7a5c1e", bg: "#f5efe3" },
};

export default function WhyFloricePanel({ items }: WhyFloricePanelProps) {
  const [activeProp, setActiveProp] = useState<ValueProp | null>(null);

  return (
    <>
      <div className="overflow-hidden rounded-md border border-[var(--border)] bg-white shadow-card">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="relative min-h-[220px] lg:min-h-[320px]">
            <Image
              src="/services/why-florice-consultant.png"
              alt="Industrial consultant reviewing production data on a tablet in a manufacturing plant"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="eyebrow mb-0">Why Florice</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {items.map((prop) => {
                const visual = valueVisuals[prop.title] ?? valueVisuals["End-to-End Expertise"];
                const Icon = visual.icon;

                return (
                  <button
                    key={prop.title}
                    type="button"
                    onClick={() => setActiveProp(prop)}
                    className="flex flex-col items-center rounded-md border border-[var(--border)] bg-ivory-muted/30 px-4 py-4 text-center touch-manipulation motion-safe:transition-all motion-safe:duration-200 hover:border-olive/30 hover:bg-white hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
                  >
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: visual.bg, color: visual.tone }}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold leading-snug">{prop.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal-muted">{prop.tagline}</p>
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link href="/about" className="btn btn-outline">
                About & FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ServiceDetailModal
        open={activeProp !== null}
        title={activeProp?.title ?? ""}
        subtitle={activeProp?.tagline}
        overview={activeProp?.details.overview ?? ""}
        highlights={activeProp?.details.highlights ?? []}
        onClose={() => setActiveProp(null)}
        ctaLabel="Book a consultation"
      />
    </>
  );
}
