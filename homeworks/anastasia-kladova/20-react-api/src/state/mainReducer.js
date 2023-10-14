import {saveDataToStorage} from '../utils/saveDataToStorage';
import {ACTION_TYPES} from './actionTypes';
export const mainReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_TODOS: {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case ACTION_TYPES.ADD_NEWTODO: {
      const newTodo = {
        text: action.payload.newTodo,
        id: Date.now(),
        isCompleted: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case ACTION_TYPES.DELETE_TODO: {
      const newTodos = state.todos.filter(todo => todo.id !== action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    }
    case ACTION_TYPES.UPDATE_TODO: {
      const newTodos = state.todos.map(todo => {
        return todo.id === action.payload.id
          ? {
              id: todo.id,
              text: action.payload.text,
              isCompleted: todo.payload.isCompleted,
            }
          : todo;
      });
      return {
        ...state,
        todos: newTodos,
      };
    }
    case ACTION_TYPES.TOGGLE_COMPLETED: {
      const newTodos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? {
              id: todo.id,
              text: todo.text,
              isCompleted: !action.payload.isCompleted,
            }
          : todo,
      );
      return {
        ...state,
        todos: newTodos,
      };
    }
    case ACTION_TYPES.DELETE_COMPLETED: {
      const newTodos = state.todos.filter(todo => todo.isCompleted !== true);
      return {
        ...state,
        todos: newTodos,
      };
    }
  }
};
