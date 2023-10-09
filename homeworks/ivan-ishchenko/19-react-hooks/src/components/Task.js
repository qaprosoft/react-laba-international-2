import Input from './Input';
import changeIcon from '../assets/icons/change.svg';
import deleteIcon from '../assets/icons/delete.svg';
import okIcon from '../assets/icons/ok.svg';
import crossIcon from '../assets/icons/cross.svg';

import styles from './Task.module.css';
import {useRef, useState} from 'react';

const Task = ({id, value, deleteHandler, updateHandler}) => {
  const [newTaskValue, setNewTaskValue] = useState(value);
  const [readOnly, setReadOnly] = useState(true);
  const inputRef = useRef();

  const disableReadOnlyHandler = () => {
    setReadOnly(false);
    inputRef.current.focus();
  };

  const changeNewValueHandler = e => setNewTaskValue(e.target.value);

  const updateTaskHandler = () => {
    if (newTaskValue.trim().length === 0) {
      alert('New Task message cannot be empty');
      return;
    }
    updateHandler({id, value: newTaskValue});
    setReadOnly(true);
  };

  const cancelHandler = () => {
    setNewTaskValue(value);
    setReadOnly(true);
  };

  return (
    <div className={styles.task}>
      <Input
        value={newTaskValue}
        readonly={readOnly}
        ref={inputRef}
        onChange={changeNewValueHandler}
      />
      {readOnly && (
        <>
          <img
            className={styles.icon}
            src={changeIcon}
            alt="change"
            onClick={disableReadOnlyHandler}
          />
          <img
            className={styles.icon}
            src={deleteIcon}
            alt="delete"
            onClick={deleteHandler}
          />
        </>
      )}
      {!readOnly && (
        <>
          <img
            className={styles.icon}
            src={okIcon}
            alt="update"
            onClick={updateTaskHandler}
          />
          <img
            className={styles.icon}
            src={crossIcon}
            alt="cancel"
            onClick={cancelHandler}
          />
        </>
      )}
    </div>
  );
};

export default Task;
