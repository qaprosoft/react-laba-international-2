import React from 'react';
import './clearCompletedTasksButton.css';
import findCompletedTask from '../../functions/findCompletedTasks';

const ClearCompletedTasksButton = ({removeCompletedTasks, tasks}) => {
  return (
    <button
      className="clear-completed-tasks"
      onClick={removeCompletedTasks}
      style={{display: findCompletedTask(tasks)}}
    >
      Clear completed tasks
    </button>
  );
};

export default ClearCompletedTasksButton;
