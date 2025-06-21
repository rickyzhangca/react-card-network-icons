export interface CardNetworkIconProps extends React.SVGAttributes<SVGElement> {
  referenceHeight?: number;
}

export type CardNetworkIcon = JSX.Element;

export type CardNetworkIconType =
  | 'amex'
  | 'diners'
  | 'discover'
  | 'jcb'
  | 'mastercard'
  | 'union-pay'
  | 'visa';
