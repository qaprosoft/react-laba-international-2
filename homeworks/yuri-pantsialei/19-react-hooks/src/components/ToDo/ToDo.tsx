import {useState} from 'react';
import {PropsType} from './types';
import Image from 'next/image';
import editIcon from '../../../public/icons/edit.svg';
import deleteIcon from '../../../public/icons/delete.svg';
import styles from './toDo.module.css';
import {TodoError} from '@/helpers/errors';

export const ToDo = ({
  value,
  changeEditMode,
  id,
  deleteCallback,
}: PropsType) => {
  const [state, setState] = useState<string>(value);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

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

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.text_wrapper}>
          {isEditMode ? (
            <input
              className={styles.input}
              type="text"
              value={state}
              onChange={onChangeHandler}
              autoFocus
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
};
