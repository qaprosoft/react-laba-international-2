import {TodoResponse} from '@/types/todos';
import {createContext, Dispatch} from 'react';
import {v4} from 'uuid';

export const todoReducer = (state: TodoResponse[], action: any) => {
  switch (action.type) {
    case 'init': {
      const todosLS = window.localStorage.getItem('todos');
      return todosLS ? JSON.parse(todosLS) : [];
    }
    case 'create': {
      const newTodo = {
        id: v4(),
        completed: false,
        ...action.todo,
      };
      return [...state, newTodo];
    }
    case 'deleteById': {
      return state.filter((todo: any) => todo.id !== action.id);
    }
    case 'update': {
      return state.map((listTodo: TodoResponse) => {
        if (listTodo.id === action.id) {
          return {...listTodo, ...action.todo};
        }
        return listTodo;
      });
    }
    case 'deleteMany': {
      return [];
    }
    case 'deleteCompleted': {
      return state.filter((todo: TodoResponse) => !todo.completed);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export const TodoContext = createContext<{
  todos: TodoResponse[];
  dispatchTodos: Dispatch<any>;
}>({todos: [], dispatchTodos: () => {}});
