import React from 'react';
import Input from '../../Input/Input';
import modifyIcon from '../../../assets/img/icons/write.svg';
import removeIcon from '../../../assets/img/icons/delete.svg'
import './task.css';

const Task = () => {
  return (
    <div className="task">
      <Input className="task__input"/>
      <img className="task__icon" src={modifyIcon} alt="Modify task" />
      <img className="task__icon" src={removeIcon} alt="Remove task" />
    </div>
  );
}

export default Task;
