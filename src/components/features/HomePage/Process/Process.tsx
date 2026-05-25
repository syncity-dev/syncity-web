import { Diamond } from '@/components/core/Diamond/Diamond';
import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { Heading } from '@/components/core/Heading/Heading';
import { Section } from '@/components/core/Section/Section';
import { SectionHeader } from '@/components/core/SectionHeader/SectionHeader';
import { Text } from '@/components/core/Text/Text';
import { STEPS } from '@/components/features/HomePage/Process/Process.data';
import { Box, Grid, HStack, Stack } from '@/styled-system/jsx';

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

    <Box>
      {STEPS.map(({ eyebrow, title, body, meta }) => (
        <Grid
          key={eyebrow}
          gridTemplateColumns="60px 1fr"
          gap="6"
          py="7"
          borderBottomWidth="1px"
          borderBottomStyle="solid"
          borderBottomColor="border.default"
          _last={{ borderBottomWidth: '0' }}
        >
          <Box pt="0.5">
            <Eyebrow>{eyebrow}</Eyebrow>
          </Box>
          <Stack gap="3">
            <Heading as="h4" textStyle="xl">
              {title}
            </Heading>
            <Text size="md" color="fg.muted">
              {body}
            </Text>
            <HStack gap="2" alignItems="center">
              <Diamond variant="solid" />
              <Eyebrow>{meta}</Eyebrow>
            </HStack>
          </Stack>
        </Grid>
      ))}
    </Box>
  </Section>
);
