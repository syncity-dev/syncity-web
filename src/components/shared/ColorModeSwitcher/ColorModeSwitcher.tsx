import {
  Root as MenuRoot,
  Trigger as MenuTrigger,
  Positioner as MenuPositioner,
  Content as MenuContent,
  RadioItemGroup as MenuRadioItemGroup,
  RadioItem as MenuRadioItem,
  ItemText as MenuItemText,
} from "@/components/core/Menu/Menu";
import { useRef } from "react";
import { useColorModeSwitcher } from "@/components/shared/ColorModeSwitcher/ColorModeSwitcher.hooks";
import type { ColorModePreference, ResolvedColorMode } from "@/utils/colorMode";
import { applyColorMode, resolveColorMode } from "@/utils/colorMode";
import { css } from "@/styled-system/css";
import {
  OPTIONS,
  resolvedIcon,
} from "@/components/shared/ColorModeSwitcher/ColorModeSwitcher.constants";

export const ColorModeSwitcher = () => {
  const {
    preference,
    resolved,
    setPreference,
    committedPreference,
    onOpenChange,
    onHighlightChange,
  } = useColorModeSwitcher();
  const TriggerIcon = resolvedIcon[resolved];

  return (
    <MenuRoot onOpenChange={onOpenChange} onHighlightChange={onHighlightChange}>
      <MenuTrigger
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          w: "9",
          h: "9",
          rounded: "md",
          color: "fg.muted",
          cursor: "pointer",
          border: "none",
          bg: "transparent",
          fontSize: "md",
          transition: "colors",
          _hover: { bg: "bg.subtle", color: "fg.default" },
        })}
        aria-label="Toggle color mode"
      >
        <TriggerIcon />
      </MenuTrigger>

      <MenuPositioner>
        <MenuContent>
          <MenuRadioItemGroup
            value={preference}
            onValueChange={({ value }) => {
              committedPreference.current = value as ColorModePreference;
              setPreference(value as ColorModePreference);
            }}
          >
            {OPTIONS.map(({ value, label, Icon }) => (
              <MenuRadioItem
                key={value}
                value={value}
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "2",
                  px: "3",
                  py: "2",
                  rounded: "sm",
                  fontSize: "sm",
                  cursor: "pointer",
                  color: "fg.muted",
                  outline: "none",
                  _hover: { bg: "bg.subtle", color: "fg.default" },
                  _highlighted: { bg: "bg.subtle", color: "fg.default" },
                  "&[data-state=checked]": { color: "accent.default" },
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
