import { CoreWrapper } from "@/components/features/ThemePage/components/CoreWrapper/CoreWrapper";
import { Buttons } from "@/components/features/ThemePage/components/Buttons/Buttons";
import { Inputs } from "@/components/features/ThemePage/components/Inputs/Inputs";
import { Badges } from "@/components/features/ThemePage/components/Badges/Badges";

export const Theme = () => {
  return (
    <CoreWrapper>
      <Buttons />
      <Inputs />
      <Badges />
    </CoreWrapper>
  );
};
