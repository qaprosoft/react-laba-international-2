import {TasksContext} from '@/contexts/TasksContext';
import {useContext} from 'react';
import {Task} from '@/components';

export default () => {
  const {tasks, deleteCompletedTasks} = useContext(TasksContext);
  return (
    <>
      <button
        data-testid="delete-completed"
        onClick={deleteCompletedTasks}
        className="bg-red-400 px-10 py-3 rounded-sm text-white font-bold
        hover:bg-red-500 transition-all duration-300 ease-in-out
        active:scale-95
      "
      >
        Delete completed tasks
      </button>
      <ul className="h-[65px] w-full max-w-[676px] flex flex-col gap-[47px]">
        {tasks &&
          tasks.map(task => (
            <Task key={task.id} task={task} datatest-id="task" />
          ))}
      </ul>
    </>
  );
};
