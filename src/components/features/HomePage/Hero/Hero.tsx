import { Button } from '@/components/core/Button/Button';
import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { HairlineGrid } from '@/components/core/HairlineGrid/HairlineGrid';
import { Heading } from '@/components/core/Heading/Heading';
import { Section } from '@/components/core/Section/Section';
import { HERO_STATS } from '@/components/features/HomePage/Hero/Hero.constants';
import { IsoDeco } from '@/components/features/HomePage/Hero/IsoDeco';
import { teamMembers } from '@/constants/team';
import { Box, Grid, HStack, Stack, styled } from '@/styled-system/jsx';

const StyledImg = styled('img');

export const Hero = () => {
  return (
    <Section overflow="hidden" position="relative">
      <HairlineGrid />

      <Box position="relative">
        <IsoDeco />

        <Heading
          as="h1"
          fontFamily="heading"
          fontWeight="bold"
          fontSize={{ base: '5xl', md: '8xl', lg: '9xl' }}
          lineHeight="0.95"
          letterSpacing="-0.01em"
          color="fg.default"
          mb={{ base: '7', md: '10' }}
        >
          Software
          <br />
          for the <DisplayItalic>long</DisplayItalic> haul.
        </Heading>

        <Box
          as="p"
          fontFamily="body"
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight="1.55"
          color="fg.muted"
          maxW="lg"
          mb={{ base: '8', md: '9' }}
        >
          Syncity is a small, independent consultancy. We embed with founders and product teams on
          multi-year engagements — building software that outlasts trends, fads, and rewrites.
        </Box>

        <HStack gap="3" flexWrap="wrap" mb={{ base: '10', md: '12' }}>
          <Button href="#contact" visual="solid" size="lg">
            Start a project →
          </Button>
          <Button href="#team" visual="surface" color="gray" size="lg">
            Meet the team
          </Button>
        </HStack>

        <HStack gap="4" mb={{ base: '16', md: '22' }}>
          <HStack gap="0">
            {teamMembers.map((member, i) => (
              <StyledImg
                key={member.id}
                src={member.imgSrc}
                alt={member.name}
                w="8"
                h="8"
                rounded="full"
                objectFit="cover"
                borderWidth="2px"
                borderStyle="solid"
                borderColor="bg.default"
                ml={i === 0 ? '0' : '-2.5'}
                position="relative"
                zIndex={teamMembers.length - i}
              />
            ))}
          </HStack>
          <Box as="span" fontFamily="body" fontSize="sm" color="fg.muted" lineHeight="1.4">
            Three senior consultants. One direct conversation away.
          </Box>
        </HStack>

        <Grid
          gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
          borderTopWidth="1px"
          borderTopStyle="solid"
          borderTopColor="border.default"
          borderBottomWidth="1px"
          borderBottomStyle="solid"
          borderBottomColor="border.default"
          bg="bg.default"
          mt="24"
        >
          {HERO_STATS.map(({ num, unit, label }, i) => (
            <Stack
              key={label}
              gap="4"
              px="5"
              py="8"
              borderRightWidth="1px"
              borderRightStyle="solid"
              borderRightColor="border.default"
              borderBottomWidth={{ base: i < 2 ? '1px' : '0', md: '0' }}
              borderBottomStyle="solid"
              borderBottomColor="border.default"
              _last={{ borderRightWidth: '0' }}
            >
              <HStack gap="1" alignItems="baseline">
                <Box
                  as="span"
                  fontFamily="heading"
                  fontWeight="bold"
                  fontSize="4xl"
                  letterSpacing="-0.02em"
                  lineHeight="1"
                  color="fg.default"
                >
                  {num}
                </Box>
                {unit && (
                  <Box
                    as="span"
                    fontFamily="heading"
                    fontSize="xl"
                    color="fg.subtle"
                    lineHeight="1"
                  >
                    {unit}
                  </Box>
                )}
              </HStack>
              <Box
                as="span"
                fontFamily="body"
                fontSize="xs"
                textTransform="uppercase"
                fontWeight="medium"
                color="fg.muted"
                letterSpacing="wider"
              >
                {label}
              </Box>
            </Stack>
          ))}
        </Grid>
      </Box>
    </Section>
  );
};
