/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationPage from './registrationPage';

describe('RegistrationPage', () => {
  test('should render the registration form', () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(<RegistrationPage />);

    expect(getByText('Registration Page')).toBeInTheDocument();
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByPlaceholderText('eg. Tom')).toBeInTheDocument();
    expect(getByLabelText('Surname')).toBeInTheDocument();
    expect(getByPlaceholderText('eg. Jonson')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('eg. tomjonson@gmail.com')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByPlaceholderText('eg. ****************')).toBeInTheDocument();
    expect(getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(getByPlaceholderText('eg. ****************')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();
    expect(getByText('Already have an account? Log In here')).toBeInTheDocument();
  });

  test('should update the state when input fields are changed', () => {
    const { getByLabelText } = render(<RegistrationPage />);
    const nameInput = getByLabelText('Name');
    const surnameInput = getByLabelText('Surname');
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const confirmInput = getByLabelText('Confirm Password');

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmInput, { target: { value: 'password123' } });

    expect(nameInput).toHaveValue('John');
    expect(surnameInput).toHaveValue('Doe');
    expect(emailInput).toHaveValue('john.doe@example.com');
    expect(passwordInput).toHaveValue('password123');
    expect(confirmInput).toHaveValue('password123');
  });
});
