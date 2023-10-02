import { useRef, useState } from 'react';

import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import useToDoContext from '@/customHooks/useToDoContext';
import useValidation from '@/customHooks/useValidation';

import styles from './addToDoForm.module.scss';

export default function AddToDoForm() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodoItem } = useToDoContext();
  const isValidToDo = useValidation();

  const handleButtonClick = () => {
    if (!isValidToDo(input)) return;

    addTodoItem(input);
    setInput('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (key: string) => {
    if (key === 'Enter') {
      handleButtonClick();
    }
  };

  return (
    <div className={styles.form}>
      <TextInput
        ref={inputRef}
        onChangeHandler={({ target: { value } }) => setInput(value)}
        onKeyDownHandler={({ key }) => handleKeyDown(key)}
        value={input}
        disabled={false}
        placeholder="Create Todo-Task"
        externalStyles={styles.form__input}
      />

      <Button
        onClickHandler={handleButtonClick}
        text="Add"
        externalStyles={styles.form__button}
      />
    </div>
  );
}
