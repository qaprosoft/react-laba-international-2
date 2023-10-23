import React, {useContext, FC} from 'react';
import Task from '../Task/Task';
import {TaskContext} from '../../context/Context';

const TaskList: FC = () => {
  const tasks = useContext(TaskContext);

  return (
    <div className="task-list__wrapper">
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </div>
  );
};

export default TaskList;
