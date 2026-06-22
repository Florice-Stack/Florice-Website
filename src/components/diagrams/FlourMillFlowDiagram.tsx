import MillFlowTrain, { flourIcons, infraIcons } from "@/components/diagrams/MillFlowTrain";

const flourSteps = [
  { id: "intake", label: "Wheat intake", tone: "#c4a035", icon: flourIcons.intake },
  { id: "clean", label: "Clean", tone: "#b8923a", icon: flourIcons.clean },
  { id: "condition", label: "Condition", tone: "#a6894a", icon: flourIcons.condition },
  { id: "break", label: "Break", tone: "#9a8058", icon: flourIcons.break },
  { id: "purify", label: "Purify", tone: "#d4bc8a", icon: flourIcons.purify },
  { id: "reduce", label: "Reduce", tone: "#e8dcc8", icon: flourIcons.reduce },
  { id: "pack", label: "Bagging", tone: "#f7f2ea", icon: flourIcons.pack },
];

type Props = {
  variant?: "default" | "hero";
};

export default function FlourMillFlowDiagram({ variant = "default" }: Props) {
  return (
    <MillFlowTrain
      title="Wheat / Flour Milling Train"
      subtitle="Wheat to flour — break, purify, and reduction with sifting between stages"
      accent="#4a5568"
      steps={flourSteps}
      infrastructure={[
        { label: "Plansifters", icon: infraIcons.plansifter },
        { label: "Purifiers", icon: infraIcons.purifier },
        { label: "Pneumatic transfer", icon: infraIcons.pneumatic },
      ]}
      ariaLabel="Visual wheat flour milling process flow from intake through bagging"
      variant={variant}
    />
  );
}
