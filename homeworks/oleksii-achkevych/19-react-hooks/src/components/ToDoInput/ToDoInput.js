import React from 'react';
import styles from './ToDoInput.module.css';

const TodoInput = ({value, onChange}) => {
  return (
    <input
      className={styles.input_item}
      type="text"
      placeholder="Add a new to-do"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default TodoInput;
