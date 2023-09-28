import React from 'react';
import AddTaskButton from './AddTaskButton/AddTaskButton';

import './taskCreator.css';
import { useState } from 'react';

const TaskCreator = ({setTasks}) => {
  const [taskText, setTaskText] = useState('');
  return (
    <div className="task-creator-wrapper">
      <input
      ></input>
      <AddTaskButton />
    </div>
  );
}

export default TaskCreator;
