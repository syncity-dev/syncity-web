import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { HairlineGrid } from '@/components/core/HairlineGrid/HairlineGrid';
import { HERO_STATS } from '@/components/features/HomePage/Hero/Hero.constants';
import type { HTMLStyledProps } from '@/styled-system/jsx';
import { Box, HStack, Stack } from '@/styled-system/jsx';

type StatsProps = Omit<HTMLStyledProps<'div'>, 'as'>;

export const Stats = (props: StatsProps) => {
  return (
    <Box as="dl" mt={{ base: '10', md: '14' }} {...props}>
      <HairlineGrid gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}>
        {HERO_STATS.map(({ num, unit, label }) => (
          <Stack
            as="div"
            key={label}
            bg="bg.default"
            flexDirection="column-reverse"
            gap="4"
            px="5"
            py="8"
          >
            <Box as="dt">
              <Eyebrow>{label}</Eyebrow>
            </Box>
            <Box as="dd" m="0">
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
            </Box>
          </Stack>
        ))}
      </HairlineGrid>
    </Box>
  );
};
