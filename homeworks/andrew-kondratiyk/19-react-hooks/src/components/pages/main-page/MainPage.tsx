'use client';

import EditTodoCard from '@/components/common/edit-todo-card/EditTodoCard';
import Header from '@/components/common/header/Header';
import TodoCard from '@/components/common/todo-card/TodoCard';
import {queryClient} from '@/context/Providers';
import {
  BackendTodoService,
  LocalStorageTodoService,
  ServiceContext,
} from '@/context/TodoService';
import {TodoResponse} from '@/types/todos';
import {Session} from 'next-auth';
import {useContext, useState} from 'react';
import {useMutation, useQuery} from 'react-query';
import styles from './MainPage.module.css';

const MainPage = () => {
  const {getAll, create, update} = useContext(ServiceContext);

  const [isAddTodo, setIsAddTodo] = useState(false);

  const {data: todos} = useQuery(['todos'], getAll);
  const {mutate: createTodo} = useMutation(['todos'], create, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']});
      setIsAddTodo(false);
    },
  });

  const {mutate: updateTodo} = useMutation(['todos'], update, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.divider}></div>
      <div className={styles.todosList}>
        {todos?.map((todo: TodoResponse) => (
          <TodoCard onUpdate={updateTodo} todo={todo} key={todo._id} />
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
