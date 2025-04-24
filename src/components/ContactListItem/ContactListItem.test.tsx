import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactListItem from "./ContactListItem";
import Thumbnail from '../../assets/thumbnail.png';

describe('ContactListItem', () => {
  it('should render', () => {
    render(<ContactListItem name="Mary Jane" email="mary.jane@example.com" image={Thumbnail} />);
    expect(screen.getByText('Mary Jane')).toBeInTheDocument();
    expect(screen.getByText('mary.jane@example.com')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', Thumbnail);
  });

  it('should render without email', () => {
    render(<ContactListItem name="Mary Jane" image={Thumbnail} />);
    expect(screen.getByText('Mary Jane')).toBeInTheDocument();
    expect(screen.queryByText('mary.jane@example.com')).not.toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', Thumbnail);
  });  
});