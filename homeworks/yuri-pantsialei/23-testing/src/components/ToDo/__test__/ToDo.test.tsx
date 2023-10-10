import '@testing-library/jest-dom';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {ToDo} from '../ToDo';

afterEach(cleanup);

const defaultProps = {
  value: 'My todo',
  id: '123',
  isChecked: false,
  deleteCallback: jest.fn(),
  changeEditMode: jest.fn(),
  changeTodoStatus: jest.fn(),
};

test('change Todo editMode', () => {
  render(<ToDo {...defaultProps} />);

  expect(screen.getByText(defaultProps.value)).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('edit-btn'));
  fireEvent.change(screen.getByTestId('toDo-input'), {
    target: {value: 'updated Todo task <3'},
  });
  fireEvent.click(screen.getByTestId('edit-btn'));

  expect(screen.getByText(defaultProps.value)).toBeInTheDocument();
});
