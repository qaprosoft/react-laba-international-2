import { render, screen } from '@testing-library/react';
import React from 'react';
import ToDo from '@/components/ToDo/ToDo';
import { ToDoProvider } from '@/context/toDoContext';
import toDos from './dummyData/toDos';

const renderToDo = () => {
  render(
    <ToDoProvider>
      <ToDo key={toDos[0].id} toDoData={toDos[0]} />
    </ToDoProvider>,
  );
};

beforeEach(renderToDo);

describe('ToDo', () => {
  it('should have text input', () => {
    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  it('should have checkbox input', () => {
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
  });
  it('should have delete button', () => {
    const deleteButon = screen.getByAltText('delete button');

    expect(deleteButon).toBeInTheDocument();
  });

  it('should have edit button', () => {
    const editButon = screen.getByAltText('edit button');

    expect(editButon).toBeInTheDocument();
  });
});

describe('ToDo input', () => {
  it('should be disabled', () => {
    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();
  });

  it('should display task value', () => {
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue(toDos[0].value);
  });
});
