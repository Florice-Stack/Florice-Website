import MillFlowTrain, { infraIcons } from "@/components/diagrams/MillFlowTrain";
import { riceTrainStageVisuals, trainAccentColors } from "@/lib/millingTrainVisuals";

type Props = {
  variant?: "default" | "hero" | "embedded";
};

export default function RiceMillFlowDiagram({ variant = "default" }: Props) {
  return (
    <MillFlowTrain
      title="Rice Milling Train"
      subtitle="Paddy to head rice — grain state at each stage"
      accent={trainAccentColors.rice}
      steps={riceTrainStageVisuals}
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
