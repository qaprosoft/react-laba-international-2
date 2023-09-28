import { useState } from 'react';

import styles from '@/components/input.module.scss';

export default function Input({
  addHandler,
}: {
  addHandler: (toDo: string) => void;
}) {
  const [toDo, setToDo] = useState('');

  return (
    <div className={styles.form}>
      <input
        className={styles.form__input}
        name="toDo"
        type="text"
        value={toDo}
        onChange={event => {
          setToDo(event.target.value);
        }}
        placeholder="Create Todo-Task"
      />
      <button
        className={styles.form__button}
        type="button"
        onClick={() => {
          addHandler(toDo);
          setToDo('');
        }}
      >
        Add
      </button>
    </div>
  );
}
