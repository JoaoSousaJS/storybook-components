import { describe, it, expect} from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactSection from "./ContactSection";
import Thumbnail from '../../assets/thumbnail.png';
describe('ContactSection', () => {
  it('should render', () => {
    render(<ContactSection contacts={[
      { id: '1', name: 'Peter Parker', email: 'peter.parker@example.com', image: Thumbnail, status: 'Attended' },
    ]} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Peter Parker')).toBeInTheDocument();
  });

  it('should render two contacts', () => {
    render(<ContactSection contacts={[
      { id: '1', name: 'Peter Parker', email: 'peter.parker@example.com', image: Thumbnail, status: 'Attended' },
      { id: '2', name: 'Mary Jane', email: 'mary.jane@example.com', image: Thumbnail, status: 'Absent' },
    ]} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('Peter Parker')).toBeInTheDocument();
    expect(screen.getByText('Mary Jane')).toBeInTheDocument();
  });

  it('should not render contacts if there are no contacts', () => {
    render(<ContactSection contacts={[]} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});