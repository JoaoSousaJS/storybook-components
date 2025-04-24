import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionAccordion from "./SectionAccordion";
import userEvent from "@testing-library/user-event";

describe("SectionAccordion", () => {
  it("should render the children", () => {
    render(<SectionAccordion title="Absent" children={<div>hello</div>} />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("should show the right icon when the accordion is closed", () => {
    render(<SectionAccordion title="Absent" children={<div>hello</div>} />);
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("should show the down icon when the accordion is open", async () => {
    render(<SectionAccordion title="Absent" children={<div>hello</div>} />);
  
    const accordion = screen.getByTestId("accordion-header");
    await userEvent.click(accordion);
    expect(screen.getByTestId("down-icon")).toBeInTheDocument();
  });
});
