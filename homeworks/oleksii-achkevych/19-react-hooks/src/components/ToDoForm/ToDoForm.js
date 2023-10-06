import React from 'react';
import styles from './ToDoForm.module.css';
import TodoInput from '../ToDoInput/ToDoInput';
import TodoButton from '../ToDoButton/ToDoButton';

const ToDoForm = ({newToDo, setNewToDo, addToDo}) => {
  return (
    <div>
      <div className={styles.input_block}>
        <TodoInput value={newToDo} onChange={setNewToDo} />
        <TodoButton label="Add" onClick={addToDo} />
      </div>
    </div>
  );
};

export default ToDoForm;
