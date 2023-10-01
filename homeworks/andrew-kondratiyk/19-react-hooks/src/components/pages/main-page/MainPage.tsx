'use client';

import EditTodoCard from '@/components/common/edit-todo-card/EditTodoCard';
import Modal from '@/components/common/modal/Modal';
import TodoCard from '@/components/common/todo-card/TodoCard';
import {queryClient} from '@/context/Providers';
import {
  TodoCreateRequest,
  TodoResponse,
  TodoUpdateRequest,
} from '@/types/todos';
import axios from 'axios';
import {signOut, useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {useMutation, useQuery} from 'react-query';
import styles from './MainPage.module.css';
import {MainContext} from '@/context/MainContext';

const MainPage = () => {
  const router = useRouter();
  const session = useSession();
  // @ts-ignore
  const userId = session.data?.user?._doc._id;
  const isLoggedIn = session.status === 'authenticated';

  const [isAddTodo, setIsAddTodo] = useState(false);

  const {data: todos} = useQuery(['todos'], () =>
    axios.get(`/api/todos/${userId}`),
  );
  const {mutate: createTodo} = useMutation(
    ['todos'],
    (todo: TodoCreateRequest) => axios.post(`/api/todos/${userId}`, todo),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: ['todos']});
        setIsAddTodo(false);
      },
    },
  );

  const {mutate: deleteTodo} = useMutation(
    ['todos'],
    (id: string) => axios.delete(`/api/todos/${userId}/${id}`),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: ['todos']});
      },
    },
  );

  const {mutate: updateTodo} = useMutation(
    ['todos'],
    ({id, todo}: {id: string; todo: TodoUpdateRequest}) =>
      axios.put(`/api/todos/${userId}/${id}`, todo),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: ['todos']});
      },
    },
  );

  return (
    <MainContext.Provider value={{userId}}>
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
                <TodoCard
                  onUpdate={updateTodo}
                  onDelete={deleteTodo}
                  todo={todo}
                  key={todo._id}
                />
              ))}
            </div>
            <div className={styles.addTaskContainer}>
              {isAddTodo ? (
                <EditTodoCard
                  onCancel={() => setIsAddTodo(false)}
                  onSave={createTodo}
                />
              ) : (
                <div
                  onClick={() => setIsAddTodo(true)}
                  className={styles.addTodoBtn}
                >
                  Add Task
                </div>
              )}
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
    </MainContext.Provider>
  );
};

export default MainPage;
