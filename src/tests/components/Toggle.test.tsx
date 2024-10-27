import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from '../../components/Toggle/Toggle';

describe('Toggle Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with the correct label', () => {
    render(
      <Toggle
        label="Test Label"
        name="test-switch"
        checked={false}
        onChange={mockOnChange}
      />
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('renders as checked when checked prop is true', () => {
    render(
      <Toggle
        label="Test Label"
        name="test-switch"
        checked={true}
        onChange={mockOnChange}
      />
    );
    const checkbox = screen.getByRole('checkbox', { name: /test label/i });
    expect(checkbox).toBeChecked();
  });

  test('renders as unchecked when checked prop is false', () => {
    render(
      <Toggle
        label="Test Label"
        name="test-switch"
        checked={false}
        onChange={mockOnChange}
      />
    );
    const checkbox = screen.getByRole('checkbox', { name: /test label/i });
    expect(checkbox).not.toBeChecked();
  });

  test('calls onChange handler when toggled', () => {
    render(
      <Toggle
        label="Test Label"
        name="test-switch"
        checked={false}
        onChange={mockOnChange}
      />
    );
    const checkbox = screen.getByRole('checkbox', { name: /test label/i });

    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('applies correct styles when checked and unchecked', () => {
    const { rerender } = render(
      <Toggle
        label="Test Label"
        name="test-switch"
        checked={true}
        onChange={mockOnChange}
      />
    );
    const checkbox = screen.getByRole('checkbox', { name: /test label/i });

    // Check styles when checked
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveClass('peer');

    // Re-render with checked as false
    rerender(
      <Toggle
        label="Test Label"
        name="test-switch"
        checked={false}
        onChange={mockOnChange}
      />
    );
    expect(checkbox).not.toBeChecked();
  });
});
