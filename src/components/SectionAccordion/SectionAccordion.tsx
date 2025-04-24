// SectionAccordion.tsx
import { useState } from "react";
import { 
  StyledSectionAccordion, 
  StyledSectionAccordionTitle, 
  StyledSectionHeaderContainer,
  StyledSectionContent, 
  StyledSectionAccordionIcon
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
      <StyledSectionHeaderContainer>
        <StyledSectionAccordionTitle>
          {title}
        </StyledSectionAccordionTitle>
        <StyledSectionAccordionIcon data-testid="accordion-header"  onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <DownIcon /> : <RightIcon />}
        </StyledSectionAccordionIcon>
      </StyledSectionHeaderContainer>
      <StyledSectionContent isOpen={isOpen}>
        {children}
      </StyledSectionContent>
    </StyledSectionAccordion>
  )
}