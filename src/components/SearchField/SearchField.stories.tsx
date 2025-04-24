import type { Meta, StoryObj } from '@storybook/react';
import SearchField from './SearchField';

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    // it should not have a placeholder text if the prop is not provided
    placeholder: '',
  },
};