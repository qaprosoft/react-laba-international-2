import Image from 'next/image';
import { useState } from 'react';

import deleteImage from '@/assets/icons/delete.svg';
import doneImage from '@/assets/icons/done.svg';
import editImage from '@/assets/icons/write.svg';
import styles from '@/components/toDo.module.scss';
import inputValidation from '@/helpers/inputValidation';
import IToDoProps from '@/types/toDoComponentProps';

export default function ToDo({ data, deleteHandler, editHandler }: IToDoProps) {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState<string>(data.value);

  const editButtonHandler = () => {
    setEditMode(!editMode);

    if (data.value === value) return;
    if (!inputValidation(value)) return;

    editHandler(data.id, value, 'value');
  };

  return (
    <div className={styles.todo}>
      {editMode ? (
        <input
          autoFocus
          value={value}
          type="text"
          className={styles.todo__text}
          onChange={event => {
            setValue(event.target.value);
          }}
        />
      ) : (
        <div className={styles.todo__text}>
          <input
            type="checkbox"
            checked={data.done}
            onChange={() => {
              editHandler(data.id, !data.done, 'done');
            }}
          />

          {data.value}
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
          onClick={() => deleteHandler(data.id)}
        />
      </div>
    </div>
  );
}
