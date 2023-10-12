import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import AddToDoForm from '@/components/AddToDoForm/AddToDoForm';
import { ToDoProvider } from '@/context/toDoContext';

const renderForm = () => {
  render(
    <ToDoProvider>
      <AddToDoForm />;
    </ToDoProvider>,
  );
};

beforeEach(renderForm);
afterEach(cleanup);

describe('AddToDoForm', () => {
  it('Should have an input', () => {
    const formInput = screen.getByRole('textbox');

    expect(formInput).toBeInTheDocument();
  });

  it('Should have a button', () => {
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});

describe('AddToDoForm input', () => {
  it('Should be focused after initial render', () => {
    const formInput = screen.getByRole('textbox');

    expect(formInput).toHaveFocus();
  });

  it('Should be focused after clicking on the button', () => {
    const formInput = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(formInput).toHaveFocus();
  });
});
