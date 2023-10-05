'use client';

import {TodoContext, TodoResponse} from '@/context/TodoContext';
import {useContext, useState} from 'react';

import styles from './EditTodoCard.module.css';

type EditTodoCardProps = {
  todo?: TodoResponse;
  onCancel?: () => void;
};
const EditTodoCard = ({todo, onCancel}: EditTodoCardProps) => {
  const {dispatchTodos} = useContext(TodoContext);
  const [inputValue, setInputValue] = useState(todo?.title || '');

  const handleSave = () => {
    if (!inputValue) return;
    if (todo) {
      dispatchTodos({
        type: 'update',
        id: todo.id,
        todo: {
          title: inputValue,
          completed: todo.completed,
        },
      });
    } else {
      dispatchTodos({
        type: 'create',
        todo: {
          title: inputValue,
        },
      });
    }
    onCancel?.();
  };

  return (
    <div className={styles.editTodoCard}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="What are you working on?"
        className={styles.input}
        autoFocus
        onKeyDown={e => e.code === 'Enter' && handleSave()}
      />
      <div className={styles.footer}>
        {todo ? (
          <button
            onClick={() => dispatchTodos({type: 'deleteById', id: todo.id})}
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
