import { Diamond } from '@/components/core/Diamond/Diamond';
import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { Heading } from '@/components/core/Heading/Heading';
import { Text } from '@/components/core/Text/Text';
import { STEPS } from '@/components/features/HomePage/Process/Process.data';
import { Box, Grid, HStack, Stack } from '@/styled-system/jsx';

export const Steps = () => {
  return (
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
  );
};
