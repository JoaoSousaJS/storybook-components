import type { Meta, StoryObj } from '@storybook/react';
import SectionAccordion from './SectionAccordion';
import { useState } from 'react';
import ContactSection from '../ContactSection/ContactSection';
import { Contact } from '../../types';
import Thumbnail from '../../assets/thumbnail.png';

const meta: Meta<typeof SectionAccordion> = {
  title: 'Components/SectionAccordion',
  component: SectionAccordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A collapsible accordion component that can show/hide content with smooth animations.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'radio',
      options: ['Attended', 'Absent'],
      description: 'The title of the accordion section',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the accordion is expanded',
    },
    onOpen: {
      action: 'opened',
      description: 'Callback function called when the accordion is opened',
    },
    onClose: {
      action: 'closed',
      description: 'Callback function called when the accordion is closed',
    },
    children: {
      description: 'Content to be shown/hidden',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionAccordion>;

// Sample contact data for examples
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
  }
];

/**
 * Interactive example with state management
 */
export const Interactive: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <SectionAccordion
        title="Attended"
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <ContactSection contacts={sampleContacts} />
      </SectionAccordion>
    );
  },
};

/**
 * Initially opened state
 */
export const InitiallyOpen: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
      <SectionAccordion
        title="Attended"
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <ContactSection contacts={sampleContacts} />
      </SectionAccordion>
    );
  },
};

/**
 * Multiple accordions example
 */
export const MultipleAccordions: Story = {
  render: function Render() {
    const [openStates, setOpenStates] = useState({
      attended: false,
      absent: false,
    });
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <SectionAccordion
          title="Attended"
          isOpen={openStates.attended}
          onOpen={() => setOpenStates(prev => ({ ...prev, attended: true }))}
          onClose={() => setOpenStates(prev => ({ ...prev, attended: false }))}
        >
          <ContactSection contacts={sampleContacts.filter(c => c.status === 'Attended')} />
        </SectionAccordion>
        
        <SectionAccordion
          title="Absent"
          isOpen={openStates.absent}
          onOpen={() => setOpenStates(prev => ({ ...prev, absent: true }))}
          onClose={() => setOpenStates(prev => ({ ...prev, absent: false }))}
        >
          <ContactSection contacts={sampleContacts.filter(c => c.status === 'Absent')} />
        </SectionAccordion>
      </div>
    );
  },
};

/**
 * Long content example
 */
export const LongContent: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const manyContacts = Array(10).fill(null).map((_, index) => ({
      id: `${index}`,
      name: `Contact ${index + 1}`,
      email: `contact${index + 1}@example.com`,
      image: Thumbnail,
      status: 'Attended'
    }));
    
    return (
      <SectionAccordion
        title="Attended"
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <ContactSection contacts={manyContacts as Contact[]} />
      </SectionAccordion>
    );
  },
};