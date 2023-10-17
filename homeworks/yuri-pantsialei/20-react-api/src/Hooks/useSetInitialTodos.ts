import {ActionCreatorsTypes, addTodosAction} from '@/reducer/actionCreators';
import {Dispatch, useEffect} from 'react';

export const useSetInitialTodos = (dispatch: Dispatch<ActionCreatorsTypes>) => {
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      dispatch(addTodosAction(JSON.parse(savedTodos)));
    }
  }, [dispatch]);
};
