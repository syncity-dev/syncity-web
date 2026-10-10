import { Code, Mail, Newspaper, Users, Workflow, Wrench } from 'lucide-react';

// Section links start with `/` so they also work from the blog pages.
export const NAV_LINKS = [
  { id: 'work', label: 'Work', href: '/#work', Icon: Wrench },
  { id: 'team', label: 'Team', href: '/#team', Icon: Users },
  { id: 'process', label: 'Process', href: '/#process', Icon: Workflow },
  { id: 'stack', label: 'Stack', href: '/#stack', Icon: Code },
  { id: 'contact', label: 'Contact', href: '/#contact', Icon: Mail },
  { id: 'blog', label: 'Blog', href: '/blog', Icon: Newspaper },
] as const;
