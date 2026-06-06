import { Terminal } from 'lucide-react';
import type { ComponentType } from 'react';
import {
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGo,
  SiJavascript,
  SiKotlin,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSentry,
  SiSpringboot,
  SiSwift,
  SiTypescript,
} from 'react-icons/si';

import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { HairlineGrid } from '@/components/core/HairlineGrid/HairlineGrid';
import { Heading } from '@/components/core/Heading/Heading';
import { Section } from '@/components/core/Section/Section';
import { SectionHeader } from '@/components/core/SectionHeader/SectionHeader';
import { Text } from '@/components/core/Text/Text';
import { styled } from '@/styled-system/jsx';
import { textTransition } from '@/theme/motion/transitions';

type StackItem = {
  label: string;
  Icon: ComponentType<{ size?: number | string }>;
};

type StackCategory = {
  heading: string;
  items: StackItem[];
};

const STACK_CATEGORIES: StackCategory[] = [
  {
    heading: 'MOBILE',
    items: [
      { label: 'Flutter / Dart', Icon: SiFlutter },
      { label: 'React Native', Icon: SiReact },
      { label: 'iOS (Swift)', Icon: SiSwift },
      { label: 'Kotlin (Android)', Icon: SiKotlin },
    ],
  },
  {
    heading: 'WEB FRONTEND',
    items: [
      { label: 'React', Icon: SiReact },
      { label: 'Next.js', Icon: SiNextdotjs },
      { label: 'TypeScript', Icon: SiTypescript },
      { label: 'JavaScript', Icon: SiJavascript },
    ],
  },
  {
    heading: 'BACKEND',
    items: [
      { label: 'Spring Boot / Kotlin', Icon: SiSpringboot },
      { label: 'Go', Icon: SiGo },
      { label: 'Node.js', Icon: SiNodedotjs },
      { label: 'PostgreSQL', Icon: SiPostgresql },
    ],
  },
  {
    heading: 'TOOLING & AI',
    items: [
      { label: 'Claude Code', Icon: Terminal },
      { label: 'Sentry', Icon: SiSentry },
      { label: 'Firebase', Icon: SiFirebase },
      { label: 'Git / GitHub', Icon: SiGithub },
    ],
  },
];

const CategoryCell = styled('div', {
  base: {
    bg: 'bg.default',
    pt: '7',
    px: '6',
    pb: '8',
  },
});

const ItemRow = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '2',
    py: '7px',
    color: 'fg.default',
    cursor: 'default',
    ...textTransition,
    textStyle: 'sm',
    _hover: {
      color: 'accent.default',
    },
  },
});

export const Stack = () => (
  <Section id="stack">
    <SectionHeader eyebrow="TECH STACK">
      <Heading as="h2" textStyle="sectionTitle">
        Tools we love. <DisplayItalic>Code we trust.</DisplayItalic>
      </Heading>
      <Text size="lg" color="fg.muted">
        We pick boring, durable technology. Languages and frameworks with a long half-life — so the
        codebase still reads cleanly five years from now.
      </Text>
    </SectionHeader>

    <HairlineGrid gridTemplateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
      {STACK_CATEGORIES.map((cat) => (
        <CategoryCell key={cat.heading}>
          <Eyebrow mb="4">{cat.heading}</Eyebrow>
          {cat.items.map((item) => (
            <ItemRow key={item.label}>
              <item.Icon size={16} aria-hidden />
              {item.label}
            </ItemRow>
          ))}
        </CategoryCell>
      ))}
    </HairlineGrid>
  </Section>
);
