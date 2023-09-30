import * as React from "react";
import { IAction, ITodo, ITodosStore } from "./types";

export const todosReducer = (state: ITodo[], { type, payload }: IAction) => {
  switch (type) {
    case 'SET_TODO':
      return payload;
    case 'ADD_TODO':
      return [...state, payload];
    case 'UPDATE_TODO':
      return state.map(todo => todo.id === payload.id ? { ...todo, value: payload.value } : todo);
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id === payload.id ? { ...todo, isDone: !todo.isDone } : todo);
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== payload.id);
    default:
      return state;
  }
};

export const TodosContext = React.createContext<ITodosStore|null>(null);