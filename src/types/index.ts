export type Contact = {
  id: string;
  name: string;
  email?: string;
  image: string;
  status: 'Attended' | 'Absent';
};
