import { LinkButton } from '@/components/core/LinkButton/LinkButton';
import type { NAV_ITEMS } from '@/constants/navigation';
import type { HstackProps, VstackProps } from '@/styled-system/jsx';
import { HStack, VStack } from '@/styled-system/jsx';
import type { Size } from '@/types/core';

type NavItem = (typeof NAV_ITEMS)[number];

type NavItemsProps = HstackProps &
  VstackProps & {
    orientation?: 'vertical' | 'horizontal';
    haveIcons?: boolean;
    size?: Size;
  };

export const NavItems = ({
  orientation = 'horizontal',
  haveIcons = false,
  size = 'md',
  ...restProps
}: NavItemsProps) => {
  const Stack = orientation === 'vertical' ? VStack : HStack;
  const navItems: NavItem[] | [] = [];

  return (
    <Stack {...restProps}>
      {navItems?.map(({ id, label, path, Icon }) => (
        <LinkButton key={id} href={path} variant="plain" size={size} gap="2.5" w="fit">
          {haveIcons ? <Icon /> : null}
          {label}
        </LinkButton>
      ))}
    </Stack>
  );
};
