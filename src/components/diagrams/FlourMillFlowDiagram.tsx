import MillFlowTrain, { infraIcons } from "@/components/diagrams/MillFlowTrain";
import { flourTrainStageVisuals, trainAccentColors } from "@/lib/millingTrainVisuals";

type Props = {
  variant?: "default" | "hero" | "embedded";
};

export default function FlourMillFlowDiagram({ variant = "default" }: Props) {
  return (
    <MillFlowTrain
      title="Wheat / Flour Milling Train"
      subtitle="Break, purify, and reduction with sifting between stages"
      accent={trainAccentColors.flour}
      steps={flourTrainStageVisuals}
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
