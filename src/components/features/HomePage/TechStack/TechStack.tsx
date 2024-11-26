import { Section } from "@/components/core/Section/Section";
import { Flex, styled } from "../../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";
import {
  SiTypescript,
  SiReact,
  SiAndroid,
  SiIos,
  SiFlutter,
  SiGo,
  SiSwagger,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDigitalocean,
  SiCodemagic,
  SiJira,
  SiConfluence,
  SiSlack,
  SiSentry,
  SiJest,
} from "react-icons/si";

const SIZE = 65;

const LOGOS = [
  { id: 1, Icon: SiTypescript, name: "TypeScript" },
  { id: 2, Icon: SiReact, name: "React" },
  { id: 3, Icon: SiAndroid, name: "Android" },
  { id: 4, Icon: SiIos, name: "iOS" },
  { id: 5, Icon: SiFlutter, name: "Flutter" },
  { id: 6, Icon: SiGo, name: "Go" },
  { id: 7, Icon: SiSwagger, name: "Swagger" },
  { id: 8, Icon: SiPostgresql, name: "PostgreSQL" },
  { id: 9, Icon: SiGit, name: "Git" },
  { id: 10, Icon: SiGithub, name: "GitHub" },
  { id: 11, Icon: SiDigitalocean, name: "DigitalOcean" },
  { id: 12, Icon: SiCodemagic, name: "CodeMagic" },
  { id: 13, Icon: SiJira, name: "Jira" },
  { id: 14, Icon: SiConfluence, name: "Confluence" },
  { id: 15, Icon: SiSlack, name: "Slack" },
  { id: 16, Icon: SiSentry, name: "Sentry" },
  { id: 17, Icon: SiJest, name: "Jest" },
];

export const TechStack = ({ ...restProps }) => {
  return (
    <Section pt="16" pb="6" {...restProps}>
      <Text
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        textAlign="center"
        mb="12"
      >
        Our Tech Stack
      </Text>
      <Flex
        gap={{ base: "10", sm: "16" }}
        className="group"
        maskImage="linear-gradient(to right, transparent, white 15%, white 90%, transparent)"
        color="stone.900"
        _motionSafe={{ overflowX: "hidden" }}
        _motionReduce={{ overflowX: "scroll", px: "20" }}
        pb="10"
      >
        <styled.ul
          display="flex"
          gap={{ base: "10", sm: "16" }}
          _groupHover={{ animationPlayState: "paused" }}
          _motionSafe={{ animation: "infinite-scroll" }}
          _motionReduce={{ animation: "none" }}
          maxW="none"
        >
          {LOGOS.map(({ id, Icon, name }) => (
            <styled.li
              width={{ base: SIZE / 1.2, sm: SIZE }}
              key={id}
              aria-label={name}
            >
              <Icon size="100%" />
            </styled.li>
          ))}
        </styled.ul>
        <styled.ul
          display="flex"
          gap={{ base: "10", sm: "16" }}
          aria-hidden="true"
          _groupHover={{ animationPlayState: "paused" }}
          _motionSafe={{ animation: "infinite-scroll" }}
          _motionReduce={{ animation: "none", display: "none" }}
          maxW="none"
        >
          {LOGOS.map(({ id, Icon }) => (
            <styled.li width={{ base: SIZE / 1.2, sm: SIZE }} key={id}>
              <Icon size="100%" />
            </styled.li>
          ))}
        </styled.ul>
      </Flex>
    </Section>
  );
};
