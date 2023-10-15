import React from 'react';
import styles from './ToDoInput.module.css';

const TodoInput = React.forwardRef(({value, onChange}, ref) => {
  return (
    <input
      className={styles.input_item}
      type="text"
      placeholder="Add a new to-do"
      value={value}
      onChange={e => onChange(e.target.value)}
      ref={ref}
    />
  );
});

export default TodoInput;
