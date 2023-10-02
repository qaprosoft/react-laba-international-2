import {v4} from 'uuid';
import {StateType} from './reducerTypes';
import {TodoType} from '@/types/mainTypes';

export enum ReducerActionKind {
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  ADD_TODOS = 'ADD_TODOS',
  CHANGE_STATUS = 'CHANGE_STATUS',
  DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS',
}

export const initialTodoState: StateType = {todos: []};

export function reducer(state: StateType, action: ActionCreatorsTypes) {
  const {type, payload} = action;
  switch (type) {
    case ReducerActionKind.ADD_TODOS: {
      return {
        ...state,
        todos: payload,
      };
    }
    case ReducerActionKind.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, {id: v4(), value: payload, isChecked: false}],
      };
    }
    case ReducerActionKind.UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload.id ? {...todo, value: payload.value} : todo,
        ),
      };
    }
    case ReducerActionKind.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      };
    }
    case ReducerActionKind.CHANGE_STATUS: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload.id ? {...todo, isChecked: payload.status} : todo,
        ),
      };
    }
    case ReducerActionKind.DELETE_COMPLETED_TODOS: {
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.isChecked),
      };
    }

    default:
      return state;
  }
}

export type ActionCreatorsTypes =
  | ReturnType<typeof addTodosAction>
  | ReturnType<typeof addTodoAction>
  | ReturnType<typeof updateTodoAction>
  | ReturnType<typeof deleteTodoAction>
  | ReturnType<typeof changeTodoStatusAction>
  | ReturnType<typeof deleteCompletedTodosAction>;

export const addTodosAction = (payload: Array<TodoType>) => {
  return {type: ReducerActionKind.ADD_TODOS, payload} as const;
};

export const addTodoAction = (payload: string) => {
  return {type: ReducerActionKind.ADD_TODO, payload} as const;
};

export const updateTodoAction = (payload: {id: string; value: string}) => {
  return {type: ReducerActionKind.UPDATE_TODO, payload} as const;
};

export const deleteTodoAction = (payload: string) => {
  return {type: ReducerActionKind.DELETE_TODO, payload} as const;
};

export const changeTodoStatusAction = (payload: {
  id: string;
  status: boolean;
}) => {
  return {
    type: ReducerActionKind.CHANGE_STATUS,
    payload,
  } as const;
};

export const deleteCompletedTodosAction = () => {
  return {
    type: ReducerActionKind.DELETE_COMPLETED_TODOS,
    payload: 'epmty paylaod',
  } as const;
};
