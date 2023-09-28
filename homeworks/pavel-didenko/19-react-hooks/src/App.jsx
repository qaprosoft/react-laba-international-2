import './App.css';
import Task from './components/Task/Task';
import TaskCreator from './components/TaskCreator/TaskCreator';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  function modifyTasks (index, text) {
    setTasks(tasks => {
      return tasks.map((task, i) => {
        if (i !== index) {
          return task;
        } else {
          task.taskText = text
          task.id = Date.now();
          return task;
        }
      });
    });
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  
  return (
    <div className="main-container">
      <TaskCreator setTasks={setTasks} />
      <div className="tasks-section">
        {tasks.map((task, index) => {
          return (
            <Task
              taskText={task.taskText}
              key={task.id}
              index={index}
              modifyTasks={modifyTasks}
              removeTask={removeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
