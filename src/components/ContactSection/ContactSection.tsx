import { Contact } from "../../types";
import ContactListItem from "../ContactListItem/ContactListItem";
import { StyledContactSectionContainer } from "./styles";

/**
 * ContactSection is a container component that renders a list of contacts.
 * It maps through the contacts array and renders each contact as a ContactListItem.
 * 
 * @component
 * @example
 * ```jsx
 * const contacts = [
 *   { id: '1', name: 'Peter Parker', email: 'peter@example.com', image: '/avatar.png', status: 'Present' }
 * ];
 * 
 * <ContactSection contacts={contacts} />
 * ```
 */
type ContactSectionProps = {
  /** Array of contact objects to be displayed. If undefined, nothing will be rendered. */
  contacts?: Contact[];
};

export default function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <StyledContactSectionContainer>
      {contacts?.map((contact) => (
        <ContactListItem 
          key={contact.id} 
          name={contact.name} 
          email={contact.email} 
          image={contact.image} 
        />
      ))}
    </StyledContactSectionContainer>
  );
}