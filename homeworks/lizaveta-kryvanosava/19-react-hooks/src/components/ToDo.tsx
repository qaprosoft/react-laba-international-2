import Image from 'next/image';
import { useState } from 'react';

import deleteImage from '@/assets/icons/delete.svg';
import doneImage from '@/assets/icons/done.svg';
import editImage from '@/assets/icons/write.svg';
import IconButton from '@/components/IconButton';
import TextInput from '@/components/TextInput';
import constants from '@/constants';
import IToDoProps from '@/types/toDoProps';

import styles from './toDo.module.scss';

export default function ToDo({
  toDoData,
  deleteToDo,
  editToDo,
  setEditingId,
  isEditing,
  isInputValid,
}: IToDoProps) {
  const [inputValue, setInputValue] = useState(toDoData.value);

  const editButtonHandler = () => {
    setEditingId(isEditing ? null : toDoData.id);

    if (toDoData.value === inputValue) return;

    if (isInputValid(inputValue)) {
      editToDo(toDoData.id, inputValue, constants.TaskFields.value);
    } else {
      setInputValue(toDoData.value);
    }
  };

  const keyDownHandler = (key: string) => {
    if (key === 'Enter') {
      editButtonHandler();
    }
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todo__inputs}>
        <input
          type="checkbox"
          className={styles['todo__inputs-checkbox']}
          checked={toDoData.done}
          onChange={() => {
            editToDo(toDoData.id, !toDoData.done, constants.TaskFields.done);
          }}
        />

        {isEditing ? (
          <TextInput
            onChangeHandler={({ target: { value } }) => {
              setInputValue(value);
            }}
            onKeyDownHandler={({ key }) => keyDownHandler(key)}
            value={inputValue}
            externalStyles={styles['todo__inputs-text']}
          />
        ) : (
          <span>{inputValue}</span>
        )}
      </div>

      <div className={styles.todo__control}>
        <IconButton
          externalStyles={styles['todo__control-button']}
          onClickHandler={editButtonHandler}
        >
          <Image
            className={styles['todo__control-button--edit-image']}
            src={isEditing ? doneImage : editImage}
            alt="edit button"
          />
        </IconButton>

        <IconButton
          externalStyles={styles.todo__control__button}
          onClickHandler={() => deleteToDo(toDoData.id)}
        >
          <Image
            className={styles['todo__control-button--delete-image']}
            src={deleteImage}
            alt="delete button"
          />
        </IconButton>
      </div>
    </div>
  );
}
