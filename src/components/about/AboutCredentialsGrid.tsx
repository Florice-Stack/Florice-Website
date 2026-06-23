import { BadgeCheck, Clock3, Globe2, LayoutGrid, type LucideIcon } from "lucide-react";
import type { aboutCredentials } from "@/lib/content";

type Credential = (typeof aboutCredentials)[number];

const credentialVisuals: Record<string, { icon: LucideIcon; tone: string; bg: string }> = {
  "Years in grain processing & milling systems": { icon: Clock3, tone: "#5d4e67", bg: "#f0ebf4" },
  "Countries with on-site consulting": { icon: Globe2, tone: "#4a5568", bg: "#eef1f4" },
  "Equipment sales commissions — fully independent": { icon: BadgeCheck, tone: "#3d5c4a", bg: "#edf3f0" },
  "Project design, install oversight & PM support": { icon: LayoutGrid, tone: "#7a5c1e", bg: "#f5efe3" },
};

export default function AboutCredentialsGrid({ items }: { items: readonly Credential[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((cred) => {
        const visual = credentialVisuals[cred.label] ?? credentialVisuals["Countries with on-site consulting"];
        const Icon = visual.icon;

        return (
          <article
            key={cred.label}
            className="overflow-hidden glass-panel rounded-xl text-center"
          >
            <div className="h-1" style={{ backgroundColor: visual.tone }} aria-hidden />
            <div className="px-4 py-5">
              <span
                className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: visual.bg, color: visual.tone }}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <strong className="mt-4 block font-display text-3xl text-olive">{cred.value}</strong>
              <span className="mt-2 block text-sm leading-snug text-charcoal-muted">{cred.label}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
