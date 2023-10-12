import React from 'react';
import HomePage from './';
import {render, fireEvent, screen} from '@testing-library/react';
import {test, expect} from '@jest/globals';

test('Checking HomePage display', async () => {
  render(<HomePage />);
  const addTaskInput = screen.getByTestId('add-task-input') as HTMLInputElement;
  const addTaskButton = screen.getByTestId(
    'add-task-button',
  ) as HTMLButtonElement;
  const deleteCompletedTasksButton = screen.getByTestId(
    'delete-completed',
  ) as HTMLButtonElement;
  fireEvent.change(addTaskInput, {target: {value: 'Some text'}});
  expect(addTaskInput.value).toBe('Some text');
  fireEvent.click(addTaskButton);
  expect(addTaskInput.value).toBe('');
  expect(screen.queryByTestId('task')).toBeNull();
  expect(deleteCompletedTasksButton.textContent).toBe('Delete completed tasks');
});
