import React from 'react';
import AddTaskButton from './AddTaskButton/AddTaskButton';
import Input from '../Input/Input';

const TaskCreator = () => {
  return (
    <div className="task-creator-wrapper">
      <Input />
      <AddTaskButton />  
    </div>
  );
}

export default TaskCreator;
