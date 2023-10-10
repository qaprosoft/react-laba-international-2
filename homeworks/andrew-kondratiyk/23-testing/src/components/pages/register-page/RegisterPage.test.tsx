import {renderWithClient} from '@/tests/utils';
import {screen, fireEvent} from '@testing-library/react';
import RegisterPage from './RegisterPage';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('RegisterPage', () => {
  it('renders RegisterPage with input fields and submit button', () => {
    renderWithClient(<RegisterPage />);

    const nameInput = screen.getByLabelText('Name');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByTestId('register-submit-btn');

    expect(nameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('updates state on input change', () => {
    renderWithClient(<RegisterPage />);

    const nameInput = screen.getByLabelText<HTMLInputElement>('Name');
    const passwordInput = screen.getByLabelText<HTMLInputElement>('Password');

    fireEvent.change(nameInput, {target: {value: 'testUser'}});
    fireEvent.change(passwordInput, {target: {value: 'testPassword'}});

    expect(nameInput.value).toBe('testUser');
    expect(passwordInput.value).toBe('testPassword');
  });
});
