import './App.css';
import Task from './components/Task/Task';
import TaskCreator from './components/TaskCreator/TaskCreator';
import {useState, useEffect, useReducer} from 'react';

function reducer(state, action) {
  if(action.type === "task_added"){
    return [
      ...state,
      {id: Date.now(), taskText: action.text, completed: false},
    ];
  }
}


const App = function () {
  const [tasks, setTasks] = useState([]);
  const [state, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // function createTask(newTaskText) {
  //   setTasks(tasks => [
  //     ...tasks,
  //     {id: Date.now(), taskText: newTaskText, completed: false},
  //   ]);
  // }

  function createTask(newTaskText) {
    dispatch({type: 'task_added', text: newTaskText});
    console.log(state)
  }

  function modifyTasks(index, text) {
    setTasks(tasks => {
      return tasks.map((task, i) => {
        if (i !== index) {
          return task;
        } else {
          task.taskText = text;
          task.id = Date.now();
          return task;
        }
      });
    });
  }

  function setCompletedTask(index) {
    setTasks(tasks => {
      return tasks.map((task, i) => {
        if (i !== index) {
          return task;
        } else {
          task.completed = !task.completed;
          return task;
        }
      });
    });
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function removeCompletedTasks() {
    setTasks(tasks.filter((task) => !task.completed))
  }

  return (
    <div className="main-container">
      <TaskCreator createTask={createTask} tasks={tasks} />
      <div className="tasks-section">
        {state.map((task, index) => {
          return (
            <Task
              taskText={task.taskText}
              key={task.id}
              index={index}
              completed={task.completed}
              modifyTasks={modifyTasks}
              removeTask={removeTask}
              setCompletedTask={setCompletedTask}
              setTasks={setTasks}
            />
          );
        })}
        <button
          className="clear-completed-tasks"
          onClick={removeCompletedTasks}
        >
          Clear completed tasks
        </button>
      </div>
    </div>
  );
}

export default App;
