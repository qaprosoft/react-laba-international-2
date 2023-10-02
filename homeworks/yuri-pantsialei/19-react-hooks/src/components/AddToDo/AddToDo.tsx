import {memo, useContext, useState} from 'react';
import styles from './addToDo.module.css';
import {PropsTypes} from './types';
import {NewTodoCreatedContext} from '@/app/page';

export const AddToDo = memo(function AddToDo({callback}: PropsTypes) {
  const [value, setValue] = useState<string>('');

  const {setIsCreated} = useContext(NewTodoCreatedContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onAddTodoHandler = () => {
    setValue('');
    setIsCreated(true);
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
