import './App.css';
import Task from './components/Task/Task';
import TaskCreator from './components/TaskCreator/TaskCreator';
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if(storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function createTask(newTaskText) {
    setTasks(tasks => [...tasks, {id: Date.now(), taskText: newTaskText, completed: false}]);
  }


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

  function setCompletedTask(index) {
    setTasks(tasks => {
      return tasks.map((task, i) => {
        if(i !== index) {
          return task;
        } else {
          task.completed = !task.completed;
          return task;
        }
      })
    })
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  
  return (
    <div className="main-container">
      <TaskCreator createTask={createTask} />
      <div className="tasks-section">
        {tasks.map((task, index) => {
          return (
            <Task
              taskText={task.taskText}
              key={task.id}
              index={index}
              completed={task.completed}
              modifyTasks={modifyTasks}
              removeTask={removeTask}
              setCompletedTask={setCompletedTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
