import React from 'react';
import modifyIcon from '../../assets/img/icons/write.svg';
import removeIcon from '../../assets/img/icons/delete.svg'
import './task.css';

const Task = () => {
  return (
    <div className="task">
      <input className="task__input"></input>
      <img className="task__icon" src={modifyIcon} alt="Modify task" />
      <img className="task__icon" src={removeIcon} alt="Remove task" />
    </div>
  );
}

export default Task;
