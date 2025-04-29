import { Contact } from "../../types";
import Thumbnail from '../../assets/thumbnail.png';

export const contactMockList: Contact[] = [
  {
    id: "1",
    name: "Peter Parker",
    email: "peter.parker@example.com",
    image: Thumbnail,
    status: "Attended",
  },
  {
    id: "2",
    name: "J J Abrams",
    email: "j.j.abrams@example.com",
    image: Thumbnail,
    status: "Absent",
  },
  {
    id: "3",
    name: "Matt Murdock",
    email: "matt.murdock@example.com",
    image: Thumbnail,
    status: "Attended",
  },
  {
    id: "4",
    name: "Diana Prince",
    email: "diana.prince@example.com",
    image: Thumbnail,
    status: "Absent",
  },
];
