'use client';

import EditTodoCard from '@/components/common/edit-todo-card/EditTodoCard';
import Header from '@/components/common/header/Header';
import TodoList from '@/components/common/todo-list/TodoList';
import {
  BackendTodoService,
  LocalStorageTodoService,
  ServiceContext,
} from '@/context/TodoService';
import {Session} from 'next-auth';
import {useState} from 'react';
import styles from './MainPage.module.css';

const MainPage = ({session}: {session: Session | null}) => {
  const [service, setService] = useState(() => {
    if (session) {
      // @ts-ignore
      const userId = session?.user?._id;
      return new BackendTodoService(userId);
    } else {
      return new LocalStorageTodoService();
    }
  });
  const [isAddTodo, setIsAddTodo] = useState(false);

  return (
    <ServiceContext.Provider value={service}>
      <main className={styles.container}>
        <Header isAuthenticated={!!session} />
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
    </ServiceContext.Provider>
  );
};

export default MainPage;
