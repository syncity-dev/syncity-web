import { BsGithub, BsLinkedin } from 'react-icons/bs';

import { Link } from '@/components/core/Link/Link';
import { Logo } from '@/components/core/Logo/Logo';
import { Text } from '@/components/core/Text/Text';
import { Subsection } from '@/components/shared/Footer/components/Subsection';
import { Box, Grid } from '@/styled-system/jsx';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      pt={{ base: '10', md: '16' }}
      pb={{ base: '2', md: '4' }}
      borderTopWidth="1px"
      borderTopStyle="solid"
      borderTopColor="border.default"
    >
      <Box maxWidth="7xl" mx="auto" px={{ base: '4', md: '7' }}>
        <Grid
          gridTemplateColumns={{ base: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          gap={{ base: '10', md: '20' }}
          columnGap={{ base: '14', md: '20' }}
        >
          <Box>
            <Logo size="md" />
            <Text size="sm" color="fg.muted" mt="4" maxWidth="30ch">
              A small, independent consultancy building software for the long haul.
            </Text>
          </Box>

          <Subsection title="Site">
            <Link fontSize="sm" href="#work" visual="plain">
              How We Work
            </Link>
            <Link fontSize="sm" href="#team" visual="plain">
              Team
            </Link>
            <Link fontSize="sm" href="#process" visual="plain">
              Process
            </Link>
            <Link fontSize="sm" href="#stack" visual="plain">
              Stack
            </Link>
          </Subsection>

          <Subsection title="Contact">
            <Link fontSize="sm" href="mailto:team@syncity.dev" visual="plain">
              team@syncity.dev
            </Link>
            <Link
              href="https://github.com/syncity-dev"
              visual="plain"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap="2"
              fontSize="sm"
            >
              GitHub <BsGithub size="1em" />
            </Link>
            {/* LinkedIn URL TBD */}
            <Link fontSize="sm" href="#" visual="plain" display="flex" alignItems="center" gap="2">
              LinkedIn <BsLinkedin size="1em" />
            </Link>
          </Subsection>

          <Subsection title="Studio">
            <Text size="sm" color="fg.muted" _hover={{ color: 'accent.default' }}>
              Zagreb, Croatia
            </Text>
            <Text size="sm" color="fg.muted" _hover={{ color: 'accent.default' }}>
              CET (UTC+1)
            </Text>
          </Subsection>
        </Grid>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap="2"
          py="5"
          borderTopWidth="1px"
          borderTopStyle="solid"
          borderTopColor="border.default"
          mt="14"
        >
          <Text fontSize="xs" color="fg.muted" letterSpacing="wide">
            © {currentYear} Syncity Development d.o.o. · All rights reserved.
          </Text>
          <Text fontSize="xs" color="fg.muted" letterSpacing="wide">
            Built to last.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
