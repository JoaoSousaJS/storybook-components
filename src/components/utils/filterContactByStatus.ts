import { Contact } from "../../types";

export const filterContactByStatus = (contacts: Contact[], status: "Attented" | "Absent") => {
  return contacts.filter((contact) => contact.status === status);
};
