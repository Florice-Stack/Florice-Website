import type { ReactNode } from "react";
import { flourIcons, riceIcons } from "@/components/diagrams/MillFlowTrain";

export type TrainStageVisual = {
  id: string;
  label: string;
  tone: string;
  icon: ReactNode;
};

export const riceTrainStageVisuals: TrainStageVisual[] = [
  { id: "intake", label: "Paddy intake", tone: "#8b6914", icon: riceIcons.intake },
  { id: "preclean", label: "Pre-clean", tone: "#9a7b4f", icon: riceIcons.preclean },
  { id: "destone", label: "De-stone", tone: "#a68b5b", icon: riceIcons.destone },
  { id: "hull", label: "Hull / shell", tone: "#b8956a", icon: riceIcons.hull },
  { id: "whiten", label: "Whiten", tone: "#d4c4a8", icon: riceIcons.whiten },
  { id: "grade", label: "Grade", tone: "#e8dcc8", icon: riceIcons.grade },
  { id: "pack", label: "Bagging", tone: "#f5f0e6", icon: riceIcons.pack },
];

export const flourTrainStageVisuals: TrainStageVisual[] = [
  { id: "intake", label: "Wheat intake", tone: "#c4a035", icon: flourIcons.intake },
  { id: "clean", label: "Clean", tone: "#b8923a", icon: flourIcons.clean },
  { id: "condition", label: "Condition", tone: "#a6894a", icon: flourIcons.condition },
  { id: "break", label: "Break", tone: "#9a8058", icon: flourIcons.break },
  { id: "purify", label: "Purify", tone: "#d4bc8a", icon: flourIcons.purify },
  { id: "reduce", label: "Reduce", tone: "#e8dcc8", icon: flourIcons.reduce },
  { id: "pack", label: "Bagging", tone: "#f7f2ea", icon: flourIcons.pack },
];

const visualsByTrainId: Record<string, TrainStageVisual[]> = {
  rice: riceTrainStageVisuals,
  flour: flourTrainStageVisuals,
};

export function getTrainStageVisuals(trainId: string): TrainStageVisual[] {
  return visualsByTrainId[trainId] ?? [];
}

export function getTrainStageVisual(trainId: string, stepId: string): TrainStageVisual | undefined {
  return getTrainStageVisuals(trainId).find((item) => item.id === stepId);
}

export const trainAccentColors: Record<string, string> = {
  rice: "#5d4e67",
  flour: "#4a5568",
};
