import {fireEvent, render, screen, cleanup} from '@testing-library/react';
import 'jest-localstorage-mock';

import App from './App';

const defaultValue = 'Test input';

beforeEach(() => {
  render(<App />);
  localStorage.clear();
});

describe('Add form', () => {
  test('should check length of ToDoItems after delete the ToDoItem', () => {
    const addInputElement = screen.getByPlaceholderText('Create To-Do Task');
    const addBtn = screen.queryByText('Add');
    expect(screen.queryAllByTestId('to-do-item').length).toBe(0);
    fireEvent.change(addInputElement, {target: {value: defaultValue}});
    fireEvent.click(addBtn);
    expect(screen.queryAllByTestId('to-do-item').length).toBe(1);
  });
  test('should check submitting a form, existence inputted value and after clear input form', () => {
    const addInputElement = screen.getByPlaceholderText('Create To-Do Task');
    const addBtn = screen.queryByText('Add');
    fireEvent.change(addInputElement, {target: {value: defaultValue}});
    expect(addInputElement.value).toBe(defaultValue);
    fireEvent.click(addBtn);
    expect(addInputElement.value).toBe('');
    expect(screen.getByText(defaultValue)).toBeInTheDocument();
  });
  test('should check delete item after adding it', () => {
    const addInputElement = screen.getByPlaceholderText('Create To-Do Task');
    const addBtn = screen.queryByText('Add');
    fireEvent.change(addInputElement, {target: {value: defaultValue}});
    fireEvent.click(addBtn);
    const deleteBtn = screen.getByTestId('delete-btn');
    expect(screen.queryAllByTestId('to-do-item').length).toBe(1);
    fireEvent.click(deleteBtn);
    expect(screen.queryAllByTestId('to-do-item').length).toBe(0);
  });
});
