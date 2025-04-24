import styled from "styled-components";

export const ContactListItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  width: 400px;
  height: 52px;
  border-radius: 6px;
  background-color: #FFFFFF;
`;

export const ContactListItemImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const ContactListItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContactListItemName = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  color: #20374B;
  margin: 0;
`;

export const ContactListItemEmail = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  color: #5A6D80;
  margin: 0;
`;
