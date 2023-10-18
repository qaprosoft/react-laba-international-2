import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import TodoInput from '../components/ToDoInput/ToDoInput';
import '@testing-library/jest-dom/extend-expect';

describe('TodoInput component', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(
      <TodoInput value="" onChange={() => {}} />,
    );
    const inputElement = getByPlaceholderText('Add a new to-do');
    expect(inputElement).toBeInTheDocument();
  });

  it('handles value change correctly', () => {
    let inputValue = '';
    const handleChange = newValue => {
      inputValue = newValue;
    };

    const {getByPlaceholderText} = render(
      <TodoInput value={inputValue} onChange={handleChange} />,
    );
    const inputElement = getByPlaceholderText('Add a new to-do');

    const newInputValue = 'New To-Do';
    fireEvent.change(inputElement, {target: {value: newInputValue}});

    expect(inputValue).toBe(newInputValue);
  });
});
