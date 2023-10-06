import React from 'react';
import './clearCompletedTasksButton.css';

const ClearCompletedTasksButton = ({removeCompletedTasks, tasks}) => {
  function findCompletedTask(tasks) {
    let result = 'none';

    for (let task of tasks) {
      if (task.completed) {
        return 'block';
      }
    }

    return result;
  }

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
