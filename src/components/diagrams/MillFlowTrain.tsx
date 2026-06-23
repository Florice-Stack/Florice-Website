import type { ReactNode } from "react";

export type FlowStep = {
  id: string;
  label: string;
  tone: string;
  icon: ReactNode;
};

type MillFlowTrainProps = {
  title: string;
  subtitle: string;
  accent: string;
  steps: FlowStep[];
  infrastructure: { label: string; icon: ReactNode }[];
  ariaLabel: string;
  variant?: "default" | "hero" | "embedded";
};

const stepIconSize = {
  compact: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
  default: "h-[4.75rem] w-[4.75rem] sm:h-20 sm:w-20",
} as const;

const stepIconHeight = {
  compact: "h-16 sm:h-[4.5rem]",
  default: "h-[4.75rem] sm:h-20",
} as const;

function ArrowConnector({ color }: { color: string }) {
  return (
    <div className="flex shrink-0 items-center px-1 sm:px-2" aria-hidden>
      <div className="h-px w-3 sm:w-5" style={{ backgroundColor: color, opacity: 0.35 }} />
      <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0" fill={color}>
        <path d="M2 1 L10 6 L2 11 Z" />
      </svg>
    </div>
  );
}

function StepNode({
  step,
  accent,
  compact,
}: {
  step: FlowStep;
  accent: string;
  compact?: boolean;
}) {
  return (
    <div className="flex min-w-[5.5rem] flex-col items-center sm:min-w-[6.5rem]">
      <div
        className={`group/step relative flex items-center justify-center rounded-2xl border-2 glass-panel-strong motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md ${
          compact ? stepIconSize.compact : stepIconSize.default
        }`}
        style={{ borderColor: step.tone }}
      >
        <div
          className="absolute inset-1 rounded-xl opacity-20 motion-safe:transition-opacity motion-safe:duration-200 group-hover/step:opacity-35"
          style={{ backgroundColor: step.tone }}
          aria-hidden
        />
        <div className="relative text-charcoal" style={{ color: accent }}>
          {step.icon}
        </div>
      </div>
      <p className="mt-2 max-w-[5.5rem] text-center text-[10px] font-semibold leading-tight text-charcoal sm:text-[11px]">
        {step.label}
      </p>
    </div>
  );
}

