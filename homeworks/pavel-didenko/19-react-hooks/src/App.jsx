import './App.css';
import Task from './components/Task/Task';
import TaskCreator from './components/TaskCreator/TaskCreator';
import {useState, useEffect} from 'react';
import ClearCompletedTasksButton from './components/ClearCompletedTasksButton/ClearCompletedTasksButton';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function createTask(newTaskText) {
    setTasks(tasks => [
      ...tasks,
      {id: Date.now(), taskText: newTaskText, completed: false},
    ]);
  }

  function modifyTasks(id, text) {
    setTasks(tasks => {
      return tasks.map((task) => {
        if (task.id !== id) {
          return task;
        } else {
          task.taskText = text;
          return task;
        }
      });
    });
  }

  function setCompletedTask(id) {
    setTasks(tasks => {
      return tasks.map((task) => {
        if (task.id !== id) {
          return task;
        } else {
          task.completed = !task.completed;
          return task;
        }
      });
    });
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function removeCompletedTasks() {
    setTasks(tasks.filter((task) => !task.completed))
  }

  return (
    <div className="main-container">
      <TaskCreator createTask={createTask} tasks={tasks} />
      <div className="tasks-section">
        {tasks.map((task, index) => {
          return (
            <Task
              taskText={task.taskText}
              key={task.id}
              id={task.id}
              completed={task.completed}
              modifyTasks={modifyTasks}
              removeTask={removeTask}
              setCompletedTask={setCompletedTask}
              setTasks={setTasks}
            />
          );
        })}
        <ClearCompletedTasksButton
          removeCompletedTasks={removeCompletedTasks}
          tasks={tasks}
        />
      </div>
    </div>
  );
}

export default App;
