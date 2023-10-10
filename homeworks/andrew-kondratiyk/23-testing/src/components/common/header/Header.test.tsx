import Header from './Header';
import {renderWithClient} from '@/tests/utils';
import {screen} from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('Header', () => {
  it('renders without crashing', () => {
    renderWithClient(<Header isAuthenticated={false} />);
    expect(screen.getByText('Todos')).toBeInTheDocument();
  });

  it('shows button "Login" when user not logged in', () => {
    renderWithClient(<Header isAuthenticated={false} />);
    expect(screen.getByTestId('login-button')).toHaveTextContent('Login');
  });

  it('shows button "Sign out" when user logged in', () => {
    renderWithClient(<Header isAuthenticated={true} />);
    expect(screen.getByTestId('sign-out-button')).toHaveTextContent('Sign out');
  });
});
