import Image from 'next/image';
import { useState } from 'react';

import deleteImage from '@/assets/icons/delete.svg';
import doneImage from '@/assets/icons/done.svg';
import editImage from '@/assets/icons/write.svg';
import styles from '@/components/toDo.module.scss';
import constants from '@/constants';
import IToDoProps from '@/types/toDoComponentProps';

export default function ToDo({ toDoData, deleteToDo, editToDo }: IToDoProps) {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(toDoData.value);

  const editButtonHandler = () => {
    setEditMode(!editMode);

    if (toDoData.value === inputValue) return;

    if (!editToDo(toDoData.id, inputValue, constants.TaskFields.value)) {
      setInputValue(toDoData.value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      editButtonHandler();
    }
  };

  return (
    <div className={styles.todo}>
      {editMode ? (
        <input
          autoFocus
          value={inputValue}
          type="text"
          className={styles.todo__text}
          onChange={event => {
            setInputValue(event.target.value);
          }}
          onKeyDown={event => handleKeyDown(event)}
        />
      ) : (
        <div className={styles.todo__text}>
          <input
            type="checkbox"
            checked={toDoData.done}
            onChange={() => {
              editToDo(toDoData.id, !toDoData.done, constants.TaskFields.done);
            }}
          />

          {toDoData.value}
        </div>
      )}

      <div className={styles.todo__control}>
        <Image
          className={styles['todo__control--edit']}
          src={editMode ? doneImage : editImage}
          alt="edit button"
          onClick={editButtonHandler}
        />

        <Image
          className={styles['todo__control--delete']}
          src={deleteImage}
          alt="delete button"
          onClick={() => deleteToDo(toDoData.id)}
        />
      </div>
    </div>
  );
}
