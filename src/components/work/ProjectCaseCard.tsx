import { ArrowRight, ClipboardList, Target, TrendingUp, Wrench } from "lucide-react";
import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

const typeStyles = {
  rice: {
    label: "Rice mill",
    badge: "bg-[#f5efe3] text-[#7a5c1e] border-[#d4bc8a]",
    accent: "#5d4e67",
    barFrom: "#8b6914",
    barTo: "#e8dcc8",
  },
  flour: {
    label: "Flour mill",
    badge: "bg-[#eef1f4] text-[#4a5568] border-[#c5cdd8]",
    accent: "#4a5568",
    barFrom: "#c4a035",
    barTo: "#f7f2ea",
  },
  parboiling: {
    label: "Parboiling",
    badge: "bg-[#edf3f0] text-[#3d5c4a] border-[#b8d4c4]",
    accent: "#3d5c4a",
    barFrom: "#5a7a62",
    barTo: "#dce8e0",
  },
} as const;

export default function ProjectCaseCard({ project }: { project: Project }) {
  const style = typeStyles[project.type];

  return (
    <article className="overflow-hidden rounded-md border border-[var(--border)] bg-white shadow-card">
      <div
        className="h-1.5"
        style={{ background: `linear-gradient(to right, ${style.barFrom}, ${style.barTo})` }}
        aria-hidden
      />

      <div className="p-6 lg:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${style.badge}`}
            >
              {style.label}
            </span>
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-charcoal-muted">{project.meta}</p>
            <h2 className="mt-2 text-2xl font-display sm:text-3xl">{project.title}</h2>
          </div>
          <p
            className="max-w-xs rounded-md border border-[var(--border)] bg-white/70 px-4 py-3 text-sm font-semibold leading-snug backdrop-blur-sm"
            style={{ color: style.accent }}
          >
            {project.result}
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-md border border-[var(--border)] bg-white/60 px-4 py-3 backdrop-blur-sm"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-charcoal-muted">{metric.label}</p>
              <div className="mt-2 flex items-center gap-2 text-sm font-semibold">
                <span className="text-charcoal-muted line-through decoration-charcoal-muted/40">{metric.before}</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0" style={{ color: style.accent }} aria-hidden />
                <span style={{ color: style.accent }}>{metric.after}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-[11px] font-medium text-charcoal-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-md border border-[var(--border)] p-4">
            <div className="flex items-center gap-2 text-olive">
              <Target className="h-4 w-4" aria-hidden />
              <h3 className="text-xs font-bold uppercase tracking-wide">Problem</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{project.problem}</p>
          </div>
          <div className="rounded-md border border-[var(--border)] p-4">
            <div className="flex items-center gap-2 text-olive">
              <Wrench className="h-4 w-4" aria-hidden />
              <h3 className="text-xs font-bold uppercase tracking-wide">Scope</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{project.scope}</p>
          </div>
          <div className="rounded-md border border-[var(--border)] p-4">
            <div className="flex items-center gap-2 text-olive">
              <TrendingUp className="h-4 w-4" aria-hidden />
              <h3 className="text-xs font-bold uppercase tracking-wide">Result</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{project.outcome}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectSummaryStrip({ projectCount }: { projectCount: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {[
        { icon: ClipboardList, label: "Case studies", value: `${projectCount} engagements` },
        { icon: Target, label: "Plant types", value: "Rice · Flour · Parboiling" },
        { icon: TrendingUp, label: "Focus", value: "Measured recovery & uptime" },
      ].map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="flex items-center gap-4 rounded-md border border-[var(--border)] bg-white px-5 py-4 shadow-card"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-olive/10 text-olive">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-muted">{label}</p>
            <p className="mt-0.5 text-sm font-semibold text-charcoal">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
