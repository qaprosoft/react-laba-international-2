import { useState } from 'react';

import Button from '@/components/Button';
import TextInput from '@/components/TextInput';

import styles from './addToDoForm.module.scss';

export default function AddToDoForm({
  addToDo,
}: {
  addToDo: (toDo: string) => void;
}) {
  const [input, setInput] = useState('');

  const handleKeyDown = (key: string) => {
    if (key === 'Enter') {
      addToDo(input);
      setInput('');
    }
  };

  return (
    <div className={styles.form}>
      <TextInput
        onChangeHandler={({ target: { value } }) => setInput(value)}
        onKeyDownHandler={({ key }) => handleKeyDown(key)}
        value={input}
        placeholder="Create Todo-Task"
        externalStyles={styles.form__input}
      />

      <Button
        onClickHandler={() => {
          addToDo(input);
          setInput('');
        }}
        text="Add"
        externalStyles={styles.form__button}
      />
    </div>
  );
}
