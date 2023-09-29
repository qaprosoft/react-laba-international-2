'use client';

import {MainContext} from '@/context/MainContext';
import {TodoCreateRequest, TodoResponse} from '@/types/todos';
import {useSession} from 'next-auth/react';
import {useContext, useState} from 'react';

import styles from './EditTodoCard.module.css';

type EditTodoCardProps = {
  todo?: TodoResponse;
  onCancel?: () => void;
  onSave: (todo: TodoCreateRequest) => void;
  onDelete?: () => void;
};
const EditTodoCard = ({
  todo,
  onCancel,
  onSave,
  onDelete,
}: EditTodoCardProps) => {
  const {userId} = useContext(MainContext);
  const [inputValue, setInputValue] = useState(todo?.title || '');

  const handleSave = () => {
    if (!inputValue) return;
    onSave({title: inputValue, userId});
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
          <button onClick={onDelete} className={styles.deleteBtn}>
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
