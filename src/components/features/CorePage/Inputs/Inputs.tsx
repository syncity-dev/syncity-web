"use client";

import { useState } from "react";
import { CoreSectionWrapper } from "../CoreSectionWrapper/CoreSectionWrapper";
import { Card } from "@/components/core/Card/Card";
import { css } from "../../../../../styled-system/css";
import { Checkbox } from "@/components/core/Checkbox/Checkbox";
import { TextInput } from "@/components/core/TextInput/TextInput";
import { TextArea } from "@/components/core/TextArea/TextArea";

export function Inputs() {
  const [checked, setChecked] = useState(false);

  return (
    <CoreSectionWrapper
      title="Inputs"
      display="flex"
      flexDirection="column"
      w="full"
    >
      <Card outlined gap="10" w="full">
        <TextInput
          label="Text Input Label"
          placeholder="Text Placeholder"
          controlSize="md"
          w="full"
          required
        />
        <TextArea
          label="Text Area Label"
          placeholder="TextArea Placeholder"
          controlSize="md"
          w="full"
          required
        />
        <Checkbox
          label="Checkbox Label"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
          controlSize="md"
          required
        />
      </Card>
    </CoreSectionWrapper>
  );
}
