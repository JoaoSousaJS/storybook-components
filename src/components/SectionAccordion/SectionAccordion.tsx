import { 
  StyledSectionAccordion, 
  StyledSectionAccordionTitle, 
  StyledSectionHeaderContainer,
  StyledSectionContent, 
  StyledSectionAccordionIcon
} from "./styles";
import DownIcon from "../../icons/DownIcon";
import RightIcon from "../../icons/RightIcon";

/**
 * SectionAccordion is a collapsible section component that can show/hide content.
 * It provides a header with a title and an icon that indicates the current state.
 * 
 * @component
 * @example
 * ```jsx
 * <SectionAccordion
 *   title="Attended"
 *   isOpen={true}
 *   onOpen={() => console.log('opened')}
 *   onClose={() => console.log('closed')}
 * >
 *   <div>Content goes here</div>
 * </SectionAccordion>
 * ```
 */
type SectionAccordionProps = {
  /** The title of the accordion section. Must be either "Attended" or "Absent" */
  title: "Attended" | "Absent";
  /** The content to be shown/hidden */
  children: React.ReactNode;
  /** Controls whether the accordion is expanded */
  isOpen: boolean;
  /** Callback function called when the accordion is opened */
  onOpen: () => void;
  /** Callback function called when the accordion is closed */
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