import { iconButton } from '@/components/core/IconButton/IconButton.recipe';
import {
  MenuContent,
  MenuItemText,
  MenuPositioner,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from '@/components/core/Menu/Menu';
import {
  OPTIONS,
  resolvedIcon,
} from '@/components/shared/ColorModeSwitcher/ColorModeSwitcher.constants';
import { useColorModeSwitcher } from '@/components/shared/ColorModeSwitcher/ColorModeSwitcher.hooks';
import { css } from '@/styled-system/css';
import type { ColorModePreference } from '@/utils/colorMode';

export const ColorModeSwitcher = () => {
  const {
    preference,
    resolved,
    setPreference,
    committedPreferenceRef,
    onOpenChange,
    onHighlightChange,
  } = useColorModeSwitcher();
  const TriggerIcon = resolvedIcon[resolved];

  return (
    <MenuRoot onOpenChange={onOpenChange} onHighlightChange={onHighlightChange}>
      <MenuTrigger className={iconButton({ size: 'md' })} aria-label="Toggle color mode">
        <TriggerIcon />
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
