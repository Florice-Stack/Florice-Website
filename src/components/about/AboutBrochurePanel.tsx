import {
  ClipboardList,
  Cog,
  FileDown,
  HelpCircle,
  Settings2,
  ShieldCheck,
  Timer,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { brochurePoints } from "@/lib/content";

const brochureVisuals: Record<number, { icon: LucideIcon; tone: string }> = {
  0: { icon: ClipboardList, tone: "#5d4e67" },
  1: { icon: Cog, tone: "#4a5568" },
  2: { icon: TrendingUp, tone: "#7a5c1e" },
  3: { icon: Settings2, tone: "#3d5c4a" },
  4: { icon: Users, tone: "#3b5bdb" },
};

export default function AboutBrochurePanel({ points }: { points: readonly string[] }) {
  return (
    <div>
      <p className="eyebrow">Capabilities Brochure</p>
      <h2 className="text-3xl font-display">Download our consulting capabilities overview</h2>
      <p className="mt-3 text-charcoal-muted">
        A concise reference for mill owners, project managers, and operations teams.
      </p>
      <ul className="mt-6 space-y-3">
        {points.map((point, index) => {
          const visual = brochureVisuals[index] ?? brochureVisuals[0];
          const Icon = visual.icon;

          return (
            <li key={point} className="flex gap-3 rounded-lg border border-[var(--border)] bg-white px-3 py-3 text-sm">
              <span
                className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${visual.tone}14`, color: visual.tone }}
              >
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-charcoal">{point}</span>
            </li>
          );
        })}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a href="/florice-capabilities-brochure.pdf" className="btn btn-primary group" download>
          <FileDown className="h-4 w-4" aria-hidden />
          Download PDF Brochure
        </a>
        <span className="text-xs text-charcoal-muted">Updated June 2026</span>
      </div>
    </div>
  );
}

export function AboutBrochureVisual() {
  return (
    <div className="relative flex h-full min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-xl border border-olive/20 bg-gradient-to-br from-[#f0ebf4] via-white to-[#f5efe3] p-8 text-center shadow-card">
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-olive/20 bg-white text-olive shadow-sm">
        <FileDown className="h-8 w-8" aria-hidden />
      </span>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-olive">Capabilities Overview</p>
      <p className="mt-2 font-display text-2xl text-charcoal sm:text-3xl">Florice Milling Spare & Solution</p>
      <p className="mt-2 text-sm text-charcoal-muted">Rice · Wheat · Grain Processing Consulting</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {["Assessment", "Machinery spec", "Commissioning", "Machinery & spare parts"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--border)] bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-charcoal-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

const faqVisuals: LucideIcon[] = [HelpCircle, Cog, TrendingUp, ShieldCheck, Timer, Settings2, ClipboardList, FileDown];

export function AboutFaqAccordion({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const tones = ["#5d4e67", "#4a5568", "#7a5c1e", "#3d5c4a", "#3b5bdb"];

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const Icon = faqVisuals[index % faqVisuals.length] ?? HelpCircle;
        const tone = tones[index % tones.length];

        return (
          <details
            key={item.question}
            className="group overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-card open:shadow-md"
          >
            <summary className="cursor-pointer list-none px-4 py-4 marker:content-none sm:px-5 [&::-webkit-details-marker]:hidden">
              <span className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${tone}14`, color: tone }}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="flex flex-1 items-start justify-between gap-4">
                  <span className="font-semibold leading-snug">{item.question}</span>
                  <span className="text-olive transition group-open:rotate-45">+</span>
                </span>
              </span>
            </summary>
            <div className="border-t border-[var(--border)] px-4 pb-4 pt-3 sm:pl-[4.25rem] sm:pr-5">
              <p className="text-sm leading-relaxed text-charcoal-muted">{item.answer}</p>
            </div>
          </details>
        );
      })}
    </div>
  );
}