export default function MillFlowTrain({
  title,
  subtitle,
  accent,
  steps,
  infrastructure,
  ariaLabel,
  variant = "default",
}: MillFlowTrainProps) {
  const isHero = variant === "hero";
  const isEmbedded = variant === "embedded";
  const compact = !isHero && !isEmbedded;

  const stepGrid = (
    <div
      className={
        isEmbedded
          ? "relative grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-1.5 lg:gap-y-0"
          : "flex min-w-max items-start justify-center"
      }
    >
      {isEmbedded ? (
        <div
          className="pointer-events-none absolute left-[10%] right-[10%] top-[1.85rem] hidden h-px bg-olive/20 lg:block"
          aria-hidden
        />
      ) : null}
      {steps.map((step, index) => {
        const iconHeight = compact ? stepIconHeight.compact : stepIconHeight.default;

        if (isEmbedded) {
          return (
            <div key={step.id} className="relative z-[1] flex flex-col items-center px-1">
              <StepNode step={step} accent={accent} compact />
            </div>
          );
        }

        return (
          <div key={step.id} className="flex items-start">
            <StepNode step={step} accent={accent} compact={compact} />
            {index < steps.length - 1 && (
              <div className={`flex shrink-0 items-center self-start ${iconHeight}`}>
                <ArrowConnector color={accent} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      className={
        isHero || isEmbedded
          ? "overflow-hidden rounded-md glass-panel"
          : "overflow-hidden glass-panel rounded-md"
      }
      role="img"
      aria-label={ariaLabel}
    >
      {!isEmbedded ? (
        <div className="border-b border-[var(--border)] px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: accent }}>
                {title}
              </p>
              <p className="mt-1 text-xs text-charcoal-muted sm:text-sm">{subtitle}</p>
            </div>
            <div className="flex items-center gap-1.5" aria-hidden>
              {steps.map((step) => (
                <span
                  key={step.id}
                  className="h-2.5 w-2.5 rounded-full ring-1 ring-white sm:h-3 sm:w-3"
                  style={{ backgroundColor: step.tone }}
                  title={step.label}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className={isEmbedded ? "px-4 py-5 sm:px-6 sm:py-6" : "overflow-x-auto px-4 py-6 sm:px-6"}>
        {stepGrid}

        {!isEmbedded ? (
          <div
            className="mx-auto mt-6 h-1.5 max-w-3xl rounded-full"
            style={{
              background: `linear-gradient(to right, ${steps.map((s) => s.tone).join(", ")})`,
            }}
            aria-hidden
          />
        ) : (
          <div
            className="mx-auto mt-5 h-1 max-w-full rounded-full opacity-80"
            style={{
              background: `linear-gradient(to right, ${steps.map((s) => s.tone).join(", ")})`,
            }}
            aria-hidden
          />
        )}
      </div>

      <div className="section-surface border-t border-[var(--border)] px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {infrastructure.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-charcoal-muted">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full glass-panel-strong"
                style={{ color: accent }}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-medium sm:text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const infraIcons = {
  aspiration: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 14c2-4 4-6 8-6s6 2 8 6" strokeLinecap="round" />
      <path d="M8 18h8M12 8V4" strokeLinecap="round" />
    </svg>
  ),
  pneumatic: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="5" y="10" width="14" height="8" rx="2" />
      <path d="M9 10V7h6v3M12 6V3" strokeLinecap="round" />
    </svg>
  ),
  elevator: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M8 20V4l4-2 4 2v16" strokeLinejoin="round" />
      <path d="M10 10h4M10 14h4" strokeLinecap="round" />
    </svg>
  ),
  plansifter: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 10h16M4 15h16" />
    </svg>
  ),
  purifier: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M6 18l6-14 6 14H6z" strokeLinejoin="round" />
      <path d="M9 14h6" strokeLinecap="round" />
    </svg>
  ),
  bran: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M5 16c2-6 4-8 7-8s5 2 7 8" strokeLinecap="round" />
      <path d="M8 16h8" strokeLinecap="round" />
    </svg>
  ),
};

export const riceIcons = {
  intake: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="currentColor">
      <rect x="10" y="6" width="12" height="18" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 24h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="12" r="1.5" opacity="0.7" />
      <circle cx="18" cy="15" r="1.5" opacity="0.7" />
      <circle cx="15" cy="18" r="1.5" opacity="0.7" />
    </svg>
  ),
  preclean: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 12l10-4 10 4v8l-10 4-10-4z" />
      <path d="M11 14v8M16 16v8M21 14v8" opacity="0.5" />
    </svg>
  ),
  destone: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 10h16v4H8z" />
      <path d="M8 18h16v4H8z" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
      <circle cx="20" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  hull: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="16" cy="16" rx="10" ry="7" />
      <path d="M6 16h20" strokeDasharray="2 2" />
      <path d="M16 9v14" strokeDasharray="2 2" />
    </svg>
  ),
  whiten: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 6l8 18H8z" strokeLinejoin="round" />
      <path d="M12 18h8" strokeLinecap="round" />
    </svg>
  ),
  grade: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="8" width="20" height="16" rx="2" />
      <path d="M6 14h20M6 20h20" />
      <circle cx="11" cy="11" r="1" fill="currentColor" />
      <circle cx="21" cy="17" r="1" fill="currentColor" />
    </svg>
  ),
  pack: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 10h12v16H10z" />
      <path d="M10 10l6-4 6 4M16 6v4" strokeLinejoin="round" />
      <path d="M13 18h6" strokeLinecap="round" />
    </svg>
  ),
};

export const flourIcons = {
  intake: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 6v4M12 8c0-2 1.8-3 4-3s4 1 4 3" strokeLinecap="round" />
      <path d="M10 12c0 6 2.7 10 6 10s6-4 6-10" />
      <path d="M8 22h16" strokeLinecap="round" />
    </svg>
  ),
  clean: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="14" r="7" />
      <path d="M10 22c2 3 4 4 6 4s4-1 6-4" strokeLinecap="round" />
      <path d="M16 7v2M16 19v2" strokeLinecap="round" />
    </svg>
  ),
  condition: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="16" cy="18" rx="8" ry="5" />
      <path d="M13 10c0-2 1.3-3 3-3s3 1 3 3" strokeLinecap="round" />
      <path d="M14 8v2M18 8v2" strokeLinecap="round" />
    </svg>
  ),
  break: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="16" r="5" />
      <circle cx="21" cy="16" r="5" />
      <path d="M16 11v10" strokeDasharray="2 2" />
    </svg>
  ),
  purify: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 22l8-14 8 14H8z" strokeLinejoin="round" />
      <path d="M12 18h8" strokeLinecap="round" />
      <path d="M16 8v2" strokeLinecap="round" />
    </svg>
  ),
  reduce: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="14" r="4" />
      <circle cx="21" cy="18" r="4" />
      <path d="M8 24h16" strokeLinecap="round" />
    </svg>
  ),
  pack: riceIcons.pack,
};
