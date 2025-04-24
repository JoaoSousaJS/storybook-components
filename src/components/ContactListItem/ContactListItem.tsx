import { ContactListItemContainer, ContactListItemEmail, ContactListItemImage, ContactListItemInfoContainer, ContactListItemName } from "./styles";

/**
 * ContactListItem is a reusable component that displays contact information in a consistent layout.
 * It shows a contact's image, name, and optionally their email address.
 * 
 * @component
 * @example
 * ```jsx
 * <ContactListItem
 *   name="John Doe"
 *   email="john@example.com"
 *   image="/path/to/image.jpg"
 * />
 * ```
 */
type ContactListItemProps = {
  /** The full name of the contact */
  name: string;
  /** The email address of the contact (optional) */
  email?: string;
  /** URL or path to the contact's profile image */
  image: string;
};

export default function ContactListItem({ name, email, image }: ContactListItemProps) {
  return (
    <ContactListItemContainer>
      <ContactListItemImage src={image} alt={name} />
      <ContactListItemInfoContainer>
        <ContactListItemName>{name}</ContactListItemName>
        {email && <ContactListItemEmail>{email}</ContactListItemEmail>}
      </ContactListItemInfoContainer>
    </ContactListItemContainer>
  );
}