import type { Meta, StoryObj } from '@storybook/react';
import SearchField from './SearchField';
import { useState } from 'react';
import SearchIcon from '../../icons/SearchIcon';
import RightIcon from '../../icons/RightIcon';

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A search input component that accepts a custom icon and provides a consistent search experience across the application.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text to display when the input is empty',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback function that is called when the input value changes',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'undefined' },
      },
    },
    icon: {
      description: 'Custom icon component to display in the search field',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

/**
 * Default state with search icon
 */
export const Default: Story = {
  args: {
    placeholder: 'Search...',
    icon: <SearchIcon />,
  },
};

/**
 * Without any icon
 */
export const WithoutIcon: Story = {
  args: {
    placeholder: 'Search without icon...',
  },
};

/**
 * With a different icon
 */
export const WithCustomIcon: Story = {
  args: {
    placeholder: 'Custom icon search...',
    icon: <RightIcon />,
  },
};

/**
 * Interactive example with controlled input
 */
export const Interactive: Story = {
  render: function Render() {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: '400px' }}>
        <SearchField
          placeholder="Type something..."
          onChange={(e) => setValue(e.target.value)}
          icon={<SearchIcon />}
        />
        <div style={{ marginTop: '1rem' }}>
          Current value: {value}
        </div>
      </div>
    );
  },
};

/**
 * Icon Variations
 */
export const IconVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <SearchField 
        placeholder="With search icon" 
        icon={<SearchIcon />} 
      />
      <SearchField 
        placeholder="With right icon" 
        icon={<RightIcon />} 
      />
      <SearchField 
        placeholder="No icon" 
      />
    </div>
  ),
};