import { Terminal } from 'lucide-react';
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

import type { StackCategory } from '@/components/features/HomePage/Stack/Stack.types';

export const STACK_CATEGORIES: StackCategory[] = [
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
