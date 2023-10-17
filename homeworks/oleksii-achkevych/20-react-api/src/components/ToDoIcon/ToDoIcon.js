import React from 'react';
import styles from './ToDoIcon.module.css';

const ToDoIcon = ({onClick, iconSrc, alt}) => {
  return (
    <button className={styles.icon_item} onClick={onClick}>
      <img src={iconSrc} alt={alt} />
    </button>
  );
};

export default ToDoIcon;
