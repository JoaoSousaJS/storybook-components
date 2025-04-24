import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactListItem from "./ContactListItem";

describe('ContactListItem', () => {
  it('should render', () => {
    render(<ContactListItem name="Mary Jane" email="mary.jane@example.com" image="https://via.placeholder.com/150" />);
    expect(screen.getByText('Mary Jane')).toBeInTheDocument();
    expect(screen.getByText('mary.jane@example.com')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  it('should render without email', () => {
    render(<ContactListItem name="Mary Jane" image="https://via.placeholder.com/150" />);
    expect(screen.getByText('Mary Jane')).toBeInTheDocument();
    expect(screen.queryByText('mary.jane@example.com')).not.toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });  
});
