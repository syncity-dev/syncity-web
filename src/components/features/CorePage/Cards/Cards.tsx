import { CoreSectionWrapper } from "../CoreSectionWrapper/CoreSectionWrapper";
import { Card } from "@/components/core/Card/Card";
import { css } from "../../../../../styled-system/css";

export const Cards = () => {
  return (
    <CoreSectionWrapper
      title="Cards"
      display="flex"
      flexDirection="column"
      w="full"
    >
      <Card w="full">
        <Card outlined heavyShadow mb="4">
          <div className={css({ w: "sm", h: "48" })}></div>
        </Card>
        <Card outlined>
          <div className={css({ w: "sm", h: "48" })}></div>
        </Card>
      </Card>
    </CoreSectionWrapper>
  );
};
