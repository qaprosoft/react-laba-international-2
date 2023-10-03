import {createContext, Dispatch} from 'react';
import {v4} from 'uuid';

export type TodoResponse = {
  id: string;
  title: string;
  completed: boolean;
};

export type DispatchAction = Record<string, any> & {
  type:
    | 'init'
    | 'create'
    | 'deleteById'
    | 'update'
    | 'deleteMany'
    | 'deleteCompleted';
};

export const todoReducer = (state: TodoResponse[], action: DispatchAction) => {
  let todos = state;
  switch (action.type) {
    case 'init': {
      const todosLS = window.localStorage.getItem('todos');
      todos = todosLS ? JSON.parse(todosLS) : [];
      break;
    }
    case 'create': {
      const newTodo = {
        id: v4(),
        completed: false,
        ...action.todo,
      };
      todos = [...state, newTodo];
      break;
    }
    case 'deleteById': {
      todos = state.filter((todo: any) => todo.id !== action.id);
      break;
    }
    case 'update': {
      todos = state.map((listTodo: TodoResponse) => {
        if (listTodo.id === action.id) {
          return {...listTodo, ...action.todo};
        }
        return listTodo;
      });
      break;
    }
    case 'deleteMany': {
      todos = [];
      break;
    }
    case 'deleteCompleted': {
      todos = state.filter((todo: TodoResponse) => !todo.completed);
      break;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
  localStorage.setItem('todos', JSON.stringify(todos));
  return todos;
};

export const TodoContext = createContext<{
  todos: TodoResponse[];
  dispatchTodos: Dispatch<any>;
}>({todos: [], dispatchTodos: () => {}});
