'use client';

import EditTodoCard from '@/components/common/edit-todo-card/EditTodoCard';
import Header from '@/components/common/header/Header';
import TodoList from '@/components/common/todo-list/TodoList';
import {TodoContext, todoReducer} from '@/context/TodoContext';
import {useEffect, useReducer, useState} from 'react';
import styles from './MainPage.module.css';

const MainPage = () => {
  const [isAddTodo, setIsAddTodo] = useState(false);
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const todosLS = window.localStorage.getItem('todos');
    dispatch({type: 'init', todos: todosLS ? JSON.parse(todosLS) : []});
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{todos, dispatchTodos: dispatch}}>
      <main className={styles.container}>
        <Header />
        <div className={styles.divider}></div>
        <div className={styles.todosList}>
          <TodoList />
        </div>
        <div className={styles.addTaskContainer}>
          {isAddTodo ? (
            <EditTodoCard onCancel={() => setIsAddTodo(false)} />
          ) : (
            <div
              onClick={() => setIsAddTodo(true)}
              className={styles.addTodoBtn}
            >
              Add Task
            </div>
          )}
        </div>
      </main>
    </TodoContext.Provider>
  );
};

export default MainPage;
