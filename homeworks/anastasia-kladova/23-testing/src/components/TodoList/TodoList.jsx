import {useContext, useMemo} from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';
import {Context} from '../../contexts/AppContext/AppContext';

const TodoList = () => {
  const {state} = useContext(Context);
  const todosLength = useMemo(() => state.todos.length, [state.todos.length]);

  return (
    <>
      {todosLength === 0 ? (
        <p className={styles.todo__noTodoList} data-testid="noTodoText">
          There are no todos yet. To start, add new one.
        </p>
      ) : (
        <ul className={styles.todo__todoList} data-testid="todoList">
          {state.todos.map(todo => (
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
