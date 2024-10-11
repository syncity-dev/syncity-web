import { Section } from "@/components/core/Section/Section";
import { Text } from "@/components/core/Text/Text";
import { ContactForm } from "./ContactForm";
import { PageContainer } from "@/components/shared/PageContainer";
import { Card } from "@/components/core/Card/Card";

export const ContactUs = () => {
  return (
    <Section py="16" bg="white">
      <PageContainer>
        <Card border="1px solid" maxW="md" mx="auto" rounded="lg" shadow="md">
          <Text as="h2" fontSize="3xl" textAlign="center" mb="6">
            Contact us
          </Text>
          <ContactForm />
        </Card>
      </PageContainer>
    </Section>
  );
};
