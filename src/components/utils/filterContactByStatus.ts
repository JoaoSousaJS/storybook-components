import { Contact } from "../../types";

export const filterContactByStatus = (contacts: Contact[], status: "Attended" | "Absent") => {
  return contacts.filter((contact) => contact.status === status);
};
