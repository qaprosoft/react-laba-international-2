import {useTasks} from '../context/TasksProvider';
import Task from './Task';

export default function Tasks() {
  const tasks = useTasks();
  return tasks.length > 0 ? (
    <div className="tasks" tasks={tasks}>
      {tasks.map(task => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  ) : (
    <p className="empty-message">Start by adding some tasks :)</p>
  );
}
