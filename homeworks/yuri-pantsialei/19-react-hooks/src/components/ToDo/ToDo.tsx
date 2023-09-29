import {useState} from 'react';
import {PropsType} from './types';
import Image from 'next/image';
import editIcon from '../../../public/icons/edit.svg';
import deleteIcon from '../../../public/icons/delete.svg';
import styles from './toDo.module.css';

export const ToDo = ({value, callback, id, deleteCallback}: PropsType) => {
  const [state, setState] = useState<string>(value);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleEditMode = () => {
    if (state !== value && isEditMode) {
      callback(id, state);
    }

    setIsEditMode(!isEditMode);
  };

  const deleteHandler = () => {
    deleteCallback(id);
  };

  return (
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
          <span>{value}</span>
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
  );
};
