import { useState, useMemo, useCallback } from "react";
import SearchField from "../components/SearchField/SearchField";
import SectionAccordion from "../components/SectionAccordion/SectionAccordion";
import ContactSection from "../components/ContactSection/ContactSection";
import { useGetContactList } from "../hooks/getContactListHook";
import { filterContactByStatus } from "../components/utils/filterContactByStatus";
import { useDebounce } from "../hooks/useDebounce";
import SearchIcon from "../icons/SearchIcon";

export default function ContactListPage() {
  const { contactList } = useGetContactList();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const [isAttendedOpen, setIsAttendedOpen] = useState(false);
  const [isAbsentOpen, setIsAbsentOpen] = useState(false);

  // Memoize the filtered list to prevent unnecessary recalculations
  const filteredContactList = useMemo(() => {
    return contactList.filter((contact) => 
      contact.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [contactList, debouncedSearch]);

  // Memoize the status-filtered lists
  const AttendedContactList = useMemo(() => 
    filterContactByStatus(filteredContactList, "Attended"),
    [filteredContactList]
  );

  const absentContactList = useMemo(() => 
    filterContactByStatus(filteredContactList, "Absent"),
    [filteredContactList]
  );

  // Memoize handlers
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const handleAttendedOpen = useCallback(() => setIsAttendedOpen(true), []);
  const handleAttendedClose = useCallback(() => setIsAttendedOpen(false), []);
  const handleAbsentOpen = useCallback(() => setIsAbsentOpen(true), []);
  const handleAbsentClose = useCallback(() => setIsAbsentOpen(false), []);

  return (
    <>
      <SearchField 
        placeholder="Search" 
        onChange={handleSearch} 
        icon={<SearchIcon />}
      />
      <SectionAccordion 
        title="Attended" 
        isOpen={isAttendedOpen} 
        onOpen={handleAttendedOpen} 
        onClose={handleAttendedClose}
      >
        <ContactSection contacts={AttendedContactList} />
      </SectionAccordion>
      <SectionAccordion 
        title="Absent" 
        isOpen={isAbsentOpen} 
        onOpen={handleAbsentOpen} 
        onClose={handleAbsentClose}
      >
        <ContactSection contacts={absentContactList} />
      </SectionAccordion>
    </>
  );
}