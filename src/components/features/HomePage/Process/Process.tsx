import { Diamond } from '@/components/core/Diamond/Diamond';
import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { Heading } from '@/components/core/Heading/Heading';
import { Section } from '@/components/core/Section/Section';
import { SectionHeader } from '@/components/core/SectionHeader/SectionHeader';
import { Text } from '@/components/core/Text/Text';
import { Box, Grid, HStack, Stack } from '@/styled-system/jsx';

const STEPS = [
  {
    eyebrow: 'STEP / 01',
    title: 'Intro & scoping call.',
    body: 'We spend an hour on your product, your team, and the problem in front of you. If there is mutual fit, we outline scope, timeline, and a rough cost range before anything is signed.',
    meta: 'WEEK 0 · 1 CALL',
  },
  {
    eyebrow: 'STEP / 02',
    title: 'Two-week discovery.',
    body: 'We go deep on your codebase, your constraints, and your next twelve months. The output is a written brief and a project roadmap — the document that anchors every decision that follows.',
    meta: 'WEEK 1–2 · BRIEF + ROADMAP',
  },
  {
    eyebrow: 'STEP / 03',
    title: 'Embed & build.',
    body: 'We join your team on Slack, attend standups, and ship production code. You get a senior engineer who knows your codebase as well as anyone in-house — without the overhead of a full-time hire.',
    meta: 'MONTH 1–18 · BUILD',
  },
  {
    eyebrow: 'STEP / 04',
    title: 'Handover & care.',
    body: 'When the engagement closes, we document what we built, transfer all context, and stay available for questions. The goal is a codebase your team can own confidently.',
    meta: 'MONTH 18+ · HANDOVER',
  },
] as const;

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
