import styled from "styled-components";

export const StyledSectionAccordion = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: #FFFFFF;
`;

export const StyledSectionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

export const StyledSectionAccordionTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #5A6D80;
  line-height: 20px;
  font-family: "Roboto", sans-serif;
`;

export const StyledSectionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #E0E0E0;
  border-bottom: 1px solid #E0E0E0;
  padding-right: 8px;
  padding-left: 16px;
  height: 37px;
`;
