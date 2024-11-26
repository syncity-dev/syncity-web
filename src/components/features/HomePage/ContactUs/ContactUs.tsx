import { Section } from "@/components/core/Section/Section";
import { Text } from "@/components/core/Text/Text";
import { ContactForm } from "./ContactForm";
import { Card } from "@/components/core/Card/Card";

export const ContactUs = ({ ...restProps }) => {
  return (
    <Section py="16" {...restProps}>
      <Card
        border="1px solid"
        maxW="md"
        mx="auto"
        rounded="lg"
        shadow="md"
        p={{ base: "4", sm: "8" }}
      >
        <Text
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          textAlign="center"
          mb="6"
        >
          Contact us
        </Text>
        <ContactForm />
      </Card>
    </Section>
  );
};
