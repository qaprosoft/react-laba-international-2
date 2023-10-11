import {useContext, useEffect, useMemo} from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';
import {Context} from '../../contexts/AppContext/AppContext';
import {localStorageKeys} from '../../constants/constants';

const TodoList = () => {
  const {todos, setTodos} = useContext(Context);
  const todosLength = useMemo(todos.length, [todos.length]);

  useEffect(() => {
    if (localStorage.getItem(localStorageKeys.TODOS)) {
      setTodos(JSON.parse(localStorage.getItem(localStorageKeys.TODOS)));
    }
  }, []);

  return (
    <>
      {todosLength === 0 ? (
        <p className={styles.todo__noTodoList}>
          There are no todos yet. To start, add new one.
        </p>
      ) : (
        <ul className={styles.todo__todoList}>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isCompleted={todo.isCompleted}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
