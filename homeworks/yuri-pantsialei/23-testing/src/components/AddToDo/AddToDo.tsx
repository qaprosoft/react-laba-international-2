import {useState} from 'react';
import styles from './addToDo.module.css';
import {PropsTypes} from './types';

export const AddToDo = ({callback}: PropsTypes) => {
  const [value, setValue] = useState<string>('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onAddTodoHandler = () => {
    setValue('');
    callback(value);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Create Todo-Task"
        value={value}
        data-testid="addTodo-input"
        onChange={onChangeHandler}
        className={styles.addToDo_input}
      />
      <button className={styles.addToDo_button} onClick={onAddTodoHandler}>
        Add
      </button>
    </div>
  );
};
