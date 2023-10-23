import "./App.css";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import {useTask} from "./hooks/useTask"
import {DeleteCompletedTasks} from './components/DeleteCompletedTasks'




function App() {
  const {
    tasks,
    handleNewTask,
    handleDeleteTask,
    handleCompleteTask,
    handleUpdateTask,
    handleDeleteCompletedTasks,
  } = useTask()

  return (
      <>
        <div className="container">
          <AddTask handleNewTask={handleNewTask} />
        </div>

        <div className="task-container">
            <TaskList
            tasks={tasks}
            handleUpdateTask={handleUpdateTask}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            />
          </div>
        <div className="button-container">
          <DeleteCompletedTasks onClick={handleDeleteCompletedTasks} />
        </div>
      </>
  );
}

export default App;
