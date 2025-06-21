import { useMemo } from 'react';

interface ComputedSizeProps {
  referenceHeight?: number;
  propWidth?: string | number;
  propHeight?: string | number;
  viewBoxWidth: number;
  viewBoxHeight: number;
  scalingFactor?: number;
}

export const useComputedSize = ({
  referenceHeight,
  propWidth,
  propHeight,
  viewBoxWidth,
  viewBoxHeight,
  scalingFactor: scaling = 1,
}: ComputedSizeProps) => {
  const aspectRatio = viewBoxWidth / viewBoxHeight;

  return useMemo(() => {
    if (referenceHeight !== undefined && referenceHeight !== null) {
      const height = referenceHeight * scaling;
      const width = referenceHeight * aspectRatio * scaling;
      return {
        width,
        height,
      };
    }

    return { width: propWidth, height: propHeight };
  }, [referenceHeight, propWidth, propHeight, aspectRatio, scaling]);
};
