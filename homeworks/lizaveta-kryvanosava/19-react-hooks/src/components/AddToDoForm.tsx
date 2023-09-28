import styles from '@/components/addToDoForm.module.scss';
import { useState } from 'react';

export default function AddToDoForm({
  addToDo,
}: {
  addToDo: (toDo: string) => void;
}) {
  const [input, setInput] = useState('');

  return (
    <div className={styles.form}>
      <input
        className={styles.form__input}
        value={input}
        onChange={({ target: { value } }) => setInput(value)}
        type="text"
        placeholder="Create Todo-Task"
      />
      <button
        className={styles.form__button}
        onClick={() => {
          addToDo(input);
          setInput('');
        }}
      >
        Add
      </button>
    </div>
  );
}
