import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LogInPage from './LogIn';

describe('LogInPage component', () => {
  it('should render correctly', () => {
    render(<LogInPage />);
    const heading = screen.getByRole('heading', { name: 'Log In Page' });
    expect(heading).toBeInTheDocument();
    const emailInput = screen.getByLabelText('Email adress');
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
    const logInButton = screen.getByRole('button', { name: 'Log In' });
    expect(logInButton).toBeInTheDocument();
    const registrationLink = screen.getByRole('link', { name: "Don't have an account? Register here" });
    expect(registrationLink).toBeInTheDocument();
    expect(registrationLink.href).toContain('/RegistrationPage');
  });

  it('should update email state when email input changes', () => {
    render(<LogInPage />);
    const emailInput = screen.getByLabelText('Email adress');
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    expect(emailInput.value).toEqual('test@test.com');
  });

  it('should update password state when password input changes', () => {
    render(<LogInPage />);
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toEqual('password123');
  });
});
