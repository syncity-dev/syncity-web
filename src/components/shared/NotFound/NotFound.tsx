import { Button } from '@/components/core/Button/Button';
import { Heading } from '@/components/core/Heading/Heading';
import { Text } from '@/components/core/Text/Text';
import { VStack } from '@/styled-system/jsx';

export const NotFound = () => {
  return (
    <VStack flex="1" justifyContent="center" alignItems="center" gap="6" textAlign="center" px="6">
      <Text textStyle="4xl" color="accent.default" fontFamily="heading">
        404
      </Text>
      <VStack gap="2" alignItems="center">
        <Heading as="h1">Page not found</Heading>
        <Text color="fg.muted" maxW="sm">
          The page you're looking for doesn't exist or has been moved.
        </Text>
      </VStack>
      <Button visual="solid" color="accent" href="/">
        Go home
      </Button>
    </VStack>
  );
};
