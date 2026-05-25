import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { Heading } from '@/components/core/Heading/Heading';
import { Section } from '@/components/core/Section/Section';
import { SectionHeader } from '@/components/core/SectionHeader/SectionHeader';
import { Text } from '@/components/core/Text/Text';
import { Steps } from '@/components/features/HomePage/Process/components/Steps';

export const Process = () => (
  <Section id="process" divided>
    <SectionHeader eyebrow="ENGAGEMENT">
      <Heading as="h2" textStyle="sectionTitle">
        From hello to <DisplayItalic>handover.</DisplayItalic>
      </Heading>
      <Text size="lg" color="fg.muted" alignSelf="center">
        A predictable, slow-on-purpose start. We won't write a line of code until we know what we're
        building, why, and for whom.
      </Text>
    </SectionHeader>

    <Steps />
  </Section>
);
