"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import type { LegalSection } from "@/lib/legal";

type LegalModalProps = {
  open: boolean;
  title: string;
  effectiveDate: string;
  sections: LegalSection[];
  onClose: () => void;
};

export default function LegalModal({ open, title, effectiveDate, sections, onClose }: LegalModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/60"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-md border border-[var(--border)] bg-ivory-card shadow-lift"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] px-6 py-5">
          <div>
            <h2 id={titleId} className="font-display text-2xl text-charcoal">
              {title}
            </h2>
            <p className="mt-1 text-xs text-charcoal-muted">Effective {effectiveDate}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-charcoal hover:bg-ivory-muted"
            aria-label="Close"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-5">
          <div className="space-y-6">
            {sections.map((section) => (
              <section key={section.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-olive">{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-2 text-sm leading-relaxed text-charcoal-muted">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>

        <div className="border-t border-[var(--border)] px-6 py-4">
          <button type="button" onClick={onClose} className="btn btn-primary w-full sm:w-auto">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
