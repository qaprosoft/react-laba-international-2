import './App.css';
import Task from './components/Task/Task';
import TaskCreator from './components/TaskCreator/TaskCreator';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  function modifyTasks (index, taskText) {
    setTasks(tasks => {
      return tasks.map((task, i) => {
        if (i !== index) {
          return task;
        } else {
          return taskText;
        }
      });
    });
  }

  function removeTask(index) {
    setTasks(tasks => {
      const filteredTasks = tasks.filter((_, i) => i !== index);
      return filteredTasks;
    })
  }
  
  return (
    <div className="main-container">
      <TaskCreator setTasks={setTasks} />
      <div className="tasks-section">
        {tasks.map((task, index) => {
          return (
            <Task
              taskText={task}
              key={index}
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
