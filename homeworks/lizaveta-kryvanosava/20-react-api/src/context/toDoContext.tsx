'use client';

import { createContext, ReactNode, useReducer } from 'react';

import constants from '@/constants';
import IContext from '@/types/context/context';
import IToDo from '@/types/toDo';

import toDoReducer from './reducer';

const ToDoContext = createContext<IContext | null>(null);

function ToDoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(toDoReducer, {
    toDos: [],
  });

  const value = {
    toDos: state.toDos,

    setToDos: (toDos: IToDo[]) => {
      dispatch({
        type: constants.Actions.SET_TODOS,
        payload: {
          newToDoValue: '',
          toDos: toDos,
          todoItemId: '',
        },
      });
    },

    addTodoItem: (newToDoValue: string) => {
      dispatch({
        type: constants.Actions.ADD_TODO_ITEM,
        payload: {
          newToDoValue,
          toDos: [],
          todoItemId: '',
        },
      });
    },

    removeTodoItem: (todoItemId: string) => {
      dispatch({
        type: constants.Actions.REMOVE_TODO_ITEM,
        payload: {
          newToDoValue: '',
          toDos: [],
          todoItemId,
        },
      });
    },

    editTodoItem: (todoItemId: string, newToDoValue: string) => {
      dispatch({
        type: constants.Actions.EDIT_TODO_ITEM,
        payload: {
          newToDoValue,
          toDos: [],
          todoItemId,
        },
      });
    },

    toggleDone: (todoItemId: string) => {
      dispatch({
        type: constants.Actions.TOGGLE_DONE,
        payload: {
          newToDoValue: '',
          toDos: [],
          todoItemId,
        },
      });
    },

    setEditMode: (todoItemId: string) => {
      dispatch({
        type: constants.Actions.SET_EDIT_MODE,
        payload: {
          newToDoValue: '',
          toDos: [],
          todoItemId,
        },
      });
    },
  };

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
}

export { ToDoContext, ToDoProvider };
