import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { HairlineGrid } from '@/components/core/HairlineGrid/HairlineGrid';
import { Heading } from '@/components/core/Heading/Heading';
import { Section } from '@/components/core/Section/Section';
import { Text } from '@/components/core/Text/Text';
import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const SectionHeader = styled('div', {
  base: {
    display: 'grid',
    gap: '10',
    mb: '10',
    gridTemplateColumns: '1fr',
    md: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
});

const Card = styled('div', {
  base: {
    position: 'relative',
    px: { base: '0', md: '10' },
    py: { base: '4', md: '10' },
    bg: 'bg.default',
  },
});

const glyphClass = css({
  position: 'absolute',
  top: '8',
  right: '8',
  width: '8',
  height: '8',
  color: 'accent.default',
  opacity: '0.85',
});

const EmbedGlyph = () => (
  <svg className={glyphClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="26" height="26" stroke="currentColor" strokeWidth="1.5" rx="2" />
    <rect x="9" y="9" width="14" height="14" fill="currentColor" />
  </svg>
);

const OwnGlyph = () => (
  <svg className={glyphClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M4 16 L16 4 L28 16 L16 28 Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 12 L20 16 L16 20 L12 16 Z" fill="currentColor" />
  </svg>
);

const StayGlyph = () => (
  <svg className={glyphClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 8 V16 L22 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const italicAccent = css({
  fontFamily: 'heading',
  fontStyle: 'italic',
  fontWeight: 'inherit',
  color: 'accent.default',
});

export const Principles = () => (
  <Section id="work" py={{ base: '16', md: '20' }}>
    <SectionHeader>
      <div>
        <Eyebrow mb="3">HOW WE WORK</Eyebrow>
        <Heading as="h2" textStyle="sectionTitle">
          Built to stay, <em className={italicAccent}>not</em> to ship & run.
        </Heading>
      </div>
      <Text size="lg" color="fg.muted" alignSelf="center">
        Most agencies optimize for velocity. We optimize for the codebase you'll be working in three
        years from now — and the team you'll be hiring around it.
      </Text>
    </SectionHeader>

    <HairlineGrid gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}>
      <Card>
        <Eyebrow mb="2">EMBED</Eyebrow>
        <EmbedGlyph />
        <Heading as="h3" textStyle="2xl" mt="9" mb="3">
          Embedded, not
          <br />
          at arm's length.
        </Heading>
        <Text size="md" color="fg.muted">
          We sit inside your team — same Slack, same standups, same calendar. No tickets thrown over
          a fence; no monthly status decks.
        </Text>
      </Card>

      <Card>
        <Eyebrow mb="2">OWN</Eyebrow>
        <OwnGlyph />
        <Heading as="h3" textStyle="2xl" mt="9" mb="3">
          Senior end-to-end.
          <br />
          No handoffs.
        </Heading>
        <Text size="md" color="fg.muted">
          The person who designs your data model writes the migration. The person who writes the API
          ships the iOS client. Less translation loss, fewer surface seams.
        </Text>
      </Card>

      <Card>
        <Eyebrow mb="2">STAY</Eyebrow>
        <StayGlyph />
        <Heading as="h3" textStyle="2xl" mt="9" mb="3">
          Long horizons,
          <br />
          compound returns.
        </Heading>
        <Text size="md" color="fg.muted">
          Engagements run 12–36 months. We say no to projects we can't commit to — so the ones we
          say yes to actually compound.
        </Text>
      </Card>
    </HairlineGrid>
  </Section>
);
