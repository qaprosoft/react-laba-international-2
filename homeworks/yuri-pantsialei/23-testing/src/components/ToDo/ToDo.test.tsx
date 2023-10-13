import '@testing-library/jest-dom';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {ToDo} from './ToDo';

afterEach(cleanup);

const defaultProps = {
  value: 'My todo',
  id: '123',
  isChecked: false,
  deleteCallback: jest.fn(),
  changeEditMode: jest.fn(),
  changeTodoStatus: jest.fn(),
};

test('check for changing edit mode', () => {
  render(<ToDo {...defaultProps} />);

  expect(screen.getByTestId('todo-text')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('edit-btn'));
  expect(screen.getByTestId('toDo-input')).toBeInTheDocument();
});
