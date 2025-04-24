import { Meta, StoryObj } from "@storybook/react";
import SectionAccordion from "./SectionAccordion";
import ContactSection from "../ContactSection/ContactSection";
import { contactMockList } from "../../test/mock/contactMock";
const meta: Meta<typeof SectionAccordion> = {
  title: "Components/SectionAccordion",
  component: SectionAccordion,
};

export default meta;

type Story = StoryObj<typeof SectionAccordion>;

export const Default: Story = {
  args: {
    title: "Absent",
    children: <ContactSection contacts={contactMockList} />,
  },
};
