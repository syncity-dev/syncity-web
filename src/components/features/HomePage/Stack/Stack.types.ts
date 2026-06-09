import type { ComponentType } from 'react';

export type StackItem = {
  label: string;
  Icon: ComponentType<{ size?: number | string }>;
};

export type StackCategory = {
  heading: string;
  items: StackItem[];
};
