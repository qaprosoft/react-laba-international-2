'use client';

import {queryClient} from '@/context/Providers';
import {ServiceContext} from '@/context/TodoService';
import {
  TodoCreateRequest,
  TodoResponse,
  TodoUpdateRequest,
} from '@/types/todos';
import {useContext, useState} from 'react';
import {useMutation} from 'react-query';

import styles from './EditTodoCard.module.css';

type EditTodoCardProps = {
  todo?: TodoResponse;
  onCancel?: () => void;
  onSave:
    | ((todo: TodoCreateRequest) => void)
    | ((todo: TodoUpdateRequest) => void);
};
const EditTodoCard = ({todo, onCancel, onSave}: EditTodoCardProps) => {
  const {deleteById} = useContext(ServiceContext);
  const [inputValue, setInputValue] = useState(todo?.title || '');

  const {mutate: deleteTodo} = useMutation(['todos'], deleteById, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  const handleSave = () => {
    if (!inputValue) return;
    if (todo) {
      // @ts-ignore
      onSave({
        title: inputValue,
        completed: todo.completed,
      });
    } else {
      // @ts-ignore
      onSave({title: inputValue});
    }
  };

  return (
    <div className={styles.editTodoCard}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="What are you working on?"
        className={styles.input}
      />
      <div className={styles.footer}>
        {todo ? (
          <button
            onClick={() => deleteTodo(todo._id)}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        ) : (
          <div></div>
        )}
        <div className={styles.right}>
          <button onClick={onCancel} className={styles.cancelBtn}>
            Cancel
          </button>
          <button onClick={handleSave} className={styles.saveBtn}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoCard;
