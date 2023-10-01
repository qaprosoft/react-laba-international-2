'use client';

import EditTodoCard from '@/components/common/edit-todo-card/EditTodoCard';
import Modal from '@/components/common/modal/Modal';
import TodoCard from '@/components/common/todo-card/TodoCard';
import {queryClient} from '@/context/Providers';
import {
  BackendTodoService,
  LocalStorageTodoService,
  ServiceContext,
} from '@/context/TodoService';
import {
  TodoCreateRequest,
  TodoResponse,
  TodoUpdateRequest,
} from '@/types/todos';
import axios from 'axios';
import {Session} from 'next-auth';
import {signOut} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {useContext, useState} from 'react';
import {useMutation, useQuery} from 'react-query';
import styles from './MainPage.module.css';

const MainPage = () => {
  const {getAll, create, update, deleteById, deleteComplete, deleteMany} =
    useContext(ServiceContext);

  const [isAddTodo, setIsAddTodo] = useState(false);

  const {data: todos} = useQuery(['todos'], getAll);
  const {mutate: createTodo} = useMutation(['todos'], create, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']});
      setIsAddTodo(false);
    },
  });

  const {mutate: deleteTodo} = useMutation(['todos'], deleteById, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  const {mutate: updateTodo} = useMutation(['todos'], update, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  const {mutate: deleteTodos} = useMutation(['todos'], deleteMany, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  const {mutate: deleteCompletedTodos} = useMutation(
    ['todos'],
    deleteComplete,
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: ['todos']});
      },
    },
  );

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>Todos</h1>
        <div className={styles.buttons}>
          <button
            onClick={() => deleteCompletedTodos()}
            className={styles.button}
          >
            Clear finished todos
          </button>
          <button onClick={() => deleteTodos()} className={styles.button}>
            Clear all todos
          </button>
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
          <div onClick={() => setIsAddTodo(true)} className={styles.addTodoBtn}>
            Add Task
          </div>
        )}
      </div>
    </main>
  );
};

export default ({session}: {session: Session | null}) => {
  const [service, setService] = useState(() => {
    if (session) {
      // @ts-ignore
      const userId = session?.user?._id;
      return new BackendTodoService(userId);
    } else {
      return new LocalStorageTodoService();
    }
  });
  return (
    <ServiceContext.Provider value={service}>
      <MainPage />
    </ServiceContext.Provider>
  );
};
