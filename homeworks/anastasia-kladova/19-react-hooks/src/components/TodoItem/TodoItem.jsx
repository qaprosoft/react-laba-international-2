import {useContext} from 'react';
import IconButton from '../Buttons/IconButton/IconButton';
import styles from './TodoItem.module.css';
import {Context} from '../../contexts/AppContext/AppContext';

const TodoItem = ({id, text}) => {
  return (
    <li className={`todo__todo-item ${styles.todoItem}`} id={id}>
      <div className={styles.todoItem__box}>
        <div className={styles.todoItem__info}>
          <span className={styles.todoItem__text}>{text}</span>
        </div>
        <div className={styles.todoItem__btns}>
          <IconButton type="button" classType="iconBtn--update" />
          <IconButton type="button" classType="iconBtn--delete" />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
