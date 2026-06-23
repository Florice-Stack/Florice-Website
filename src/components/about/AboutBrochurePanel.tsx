import { ClipboardList, Cog, FileDown, Package, Settings2, type LucideIcon } from "lucide-react";

const faqVisuals: LucideIcon[] = [ClipboardList, Cog, Settings2, Package, FileDown];

export function AboutFaqAccordion({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const tones = ["#5d4e67", "#4a5568", "#7a5c1e", "#3d5c4a", "#3b5bdb"];

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const Icon = faqVisuals[index % faqVisuals.length] ?? ClipboardList;
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
