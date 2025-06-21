# react card network icons

React svg components for the most common payment card network logos. Each icon is an isolated, treeshake-friendly react component with zero runtime dependencies.

## Installation

```sh
# with pnpm
pnpm add react-card-network-icons

# with yarn
yarn add react-card-network-icons

# with npm
npm install react-card-network-icons
```

## Quick start

```tsx
import { Visa } from 'react-card-network-icons';

export const Example = () => <Visa className="w-12" />;
```

## Available icons

| component    | preview                                    |
| ------------ | ------------------------------------------ |
| `Amex`       | ![Amex logo](./meta/amex.webp)             |
| `Diners`     | ![Diners logo](./meta/diners.webp)         |
| `Discover`   | ![Discover logo](./meta/discover.webp)     |
| `JCB`        | ![JCB logo](./meta/jcb.webp)               |
| `Mastercard` | ![Mastercard logo](./meta/mastercard.webp) |
| `UnionPay`   | ![UnionPay logo](./meta/union-pay.webp)    |
| `Visa`       | ![Visa logo](./meta/visa.webp)             |

### Props

All icon components extend `React.SVGAttributes<SVGElement>` so you can pass any standard svg attribute (e.g. `className`, `style`, `fill`). One additional prop is available:

| prop              | type   | default     |
| ----------------- | ------ | ----------- |
| `referenceHeight` | number | `undefined` |

When `referenceHeight` is provided, some icons compute a harmonic size by applying a scaling factor to the reference height to counter the dramatic aspect ratio of the icon.

![Reference height](./meta/example.webp)

## API Reference

```ts
export interface CardNetworkIconProps extends React.SVGAttributes<SVGElement> {
  referenceHeight?: number;
}
```

## Building locally

```sh
pnpm i
pnpm run build # bundled with tsup
```

## License

MIT of course!
