import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Task from './Task';

describe('Task component', () => {
  const mockTask = {
    id: 1,
    value: 'Test task',
  };
  const mockDeleteHandler = jest.fn();
  const mockUpdateHandler = jest.fn();

  beforeEach(() => jest.spyOn(window, 'alert').mockImplementation());

  it('renders the task with default props', () => {
    render(
      <Task
        id={mockTask.id}
        value={mockTask.value}
        deleteHandler={mockDeleteHandler}
        updateHandler={mockUpdateHandler}
      />,
    );

    const taskElement = screen.getByDisplayValue(mockTask.value);
    expect(taskElement).toBeInTheDocument();
  });

  it('switches to edit mode when clicking the change icon', () => {
    render(
      <Task
        id={mockTask.id}
        value={mockTask.value}
        deleteHandler={mockDeleteHandler}
        updateHandler={mockUpdateHandler}
      />,
    );

    const changeIcon = screen.getByAltText('change');
    fireEvent.click(changeIcon);

    const inputElement = screen.getByDisplayValue(mockTask.value);
    expect(inputElement).toBeInTheDocument();
  });

  it('calls the updateHandler function when clicking the OK icon', () => {
    render(
      <Task
        id={mockTask.id}
        value={mockTask.value}
        deleteHandler={mockDeleteHandler}
        updateHandler={mockUpdateHandler}
      />,
    );

    const changeIcon = screen.getByAltText('change');
    fireEvent.click(changeIcon);

    const okIcon = screen.getByAltText('update');
    fireEvent.click(okIcon);

    expect(mockUpdateHandler).toHaveBeenCalledTimes(1);
    expect(mockUpdateHandler).toHaveBeenCalledWith({
      id: mockTask.id,
      value: mockTask.value,
    });
  });

  it('displays an alert when the task length is greater than 20 characters', () => {
    render(
      <Task
        id={mockTask.id}
        value={mockTask.value}
        deleteHandler={mockDeleteHandler}
        updateHandler={mockUpdateHandler}
      />,
    );

    const alertSpy = jest.spyOn(window, 'alert').mockImplementation();
    const changeIcon = screen.getByAltText('change');
    fireEvent.click(changeIcon);

    const inputElement = screen.getByDisplayValue(mockTask.value);

    // Enter a value greater than 20 characters
    fireEvent.change(inputElement, {
      target: {value: 'This is a very long task description'},
    });
    fireEvent.click(screen.getByAltText('update'));

    expect(alertSpy).toHaveBeenCalledTimes(1);
    alertSpy.mockRestore();
  });

  it('calls the deleteHandler function when clicking the delete icon', () => {
    render(
      <Task
        id={mockTask.id}
        value={mockTask.value}
        deleteHandler={mockDeleteHandler}
        updateHandler={mockUpdateHandler}
      />,
    );

    const deleteIcon = screen.getByAltText('delete');
    fireEvent.click(deleteIcon);

    expect(mockDeleteHandler).toHaveBeenCalledTimes(1);
  });

  it('displays an alert when trying to update with an empty task message', () => {
    render(
      <Task
        id={mockTask.id}
        value={mockTask.value}
        deleteHandler={mockDeleteHandler}
        updateHandler={mockUpdateHandler}
      />,
    );

    const changeIcon = screen.getByAltText('change');
    fireEvent.click(changeIcon);

    const inputElement = screen.getByDisplayValue(mockTask.value);

    // Clear the input
    fireEvent.change(inputElement, {target: {value: ''}});
    const alertSpy = jest.spyOn(window, 'alert');
    fireEvent.click(screen.getByAltText('update'));

    expect(alertSpy).toHaveBeenCalledWith('New Task message cannot be empty');
    alertSpy.mockRestore();
  });
});
