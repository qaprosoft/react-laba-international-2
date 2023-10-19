import App from './App';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('New task input', () => {
  it('Input value should change when typing', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Create ToDo task');
    fireEvent.change(input, {target: {value: 'test'}});
    expect(input.value).toBe('test');
  });

  it('Input should become empty after add button click', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Create ToDo task');
    fireEvent.change(input, {target: {value: 'test'}});
    const addBtn = screen.getByRole('button', {name: 'Add'});
    fireEvent.click(addBtn);
    expect(input.value).toBe('');
  });

  it('New task should be created after add button click', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Create ToDo task');
    fireEvent.change(input, {target: {value: 'test task'}});
    const addBtn = screen.getByRole('button', {name: 'Add'});
    fireEvent.click(addBtn);
    const newTask = screen.getByDisplayValue('test task');
    expect(newTask).toBeInTheDocument();
  });

  it('Alert should fire on adding task with empty value', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    render(<App />);
    const input = screen.getByPlaceholderText('Create ToDo task');
    fireEvent.change(input, {target: {value: ' '}});
    const addBtn = screen.getByRole('button', {name: 'Add'});
    fireEvent.click(addBtn);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});

describe('Task', () => {
  it('Task should dissapear after delete icon click', () => {
    render(<App />);

    // delete all tasks
    const deleteButtons = screen.getAllByAltText('delete');
    deleteButtons.forEach(btn => fireEvent.click(btn));

    const input = screen.getByPlaceholderText('Create ToDo task');
    fireEvent.change(input, {target: {value: 'Test task'}});
    const addBtn = screen.getByRole('button', {name: 'Add'});
    fireEvent.click(addBtn);

    const task = screen.getByDisplayValue('Test task');
    const deleteButton = screen.getByAltText('delete');
    fireEvent.click(deleteButton);
    expect(task).not.toBeInTheDocument();
  });

  it('Task should be changable', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Create ToDo task');
    fireEvent.change(input, {target: {value: 'Test task'}});
    const addBtn = screen.getByRole('button', {name: 'Add'});
    fireEvent.click(addBtn);

    const task = screen.getByDisplayValue('Test task');
    const changeButton = screen.getByAltText('change');
    fireEvent.click(changeButton);
    fireEvent.change(task, {target: {value: 'new task'}});
    expect(task.value).toBe('new task');
  });
});
