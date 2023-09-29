import EditTodoCard from '@/components/common/edit-todo-card/EditTodoCard';
import {TodoResponse} from '@/types/todos';
import {useRef, useState} from 'react';

import styles from './TodoCard.module.css';

type TodoCardProps = {
  todo: TodoResponse;
  onDelete: (id: string) => void;
};
const TodoCard = ({todo, onDelete}: TodoCardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [completed, setCompleted] = useState(todo.completed);
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = () => {
    setIsEdit(false);
    onDelete(todo._id);
  };

  return (
    <>
      {isEdit ? (
        <EditTodoCard
          todo={todo}
          onSave={() => console.log('save')}
          onDelete={handleDelete}
        />
      ) : (
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
            <button onClick={() => setIsEdit(true)} className={styles.editBtn}>
              Edit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoCard;
