import React from 'react';
import {render} from '@testing-library/react';
import ToDoForm from '../components/ToDoForm/ToDoForm';
import '@testing-library/jest-dom/extend-expect';

test('renders ToDoForm component with input and button', () => {
  const {getByPlaceholderText, getByText} = render(
    <ToDoForm newToDo="" setNewToDo={() => {}} addToDo={() => {}} />,
  );

  const inputElement = getByPlaceholderText('Add a new to-do');
  const addButton = getByText('Add');

  expect(inputElement).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});
