import { CardNetworkIcon, CardNetworkIconProps } from './types';
import { useComputedSize } from './use-computed-size';

const SCALING_FACTOR = 0.5;

export const Discover = ({
  referenceHeight,
  width: propWidth,
  height: propHeight,
  ...rest
}: CardNetworkIconProps): CardNetworkIcon => {
  const { width: computedWidth, height: computedHeight } = useComputedSize({
    referenceHeight,
    propWidth,
    propHeight,
    viewBoxWidth: 1783,
    viewBoxHeight: 300,
    scalingFactor: SCALING_FACTOR,
  });

  return (
    <svg
      viewBox="0 0 1783 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
      width={computedWidth}
      height={computedHeight}
    >
      <path
        d="M145.077 219.782C127.785 235.399 105.322 242.213 69.7623 242.213H54.9922V55.6083H69.7623C105.322 55.6083 126.901 61.9721 145.077 78.43C164.11 95.3811 175.56 121.646 175.56 148.68C175.56 175.769 164.11 202.838 145.077 219.782ZM80.7867 7.79698H0.000976562V289.985H80.3604C123.092 289.985 153.947 279.902 181.032 257.408C213.216 230.769 232.249 190.617 232.249 149.086C232.249 65.8094 170.039 7.79698 80.7867 7.79698Z"
        fill="#201D1C"
      />
      <path
        d="M257.574 289.985H312.609V7.79698H257.574V289.985Z"
        fill="#201D1C"
      />
      <path
        d="M447.178 116.084C414.153 103.861 404.454 95.7995 404.454 80.5533C404.454 62.7816 421.731 49.2757 445.453 49.2757C461.944 49.2757 475.495 56.0498 489.834 72.1298L518.629 34.4166C494.965 13.7151 466.653 3.13087 435.719 3.13087C385.8 3.13087 347.722 37.8041 347.722 83.9884C347.722 122.866 365.452 142.77 417.141 161.375C438.684 168.975 449.648 174.039 455.183 177.446C466.179 184.628 471.685 194.793 471.685 206.644C471.685 229.509 453.509 246.449 428.954 246.449C402.705 246.449 381.561 233.319 368.891 208.812L333.335 243.05C358.692 280.277 389.144 296.775 431.018 296.775C488.213 296.775 528.331 258.742 528.331 204.113C528.331 159.279 509.783 138.984 447.178 116.084Z"
        fill="#201D1C"
      />
      <path
        d="M545.693 149.086C545.693 232.032 610.814 296.349 694.618 296.349C718.309 296.349 738.597 291.69 763.618 279.902V215.108C741.617 237.133 722.13 246.015 697.176 246.015C641.751 246.015 602.41 205.824 602.41 148.68C602.41 94.501 642.994 51.763 694.618 51.763C720.867 51.763 740.737 61.1314 763.618 83.5146V18.7522C739.462 6.49441 719.596 1.41807 695.917 1.41807C612.539 1.41807 545.693 67.0365 545.693 149.086Z"
        fill="#201D1C"
      />
      <path
        d="M1199.98 197.343L1124.75 7.79687H1064.62L1184.35 297.225H1213.97L1335.86 7.79687H1276.2L1199.98 197.343Z"
        fill="#201D1C"
      />
      <path
        d="M1360.75 289.985H1516.83V242.213H1415.74V166.041H1513.1V118.242H1415.74V55.6083H1516.83V7.79698H1360.75V289.985Z"
        fill="#201D1C"
      />
      <path
        d="M1624.32 137.713H1608.24V52.2449H1625.19C1659.46 52.2449 1678.09 66.6068 1678.09 94.0704C1678.09 122.439 1659.46 137.713 1624.32 137.713ZM1734.73 91.1062C1734.73 38.2772 1698.34 7.79698 1634.88 7.79698H1553.27V289.985H1608.24V176.626H1615.42L1691.59 289.985H1759.28L1670.46 171.103C1711.9 162.674 1734.73 134.314 1734.73 91.1062Z"
        fill="#201D1C"
      />
      <path
        d="M1759.43 21.7877H1758.43V15.3056H1759.49C1762.42 15.3056 1763.93 16.3597 1763.93 18.4951C1763.93 20.6902 1762.4 21.7877 1759.43 21.7877ZM1769.85 18.4042C1769.85 13.4582 1766.45 10.7538 1760.47 10.7538H1752.5V35.5574H1758.43V25.9373L1765.37 35.5574H1772.59L1764.44 25.3289C1767.92 24.389 1769.85 21.8473 1769.85 18.4042Z"
        fill="#201D1C"
      />
      <path
        d="M1761.58 40.8673C1752.1 40.8673 1744.35 32.9795 1744.35 23.1381C1744.35 13.2613 1752 5.37746 1761.58 5.37746C1771.01 5.37746 1778.7 13.4422 1778.7 23.1381C1778.7 32.8966 1771.01 40.8673 1761.58 40.8673ZM1761.66 1.48457C1749.62 1.48457 1740.06 11.0976 1740.06 23.1067C1740.06 35.1078 1749.73 44.7319 1761.66 44.7319C1773.39 44.7319 1783 35.0047 1783 23.1067C1783 11.2673 1773.39 1.48457 1761.66 1.48457Z"
        fill="#201D1C"
      />
      <mask
        id="discover-logo-mask"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="781"
        y="0"
        width="301"
        height="301"
      >
        <path
          d="M781.594 150.046C781.594 150.046 781.594 150.046 781.594 149.955C781.594 67.164 848.753 0.000474724 931.549 0.000474724C1014.43 0.000474724 1081.59 67.164 1081.59 149.955C1081.59 150.046 1081.59 150.046 1081.59 150.046C1081.59 232.841 1014.43 300 931.549 300C848.753 300 781.594 232.841 781.594 150.046Z"
          fill="white"
        />
      </mask>
      <g mask="url(#discover-logo-mask)">
        <rect
          x="777.927"
          y="-3.11792"
          width="307.181"
          height="306.17"
          fill="url(#discover-logo-pattern)"
        />
      </g>
      <defs>
        <pattern
          id="discover-logo-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#discover-logo-image" transform="scale(0.00793651)" />
        </pattern>
        <image
          id="discover-logo-image"
          width="126"
          height="126"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
