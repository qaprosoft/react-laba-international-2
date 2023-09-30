import * as React from "react";
import styles from "./App.module.css";
import TodosListComponent from "./components/TodosList";
import CreateTodoComponent from './components/CreateTodo';
import { TodosContext, todosReducer } from "./store/todos";

export default function App() {
  const [todos, dispatch] = React.useReducer(todosReducer, []);

  React.useEffect(() => {
    const result = localStorage.getItem("todos");
    if(result) dispatch({ type: 'SET_TODO', payload: JSON.parse(result) });
  }, []);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id: string): void => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  const addTodo = (value: string): void => {
    dispatch({ type: 'ADD_TODO', payload: { id: (Date.now()).toString(), value, isDone: false } });
  };

  const toggleTodo = (id: string): void => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  const updateTodo = (id: string, value: string): void => {
    dispatch({ type: 'UPDATE_TODO', payload: { id, value } });
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, toggleTodo, deleteTodo }}>
      <main className={styles.main}>
        <CreateTodoComponent/>
        <TodosListComponent/>
      </main>
    </TodosContext.Provider>
  )
}