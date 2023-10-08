import {useContext} from 'react';
import IconButton from '../Buttons/IconButton/IconButton';
import styles from './TodoItem.module.css';
import {Context} from '../../contexts/AppContext/AppContext';
import {saveDataToStorage} from '../../utils/saveDataToStorage';

const TodoItem = ({id, text}) => {
  const {todos, setTodos} = useContext(Context);

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    saveDataToStorage(newTodos);
  };

  return (
    <li className={`todo__todo-item ${styles.todoItem}`} id={id}>
      <div className={styles.todoItem__box}>
        <div className={styles.todoItem__info}>
          <span className={styles.todoItem__text}>{text}</span>
        </div>
        <div className={styles.todoItem__btns}>
          <IconButton type="button" classType="iconBtn--update" />
          <IconButton
            type="button"
            classType="iconBtn--delete"
            onBtnClickHandler={() => deleteTodo(id)}
          />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
