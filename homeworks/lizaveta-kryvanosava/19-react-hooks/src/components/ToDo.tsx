import Image from 'next/image';
import { useState } from 'react';

import deleteImage from '@/assets/icons/delete.svg';
import doneImage from '@/assets/icons/done.svg';
import editImage from '@/assets/icons/write.svg';
import styles from '@/components/toDo.module.scss';
import isValidInput from '@/helpers/isValidInput';
import IToDoProps from '@/types/toDoComponentProps';
import constants from '@/constants';

export default function ToDo({ taskData, deleteToDo, editToDo }: IToDoProps) {
  const [editMode, setEditMode] = useState(false);
  const [newValue, setNewValue] = useState(taskData.value);

  const editButtonHandler = () => {
    setEditMode(!editMode);

    if (taskData.value === newValue || !isValidInput(newValue)) return;

    editToDo(taskData.id, newValue, constants.TaskFields.value);
  };

  return (
    <div className={styles.todo}>
      {editMode ? (
        <input
          autoFocus
          value={newValue}
          type="text"
          className={styles.todo__text}
          onChange={event => {
            setNewValue(event.target.value);
          }}
        />
      ) : (
        <div className={styles.todo__text}>
          <input
            type="checkbox"
            checked={taskData.done}
            onChange={() => {
              editToDo(taskData.id, !taskData.done, constants.TaskFields.done);
            }}
          />

          {taskData.value}
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
          onClick={() => deleteToDo(taskData.id)}
        />
      </div>
    </div>
  );
}
