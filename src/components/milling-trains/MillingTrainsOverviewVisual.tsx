"use client";

import { useEffect, useRef } from "react";

export default function MillingTrainsOverviewVisual() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (mediaQuery.matches) {
        video.pause();
        video.removeAttribute("autoplay");
      } else {
        video.play().catch(() => {
          /* Autoplay blocked until user interaction */
        });
      }
    };

    syncPlayback();
    mediaQuery.addEventListener("change", syncPlayback);
    return () => mediaQuery.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <figure className="interactive-media w-full glass-panel overflow-hidden rounded-xl motion-safe:transition-all motion-safe:duration-200">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/videos/milling-trains-overview-poster.jpg"
          className="h-full w-full object-cover"
          aria-label="Milling process for wheat and rice in industrial grain plants"
        >
          <source src="/videos/milling-trains-overview.mp4" type="video/mp4" />
        </video>
      </div>
      <figcaption className="border-t border-[var(--border)] px-4 py-2.5 text-center text-[10px] text-charcoal-muted sm:text-[11px]">
        Wheat and rice milling trains — intake through finished product
      </figcaption>
    </figure>
  );
}
