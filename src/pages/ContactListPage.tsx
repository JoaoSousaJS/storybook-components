import { useState } from "react";
import SearchField from "../components/SearchField/SearchField";
import SectionAccordion from "../components/SectionAccordion/SectionAccordion";
import ContactSection from "../components/ContactSection/ContactSection";
import { useGetContactList } from "../hooks/getContactListHook";
import { filterContactByStatus } from "../components/utils/filterContactByStatus";


export default function ContactListPage() {
  const { contactList } = useGetContactList();
  const [search, setSearch] = useState("");
  const filteredContactList = contactList.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));

  const [isAttentedOpen, setIsAttentedOpen] = useState(false);
  const [isAbsentOpen, setIsAbsentOpen] = useState(false);

  const attentedContactList = filterContactByStatus(filteredContactList, "Attented");
  const absentContactList = filterContactByStatus(filteredContactList, "Absent");

  return (
    <>
      <SearchField placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      <SectionAccordion title="Attented" isOpen={isAttentedOpen} onOpen={() => setIsAttentedOpen(true)} onClose={() => setIsAttentedOpen(false)}>
        <ContactSection contacts={attentedContactList} />
      </SectionAccordion>
      <SectionAccordion title="Absent" isOpen={isAbsentOpen} onOpen={() => setIsAbsentOpen(true)} onClose={() => setIsAbsentOpen(false)}>
        <ContactSection contacts={absentContactList} />
      </SectionAccordion>
    </>
  );
}