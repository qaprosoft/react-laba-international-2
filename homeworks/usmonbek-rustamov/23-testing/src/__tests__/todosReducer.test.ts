import {expect, test, describe} from 'vitest';

import {State, Todo, TodosAction} from '../common/types';
import todosReducer from '../reducers/todosReducer';

describe('todosReducer', () => {
  test('should add new todo', () => {
    const initialState = {data: [], error: ''} as State<Todo[]>;

    const newTask = 'new task';
    const action = {type: 'added', task: newTask} as TodosAction;

    const newState = todosReducer(initialState, action);

    expect(newState.data.length).toBe(1);
    expect(newState.data[0].task).toBe(newTask);
    expect(newState.error).toBe('');
  });

  test('should return error with an existing task', () => {
    const task = 'Existing task';
    const initialState = {
      data: [{id: '1', isCompleted: false, task}],
      error: '',
    };
    const action = {type: 'added', task} as TodosAction;

    const newState = todosReducer(initialState, action);

    expect(newState.data.length).toBe(1);
    expect(newState.data[0].task).toBe(task);
    expect(newState.error).toBe('Todo already exist');
  });

  test('should edit the todo', () => {
    const initialState = {
      data: [{id: '1', isCompleted: false, task: 'Old Task'}],
      error: '',
    };
    const action = {
      type: 'edited',
      id: '1',
      task: 'Updated Task',
    } as TodosAction;

    const newState = todosReducer(initialState, action);

    expect(newState.data.length).toBe(1);
    expect(newState.data[0].task).toBe('Updated Task');
    expect(newState.error).toBe('');
  });

  test('should toggle the todo', () => {
    const initialState = {
      data: [{id: '1', isCompleted: false, task: 'Task'}],
      error: '',
    };
    const action = {type: 'toggled', id: '1', isCompleted: true} as TodosAction;

    const newState = todosReducer(initialState, action);

    expect(newState.data.length).toBe(1);
    expect(newState.data[0].isCompleted).toBe(true);
    expect(newState.error).toBe('');
  });

  test('should delete the todo', () => {
    const initialState = {
      data: [{id: '1', isCompleted: false, task: 'Task'}],
      error: '',
    };
    const action = {type: 'deleted', id: '1'} as TodosAction;

    const newState = todosReducer(initialState, action);

    expect(newState.data.length).toBe(0);
    expect(newState.error).toBe('');
  });
});
