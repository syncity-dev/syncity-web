import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { Box, VStack } from '@/styled-system/jsx';

export const InfoRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <Box
    borderTopWidth="1px"
    borderColor="border.default"
    pt="6"
    _first={{ borderTopWidth: '0', pt: '0' }}
  >
    <VStack alignItems="flex-start" gap="1.5">
      <Eyebrow>{label}</Eyebrow>
      {children}
    </VStack>
  </Box>
);
