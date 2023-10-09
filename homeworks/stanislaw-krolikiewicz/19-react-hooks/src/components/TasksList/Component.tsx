import {TasksContext} from '@/contexts/tasks';
import {useContext} from 'react';
import {Task} from '@/components';

export default () => {
  const {tasks} = useContext(TasksContext);
  return (
    <ul className="list-disc list-inside">
      {tasks && tasks.map(task => <Task key={task.id} task={task} />)}
    </ul>
  );
};
