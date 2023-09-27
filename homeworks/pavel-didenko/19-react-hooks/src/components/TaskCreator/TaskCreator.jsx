import React from 'react';
import AddTaskButton from './AddTaskButton/AddTaskButton';
import Input from '../Input/Input';
import './taskCreator.css';

const TaskCreator = () => {
  return (
    <div className="task-creator-wrapper">
      <Input placeholder={'Create Todo-Task'} />
      <AddTaskButton />
    </div>
  );
}

export default TaskCreator;
