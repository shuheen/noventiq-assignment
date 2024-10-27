import { render, screen, fireEvent } from '@testing-library/react';
import InputText from './../../components/InputText/InputText';

describe('InputText Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with the correct label', () => {
    render(
      <InputText
        type="text"
        label="Username"
        name="username"
        onChange={mockOnChange}
      />
    );
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  test('renders input with the correct type and placeholder', () => {
    render(
      <InputText
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={mockOnChange}
      />
    );
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toBeInTheDocument();
  });

  test('renders required attribute', () => {
    render(
      <InputText
        label="Password"
        type="password"
        required={true}
        name="password"
        onChange={mockOnChange}
      />
    );
    const input = screen.getByLabelText('Password');
    expect(input).toHaveAttribute('required');
  });

  test('calls onChange handler when input value changes', () => {
    render(
      <InputText label="Username" name="username" onChange={mockOnChange} />
    );
    const input = screen.getByLabelText('Username');
    fireEvent.change(input, { target: { value: 'new_username' } });
    expect(mockOnChange).toHaveBeenCalledWith('new_username');
  });

  test('renders start icon if provided', () => {
    render(
      <InputText
        label="Search"
        name="search"
        startIcon={<span>🔍</span>}
        onChange={mockOnChange}
      />
    );
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  test('renders end icon if provided', () => {
    render(
      <InputText
        label="Password"
        name="password"
        endIcon={<span>👁️</span>}
        onChange={mockOnChange}
      />
    );
    expect(screen.getByText('👁️')).toBeInTheDocument();
  });

  test('renders error message when error prop is provided', () => {
    render(
      <InputText
        label="Email"
        name="email"
        error="Invalid email"
        onChange={mockOnChange}
      />
    );
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    expect(screen.getByText('Invalid email')).toHaveClass(
      'text-sm text-red-500 font-medium'
    );
  });

  test('renders with the correct label', () => {
    render(
      <InputText label="Username" name="username" onChange={mockOnChange} />
    );
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  test('renders input with the correct type and placeholder', () => {
    render(
      <InputText
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={mockOnChange}
      />
    );
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toBeInTheDocument();
  });
});
