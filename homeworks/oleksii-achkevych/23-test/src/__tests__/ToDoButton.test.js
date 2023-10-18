import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import TodoButton from '../components/ToDoButton/ToDoButton';

test('TodoButton calls onClick when clicked', () => {
  const label = 'Click Me';
  const onClick = jest.fn();

  render(<TodoButton label={label} onClick={onClick} />);

  const button = screen.getByText(label);

  fireEvent.click(button);

  expect(onClick).toHaveBeenCalled();
  expect(onClick).toHaveBeenCalledTimes(1);
});
