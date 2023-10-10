import {TasksContext} from '@/contexts/TasksContext';
import {useContext} from 'react';
import {Task} from '@/components';

export default () => {
  const {tasks, deleteCompletedTasks} = useContext(TasksContext);
  return (
    <>
      <button onClick={deleteCompletedTasks}>Delete completed tasks</button>
      <ul className="h-[65px] w-full max-w-[676px] flex flex-col gap-[47px]">
        {tasks && tasks.map(task => <Task key={task.id} task={task} />)}
      </ul>
    </>
  );
};
