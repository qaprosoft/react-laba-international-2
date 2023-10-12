import React from 'react';
import AddTaskInput from './Component';
import {render, fireEvent, screen} from '@testing-library/react';
import {test, expect} from '@jest/globals';

test('Checking AddTaskInput value change', () => {
  render(<AddTaskInput />);
  const input = screen.getByTestId('add-task-input') as HTMLInputElement;
  const button = screen.getByTestId('add-task-button') as HTMLButtonElement;
  expect(input.value).toBe('');
  fireEvent.change(input, {target: {value: 'Some text'}});
  expect(input.value).toBe('Some text');
  fireEvent.click(button);
  expect(input.value).toBe('');
});
