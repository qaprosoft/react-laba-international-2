import React, {useContext} from 'react';
import Task from '../Task/Task';
import {TaskContext} from '../../context/Context';

const TaskList = () => {
  const tasks = useContext(TaskContext);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
