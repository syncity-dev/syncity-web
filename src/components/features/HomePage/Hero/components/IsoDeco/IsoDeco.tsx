import { Caption } from '@/components/features/HomePage/Hero/components/IsoDeco/components/Caption';
import { Header } from '@/components/features/HomePage/Hero/components/IsoDeco/components/Header';
import { Layers } from '@/components/features/HomePage/Hero/components/IsoDeco/components/Layers';
import {
  HEADER_START_MS,
  KEYFRAMES_CSS,
  LINE_DRAW_MS,
} from '@/components/features/HomePage/Hero/components/IsoDeco/IsoDeco.constants';
import { useIsoDecoAnimation } from '@/components/features/HomePage/Hero/components/IsoDeco/IsoDeco.hooks';
import { Box } from '@/styled-system/jsx';

export const IsoDeco = () => {
  const { phase, hovered, onMouseEnter, onMouseLeave } = useIsoDecoAnimation();

  return (
    <Box
      aria-hidden="true"
      position="absolute"
      right="6"
      top="10"
      display={{ base: 'none', xl: 'flex' }}
      flexDir="column"
      alignItems="center"
    >
      <style>{KEYFRAMES_CSS}</style>
      <svg
        width="240"
        height="290"
        viewBox="-100 -130 200 280"
        fill="none"
        overflow="visible"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <defs>
          <clipPath id="iso-line-clip">
            <rect
              x="-2"
              y="-60"
              width="4"
              height="0"
              style={{
                animation: `iso-line-reveal ${LINE_DRAW_MS}ms linear ${HEADER_START_MS}ms both`,
              }}
            />
          </clipPath>
        </defs>

        <Header phase={phase} hovered={hovered} />
        <Layers phase={phase} hovered={hovered} />
      </svg>
      <Caption />
    </Box>
  );
};
