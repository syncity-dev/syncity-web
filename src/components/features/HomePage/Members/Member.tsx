import { GridItem } from "@/styled-system/jsx";
import { Text } from "@/components/core/Text/Text";
import { Heading } from "@/components/core/Heading/Heading";
import { Flex, styled } from "@/styled-system/jsx";
import { Link } from "@/components/core/Link/Link";
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
        bg="slate.4"
        shadow="xl"
        outlineOffset={0.5}
        outlineColor="accent.emphasis"
        overflow="hidden"
        _hover={{
          translateX: "100px",
        }}
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={name}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        ) : null}
      </Avatar>

      <Heading as="h3" fontSize="xl" mb="2">
        {name}
      </Heading>
      <Text color="fg.muted" mb="1">
        {title}
      </Text>
      <Text fontSize="sm" color="fg.muted" flex="1">
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
          color="blue.12"
          _hover={{ color: "accent.emphasis", textDecoration: "underline" }}
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
          _hover={{ color: "sky.11" }}
          p="2"
        >
          <BsLinkedin size="1em" />
        </Link>
      </Flex>
    </GridItem>
  );
};

const Avatar = styled.button;
