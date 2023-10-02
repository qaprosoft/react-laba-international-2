'use client';

import { createContext, ReactNode, useMemo, useReducer } from 'react';

import constants from '@/constants';
import IContext from '@/types/context/context';
import IToDo from '@/types/toDo';

import toDoReducer from './reducer';

const ToDoContext = createContext<IContext | null>(null);

function ToDoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(toDoReducer, {
    toDos: [],
  });

  const value = useMemo(
    () => ({
      toDos: state.toDos,

      setToDos: (toDos: IToDo[]) => {
        dispatch({
          type: constants.Actions.SET_TODOS,
          payload: {
            toDos: toDos,
          },
        });
      },

      addTodoItem: (newToDoValue: IToDo['value']) => {
        dispatch({
          type: constants.Actions.ADD_TODO_ITEM,
          payload: {
            newToDoValue,
          },
        });
      },

      removeTodoItem: (todoItemId: IToDo['id']) => {
        dispatch({
          type: constants.Actions.REMOVE_TODO_ITEM,
          payload: {
            todoItemId,
          },
        });
      },

      editTodoItem: (todoItemId: IToDo['id'], newToDoValue: IToDo['value']) => {
        dispatch({
          type: constants.Actions.EDIT_TODO_ITEM,
          payload: {
            newToDoValue,
            todoItemId,
          },
        });
      },

      toggleDone: (todoItemId: IToDo['id']) => {
        dispatch({
          type: constants.Actions.TOGGLE_DONE,
          payload: {
            todoItemId,
          },
        });
      },

      setEditMode: (todoItemId: IToDo['id']) => {
        dispatch({
          type: constants.Actions.SET_EDIT_MODE,
          payload: {
            todoItemId,
          },
        });
      },
    }),
    [state],
  );

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
}

export { ToDoContext, ToDoProvider };
