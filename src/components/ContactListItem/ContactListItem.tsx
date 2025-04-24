import { ContactListItemContainer, ContactListItemEmail, ContactListItemImage, ContactListItemInfoContainer, ContactListItemName } from "./styles";

type ContactListItemProps = {
  name: string;
  email?: string;
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
