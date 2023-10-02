import {TodoContext} from '@/context/TodoContext';
import {useRouter} from 'next/navigation';
import {useContext} from 'react';

import styles from './Header.module.css';
const Header = () => {
  const {dispatchTodos} = useContext(TodoContext);

  return (
    <div className={styles.header}>
      <h1>Todos</h1>
      <div className={styles.buttons}>
        <button
          onClick={() => dispatchTodos({type: 'deleteCompleted'})}
          className={styles.button}
        >
          Clear finished todos
        </button>
        <button
          onClick={() => dispatchTodos({type: 'deleteMany'})}
          className={styles.button}
        >
          Clear all todos
        </button>
      </div>
    </div>
  );
};

export default Header;
