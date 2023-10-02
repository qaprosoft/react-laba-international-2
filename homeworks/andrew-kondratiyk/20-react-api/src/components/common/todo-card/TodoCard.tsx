import EditTodoCard from '@/components/common/edit-todo-card/EditTodoCard';
import {TodoContext} from '@/context/TodoContext';
import {TodoResponse} from '@/types/todos';
import {useContext, useRef, useState} from 'react';

import styles from './TodoCard.module.css';

type TodoCardProps = {
  todo: TodoResponse;
};
const TodoCard = ({todo}: TodoCardProps) => {
  const {dispatchTodos} = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <EditTodoCard onCancel={() => setIsEdit(false)} todo={todo} />
      ) : (
        <div className={styles.todoCard}>
          <div className={styles.left}>
            <div className={styles.checkBoxContainer}>
              <input
                checked={todo.completed}
                onChange={() =>
                  dispatchTodos({
                    type: 'update',
                    id: todo.id,
                    todo: {...todo, completed: !todo.completed},
                  })
                }
                type="checkbox"
                className={styles.checkBoxInput}
                ref={inputRef}
                hidden
              />
              <div
                onClick={() => inputRef.current?.click()}
                className={styles.checkBox}
                style={{
                  backgroundColor: todo.completed ? '#bc2d2d' : '#E0E0E0',
                }}
              ></div>
            </div>

            <div
              className={`${styles.title} ${
                todo.completed && styles.completed
              }`}
            >
              {todo.title}
            </div>
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
