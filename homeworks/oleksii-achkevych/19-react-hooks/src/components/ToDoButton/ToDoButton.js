import React from 'react';
import styles from './ToDoButton.module.css';

const TodoButton = ({label, onClick}) => {
  return (
    <button className={styles.button_item} onClick={onClick}>
      {label}
    </button>
  );
};

export default TodoButton;
