import { useState } from "react";
import { CoreSectionWrapper } from "../CoreSectionWrapper/CoreSectionWrapper";
import { CardBody, CardRoot } from "@/components/core/Card/Card";
import { Checkbox } from "@/components/core/Checkbox/Checkbox";
import { TextInput } from "@/components/core/TextInput/TextInput";
import { TextArea } from "@/components/core/TextArea/TextArea";
import { HStack, VStack } from "@/styled-system/jsx";
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
      <CardRoot gap="10" w="full">
        <CardBody pt="6">
          <VStack alignItems="flex-start" gap="4" w="full">
            <VStack w="full" alignItems="flex-start">
              <Text as="label" htmlFor="textInput">
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
            <VStack w="full" alignItems="flex-start">
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
          </VStack>
        </CardBody>
      </CardRoot>
    </CoreSectionWrapper>
  );
}
