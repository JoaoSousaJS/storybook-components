import { Contact } from "../../types";
import ContactListItem from "../ContactListItem/ContactListItem";
import { StyledContactSectionContainer } from "./styles";

type ContactSectionProps = {
  contacts?: Contact[];
};

export default function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <StyledContactSectionContainer>
    {contacts?.map((contact) => (
      <ContactListItem key={contact.id} name={contact.name} email={contact.email} image={contact.image} />
    ))}
  </StyledContactSectionContainer>
  );
}