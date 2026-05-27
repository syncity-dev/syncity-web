import { Code, Mail, Users, Workflow, Wrench } from 'lucide-react';

export const NAV_LINKS = [
  { id: 'work', label: 'Work', href: '#work', Icon: Wrench },
  { id: 'team', label: 'Team', href: '#team', Icon: Users },
  { id: 'process', label: 'Process', href: '#process', Icon: Workflow },
  { id: 'stack', label: 'Stack', href: '#stack', Icon: Code },
  { id: 'contact', label: 'Contact', href: '#contact', Icon: Mail },
] as const;
