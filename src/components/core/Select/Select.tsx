import type { Assign } from '@ark-ui/react';
import { ark } from '@ark-ui/react/factory';
import type { SelectRootProps as PrimitiveSelectRootProps } from '@ark-ui/react/select';
import { Select, useSelectItemContext } from '@ark-ui/react/select';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { forwardRef, type RefAttributes } from 'react';

import { createStyleContext } from '@/styled-system/jsx';
import { select, type SelectVariantProps } from '@/styled-system/recipes';
import type { HTMLStyledProps } from '@/styled-system/types';

const { withProvider, withContext } = createStyleContext(select);

type StyleProps = SelectVariantProps & HTMLStyledProps<'div'>;

export type SelectRootProps<T> = Assign<PrimitiveSelectRootProps<T>, StyleProps> &
  RefAttributes<HTMLDivElement>;

export const SelectRoot = withProvider(Select.Root, 'root') as Select.RootComponent<StyleProps>;

export const SelectClearTrigger = withContext(Select.ClearTrigger, 'clearTrigger');
export const SelectContent = withContext(Select.Content, 'content');
export const SelectControl = withContext(Select.Control, 'control');
export const SelectIndicatorGroup = withContext(ark.div, 'indicatorGroup');
export const SelectItem = withContext(Select.Item, 'item');
export const SelectItemGroup = withContext(Select.ItemGroup, 'itemGroup');
export const SelectItemGroupLabel = withContext(Select.ItemGroupLabel, 'itemGroupLabel');
export const SelectItemText = withContext(Select.ItemText, 'itemText');
export const SelectLabel = withContext(Select.Label, 'label');
export const SelectList = withContext(Select.List, 'list');
export const SelectPositioner = withContext(Select.Positioner, 'positioner');
export const SelectTrigger = withContext(Select.Trigger, 'trigger');
export const SelectValueText = withContext(Select.ValueText, 'valueText');
export const SelectIndicator = withContext(Select.Indicator, 'indicator', {
  defaultProps: { children: <ChevronsUpDownIcon /> },
});
export const SelectHiddenSelect = Select.HiddenSelect;

export {
  SelectContext as Context,
  SelectItemContext as ItemContext,
  type SelectValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/react/select';

const StyledItemIndicator = withContext(Select.ItemIndicator, 'itemIndicator');

export const SelectItemIndicator = forwardRef<HTMLDivElement, HTMLStyledProps<'div'>>(
  function ItemIndicator(props, ref) {
    const item = useSelectItemContext();

    return item.selected ? (
      <StyledItemIndicator ref={ref} {...props}>
        <CheckIcon />
      </StyledItemIndicator>
    ) : (
      <svg aria-hidden="true" focusable="false" />
    );
  },
);
