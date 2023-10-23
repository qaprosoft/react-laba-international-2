import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './../components/App';

beforeEach(() => {
  window.localStorage.clear();
});

test('Task should be successfully added when using a valid input', () => {
  render(<App />);

  userEvent.type(screen.getByPlaceholderText('Create new task'), 'test');
  userEvent.click(screen.getByRole('button', {name: /add/i}));
  expect(screen.getByPlaceholderText('Create new task')).not.toHaveValue();
  expect(screen.getByDisplayValue('test')).toBeInTheDocument();
});

test('"Clear completed tasks" button should be displayed only after adding a task', () => {
  render(<App />);

  expect(
    screen.queryByRole('button', {
      name: /clear completed/i,
    }),
  ).not.toBeInTheDocument();

  userEvent.type(screen.getByPlaceholderText('Create new task'), 'test');
  userEvent.click(screen.getByRole('button', {name: /add/i}));

  expect(
    screen.getByRole('button', {
      name: /clear completed/i,
    }),
  ).toBeInTheDocument();
});

test('After adding a task, focus should go back to the new task input', () => {
  render(<App />);
  const createTaskInput = screen.getByPlaceholderText('Create new task');

  userEvent.type(createTaskInput, 'test');
  userEvent.click(screen.getByRole('button', {name: /add/i}));

  expect(createTaskInput).toHaveFocus();
});
