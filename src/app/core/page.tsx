import { Button } from "@/components/core/Button/Button";
import { css } from "../../../styled-system/css";
import { container } from "../../../styled-system/patterns";
import { Card } from "@/components/core/Card/Card";
import { Divider, HStack, VStack } from "../../../styled-system/jsx";
import { CoreWrapper } from "@/components/features/CorePage/CoreWrapper/CoreWrapper";
import { Buttons } from "@/components/features/CorePage/Buttons/Buttons";
import { Cards } from "@/components/features/CorePage/Cards/Cards";

export default function CoreComponents() {
  return (
    <CoreWrapper>
      <Buttons />
      <Cards />
    </CoreWrapper>
  );
}
