import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {AddToDo} from './AddToDo';

afterEach(cleanup);

const defaultProps = {
  callback: jest.fn(),
  title: 'some test value',
};

test('calls the correct function on click', () => {
  const onClick = jest.fn();
  render(<AddToDo callback={onClick} />);
  const input: HTMLInputElement = screen.getByTestId('addTodo-input');

  expect(input.value).toBe('');
  fireEvent.change(input, {target: {value: 'New task!'}});
  expect(input.value).toBe('New task!');

  fireEvent.click(screen.getByText('Add'));
  expect(onClick).toHaveBeenCalled();

  expect(input.value).toBe('');
});
