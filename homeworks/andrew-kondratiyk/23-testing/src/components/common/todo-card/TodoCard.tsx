import EditTodoCard from '@/components/common/edit-todo-card/EditTodoCard';
import LoadingOverlay from '@/components/common/loading-overlay/LoadingOverlay';
import {queryClient} from '@/context/Providers';
import {ServiceContext} from '@/context/TodoService';
import {TodoResponse} from '@/types/todos';
import {useContext, useRef, useState} from 'react';
import {useMutation} from 'react-query';

import styles from './TodoCard.module.css';

type TodoCardProps = {
  todo: TodoResponse;
};
const TodoCard = ({todo}: TodoCardProps) => {
  const {update} = useContext(ServiceContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEdit, setIsEdit] = useState(false);

  const {mutate: updateTodo, isLoading} = useMutation(['todos'], update, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  return (
    <>
      {isEdit ? (
        <EditTodoCard onCancel={() => setIsEdit(false)} todo={todo} />
      ) : (
        <div data-testid="todo-card" className={styles.todoCard}>
          {isLoading && <LoadingOverlay />}
          <div className={styles.left}>
            <div className={styles.checkBoxContainer}>
              <input
                checked={todo.completed}
                onChange={() =>
                  updateTodo({
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
