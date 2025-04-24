import type { Meta, StoryObj } from '@storybook/react';
import ContactSection from './ContactSection';
import Thumbnail from '../../assets/thumbnail.png';
const meta: Meta<typeof ContactSection> = {
  title: 'Components/ContactSection',
  component: ContactSection,
};

export default meta;

type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {
  args: {
    contacts: [
      { id: '1', name: 'Peter Parker', email: 'peter.parker@example.com', image: Thumbnail, status: 'Attented' },
      { id: '2', name: 'Mary Jane', email: 'mary.jane@example.com', image: Thumbnail, status: 'Absent' },
    ],
  },
};

export const Empty: Story = {
  args: {
    contacts: [],
  },
};

