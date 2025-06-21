import type { Meta, StoryObj } from '@storybook/react';
import {
  Amex,
  Diners,
  Discover,
  JCB,
  Mastercard,
  UnionPay,
  Visa,
} from 'react-card-network-icons';

const meta: Meta = {
  title: 'Card network icons',
};

export default meta;

type Story = StoryObj;

export const ReferenceHeight: Story = {
  render: () => {
    const icons = [Amex, Diners, Discover, JCB, Mastercard, UnionPay, Visa];
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'start',
        }}
      >
        {icons.map((Icon, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid red',
            }}
          >
            <Icon
              referenceHeight={60}
              style={{
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    );
  },
  name: 'Reference height',
};
