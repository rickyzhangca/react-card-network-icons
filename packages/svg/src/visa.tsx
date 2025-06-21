import { CardNetworkIconProps } from './props';
import { useComputedSize } from './use-computed-size';

const SCALING_FACTOR = 0.6;

export const Visa = ({
  referenceHeight,
  width: propWidth,
  height: propHeight,
  ...rest
}: CardNetworkIconProps) => {
  const { width: computedWidth, height: computedHeight } = useComputedSize({
    referenceHeight,
    propWidth,
    propHeight,
    viewBoxWidth: 1300,
    viewBoxHeight: 420,
    scalingFactor: SCALING_FACTOR,
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1300 420"
      {...rest}
      width={computedWidth}
      height={computedHeight}
    >
      <path
        fill="#1434CB"
        d="M846.74 0c-92.3 0-174.79 47.71-174.79 135.84 0 101.08 146.3 108.06 146.3 158.84 0 21.39-24.57 40.53-66.55 40.53-59.56 0-104.08-26.75-104.08-26.75l-19.05 88.95S679.85 420 747.94 420c100.91 0 180.33-50.05 180.33-139.7 0-106.8-146.9-113.58-146.9-160.7 0-16.76 20.17-35.1 62.02-35.1 47.22 0 85.74 19.45 85.74 19.45l18.65-85.9S905.85 0 846.73 0h.01ZM2.24 6.49 0 19.45s38.83 7.08 73.81 21.23c45.04 16.2 48.24 25.65 55.83 54.95l82.64 317.68h110.8L493.74 6.49H383.22l-109.67 276.6-44.76-234.47c-4.1-26.83-24.89-42.15-50.33-42.15H2.26l-.02.02Zm535.97 0L451.5 413.3h105.4L643.3 6.5H538.2Zm587.87 0c-25.41 0-38.88 13.57-48.76 37.28L922.9 413.3h110.53l21.38-61.6h134.66l13 61.6H1300L1214.92 6.49h-88.84Zm14.38 109.91 32.77 152.66h-87.78l55.02-152.66h-.01Z"
      />
    </svg>
  );
};

Visa.displayName = 'Visa';
