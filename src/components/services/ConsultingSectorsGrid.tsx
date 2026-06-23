"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ServiceDetailModal from "@/components/services/ServiceDetailModal";
import type { consultingSectors } from "@/lib/content";

type Sector = (typeof consultingSectors)[number];

const sectorAccents: Record<string, { barFrom: string; barTo: string }> = {
  "Rice & Paddy": { barFrom: "#b8d4c4", barTo: "#edf3f0" },
  "Flour & Grain Milling": { barFrom: "#d4bc8a", barTo: "#f5efe3" },
  "Pulses & Lentils": { barFrom: "#8a7a94", barTo: "#f0ebf4" },
  "Value-Added Processing": { barFrom: "#f5c2d4", barTo: "#fce8ef" },
  "Logistics & Biofuels": { barFrom: "#c5d7fa", barTo: "#e8f0fe" },
  "Other Agro-Based Products": { barFrom: "#f0d9b8", barTo: "#fef3e8" },
};

export default function ConsultingSectorsGrid({ items }: { items: readonly Sector[] }) {
  const [activeSector, setActiveSector] = useState<Sector | null>(null);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((sector) => {
          const accent = sectorAccents[sector.title] ?? sectorAccents["Rice & Paddy"];

          return (
            <button
              key={sector.title}
              type="button"
              onClick={() => setActiveSector(sector)}
              className="group w-full touch-manipulation overflow-hidden glass-panel rounded-md text-left motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
            >
              <div
                className="h-1.5"
                style={{ background: `linear-gradient(to right, ${accent.barFrom}, ${accent.barTo})` }}
                aria-hidden
              />
              <figure className="overflow-hidden border-b border-[var(--border)]">
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={sector.image.src}
                    alt={sector.image.alt}
                    fill
                    className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              </figure>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-semibold">{sector.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {sector.applications.map((item) => (
                    <li
                      key={item}
                      className="glass-pill rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-charcoal-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-olive motion-safe:transition-all motion-safe:duration-200 group-hover:gap-2">
                  See more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <ServiceDetailModal
        open={activeSector !== null}
        title={activeSector?.title ?? ""}
        subtitle={activeSector?.applications.join(" · ")}
        overview={activeSector?.details.overview ?? ""}
        highlights={activeSector?.details.highlights ?? []}
        highlightsLabel="Applications & scope"
        onClose={() => setActiveSector(null)}
        ctaLabel="Discuss this sector"
      />
    </>
  );
}
