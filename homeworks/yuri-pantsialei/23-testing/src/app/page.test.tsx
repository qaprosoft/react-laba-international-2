import '@testing-library/jest-dom';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Home from './page';

afterEach(cleanup);

const defaultProps = [
  {
    title: 'My todo 1',
  },
  {
    title: 'My todo 2',
  },
  {
    title: 'My todo 3',
  },
  {
    title: 'My todo 4',
  },
];

test('check for adding todos', () => {
  render(<Home />);
  defaultProps.forEach(prop => {
    fireEvent.change(screen.getByTestId('addTodo-input'), {
      target: {value: prop.title},
    });
    fireEvent.click(screen.getByTestId('add-todo-btn'));
  });

  expect(screen.getByText('My todo 1')).toBeInTheDocument();
});

test('check for adding 2 todos with the same value', () => {
  render(<Home />);

  fireEvent.change(screen.getByTestId('addTodo-input'), {
    target: {value: defaultProps[0].title},
  });
  fireEvent.click(screen.getByTestId('add-todo-btn'));

  fireEvent.change(screen.getByTestId('addTodo-input'), {
    target: {value: defaultProps[0].title},
  });
  fireEvent.click(screen.getByTestId('add-todo-btn'));

  expect(screen.getByTestId('already-exist-err')).toBeInTheDocument();
});
