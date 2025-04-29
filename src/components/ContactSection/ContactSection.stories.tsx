import type { Meta, StoryObj } from '@storybook/react';
import ContactSection from './ContactSection';
import Thumbnail from '../../assets/thumbnail.png';
import { Contact } from '../../types';

const meta: Meta<typeof ContactSection> = {
  title: 'Components/ContactSection',
  component: ContactSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A container component that displays a list of contacts in a consistent layout.',
      },
    },
  },
  argTypes: {
    contacts: {
      description: 'Array of contact objects to be displayed',
      table: {
        type: { summary: 'Contact[]' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactSection>;

// Sample contact data
const sampleContacts: Contact[] = [
  {
    id: '1',
    name: 'Peter Parker',
    email: 'peter.parker@example.com',
    image: Thumbnail,
    status: 'Attended'
  },
  {
    id: '2',
    name: 'Mary Jane',
    email: 'mary.jane@example.com',
    image: Thumbnail,
    status: 'Absent'
  },
  {
    id: '3',
    name: 'Harry Osborn',
    image: Thumbnail,
    status: 'Attended',
    email: 'harry.osborn@example.com',
  }
];

/**
 * Default view with multiple contacts
 */
export const Default: Story = {
  args: {
    contacts: sampleContacts,
  },
};

/**
 * Shows how the component handles a single contact
 */
export const SingleContact: Story = {
  args: {
    contacts: [sampleContacts[0]],
  },
};

/**
 * Shows how the component handles no contacts
 */
export const EmptyList: Story = {
  args: {
    contacts: [],
  },
};

/**
 * Shows how the component handles undefined contacts
 */
export const UndefinedContacts: Story = {
  args: {
    contacts: undefined,
  },
};

/**
 * Shows how the component handles many contacts
 */
export const ManyContacts: Story = {
  args: {
    contacts: Array(10).fill(null).map((_, index) => ({
      id: `${index + 1}`,
      name: `Contact ${index + 1}`,
      email: `contact${index + 1}@example.com`,
      image: Thumbnail,
      status: index % 2 === 0 ? 'Attended' : 'Absent'
    })),
  },
};

/**
 * Shows how the component handles contacts with missing emails
 */
export const MixedContactInfo: Story = {
  args: {
    contacts: [
      {
        id: '1',
        name: 'With Email',
        email: 'with.email@example.com',
        image: Thumbnail,
        status: 'Attended'
      },
      {
        id: '2',
        name: 'Without Email',
        image: Thumbnail,
        status: 'Absent'
      },
      {
        id: '3',
        name: 'Very Long Name That Should Wrap Properly In The Layout',
        email: 'very.long.email.address.that.should.wrap@really-long-domain-name.example.com',
        image: Thumbnail,
        status: 'Attended'
      }
    ],
  },
};
