import { createListCollection } from '@ark-ui/react';
import { Portal } from '@ark-ui/react/portal';

import type { SelectRootProps } from '@/components/core/Select/Select';
import {
  SelectContent,
  SelectControl,
  SelectHiddenSelect,
  SelectIndicator,
  SelectIndicatorGroup,
  SelectItem,
  SelectItemIndicator,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/core/Select/Select';

export type ProjectType = {
  label: string;
  value: string;
};

const projectTypes = createListCollection<ProjectType>({
  items: [
    { label: 'Web / App Development', value: 'web-app' },
    { label: 'Consulting', value: 'consulting' },
    { label: 'Code Review', value: 'code-review' },
    { label: 'Other', value: 'other' },
  ],
});

export const ProjectTypeSelect = (props: Omit<SelectRootProps<ProjectType>, 'collection'>) => {
  return (
    <SelectRoot collection={projectTypes} {...props}>
      <SelectHiddenSelect />
      <SelectControl>
        <SelectTrigger>
          <SelectValueText placeholder="Select project type" />
          <SelectIndicatorGroup>
            <SelectIndicator />
          </SelectIndicatorGroup>
        </SelectTrigger>
      </SelectControl>
      <Portal>
        <SelectPositioner>
          <SelectContent>
            {projectTypes.items.map((projectType) => (
              <SelectItem item={projectType} key={projectType.value}>
                {projectType.label}
                <SelectItemIndicator />
              </SelectItem>
            ))}
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </SelectRoot>
  );
};
