"use client";

import { useEffect, useRef } from "react";

export default function ConsultantHeroVideo() {
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
    <figure className="w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/videos/mill-consultant-hero-poster.png"
          className="h-full w-full object-cover"
          aria-label="Milling consultant reviewing equipment on the floor of a wheat flour mill"
        >
          <source src="/videos/mill-consultant-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <figcaption className="border-t border-[var(--border)] bg-white px-4 py-3 text-center text-[11px] leading-relaxed text-charcoal-muted sm:px-6">
        On-site consulting · wheat flour mill floor walk-through
      </figcaption>
    </figure>
  );
}
