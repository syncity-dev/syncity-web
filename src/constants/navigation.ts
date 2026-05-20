import { BookOpen, Code, Mail } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 1, label: 'About', path: '/about', Icon: Code },
  { id: 2, label: 'Blog', path: '/blog', Icon: BookOpen },
  { id: 3, label: 'Contact', path: '/contact', Icon: Mail },
];

export const NAV_LINKS = [
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'stack', label: 'Stack', href: '#stack' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;
