'use client';

import AddTodoContainer from '@/components/common/add-todo-container/AddTodoContainer';
import Header from '@/components/common/header/Header';
import TodoList from '@/components/common/todo-list/TodoList';
import {TodoContext, todoReducer} from '@/context/TodoContext';
import {useReducer} from 'react';
import styles from './MainPage.module.css';

const MainPage = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, [], () => {
    if (!window) return [];
    const todosLS = window.localStorage.getItem('todos');
    return todosLS ? JSON.parse(todosLS) : [];
  });

  return (
    <TodoContext.Provider value={{todos, dispatchTodos}}>
      <main className={styles.container}>
        <Header />
        <div className={styles.divider}></div>
        <div className={styles.todosList}>
          <TodoList />
        </div>
        <div className={styles.addTaskContainer}>
          <AddTodoContainer />
        </div>
      </main>
    </TodoContext.Provider>
  );
};

export default MainPage;
