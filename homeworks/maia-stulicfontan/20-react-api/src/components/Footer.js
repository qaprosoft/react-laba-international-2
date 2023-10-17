import {useTasks} from '../context/TasksProvider';
import ClearCompleted from './ClearCompleted';

export default function Footer() {
  const tasks = useTasks();

  return <ClearCompleted isDisplayed={tasks.length > 0}></ClearCompleted>;
}
