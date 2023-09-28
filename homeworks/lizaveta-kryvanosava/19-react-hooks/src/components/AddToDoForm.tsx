import styles from '@/components/addToDoForm.module.scss';
import { useState } from 'react';

export default function AddToDoForm({
  addToDo,
}: {
  addToDo: (toDo: string) => void;
}) {
  const [input, setInput] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addToDo(input);
      setInput('');
    }
  };

  return (
    <div className={styles.form}>
      <input
        className={styles.form__input}
        value={input}
        type="text"
        placeholder="Create Todo-Task"
        onChange={({ target: { value } }) => setInput(value)}
        onKeyDown={event => handleKeyDown(event)}
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
