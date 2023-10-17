import {memo, useContext, useState} from 'react';
import styles from './addToDo.module.css';
import {PropsTypes} from './types';
import {TitleErrorContext} from '@/app/page';
import {TodoError} from '@/helpers/errors';

export const AddToDo = memo(function AddToDo({callback}: PropsTypes) {
  const [value, setValue] = useState<string>('');

  const {setIsError} = useContext(TitleErrorContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onAddTodoHandler = () => {
    if (value.length < 2 || value.length > 30) {
      setIsError(TodoError.wrongTitleSize);
      return;
    }
    setValue('');
    callback(value);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Create Todo-Task"
        value={value}
        onChange={onChangeHandler}
        className={styles.addToDo_input}
      />
      <button className={styles.addToDo_button} onClick={onAddTodoHandler}>
        Add
      </button>
    </div>
  );
});
