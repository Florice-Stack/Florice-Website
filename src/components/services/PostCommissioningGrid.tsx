"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ServiceDetailModal from "@/components/services/ServiceDetailModal";
import type { postCommissioningServices } from "@/lib/content";

type Service = (typeof postCommissioningServices)[number];

const cardAccents: Record<string, { barFrom: string; barTo: string }> = {
  "Contract Mill Operation": { barFrom: "#b8d4c4", barTo: "#edf3f0" },
  "Plant Performance Audits": { barFrom: "#c5d7fa", barTo: "#e8f0fe" },
  "Plant Retrofits": { barFrom: "#d4bc8a", barTo: "#f5efe3" },
  "Maintenance Support": { barFrom: "#8a7a94", barTo: "#f0ebf4" },
  "Workforce Training": { barFrom: "#f0d9b8", barTo: "#fef3e8" },
};

export default function PostCommissioningGrid({ items }: { items: readonly Service[] }) {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service) => {
          const accent = cardAccents[service.title] ?? cardAccents["Contract Mill Operation"];

          return (
            <button
              key={service.title}
              type="button"
              onClick={() => setActiveService(service)}
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
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              </figure>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-semibold sm:text-lg">{service.title}</h3>
                <p className="mt-1.5 text-sm text-charcoal-muted">{service.tagline}</p>
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
        open={activeService !== null}
        title={activeService?.title ?? ""}
        subtitle={activeService?.tagline}
        overview={activeService?.details.overview ?? ""}
        highlights={activeService?.details.highlights ?? []}
        onClose={() => setActiveService(null)}
      />
    </>
  );
}
