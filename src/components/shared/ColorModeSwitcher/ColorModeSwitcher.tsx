import { Moon, Sun } from 'lucide-react';

import { Icon } from '@/components/core/Icon/Icon';
import { IconButton } from '@/components/core/IconButton/IconButton';
import {
  MenuContent,
  MenuItemText,
  MenuPositioner,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from '@/components/core/Menu/Menu';
import { OPTIONS } from '@/components/shared/ColorModeSwitcher/ColorModeSwitcher.constants';
import { useColorModeSwitcher } from '@/components/shared/ColorModeSwitcher/ColorModeSwitcher.hooks';
import { css } from '@/styled-system/css';
import type { ColorModePreference } from '@/utils/colorMode';

export const ColorModeSwitcher = () => {
  const { preference, setPreference, committedPreferenceRef, onOpenChange, onHighlightChange } =
    useColorModeSwitcher();

  return (
    <MenuRoot onOpenChange={onOpenChange} onHighlightChange={onHighlightChange}>
      <MenuTrigger asChild aria-label="Toggle color mode">
        <IconButton variant="outline" size="lg">
          <Icon asChild display="block" _dark={{ display: 'none' }}>
            <Sun />
          </Icon>
          <Icon asChild display="none" _dark={{ display: 'block' }}>
            <Moon />
          </Icon>
        </IconButton>
      </MenuTrigger>

      <MenuPositioner>
        <MenuContent>
          <MenuRadioItemGroup
            value={preference}
            onValueChange={({ value }) => {
              committedPreferenceRef.current = value as ColorModePreference;
              setPreference(value as ColorModePreference);
            }}
          >
            {OPTIONS.map(({ value, label, Icon }) => (
              <MenuRadioItem
                key={value}
                value={value}
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2',
                  px: '3',
                  py: '2',
                  rounded: 'sm',
                  fontSize: 'sm',
                  cursor: 'pointer',
                  color: 'fg.muted',
                  outline: 'none',
                  _hover: { bg: 'bg.subtle', color: 'fg.default' },
                  _highlighted: { bg: 'bg.subtle', color: 'fg.default' },
                  '&[data-state=checked]': { color: 'accent.default' },
                })}
              >
                <Icon />
                <MenuItemText fontWeight="bold">{label}</MenuItemText>
              </MenuRadioItem>
            ))}
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuPositioner>
    </MenuRoot>
  );
};
