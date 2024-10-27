import { render, screen, fireEvent } from '@testing-library/react';
import Select from './../../components/Select/Select';
import { SelectOption } from '../../types/components/select';

describe('Select Component', () => {
  const mockOnChange = jest.fn();

  const options: SelectOption[] = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with the correct label', () => {
    render(
      <Select
        name="test-select"
        label="Test Label"
        options={options}
        onChange={mockOnChange}
      />
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('renders select with the correct placeholder', () => {
    render(
      <Select
        name="test-select"
        label="Select an option"
        placeholder="Choose an option"
        options={options}
        onChange={mockOnChange}
      />
    );
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
  });

  test('renders all options', () => {
    render(
      <Select
        name="test-select"
        label="Select an option"
        options={options}
        onChange={mockOnChange}
      />
    );
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  test('displays the selected value', () => {
    render(
      <Select
        name="test-select"
        label="Select an option"
        options={options}
        selected="2"
        onChange={mockOnChange}
      />
    );
    const selectElement = screen.getByLabelText('Select an option');
    expect(selectElement).toHaveValue('2');
  });

  test('calls onChange handler when a new option is selected', () => {
    render(
      <Select
        name="test-select"
        label="Select an option"
        options={options}
        onChange={mockOnChange}
      />
    );
    const selectElement = screen.getByLabelText('Select an option');

    fireEvent.change(selectElement, { target: { value: '3' } });
    expect(mockOnChange).toHaveBeenCalledWith('3');
  });

  test('has correct classes applied', () => {
    render(
      <Select
        name="test-select"
        label="Select an option"
        options={options}
        onChange={mockOnChange}
      />
    );
    const selectElement = screen.getByLabelText('Select an option');
    expect(selectElement).toHaveClass(
      'bg-white border border-gray-300 text-gray-900 text-sm rounded-md'
    );
  });
});
