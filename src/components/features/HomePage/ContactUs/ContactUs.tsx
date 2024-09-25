import { Section } from "@/components/core/Section/Section";
import { Text } from "@/components/core/Text/Text";
import { ContactForm } from "./ContactForm";
import { PageContainer } from "@/components/shared/PageContainer";

export const ContactUs = () => {
  return (
    <Section bg="stone.200" py="16">
      <PageContainer mx="auto" px="4">
        <Text as="h2" fontSize="3xl" textAlign="center" mb="6">
          Contact us
        </Text>
        <ContactForm />
      </PageContainer>
    </Section>
  );
};
