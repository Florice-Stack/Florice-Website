import { Cog, Factory, Package, Wind } from "lucide-react";
import type { machineryGroups } from "@/lib/content";

type Group = (typeof machineryGroups)[number];

const groupIcons = [Factory, Cog, Wind, Package];

export default function MachineryGrid({ groups }: { groups: readonly Group[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {groups.map((group, index) => {
        const Icon = groupIcons[index] ?? Factory;

        return (
          <article key={group.title} className="rounded-md border border-[var(--border)] bg-white p-6 shadow-card">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-olive/10 text-olive">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-bold text-charcoal">{group.title}</h3>
                <p className="mt-1 text-sm text-charcoal-muted">{group.description}</p>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
