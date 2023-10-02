import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import deleteImage from '@/assets/icons/delete.svg';
import doneImage from '@/assets/icons/done.svg';
import editImage from '@/assets/icons/write.svg';
import IconButton from '@/components/IconButton';
import TextInput from '@/components/TextInput';
import useToDoContext from '@/customHooks/useToDoContext';
import useValidation from '@/customHooks/useValidation';
import IToDo from '@/types/toDo';

import styles from './toDo.module.scss';

export default function ToDo({ toDoData }: { toDoData: IToDo }) {
  const [inputValue, setInputValue] = useState(toDoData.value);
  const { setEditMode, toDos, editTodoItem, toggleDone, removeTodoItem } =
    useToDoContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const isValidToDo = useValidation();

  useEffect(() => {
    if (inputRef.current && toDoData.editMode) {
      inputRef.current.focus();
    }
  }, [toDoData.editMode]);

  const editButtonHandler = () => {
    setEditMode(toDoData.id);

    if (toDoData.value === inputValue || !isValidToDo(toDos, inputValue)) {
      setInputValue(toDoData.value);
      return;
    }

    editTodoItem(toDoData.id, inputValue);
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
            toggleDone(toDoData.id);
          }}
        />

        <TextInput
          ref={inputRef}
          disabled={!toDoData.editMode}
          onChangeHandler={({ target: { value } }) => {
            setInputValue(value);
          }}
          onKeyDownHandler={({ key }) => keyDownHandler(key)}
          value={inputValue}
          externalStyles={styles['todo__inputs-text']}
        />
      </div>

      <div className={styles.todo__control}>
        <IconButton
          externalStyles={styles['todo__control-button']}
          onClickHandler={editButtonHandler}
        >
          <Image
            className={styles['todo__control-button--edit-image']}
            src={toDoData.editMode ? doneImage : editImage}
            alt="edit button"
          />
        </IconButton>

        <IconButton
          externalStyles={styles.todo__control__button}
          onClickHandler={() => removeTodoItem(toDoData.id)}
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
