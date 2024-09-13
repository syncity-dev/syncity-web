import { Section } from "@/components/core/Section/Section";
import { Container } from "../../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";
import { ContactForm } from "./ContactForm";

export const ContactUs = () => {
  return (
    <Section bg="stone.200" py="16">
      <Container mx="auto" px="4">
        <Text as="h2" fontSize="3xl" textAlign="center" mb="6">
          Contact us
        </Text>
        <ContactForm />
      </Container>
    </Section>
  );
};
