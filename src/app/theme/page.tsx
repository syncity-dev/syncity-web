import { CoreWrapper } from "@/components/features/CorePage/CoreWrapper/CoreWrapper";
import { Buttons } from "@/components/features/CorePage/Buttons/Buttons";
import { Inputs } from "@/components/features/CorePage/Inputs/Inputs";
import { Badges } from "@/components/features/CorePage/Badges/Badges";

export default function CoreComponents() {
  return (
    <CoreWrapper>
      <Buttons />
      <Inputs />
      <Badges />
    </CoreWrapper>
  );
}
