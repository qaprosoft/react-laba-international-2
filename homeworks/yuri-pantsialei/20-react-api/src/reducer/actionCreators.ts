import {TodoType} from '@/types/mainTypes';
import {ReducerActionKind} from './reducer';

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
