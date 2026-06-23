"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export type ServiceDetailModalProps = {
  open: boolean;
  title: string;
  subtitle?: string;
  overview: string;
  highlights: readonly string[];
  highlightsLabel?: string;
  onClose: () => void;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function ServiceDetailModal({
  open,
  title,
  subtitle,
  overview,
  highlights,
  highlightsLabel = "What's included",
  onClose,
  ctaHref = "/contact",
  ctaLabel = "Discuss this service",
}: ServiceDetailModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 touch-manipulation glass-overlay"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[min(85dvh,720px)] w-full max-w-2xl touch-manipulation flex-col overflow-y-auto rounded-md glass-panel-lift"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] px-5 py-4 sm:px-6">
          <div>
            <h2 id={titleId} className="font-display text-xl text-charcoal sm:text-2xl">
              {title}
            </h2>
            {subtitle ? <p className="mt-1 text-sm text-charcoal-muted">{subtitle}</p> : null}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full glass-pill text-charcoal hover:bg-white/50"
            aria-label="Close"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div className="px-5 py-4 sm:px-6">
          <p className="text-sm leading-relaxed text-charcoal-muted">{overview}</p>
          <h3 className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-olive">{highlightsLabel}</h3>
          <ul className="mt-2.5 grid gap-2 sm:grid-cols-2 sm:gap-x-4">
            {highlights.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-charcoal">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-[var(--border)] px-5 py-3 sm:px-6 sm:py-4">
          <Link href={ctaHref} className="btn btn-primary min-h-11 touch-manipulation" onClick={onClose}>
            {ctaLabel}
          </Link>
          <button type="button" onClick={onClose} className="btn btn-outline min-h-11 touch-manipulation">
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
