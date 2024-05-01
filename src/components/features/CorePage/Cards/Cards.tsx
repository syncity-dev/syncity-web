import { CoreSectionWrapper } from "../CoreSectionWrapper/CoreSectionWrapper";
import { Card } from "@/components/core/Card/Card";
import { css } from "../../../../../styled-system/css";

export function Cards() {
  return (
    <CoreSectionWrapper
      title="Cards"
      display="flex"
      flexDirection="column"
      gap="4"
    >
      <Card outlined heavyShadow>
        <div className={css({ w: "sm", h: "48" })}></div>
      </Card>
      <Card outlined>
        <div className={css({ w: "sm", h: "48" })}></div>
      </Card>
    </CoreSectionWrapper>
  );
}
