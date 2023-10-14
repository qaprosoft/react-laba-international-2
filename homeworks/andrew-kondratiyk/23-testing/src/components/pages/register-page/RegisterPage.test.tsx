import {renderWithClient} from '@/tests/utils';
import {fireEvent, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterPage from './RegisterPage';
import '@testing-library/jest-dom';

import {rest} from 'msw';

import {setupServer} from 'msw/node';
import {setLogger} from 'react-query';

import {useRouter} from 'next/navigation';

export const handlers = [
  rest.post('*/api/auth/register', async (req, res, ctx) => {
    const requestJson = await req.json();

    if (
      requestJson.name === 'testUser' &&
      requestJson.password === 'testPassword'
    ) {
      return res(
        ctx.status(200),
        ctx.json({
          name: 'Chuck Norris',
        }),
      );
    } else {
      return res(ctx.status(500));
    }
  }),
];

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

jest.mock('next/navigation', () => {
  const pushMock = jest.fn();
  return {
    useRouter() {
      return {
        prefetch: () => null,
        push: pushMock,
      };
    },
  };
});

describe('RegisterPage', () => {
  it('redirecting to login after successful registration', async () => {
    renderWithClient(<RegisterPage />);

    const nameInput = screen.getByLabelText<HTMLInputElement>('Name');
    const passwordInput = screen.getByLabelText<HTMLInputElement>('Password');

    await userEvent.type(nameInput, 'testUser');
    await userEvent.type(passwordInput, 'testPassword');

    await userEvent.click(screen.getByTestId('register-submit-btn'));

    await waitFor(() =>
      expect(useRouter().push as jest.Mock).toBeCalledWith('/login'),
    );
  });
});
