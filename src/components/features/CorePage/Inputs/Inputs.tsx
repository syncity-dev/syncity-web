"use client";

import { useState, ChangeEvent } from "react";
import { CoreSectionWrapper } from "../CoreSectionWrapper/CoreSectionWrapper";
import { Card } from "@/components/core/Card/Card";
import { Checkbox } from "@/components/core/Checkbox/Checkbox";
import { TextInput } from "@/components/core/TextInput/TextInput";
import { TextArea } from "@/components/core/TextArea/TextArea";
import { HStack, VStack } from "../../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";

export function Inputs() {
  const [checked, setChecked] = useState(false);

  return (
    <CoreSectionWrapper
      title="Inputs"
      display="flex"
      flexDirection="column"
      w="full"
    >
      <Card gap="10" w="full">
        <VStack alignItems="flex-start">
          <Text as="label" fontWeight="bold" htmlFor="textInput">
            Text Input Label
          </Text>
          <TextInput
            id="textInput"
            placeholder="Text Input Placeholder"
            size="md"
            w="full"
            required
          />
        </VStack>
        <VStack alignItems="flex-start">
          <Text as="label" fontWeight="bold" htmlFor="textarea">
            Text Area Label
          </Text>
          <TextArea
            id="textarea"
            placeholder="TextArea Placeholder"
            size="md"
            w="full"
            required
          />
        </VStack>
        <HStack>
          <Checkbox
            id="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            size="md"
            required
          />
          <Text as="label" fontWeight="bold" htmlFor="checkbox">
            Checkbox Label
          </Text>
        </HStack>
      </Card>
    </CoreSectionWrapper>
  );
}
