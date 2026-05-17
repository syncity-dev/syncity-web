import { Menu as ReactMenu, useMenuItemContext } from '@ark-ui/react/menu';
import { Check, ChevronDown } from 'lucide-react';
import { type ComponentProps, forwardRef } from 'react';

import { createStyleContext, type HTMLStyledProps } from '@/styled-system/jsx';
import { menu } from '@/styled-system/recipes';

const { withRootProvider, withContext } = createStyleContext(menu);

export type MenuRootProps = ComponentProps<typeof MenuRoot>;
export const MenuRoot = withRootProvider(ReactMenu.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
});
export const MenuRootProvider = withRootProvider(ReactMenu.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
});
export const MenuArrow = withContext(ReactMenu.Arrow, 'arrow');
export const MenuArrowTip = withContext(ReactMenu.ArrowTip, 'arrowTip');
export const MenuCheckboxItem = withContext(ReactMenu.CheckboxItem, 'item');
export const MenuContent = withContext(ReactMenu.Content, 'content');
export const MenuContextTrigger = withContext(ReactMenu.ContextTrigger, 'contextTrigger');
export const MenuIndicator = withContext(ReactMenu.Indicator, 'indicator', {
  defaultProps: { children: <ChevronDown /> },
});
export const MenuItem = withContext(ReactMenu.Item, 'item');
export const MenuItemGroup = withContext(ReactMenu.ItemGroup, 'itemGroup');
export const MenuItemGroupLabel = withContext(ReactMenu.ItemGroupLabel, 'itemGroupLabel');
export const MenuItemText = withContext(ReactMenu.ItemText, 'itemText');
export const MenuPositioner = withContext(ReactMenu.Positioner, 'positioner');
export const MenuRadioItem = withContext(ReactMenu.RadioItem, 'item');
export const MenuRadioItemGroup = withContext(ReactMenu.RadioItemGroup, 'itemGroup');
export const MenuSeparator = withContext(ReactMenu.Separator, 'separator');
export const MenuTrigger = withContext(ReactMenu.Trigger, 'trigger');
export const MenuTriggerItem = withContext(ReactMenu.TriggerItem, 'item');

export {
  MenuContext as Context,
  type MenuSelectionDetails as SelectionDetails,
} from '@ark-ui/react/menu';

const StyledItemIndicator = withContext(ReactMenu.ItemIndicator, 'itemIndicator');

export const MenuItemIndicator = forwardRef<HTMLDivElement, HTMLStyledProps<'div'>>(
  function MenuItemIndicator(props, ref) {
    const item = useMenuItemContext();

    return item.checked ? (
      <StyledItemIndicator ref={ref} {...props}>
        <Check />
      </StyledItemIndicator>
    ) : (
      <svg aria-hidden="true" focusable="false" />
    );
  },
);
