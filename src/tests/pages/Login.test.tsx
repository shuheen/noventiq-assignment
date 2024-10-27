import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './../../pages/Login/Login';

// Mock the TranslationProvider
jest.mock('../../providers/TranslationProvider', () => ({
  useTranslation: jest.fn(() => ({
    translate: (key: string) => {
      const translations: Record<string, string> = {
        requiredEmail: 'Email is required.',
        validEmail: 'Please enter a valid email address.',
        publicEmail: 'Please use a corporate email address.',
        corporateEmail: 'Invalid corporate email format.',
        requiredPassword: 'Password is required.',
        passwordStrength:
          'Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters.',
        login: 'Login',
        email: 'Email',
        password: 'Password',
        language: 'Language',
        rememberMe: 'Remember Me',
        forgotPassword: 'Forgot Password?',
        emailPlaceholder: 'Enter your email',
        passwordPlaceholder: 'Enter your password',
      };
      return translations[key] || key; // Return the translation or the key if not found
    },
    changeLanguage: jest.fn(),
    language: 'en',
  })),
}));

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Login component with all required elements', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Check if input fields and button are rendered
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('displays email error on invalid input', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'invalid-password' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(
      screen.getByText(/please enter a valid email address/i)
    ).toBeInTheDocument();
  });

  it('displays error when password is weak', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(emailInput, { target: { value: 'test@noventiq.com' } });
    fireEvent.change(passwordInput, { target: { value: 'weak' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(
      screen.getByText(/password must be at least 8 characters long/i)
    ).toBeInTheDocument();
  });

  it('displays no error when valid email and password are provided', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(emailInput, { target: { value: 'test@noventiq.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidPass1!' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(
      screen.queryByText(/please enter a valid email address/i)
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/password is required/i)).not.toBeInTheDocument();
  });

  it('toggles password visibility when the show/hide icon is clicked', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const passwordInput = screen.getByLabelText(/password/i);
    const passwordShowIcon = screen.getByTestId('icon-password_show');

    // Initially password should be hidden
    expect(passwordInput).toHaveAttribute('type', 'password');

    fireEvent.click(passwordShowIcon);
    // After clicking, password should be visible
    expect(passwordInput).toHaveAttribute('type', 'text');

    const passwordHideIcon = screen.getByTestId('icon-password_hide');
    fireEvent.click(passwordHideIcon);
    // Clicking again should hide the password
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('checks the "Remember Me" checkbox', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const rememberMeCheckbox = screen.getByLabelText(/remember me/i);

    // Initially checkbox should not be checked
    expect(rememberMeCheckbox).not.toBeChecked();

    fireEvent.click(rememberMeCheckbox);
    // After clicking, checkbox should be checked
    expect(rememberMeCheckbox).toBeChecked();

    fireEvent.click(rememberMeCheckbox);
    // Clicking again should uncheck the checkbox
    expect(rememberMeCheckbox).not.toBeChecked();
  });

  it('disables the login button when fields are empty', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', { name: /login/i });

    // Button should be disabled initially
    expect(loginButton).toBeDisabled();

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    // Fill email and password
    fireEvent.change(emailInput, { target: { value: 'test@noventiq.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidPass1!' } });

    // Button should be enabled
    expect(loginButton).toBeEnabled();
  });
});
