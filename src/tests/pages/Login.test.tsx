import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './../../pages/Login/Login';

// Mock the TranslationProvider
jest.mock('../../providers/TranslationProvider', () => ({
  useTranslation: () => ({
    translate: (key: string) => key, // Mocked translate function returns the key
    changeLanguage: jest.fn(), // Mocked function for changing language
    language: 'en', // Default mocked language
  }),
}));

describe('Login Component', () => {
  beforeEach(() => {
    // Ensure each test has a fresh mock state
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

    expect(screen.getByText(/valid email address/i)).toBeInTheDocument();
  });

  // Add more tests as needed
});
