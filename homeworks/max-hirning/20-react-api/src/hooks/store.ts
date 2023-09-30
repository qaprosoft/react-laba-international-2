import * as React from "react";
import { ITodo } from "../store/types";
import { todosReducer } from "../store/todos";

export function useTodosStore() {
  const [todos, dispatch] = React.useReducer(todosReducer, []);

  const deleteTodo = (id: string): void => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  const addTodo = (value: string): void => {
    dispatch({ type: 'ADD_TODO', payload: { id: (Date.now()).toString(), value, isDone: false } });
  };

  const toggleTodo = (id: string): void => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  const setTodos = (todos: ITodo[]): void => {
    dispatch({ type: 'SET_TODO', payload: todos });
  };

  const updateTodo = (id: string, value: string): void => {
    dispatch({ type: 'UPDATE_TODO', payload: { id, value } });
  };

  return { todos, deleteTodo, addTodo, toggleTodo, updateTodo, setTodos };
}