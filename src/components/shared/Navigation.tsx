import Link from "next/link";
import { Box, HStack, Container } from "../../../styled-system/jsx";
import Image from "next/image";
import { Button } from "../core/Button/Button";
import { Text } from "../core/Text/Text";

export const Navigation = () => {
  return (
    <HStack
      w="$full"
      p={5}
      borderBottom={"2px solid"}
      position="sticky"
      top={0}
      zIndex={9999}
      bgColor="white"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        maxWidth={{ base: "5xl" }}
        display="flex"
        justifyContent="space-between"
        w="full"
      >
        <Link href="/">
          <HStack>
            <Box position="relative" w="20" h="20">
              <Image
                src="/Logo, v4.png"
                width={200}
                height={200}
                alt="Syncity Logo"
                style={{ position: "absolute", inset: 0 }}
              />
            </Box>
            <Text
              as="h1"
              fontFamily="heading"
              fontSize="2xl"
              fontWeight="bold"
              letterSpacing="wider"
            >
              Syncity
            </Text>
          </HStack>
        </Link>
        <HStack gap={10} display={{ base: "none", md: "flex" }}>
          <Button href="/about" visual="link">
            About
          </Button>
          <Button href="/about" visual="link">
            Blog
          </Button>
          <Button href="/about" visual="link">
            Contact us
          </Button>
        </HStack>
      </Container>
    </HStack>
  );
};
