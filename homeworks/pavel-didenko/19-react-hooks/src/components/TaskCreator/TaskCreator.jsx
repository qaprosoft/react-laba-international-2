import React from 'react';
import AddTaskButton from './AddTaskButton/AddTaskButton';
import Input from '../Input/Input';
import './taskCreator.css';
import { useState } from 'react';

const TaskCreator = ({setTasks}) => {
  const [taskText, setTaskText] = useState('');
  return (
    <div className="task-creator-wrapper">
      <Input placeholder={'Create Todo-Task'} setTaskText={setTaskText} />
      <AddTaskButton />
    </div>
  );
}

export default TaskCreator;
