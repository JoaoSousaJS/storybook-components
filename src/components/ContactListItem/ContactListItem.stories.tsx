import type { Meta, StoryObj } from '@storybook/react';
import ContactListItem from './ContactListItem';
import Thumbnail from '../../assets/thumbnail.png';

const meta: Meta<typeof ContactListItem> = {
  title: 'Components/ContactListItem',
  component: ContactListItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying contact information including an image, name, and optional email.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'The full name of the contact',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    email: {
      control: 'text',
      description: 'The email address of the contact (optional)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    image: {
      control: 'text',
      description: 'URL or path to the contact\'s profile image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactListItem>;

/**
 * The default state of the ContactListItem with all properties provided.
 */
export const Default: Story = {
  args: {
    name: 'Peter Parker',
    email: 'peter.parker@example.com',
    image: Thumbnail,
  },
};

/**
 * ContactListItem without an email address.
 */
export const WithoutEmail: Story = {
  args: {
    name: 'Mary Jane',
    image: Thumbnail,
  },
};

/**
 * ContactListItem with a long name to demonstrate text wrapping.
 */
export const LongName: Story = {
  args: {
    name: 'Dr. Otto Gunther Octavius Who Has A Very Long Name',
    email: 'doc.ock@example.com',
    image: Thumbnail,
  },
};

/**
 * ContactListItem with a long email address to demonstrate text wrapping.
 */
export const LongEmail: Story = {
  args: {
    name: 'Harry Osborn',
    email: 'harry.osborn.with.a.very.long.email.address@oscorp-industries.example.com',
    image: Thumbnail,
  },
};

/**
 * Grid layout example showing multiple ContactListItems
 */
export const GridExample: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', width: '800px' }}>
        <Story args={{
          name: 'Peter Parker',
          email: 'peter.parker@example.com',
          image: Thumbnail,
        }} />
        <Story args={{
          name: 'Mary Jane',
          email: 'mary.jane@example.com',
          image: Thumbnail,
        }} />
        <Story args={{
          name: 'Harry Osborn',
          email: 'harry@oscorp.com',
          image: Thumbnail,
        }} />
        <Story args={{
          name: 'Norman Osborn',
          image: Thumbnail,
        }} />
      </div>
    ),
  ],
};