import {queryClient} from '@/context/Providers';
import {ServiceContext} from '@/context/TodoService';
import {signOut} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {useContext} from 'react';
import {useMutation} from 'react-query';

import styles from './Header.module.css';

type HeaderProps = {
  isAuthenticated: boolean;
};
const Header = ({isAuthenticated}: HeaderProps) => {
  const router = useRouter();
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
        {isAuthenticated ? (
          <button className={styles.button} onClick={() => signOut()}>
            Sign out
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => router.push('/login')}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
