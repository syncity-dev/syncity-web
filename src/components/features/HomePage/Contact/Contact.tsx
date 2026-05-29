import { CardBody, CardRoot } from '@/components/core/Card/Card';
import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { Heading } from '@/components/core/Heading/Heading';
import { Link } from '@/components/core/Link/Link';
import { Section } from '@/components/core/Section/Section';
import { SectionHeader } from '@/components/core/SectionHeader/SectionHeader';
import { Text } from '@/components/core/Text/Text';
import { ContactForm } from '@/components/features/HomePage/Contact/components/ContactForm';
import { InfoRow } from '@/components/features/HomePage/Contact/components/InfoRow';
import { Ping } from '@/components/features/HomePage/Contact/components/Ping';
import { Grid, HStack } from '@/styled-system/jsx';

export const Contact = () => (
  <Section id="contact">
    <SectionHeader eyebrow="Get In Touch">
      <Heading as="h2" textStyle="sectionTitle">
        Let's see if we're <DisplayItalic>a fit.</DisplayItalic>
      </Heading>
      <Text size="lg" color="fg.muted">
        Tell us a little about your team and the project. We answer every email personally — usually
        within 48 hours.
      </Text>
    </SectionHeader>

    <Grid gridTemplateColumns={{ base: '1fr', md: '1.1fr 0.9fr' }} gap="12">
      <CardRoot variant="outline" size="lg">
        <CardBody pt="8" justifyContent="center">
          <ContactForm />
        </CardBody>
      </CardRoot>

      <CardRoot variant="outline" size="lg" flexGrow="1">
        <CardBody pt="8" gap="6">
          <InfoRow label="Email">
            <Link href="mailto:team@syncity.dev" fontWeight="medium">
              team@syncity.dev
            </Link>
          </InfoRow>
          <InfoRow label="Response time">
            <HStack gap="2">
              <Ping />
              <Text fontWeight="medium">Usually within 48 hours</Text>
            </HStack>
          </InfoRow>
          <InfoRow label="Based in">
            <Text fontWeight="medium">Zagreb, Croatia · CET (UTC+1)</Text>
          </InfoRow>
          <InfoRow label="Not a fit for">
            <Text fontSize="sm" color="fg.muted" lineHeight="relaxed">
              Two-week sprints, design-only projects, single-feature add-ons, or anything you'd put
              on Upwork.
            </Text>
          </InfoRow>
        </CardBody>
      </CardRoot>
    </Grid>
  </Section>
);
