import MillFlowTrain, { infraIcons, riceIcons } from "@/components/diagrams/MillFlowTrain";

const riceSteps = [
  { id: "intake", label: "Paddy intake", tone: "#8b6914", icon: riceIcons.intake },
  { id: "preclean", label: "Pre-clean", tone: "#9a7b4f", icon: riceIcons.preclean },
  { id: "destone", label: "De-stone", tone: "#a68b5b", icon: riceIcons.destone },
  { id: "hull", label: "Hull / shell", tone: "#b8956a", icon: riceIcons.hull },
  { id: "whiten", label: "Whiten", tone: "#d4c4a8", icon: riceIcons.whiten },
  { id: "grade", label: "Grade", tone: "#e8dcc8", icon: riceIcons.grade },
  { id: "pack", label: "Bagging", tone: "#f5f0e6", icon: riceIcons.pack },
];

type Props = {
  variant?: "default" | "hero";
};

export default function RiceMillFlowDiagram({ variant = "default" }: Props) {
  return (
    <MillFlowTrain
      title="Rice Milling Train"
      subtitle="Paddy to head rice — color shows grain state through each stage"
      accent="#5d4e67"
      steps={riceSteps}
      infrastructure={[
        { label: "Aspiration", icon: infraIcons.aspiration },
        { label: "Pneumatic lift", icon: infraIcons.pneumatic },
        { label: "Bucket elevators", icon: infraIcons.elevator },
      ]}
      ariaLabel="Visual rice milling process flow from paddy intake through bagging"
      variant={variant}
    />
  );
}
