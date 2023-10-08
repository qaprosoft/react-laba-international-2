import {useContext} from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';
import {Context} from '../../contexts/AppContext/AppContext';

const TodoList = () => {
  const {todos} = useContext(Context);
  const todosLength = todos.length;

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
              //   date={todo.date}
              //   isCompleted={todo.isCompleted}
              //   isFavourite={todo.isFavourite}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
