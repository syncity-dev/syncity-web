import { Section } from "@/components/core/Section/Section";
import { Heading } from "@/components/core/Heading/Heading";
import { ContactForm } from "./ContactForm";
import { CardBody, CardHeader, CardRoot } from "@/components/core/Card/Card";

export const ContactUs = ({ ...restProps }) => {
  return (
    <Section py="16" {...restProps}>
      <CardRoot maxW="md" mx="auto" variant="elevated">
        <CardHeader w="full">
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            textAlign="center"
            mb="6"
          >
            Contact us
          </Heading>
        </CardHeader>
        <CardBody w="full">
          <ContactForm />
        </CardBody>
      </CardRoot>
    </Section>
  );
};
