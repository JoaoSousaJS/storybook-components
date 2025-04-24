import type { Meta, StoryObj } from '@storybook/react';
import ContactListItem from "./ContactListItem";
import Thumbnail from '../../assets/thumbnail.png';
const meta: Meta<typeof ContactListItem> = {
  title: 'Components/ContactListItem',
  component: ContactListItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactListItem>;

export const Default: Story = {
  args: {
    name: 'Mary Jane',
    email: 'mary.jane@example.com',
    image: Thumbnail,
  },
};

export const WithoutEmail: Story = {
  args: {
    name: 'Peter Parker',
    image: Thumbnail,
  },
};