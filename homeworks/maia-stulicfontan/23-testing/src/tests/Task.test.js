import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Task from './../components/Task';

test('Save and Cancel buttons should not be visible until entering edit mode', () => {
  render(<Task task={{text: 'test', id: 1, isCompleted: false}} />);

  expect(
    screen.queryByRole('button', {
      name: /save/i,
    }),
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole('button', {
      name: /cancel/i,
    }),
  ).not.toBeInTheDocument();

  userEvent.click(
    screen.queryByRole('button', {
      name: /edit/i,
    }),
  );

  expect(
    screen.getByRole('button', {
      name: /save/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', {
      name: /cancel/i,
    }),
  ).toBeInTheDocument();
});

test('Edit button should be enabled if a task is not completed', () => {
  render(<Task task={{text: 'test', id: 2, isCompleted: false}} />);
  expect(screen.getByRole('button', {name: /edit/i})).toBeEnabled();
});

test('Edit button should be disabled if a task is completed', () => {
  render(<Task task={{text: 'test', id: 2, isCompleted: true}} />);
  expect(screen.getByRole('button', {name: /edit/i})).toBeDisabled();
});
