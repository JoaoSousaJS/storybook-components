// SectionAccordion.tsx
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
  title: "Attented" | "Absent";
  children: React.ReactNode;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function SectionAccordion({ title, children, isOpen, onOpen, onClose }: SectionAccordionProps) {

  return (
    <StyledSectionAccordion>
      <StyledSectionHeaderContainer>
        <StyledSectionAccordionTitle>
          {title}
        </StyledSectionAccordionTitle>
        <StyledSectionAccordionIcon data-testid="accordion-header"  onClick={() => isOpen ? onClose() : onOpen()}>
          {isOpen ? <DownIcon /> : <RightIcon />}
        </StyledSectionAccordionIcon>
      </StyledSectionHeaderContainer>
      <StyledSectionContent isOpen={isOpen}>
        {children}
      </StyledSectionContent>
    </StyledSectionAccordion>
  )
}