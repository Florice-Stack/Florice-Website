import {
  CircleDot,
  ClipboardList,
  Gauge,
  ShieldCheck,
  TrendingDown,
  Wheat,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type SectionVisual = {
  icon: LucideIcon;
  accent: string;
  bg: string;
};

export const homePillarVisuals: Record<string, SectionVisual> = {
  services: { icon: ClipboardList, accent: "#5d4e67", bg: "#f0ebf4" },
  machinery: { icon: Workflow, accent: "#7a5c1e", bg: "#f5efe3" },
  "spare-parts": { icon: ShieldCheck, accent: "#3d5c4a", bg: "#edf3f0" },
};

export const homeSectorVisuals: Record<string, SectionVisual> = {
  "Rice milling": { icon: CircleDot, accent: "#7a5c1e", bg: "#f5efe3" },
  "Wheat & flour": { icon: Wheat, accent: "#4a5568", bg: "#eef1f4" },
  "Pulses & grain": { icon: Gauge, accent: "#3b5bdb", bg: "#e8f0fe" },
  "Handling systems": { icon: Workflow, accent: "#3d5c4a", bg: "#edf3f0" },
};

export const heroScopeVisuals: Record<string, SectionVisual> = {
  "Rice milling": { icon: CircleDot, accent: "#7a5c1e", bg: "#f5efe3" },
  "Wheat & flour": { icon: Wheat, accent: "#4a5568", bg: "#eef1f4" },
  "Handling systems": { icon: Workflow, accent: "#3d5c4a", bg: "#edf3f0" },
  "Project support": { icon: ClipboardList, accent: "#5d4e67", bg: "#f0ebf4" },
};

export const missionVisuals: Record<string, SectionVisual> = {
  "Increase productivity": { icon: Gauge, accent: "#3b5bdb", bg: "#e8f0fe" },
  "Reduce operating costs": { icon: TrendingDown, accent: "#3d5c4a", bg: "#edf3f0" },
  "Build reliability": { icon: ShieldCheck, accent: "#5d4e67", bg: "#f0ebf4" },
};

export function SectionIcon({
  visual,
  size = "md",
}: {
  visual: SectionVisual;
  size?: "sm" | "md";
}) {
  const Icon = visual.icon;
  const boxClass = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const iconClass = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <span
      className={`inline-flex ${boxClass} items-center justify-center rounded-xl`}
      style={{ backgroundColor: visual.bg, color: visual.accent }}
    >
      <Icon className={iconClass} aria-hidden />
    </span>
  );
}
