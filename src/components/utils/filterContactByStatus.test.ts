// src/components/utils/filterContactByStatus.test.ts
import { describe, it, expect } from 'vitest';
import { filterContactByStatus } from './filterContactByStatus';
import { Contact } from '../../types';

describe('filterContactByStatus', () => {
  const mockContacts: Contact[] = [
    {
      id: '1',
      name: 'Peter Parker',
      email: 'peter.parker@example.com',
      image: 'image-url',
      status: 'Attented'
    },
    {
      id: '2',
      name: 'Mary Jane',
      email: 'mary.jane@example.com',
      image: 'image-url',
      status: 'Absent'
    },
    {
      id: '3',
      name: 'Harry Osborn',
      email: 'harry.osborn@example.com',
      image: 'image-url',
      status: 'Attented'
    }
  ];

  it('should filter contacts by Attented status', () => {
    const attendedContacts = filterContactByStatus(mockContacts, 'Attented');

    expect(attendedContacts).toHaveLength(2);
    expect(attendedContacts.every(contact => contact.status === 'Attented')).toBe(true);
    expect(attendedContacts[0].name).toBe('Peter Parker');
    expect(attendedContacts[1].name).toBe('Harry Osborn');
  });

  it('should filter contacts by Absent status', () => {
    const absentContacts = filterContactByStatus(mockContacts, 'Absent');

    expect(absentContacts).toHaveLength(1);
    expect(absentContacts.every(contact => contact.status === 'Absent')).toBe(true);
    expect(absentContacts[0].name).toBe('Mary Jane');
  });

  it('should return empty array when no contacts match the status', () => {
    const emptyContacts = filterContactByStatus([], 'Absent');
    expect(emptyContacts).toHaveLength(0);
  });
});