import React from 'react';
import HomePage from './';
import {render, screen} from '@testing-library/react';
import {test, expect} from '@jest/globals';

test('Checking text content of buttons', () => {
  render(<HomePage />);
  const addTaskButton = screen.getByTestId(
    'add-task-button',
  ) as HTMLButtonElement;
  const deleteCompletedTasksButton = screen.getByTestId(
    'delete-completed',
  ) as HTMLButtonElement;
  expect(addTaskButton.textContent).toBe('Add');
  expect(deleteCompletedTasksButton.textContent).toBe('Delete completed tasks');
});
