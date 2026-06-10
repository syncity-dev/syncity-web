import { Mail } from 'lucide-react';

import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { Heading } from '@/components/core/Heading/Heading';
import { LinkButton } from '@/components/core/LinkButton/LinkButton';
import { Section } from '@/components/core/Section/Section';
import { Text } from '@/components/core/Text/Text';
import { COMPANY_EMAIL } from '@/constants/company';
import { styled } from '@/styled-system/jsx';

const Card = styled('div', {
  base: {
    bg: 'fg.default',
    color: 'bg.default',
    rounded: 'l4',
    px: { base: '7', md: '12' },
    py: { base: '9', md: '14' },
    display: 'grid',
    gridTemplateColumns: { base: '1fr', md: '1.5fr 1fr' },
    gap: { base: '8', md: '12' },
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    _dark: {
      bg: 'bg.muted',
      color: 'fg.default',
    },
  },
});

const RightCol = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5',
    alignItems: 'flex-start',
  },
});

export const FinalCTA = () => (
  <Section id="cta" mb="0">
    <Card>
      <div>
        <Heading as="h3" textStyle={{ base: '5xl', md: '6xl' }} lineHeight="1" color="inherit">
          Got something you'd like
          <br />
          to <DisplayItalic>build well?</DisplayItalic>
        </Heading>
        <Text size="md" mt="4" maxW="50ch" lineHeight="1.5" opacity="0.6">
          One short email is all it takes. We read every one and reply personally, even if it's not
          the right fit.
        </Text>
      </div>

      <RightCol>
        <LinkButton
          href={`mailto:${COMPANY_EMAIL}`}
          variant="solid"
          size="md"
          bg="bg.default"
          color="fg.default"
          _hover={{ bg: 'bg.muted' }}
          _dark={{
            bg: 'fg.default',
            color: 'bg.default',
            _hover: { bg: 'fg.muted' },
          }}
        >
          {COMPANY_EMAIL} <Mail />
        </LinkButton>
        <Eyebrow color="currentColor" opacity="0.75">
          No forms required · No funnels
        </Eyebrow>
      </RightCol>
    </Card>
  </Section>
);
