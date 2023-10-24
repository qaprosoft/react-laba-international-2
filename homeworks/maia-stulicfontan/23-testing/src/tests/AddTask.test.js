import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddTask from './../components/AddTask';

test('Add button should become enabled when typing into the new task input', () => {
  render(<AddTask />);
  const addButton = screen.getByRole('button', {name: /add/i});
  const createTaskInput = screen.getByPlaceholderText('Create new task');

  expect(addButton).toBeDisabled();
  userEvent.type(createTaskInput, 'test');
  expect(addButton).toBeEnabled();
});
