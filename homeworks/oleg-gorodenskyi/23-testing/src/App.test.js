import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import 'jest-localstorage-mock';

import App from './App';

const defaultValue = 'Test input';
const editedValue = 'Edited value'
let addInputElement, addBtn

beforeEach(() => {
  render(<App />);
  localStorage.clear();
  addInputElement = screen.getByPlaceholderText('Create To-Do Task');
  addBtn = screen.queryByText('Add');
});


describe('Add form', () => {
  test('should check length of ToDoItems after delete the ToDoItem', () => {
    expect(screen.queryAllByTestId('to-do-item').length).toBe(0);
    fireEvent.change(addInputElement, { target: { value: defaultValue } });
    fireEvent.click(addBtn);
    expect(screen.queryAllByTestId('to-do-item').length).toBe(1);
  });
  test('should check submitting a form, existence inputted value and after clear input form', () => {
    fireEvent.change(addInputElement, { target: { value: defaultValue } });
    expect(addInputElement.value).toBe(defaultValue);
    fireEvent.click(addBtn);
    expect(addInputElement.value).toBe('');
    expect(screen.getByText(defaultValue)).toBeInTheDocument();
  });
  test('should check delete item after adding it', () => {
    fireEvent.change(addInputElement, { target: { value: defaultValue } });
    fireEvent.click(addBtn);
    const deleteBtn = screen.getByTestId('delete-btn');
    expect(screen.queryAllByTestId('to-do-item').length).toBe(1);
    fireEvent.click(deleteBtn);
    expect(screen.queryAllByTestId('to-do-item').length).toBe(0);
  });
  test('should check value of ToDoItem after edit it', () => {
    fireEvent.change(addInputElement, { target: { value: defaultValue } });
    fireEvent.click(addBtn);
    const editBtn = screen.queryByTestId('edit-btn');
    fireEvent.click(editBtn);
    const editInput = screen.queryByTestId('edit-input');
    fireEvent.change(editInput, { target: { value: editedValue } })
    const editSaveBtn = screen.queryByTestId('edit-save-btn');
    fireEvent.click(editSaveBtn);
    expect(screen.getByText(editedValue)).toBeInTheDocument();
  });
  test('should check toggling style on element', () => { 
    fireEvent.change(addInputElement, { target: { value: defaultValue } });
    fireEvent.click(addBtn);
    const toggleMarkBtn = screen.queryByTestId('toggle-marked');
    const checkStyle = screen.queryByTestId('check-style');
    fireEvent.click(toggleMarkBtn);
    const computedStyle = getComputedStyle(checkStyle);
    expect(computedStyle.textDecoration).toBe('line-through')
  })
  
});
