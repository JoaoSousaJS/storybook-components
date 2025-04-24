import { Meta, StoryObj } from "@storybook/react";
import SectionAccordion from "./SectionAccordion";
import ContactSection from "../ContactSection/ContactSection";
import { contactMockList } from "../../test/mock/contactMock";
import { filterContactByStatus } from "../utils/filterContactByStatus";

const meta: Meta<typeof SectionAccordion> = {
  title: "Components/SectionAccordion",
  component: SectionAccordion,
};

export default meta;

type Story = StoryObj<typeof SectionAccordion>;

export const Default: Story = {
  args: {
    title: "Absent",
    children: <ContactSection contacts={filterContactByStatus(contactMockList, "Absent")} />,
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
  },
};

export const Open: Story = {
  args: {
    title: "Attented",
    children: <ContactSection contacts={filterContactByStatus(contactMockList, "Attented")  } />,
    isOpen: true,
    onOpen: () => {},
    onClose: () => {},
  },
};