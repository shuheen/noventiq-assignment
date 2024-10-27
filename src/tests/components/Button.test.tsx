import { render, screen, fireEvent } from '@testing-library/react';
import Button from './../../components/Button/Button';

describe('Button Component', () => {
  test('renders the button with correct text', () => {
    render(<Button text="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('renders disabled button', () => {
    render(<Button text="Click Me" disabled={true} />);
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
  });

  test('applies correct classes for medium size', () => {
    render(<Button text="Click Me" size="md" />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('w-[90%] md:w-[40%] lg:w-[20%] py-2');
  });

  test('applies correct classes for large size', () => {
    render(<Button text="Click Me" size="lg" />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('w-[100%] md:w-[60%] lg:w-[40%] py-4');
  });

  test('applies correct classes for small size', () => {
    render(<Button text="Click Me" size="sm" />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('w-[70%] md:w-[60%] lg:w-[10%] py-1');
  });

  test('applies correct classes for filled primary variant', () => {
    render(<Button text="Click Me" type="filled" variant="primary" />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('bg-sky-800 border-none');
  });

  test('applies correct classes for outlined primary variant', () => {
    render(<Button text="Click Me" type="outlined" variant="primary" />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('border border-sky-800 border-2 bg-transparent');
  });

  test('applies correct classes for outlined secondary variant', () => {
    render(<Button text="Click Me" type="outlined" variant="secondary" />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass(
      'border border-gray-800 border-2 bg-transparent'
    );
  });

  test('applies correct classes for filled secondary variant', () => {
    render(<Button text="Click Me" type="filled" variant="secondary" />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('bg-gray-800 border-none');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick handler when disabled', () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} disabled={true} />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies correct classes for rounded prop', () => {
    render(<Button text="Click Me" rounded="sm" />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('rounded-sm');
  });
});
