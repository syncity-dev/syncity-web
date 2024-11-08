import { GridItem } from "../../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";
import { Box } from "../../../../../styled-system/jsx";
import { Flex } from "../../../../../styled-system/jsx";
import { styled } from "../../../../../styled-system/jsx";
import { Link } from "@/components/core/Link/Link";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";

type MemberProps = {
  name: string;
  title: string;
  description: string;
  imgSrc: string | null;
  githubLink: string;
  linkedinLink: string;
};

export const Member = ({
  name,
  title,
  description,
  imgSrc,
  githubLink,
  linkedinLink,
}: MemberProps) => {
  return (
    <GridItem
      display="flex"
      textAlign="center"
      alignItems="center"
      flexDir="column"
    >
      <Avatar
        position="relative"
        rounded="full"
        w="32"
        h="32"
        mx="auto"
        mb="4"
        justifyContent="center"
        alignItems="center"
        bg="stone.200"
        shadow="xl"
        outlineOffset={0.5}
        outlineColor="brand.600"
        overflow="hidden"
        _hover={{
          translateX: "100px",
        }}
      >
        {imgSrc ? (
          <Image src={imgSrc} alt={name} fill priority sizes="(100vw, 100vh)" />
        ) : null}
      </Avatar>

      <Text as="h3" fontSize="xl" mb="2">
        {name}
      </Text>
      <Text color="stone.600" mb="1">
        {title}
      </Text>
      <Text fontSize="sm" color="stone.500" flex="1">
        {description}
      </Text>
      <Flex flexDir="row" gap="1">
        <Link
          href={githubLink}
          target="_blank"
          display="flex"
          alignItems="center"
          gap="1"
          fontSize="sm"
          color="brand.950"
          _hover={{ color: "brand.600", textDecoration: "underline" }}
          p="2"
        >
          <BsGithub size="1em" />
        </Link>
        <Link
          href={linkedinLink}
          target="_blank"
          display="flex"
          alignItems="center"
          gap="1"
          fontSize="sm"
          _hover={{ color: "sky.600" }}
          p="2"
        >
          <BsLinkedin size="1em" />
        </Link>
      </Flex>
    </GridItem>
  );
};

const Avatar = styled.button;
