import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { Heading } from '@/components/core/Heading/Heading';
import { Section } from '@/components/core/Section/Section';
import { SectionHeader } from '@/components/core/SectionHeader/SectionHeader';
import { Text } from '@/components/core/Text/Text';
import { Categories } from '@/components/features/HomePage/Stack/components/Categories';

export const Stack = () => (
  <Section id="stack">
    <SectionHeader eyebrow="TECH STACK">
      <Heading as="h2" textStyle="sectionTitle">
        Tools we love. <DisplayItalic>Code we trust.</DisplayItalic>
      </Heading>
      <Text size="lg" color="fg.muted">
        We pick boring, durable technology. Languages and frameworks with a long half-life — so the
        codebase still reads cleanly five years from now.
      </Text>
    </SectionHeader>
    <Categories />
  </Section>
);
