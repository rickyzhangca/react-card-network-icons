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

export const All: Story = {
  render: () => {
    const icons = [Amex, Diners, Discover, JCB, Mastercard, UnionPay, Visa];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {icons.map((Icon, idx) => (
          <div
            key={idx}
            style={{
              width: '80px',
              border: '1px solid red',
            }}
          >
            <Icon
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    );
  },
  name: 'All',
};
