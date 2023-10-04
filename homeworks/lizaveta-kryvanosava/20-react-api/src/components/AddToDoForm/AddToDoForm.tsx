import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from 'react';

import Button from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import useToDoContext from '@/customHooks/useToDoContext';
import useValidation from '@/customHooks/useValidation';

import styles from './addToDoForm.module.scss';

export default function AddToDoForm() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodoItem } = useToDoContext();
  const isValidToDo = useValidation();

  const handleButtonClick = useCallback(() => {
    if (!isValidToDo(input)) return;

    addTodoItem(input);
    setInput('');
    inputRef.current?.focus();
  }, [input]);

  const handleKeyDown = useCallback(
    ({ key }: KeyboardEvent<HTMLInputElement>) => {
      if (key === 'Enter') {
        handleButtonClick();
      }
    },
    [handleButtonClick],
  );

  const onChangeHandler = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setInput(value),
    [setInput],
  );

  return (
    <div className={styles.form}>
      <TextInput
        ref={inputRef}
        onChangeHandler={onChangeHandler}
        onKeyDownHandler={handleKeyDown}
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
