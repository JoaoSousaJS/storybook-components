// SectionAccordion.tsx
import { useState } from "react";
import { 
  StyledSectionAccordion, 
  StyledSectionAccordionTitle, 
  StyledSectionHeaderContainer,
  StyledSectionContent 
} from "./styles";
import DownIcon from "../../icons/DownIcon";
import RightIcon from "../../icons/RightIcon";

type SectionAccordionProps = {
  title: "Absent" | "Present";
  children: React.ReactNode;
};

export default function SectionAccordion({ title, children }: SectionAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledSectionAccordion>
      <StyledSectionHeaderContainer onClick={() => setIsOpen(!isOpen)}>
        <StyledSectionAccordionTitle>
          {title}
        </StyledSectionAccordionTitle>
        {isOpen ? <DownIcon /> : <RightIcon />}
      </StyledSectionHeaderContainer>
      <StyledSectionContent isOpen={isOpen}>
        {children}
      </StyledSectionContent>
    </StyledSectionAccordion>
  )
}