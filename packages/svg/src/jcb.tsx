import { CardNetworkIcon, CardNetworkIconProps } from './types';
import { useComputedSize } from './use-computed-size';

export const JCB = ({
  referenceHeight,
  width: propWidth,
  height: propHeight,
  ...rest
}: CardNetworkIconProps): CardNetworkIcon => {
  const { width: computedWidth, height: computedHeight } = useComputedSize({
    referenceHeight,
    propWidth,
    propHeight,
    viewBoxWidth: 838,
    viewBoxHeight: 642,
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 838 642"
      {...rest}
      width={computedWidth}
      height={computedHeight}
    >
      <path
        fill="#fff"
        d="M838 512.58C838 583.91 779.6 642 707.9 642H0V129.42C0 58.09 58.4 0 130.1 0H838v512.58ZM397.49 43.31c-51.23 0-93.23 41.27-93.23 92.73v121.27c23.56-19.87 64.54-32.61 130.62-29.55 35.34 1.53 73.25 11.2 73.25 11.2v39.24c-18.95-9.68-41.5-18.34-70.69-20.38-50.2-3.57-80.42 20.89-80.42 63.69 0 43.3 30.22 67.77 80.42 63.69 29.2-2.04 51.74-11.2 70.69-20.38v39.23s-37.4 9.68-73.25 11.21c-66.08 3.06-107.06-9.68-130.62-29.55v214h136.77c51.22 0 93.22-41.27 93.22-92.73V43.3H397.5Zm257.65 0c-51.23 0-93.23 41.27-93.23 92.73v96.3h131.64c3.08 0 6.66 0 9.22.51 29.71 1.53 51.74 16.82 51.74 43.31 0 20.9-14.86 38.72-42.52 42.3v1.01c30.22 2.04 53.27 18.85 53.27 44.84 0 28.02-25.6 46.37-59.41 46.37H561.4V599.2h136.76c51.23 0 93.23-41.27 93.23-92.73V43.3H655.14Zm-515.3 0c-51.23 0-93.23 41.27-93.23 92.73v228.78c26.13 12.74 53.27 20.89 80.42 20.89 32.27 0 49.69-19.36 49.69-45.86V231.83h79.9v107.51c0 41.78-26.12 75.92-114.73 75.92-53.79 0-95.79-11.72-95.79-11.72V598.7h136.76c51.23 0 93.23-41.27 93.23-92.73V43.3H139.84Zm467.66 288.9v48.91h53.78c1.54 0 5.13-.5 6.66-.5 10.25-2.04 18.95-11.22 18.95-23.95 0-12.23-8.7-21.4-18.95-23.95-1.54-.51-4.6-.51-6.66-.51H607.5Zm0-72.35v44.83h48.66c1.54 0 4.6 0 5.12-.5 10.25-1.53 18.96-9.69 18.96-21.91 0-12.23-8.71-20.38-18.96-21.91-1.02 0-3.58-.51-5.12-.51H607.5Z"
      />
      <path
        fill="url(#jcb-logo-a)"
        d="M791.39 506.47c0 51.46-42 92.73-93.23 92.73H561.4V410.68h144.45c33.8 0 59.41-18.35 59.41-46.37 0-25.99-23.05-42.8-53.27-44.84v-1.02c27.66-3.56 42.52-21.4 42.52-42.29 0-26.5-22.03-41.78-51.74-43.3-2.56-.52-6.14-.52-9.22-.52H561.91v-96.3c0-51.46 42-92.73 93.23-92.73h136.25v463.16Z"
      />
      <path
        fill="url(#jcb-logo-b)"
        d="M661.28 332.21c2.05 0 5.13 0 6.66.51 10.25 2.55 18.95 11.72 18.95 23.95 0 12.73-8.7 21.9-18.95 23.94-1.54 0-5.12.51-6.66.51H607.5v-48.91h53.78Z"
      />
      <path
        fill="url(#jcb-logo-c)"
        d="M656.16 259.86c1.54 0 4.1.5 5.12.5 10.25 1.53 18.96 9.69 18.96 21.92 0 12.23-8.71 20.38-18.96 21.9-.51.51-3.58.51-5.12.51H607.5v-44.83h48.66Z"
      />
      <path
        fill="url(#jcb-logo-d)"
        d="M139.84 43.31c-51.23 0-93.23 41.27-93.23 92.73v228.78c26.13 12.74 53.27 20.89 80.42 20.89 32.27 0 49.69-19.36 49.69-45.86V231.83h79.9v107.51c0 41.78-26.12 75.92-114.73 75.92-53.79 0-95.79-11.72-95.79-11.72V598.7h136.76c51.23 0 93.23-41.27 93.23-92.73V43.3H139.84Z"
      />
      <path
        fill="url(#jcb-logo-e)"
        d="M397.49 43.31c-51.23 0-93.23 41.27-93.23 92.73v121.27c23.56-19.87 64.54-32.61 130.62-29.55 35.34 1.53 73.25 11.2 73.25 11.2v39.24c-18.95-9.68-41.5-18.34-70.69-20.38-50.2-3.57-80.42 20.89-80.42 63.69 0 43.3 30.22 67.77 80.42 63.69 29.2-2.04 51.74-11.2 70.69-20.38v39.23s-37.4 9.68-73.25 11.21c-66.08 3.06-107.06-9.68-130.62-29.55v214h136.77c51.22 0 93.22-41.27 93.22-92.73V43.3H397.5Z"
      />
      <defs>
        <linearGradient
          id="jcb-logo-a"
          x1="561.82"
          x2="792.01"
          y1="282.21"
          y2="282.21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#007940" />
          <stop offset=".23" stopColor="#00873F" />
          <stop offset=".74" stopColor="#40A737" />
          <stop offset="1" stopColor="#5CB531" />
        </linearGradient>
        <linearGradient
          id="jcb-logo-b"
          x1="561.82"
          x2="792.01"
          y1="282.21"
          y2="282.21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#007940" />
          <stop offset=".23" stopColor="#00873F" />
          <stop offset=".74" stopColor="#40A737" />
          <stop offset="1" stopColor="#5CB531" />
        </linearGradient>
        <linearGradient
          id="jcb-logo-c"
          x1="561.82"
          x2="792.01"
          y1="282.21"
          y2="282.21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#007940" />
          <stop offset=".23" stopColor="#00873F" />
          <stop offset=".74" stopColor="#40A737" />
          <stop offset="1" stopColor="#5CB531" />
        </linearGradient>
        <linearGradient
          id="jcb-logo-d"
          x1="46.5"
          x2="280.25"
          y1="321.03"
          y2="321.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F286F" />
          <stop offset=".48" stopColor="#004E94" />
          <stop offset=".83" stopColor="#0066B1" />
          <stop offset="1" stopColor="#006FBC" />
        </linearGradient>
        <linearGradient
          id="jcb-logo-e"
          x1="302.94"
          x2="529.96"
          y1="321.03"
          y2="321.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6C2C2F" />
          <stop offset=".17" stopColor="#882730" />
          <stop offset=".57" stopColor="#BE1833" />
          <stop offset=".86" stopColor="#DC0436" />
          <stop offset="1" stopColor="#E60039" />
        </linearGradient>
      </defs>
    </svg>
  );
};
