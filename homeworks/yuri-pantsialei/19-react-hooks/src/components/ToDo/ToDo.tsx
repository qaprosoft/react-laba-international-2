import {memo, useEffect, useRef, useState, useContext} from 'react';
import {PropsType} from './types';
import Image from 'next/image';
import editIcon from '../../../public/icons/edit.svg';
import deleteIcon from '../../../public/icons/delete.svg';
import styles from './toDo.module.css';
import {useOnClickOutside} from 'usehooks-ts';
import Checkbox, {checkboxClasses} from '@mui/material/Checkbox';
import {NewTodoCreatedContext} from '@/app/page';
import {TodoError} from '@/helpers/errors';

export const ToDo = memo(function ToDo({
  changeEditMode,
  deleteCallback,
  isLastTodo,
  todo,
  changeTodoStatus,
}: PropsType) {
  const {value, id, isChecked} = todo;
  const [state, setState] = useState<string>(value);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const {isCreated} = useContext(NewTodoCreatedContext);

  const ref = useRef<HTMLInputElement>(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCreated && isLastTodo) {
      setIsEditMode(true);
      if (ref.current) {
        ref.current.focus();
      }
    }
  }, [isCreated, isLastTodo]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setState(e.target.value);
  };

  const handleEditMode = () => {
    if (state.length < 2 || state.length > 30) {
      setError(TodoError.wrongTitleSize);
      return;
    }

    if (state !== value && isEditMode) {
      changeEditMode(id, state);
    }

    setIsEditMode(!isEditMode);
  };

  const deleteHandler = () => {
    deleteCallback(id);
  };

  const handleClickOutside = () => {
    if (state.length < 2 || state.length > 30) {
      setError(
        'Todo title length need to be at least 2 symbols and not longer than 30',
      );
      setState(value);
    } else {
      if (state !== value && isEditMode) {
        changeEditMode(id, state);
      }
    }

    setIsEditMode(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeTodoStatus(id, event.target.checked);
  };

  useOnClickOutside(containerRef, handleClickOutside);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} ref={containerRef}>
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          inputProps={{'aria-label': 'controlled'}}
          sx={{
            [`&, &.${checkboxClasses.checked}`]: {
              color: '#5275a0',
            },
          }}
        />
        <div
          className={`${styles.text_wrapper} ${
            isChecked && !isEditMode ? styles.completed : ''
          }`}
        >
          {isEditMode ? (
            <input
              className={styles.input}
              type="text"
              value={state}
              onChange={onChangeHandler}
              autoFocus
              ref={ref}
            />
          ) : (
            <div>{value}</div>
          )}
        </div>
        <div className={styles.btn_wrapper}>
          <button className={styles.icon_button} onClick={handleEditMode}>
            <Image src={editIcon} alt="edit" />
          </button>
          <button className={styles.icon_button} onClick={deleteHandler}>
            <Image src={deleteIcon} alt="delete" />
          </button>
        </div>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
});
