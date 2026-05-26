import { ArrowRight } from 'lucide-react';

import { ButtonGroup } from '@/components/core/Button/Button';
import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { HairlineGrid } from '@/components/core/HairlineGrid/HairlineGrid';
import { Heading } from '@/components/core/Heading/Heading';
import { Icon } from '@/components/core/Icon/Icon';
import { LinkButton } from '@/components/core/LinkButton/LinkButton';
import { Section } from '@/components/core/Section/Section';
import { Text } from '@/components/core/Text/Text';
import { IsoDeco } from '@/components/features/HomePage/Hero/components/IsoDeco';
import { Stats } from '@/components/features/HomePage/Hero/components/Stats';
import { TeamMembers } from '@/components/features/HomePage/Hero/components/TeamMembers';
import { Box, HStack } from '@/styled-system/jsx';

export const Hero = () => {
  return (
    <Section position="relative">
      <HairlineGrid />
      <Box position="relative" overflow="hidden">
        <Box position="relative">
          <IsoDeco />

          <Heading as="h1" textStyle="display" mb={{ base: '7', md: '10' }}>
            Software
            <br />
            for the <DisplayItalic>long</DisplayItalic> haul.
          </Heading>

          <Text size="lg" color="fg.muted" maxW="lg" mb={{ base: '8', md: '9' }}>
            Syncity is a small, independent consultancy. We embed with founders and product teams on
            multi-year engagements — building software that outlasts trends, fads, and rewrites.
          </Text>

          <ButtonGroup flexWrap="wrap" mb={{ base: '10', md: '12' }}>
            <LinkButton href="#contact" variant="solid" size="lg">
              Start a project{' '}
              <Icon asChild>
                <ArrowRight />
              </Icon>
            </LinkButton>
            <LinkButton href="#team" variant="surface" size="lg">
              Meet the team
            </LinkButton>
          </ButtonGroup>

          <HStack gap="4">
            <TeamMembers />
            <Box as="span" fontFamily="body" fontSize="sm" color="fg.muted" lineHeight="1.4">
              Three senior consultants. One conversation away.
            </Box>
          </HStack>
        </Box>
      </Box>

      <Stats />
    </Section>
  );
};
