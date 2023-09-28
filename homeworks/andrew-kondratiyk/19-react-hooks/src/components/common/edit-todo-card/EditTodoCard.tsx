'use client';

import {TodoResponse} from '@/models/todo';
import {useState} from 'react';

import styles from './EditTodoCard.module.css';

type EditTodoCardProps = {
  todo?: TodoResponse;
};
const EditTodoCard = ({todo}: EditTodoCardProps) => {
  const [inputValue, setInputValue] = useState(todo?.title);
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
        <button className={styles.deleteBtn}>Delete</button>
        <div className={styles.right}>
          <button className={styles.cancelBtn}>Cancel</button>
          <button className={styles.saveBtn}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoCard;
