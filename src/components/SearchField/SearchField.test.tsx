import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchField from './SearchField';

describe('SearchField', () => {
  it('renders with placeholder text', () => {
    render(<SearchField placeholder="Search items..." />);
    expect(screen.getByPlaceholderText('Search items...')).toBeInTheDocument();
  });

  it('renders with search icon', () => {
    render(<SearchField />);
    // Since SVG is being used as an image, we can test for its role
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('calls onChange handler when typing', async () => {
    const mockOnChange = vi.fn();
    render(<SearchField onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'test');
    
    expect(mockOnChange).toHaveBeenCalled();
    // it should not have the placeholder text if text is typed
    expect(screen.queryByPlaceholderText('Search items...')).not.toBeInTheDocument();
  });

  it('updates input value when typing', async () => {
    render(<SearchField />);
    const input = screen.getByRole('textbox');
    
    await userEvent.type(input, 'hello');
    expect(input).toHaveValue('hello');
  });
});