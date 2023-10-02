import {ActionCreatorsTypes, addTodosAction} from '@/reducer/reducer';
import {Dispatch, useEffect} from 'react';

export const useSetInitialTodos = (dispatch: Dispatch<ActionCreatorsTypes>) => {
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '');
    if (savedTodos.length) {
      dispatch(addTodosAction(savedTodos));
      //setTodos(JSON.parse(savedTodos));
    }
  }, [dispatch]);
};
