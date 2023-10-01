import React from 'react';
import styles from './ToDoForm.module.css';

const ToDoForm = ({newToDo, setNewToDo, addToDo}) => {
  return (
    <div>
      <div className={styles.input_block}>
        <input
          type="text"
          placeholder="Add a new to-do"
          value={newToDo}
          onChange={e => setNewToDo(e.target.value)}
        />
        <button onClick={addToDo}>Add</button>
      </div>
    </div>
  );
};

export default ToDoForm;
