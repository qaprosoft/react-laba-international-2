import {TodoResponse} from '@/types/todos';
import {useRef, useState} from 'react';

import styles from './TodoCard.module.css';

type TodoCardProps = {
  todo: TodoResponse;
};
const TodoCard = ({todo}: TodoCardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [completed, setCompleted] = useState(todo.completed);
  return (
    <div className={styles.todoCard}>
      <div className={styles.left}>
        <div className={styles.checkBoxContainer}>
          <input
            checked={completed}
            onChange={() => setCompleted(!completed)}
            type="checkbox"
            className={styles.checkBoxInput}
            ref={inputRef}
            hidden
          />
          <div
            onClick={() => inputRef.current?.click()}
            className={styles.checkBox}
            style={{backgroundColor: completed ? '#bc2d2d' : '#E0E0E0'}}
          ></div>
        </div>

        <div className={styles.title}>{todo.title}</div>
      </div>
      <div>
        <button className={styles.editBtn}>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
