import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

const TodoList = () => {
  return (
    <ul className={styles.todo__todoList}>
      {todos.map(todo => (
        <TodoItem
        //   key={todo.id}
        //   id={todo.id}
        //   todoItemText={todo.text}
        //   date={todo.date}
        //   isCompleted={todo.isCompleted}
        //   isFavourite={todo.isFavourite}
        />
      ))}
    </ul>
  );
};

export default TodoList;
