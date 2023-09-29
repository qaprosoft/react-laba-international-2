'use client';

import Modal from '@/components/common/modal/Modal';
import TodoCard from '@/components/common/todo-card/TodoCard';
import {TodoResponse} from '@/types/todos';
import axios from 'axios';
import {signOut, useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {useQuery} from 'react-query';
import styles from './MainPage.module.css';
const MainPage = () => {
  const router = useRouter();
  const session = useSession();
  const isLoggedIn = session.status === 'authenticated';

  const {data: todos} = useQuery('todos', () => axios.get('/api/todos'));

  return (
    <main className={styles.container}>
      {isLoggedIn ? (
        <>
          <div className={styles.header}>
            <h1>Todos</h1>
            <div className={styles.buttons}>
              <button className={styles.button}>Clear finished todos</button>
              <button className={styles.button}>Clear all todos</button>
              <button className={styles.button} onClick={() => signOut()}>
                Sign out
              </button>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.todosList}>
            {todos?.data?.map((todo: TodoResponse) => (
              <TodoCard todo={todo} key={todo._id} />
            ))}
          </div>
        </>
      ) : (
        <Modal isOpen={true} title="Please, login to see your todos">
          <button
            className={styles.siginButton}
            onClick={() => router.push('/login')}
          >
            Sign in
          </button>
        </Modal>
      )}
    </main>
  );
};

export default MainPage;
