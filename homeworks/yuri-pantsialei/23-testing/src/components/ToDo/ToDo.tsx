import {useRef, useState} from 'react';
import {PropsType} from './types';
import Image from 'next/image';
import editIcon from '../../../public/icons/edit.svg';
import deleteIcon from '../../../public/icons/delete.svg';
import styles from './toDo.module.css';
import {TodoError} from '@/helpers/errors';
import {useOnClickOutside} from 'usehooks-ts';
import Checkbox, {checkboxClasses} from '@mui/material/Checkbox';

export const ToDo = ({
  value,
  id,
  isChecked,
  changeEditMode,
  deleteCallback,
  changeTodoStatus,
}: PropsType) => {
  const [state, setState] = useState<string>(value);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const ref = useRef<HTMLInputElement>(null);
  const containerRef = useRef(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    setError(null);
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
      setError(TodoError.wrongTitleSize);
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
              data-testid="toDo-input"
            />
          ) : (
            <div>{value}</div>
          )}
        </div>
        <div className={styles.btn_wrapper}>
          <button
            data-testid="edit-btn"
            className={styles.icon_button}
            onClick={handleEditMode}
          >
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
};
