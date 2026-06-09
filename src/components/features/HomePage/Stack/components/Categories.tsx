import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { HairlineGrid } from '@/components/core/HairlineGrid/HairlineGrid';
import { STACK_CATEGORIES } from '@/components/features/HomePage/Stack/Stack.data';
import { styled } from '@/styled-system/jsx';
import { textTransition } from '@/theme/motion/transitions';

const CategoryCell = styled('div', {
  base: {
    bg: 'bg.default',
    pt: '7',
    px: '6',
    pb: '8',
  },
});

const ItemRow = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '2',
    py: '7px',
    color: 'fg.default',
    cursor: 'default',
    ...textTransition,
    textStyle: 'sm',
    _hover: {
      color: 'accent.default',
    },
  },
});

export const Categories = () => (
  <HairlineGrid gridTemplateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
    {STACK_CATEGORIES.map((cat) => (
      <CategoryCell key={cat.heading}>
        <Eyebrow mb="4">{cat.heading}</Eyebrow>
        {cat.items.map((item) => (
          <ItemRow key={item.label}>
            <item.Icon size={16} aria-hidden />
            {item.label}
          </ItemRow>
        ))}
      </CategoryCell>
    ))}
  </HairlineGrid>
);
