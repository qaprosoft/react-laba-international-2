import {TasksContext} from '@/contexts/tasks';
import {useContext} from 'react';
import {Task} from '@/components';

export default () => {
  const {tasks} = useContext(TasksContext);
  return (
    <ul className="w-full max-w-[676px] flex flex-col gap-[47px]">
      {tasks && tasks.map(task => <Task key={task.id} task={task} />)}
    </ul>
  );
};
