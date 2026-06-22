import Hero from "@/components/home/Hero";
import MissionStrip from "@/components/home/MissionStrip";
import QuickNav from "@/components/home/QuickNav";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionStrip />
      <QuickNav />
      <Reveal>
        <section className="section-surface section-pad border-t border-[var(--border)]">
          <div className="container-content flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold text-olive sm:text-4xl">
                Running below target recovery or planning a line upgrade?
              </h2>
              <p className="mt-3 text-charcoal-muted">
                Share your plant capacity, grain type, and current bottleneck. We respond within one business day with a
                proposed scope — assessment, machinery review, or troubleshooting visit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link href="/work" className="btn btn-outline">
                See Project Examples
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
