import * as React from "react";
import styles from "./App.module.css";
import { TodosContext } from "./store/todos";
import { useTodosStore } from "./hooks/store";
import TodosListComponent from "./components/TodosList";
import CreateTodoComponent from './components/CreateTodo';

export default function App() {
  const { todos, deleteTodo, addTodo, toggleTodo, updateTodo, setTodos } = useTodosStore();

  React.useEffect(() => {
    console.log('set todos');
    const result = localStorage.getItem("todos");
    if(result) setTodos(JSON.parse(result));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, toggleTodo, deleteTodo }}>
      <main className={styles.main}>
        <CreateTodoComponent/>
        <TodosListComponent/>
      </main>
    </TodosContext.Provider>
  )
}