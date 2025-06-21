import { CardNetworkIcon, CardNetworkIconProps } from './types';
import { useComputedSize } from './use-computed-size';

export const Mastercard = ({
  referenceHeight,
  width: propWidth,
  height: propHeight,
  ...rest
}: CardNetworkIconProps): CardNetworkIcon => {
  const { width: computedWidth, height: computedHeight } = useComputedSize({
    referenceHeight,
    propWidth,
    propHeight,
    viewBoxWidth: 1038,
    viewBoxHeight: 642,
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1038 642"
      {...rest}
      width={computedWidth}
      height={computedHeight}
    >
      <path fill="#FF5F00" d="M659.42 68.7h-280.6v504.45h280.6V68.7Z" />
      <path
        fill="#EB001B"
        d="M396.64 320.93c0-98.04 45.43-191.62 122.04-252.23C379.72-40.92 177.5-16.86 67.95 123.07-40.73 262.1-16.68 463.53 123.17 573.15a319.7 319.7 0 0 0 396.4 0 321.06 321.06 0 0 1-122.93-252.22Z"
      />
      <path
        fill="#F79E1B"
        d="M1038 320.93c0 177.36-143.41 320.85-320.68 320.85-72.15 0-141.63-24.07-197.75-68.63C658.53 463.53 682.58 262.1 573 122.18c-16.03-19.61-33.85-38.33-53.44-53.48C658.53-40.92 860.74-16.86 969.4 123.07c44.54 56.15 68.59 125.66 68.59 197.86Z"
      />
    </svg>
  );
};

Mastercard.displayName = 'Mastercard';
