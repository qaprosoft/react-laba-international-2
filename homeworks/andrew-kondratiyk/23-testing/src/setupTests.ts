import '@testing-library/jest-dom';
import {rest} from 'msw';

import {setupServer} from 'msw/node';
import {setLogger} from 'react-query';

export const handlers = [
  rest.get('*/users/*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'John Doe',
      }),
    );
  }),
  rest.post('*/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'Chuck Norris',
      }),
    );
  }),
];

export const server = setupServer(...handlers);

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

// silence react-query errors
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});
