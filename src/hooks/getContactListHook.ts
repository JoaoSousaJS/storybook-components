import { useState } from "react";

import { useEffect } from "react";
import { contactMockList } from "../test/mock/contactMock";
import { Contact } from "../types";

// mock api call
export const useGetContactList = () => {
  const [contactList, setContactList] = useState<Contact[]>([]);

  useEffect(() => {
    setContactList(contactMockList);
  }, []);

  return { contactList };
};