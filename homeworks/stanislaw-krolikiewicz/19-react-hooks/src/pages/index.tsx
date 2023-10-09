import {useContext} from 'react';
import {TasksContext} from '@/contexts/tasks';

export default function Home() {
  const {tasks, error, addTask, deleteTask, updateTask} =
    useContext(TasksContext);
  return (
    <main className="">
      <h1 className="text-center text-4xl font-bold">Tasks</h1>
      <button onClick={() => addTask('task1')}>addTask</button>
      {error !== '' && <p className="text-red-500">{error}</p>}
      <ul className="list-disc list-inside">
        {tasks && tasks.map(task => <li key={task.id}>{task.name}</li>)}
      </ul>
    </main>
  );
}
