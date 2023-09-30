import EditTodoCard from '@/components/common/edit-todo-card/EditTodoCard';
import {TodoResponse, TodoUpdateRequest} from '@/types/todos';
import {useRef, useState} from 'react';

import styles from './TodoCard.module.css';

type TodoCardProps = {
  todo: TodoResponse;
  onDelete: (id: string) => void;
  onUpdate: ({id, todo}: {id: string; todo: TodoUpdateRequest}) => void;
};
const TodoCard = ({todo, onDelete, onUpdate}: TodoCardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdate = (newTodo: TodoUpdateRequest) => {
    setIsEdit(false);
    onUpdate({id: todo._id, todo: newTodo});
  };
  const handleDelete = () => {
    setIsEdit(false);
    onDelete(todo._id);
  };

  return (
    <>
      {isEdit ? (
        <EditTodoCard
          todo={todo}
          onSave={handleUpdate}
          onDelete={handleDelete}
        />
      ) : (
        <div className={styles.todoCard}>
          <div className={styles.left}>
            <div className={styles.checkBoxContainer}>
              <input
                checked={todo.completed}
                onChange={() =>
                  onUpdate({
                    id: todo._id,
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
