import { VStack } from "../../../../../styled-system/jsx";
import { Form } from "@/components/core/Form/Form";
import { TextInput } from "@/components/core/TextInput/TextInput";
import { TextArea } from "@/components/core/TextArea/TextArea";
import { Text } from "@/components/core/Text/Text";
import { Button } from "@/components/core/Button/Button";

export const ContactForm = () => {
  return (
    <Form maxW="md" mx="auto" spaceY="5">
      <VStack alignItems="flex-start" gap="0.5">
        <Text as="label" htmlFor="name" fontWeight="semibold">
          Name
        </Text>
        <TextInput
          type="text"
          id="name"
          placeholder="Enter your name"
          w="full"
          required
        />
      </VStack>
      <VStack alignItems="flex-start" gap="0.5">
        <Text as="label" htmlFor="email" fontWeight="semibold">
          Email
        </Text>
        <TextInput
          type="email"
          id="email"
          placeholder="Enter your email"
          w="full"
          required
        />
      </VStack>
      <VStack alignItems="flex-start" gap="0.5">
        <Text as="label" htmlFor="textInput" fontWeight="semibold">
          Message
        </Text>
        <TextArea
          id="reason"
          placeholder="Enter your message"
          w="full"
          required
        />
      </VStack>
      <Button type="submit" w="full">
        Send Message
      </Button>
    </Form>
  );
};
