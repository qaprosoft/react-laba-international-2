import {queryClient} from '@/context/Providers';
import {ServiceContext} from '@/context/TodoService';
import {signOut} from 'next-auth/react';
import {useContext} from 'react';
import {useMutation} from 'react-query';

import styles from './Header.module.css';

const Header = () => {
  const {deleteComplete, deleteMany} = useContext(ServiceContext);
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
  );
};

export default Header;
