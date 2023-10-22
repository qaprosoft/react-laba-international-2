import React, {useContext} from 'react';
import Task from '../Task/Task';
import {TaskContext, TaskDispatchContext} from '../../context/Context';

const TaskList = () => {
  const tasks = useContext(TaskContext);
  const dispatch = useContext(TaskDispatchContext);

  const deleteTask = id => {
    dispatch({
      type: 'delete',
      id: id,
    });
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onDelete={() => deleteTask(task.id)}
            // onToggle={() => handleToggle(task.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
