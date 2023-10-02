import {
  ActionCreatorsTypes,
  initialTodoState,
  reducer,
} from '@/reducer/reducer';
import {StateType} from '@/reducer/reducerTypes';
import {useReducer} from 'react';

export const useTodosReducer = () => {
  const [state, dispatch] = useReducer<
    (state: StateType, action: ActionCreatorsTypes) => StateType
  >(reducer, initialTodoState);

  return {state, dispatch};
};
