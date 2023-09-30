import './App.css';
import Task from './components/Task/Task';
import TaskCreator from './components/TaskCreator/TaskCreator';
import {useState, useEffect, useReducer} from 'react';

function reducer(state, action) {

  switch (action.type) {
    case 'task_added': {
      return [
        ...state,
        {id: Date.now(), taskText: action.text, completed: false},
      ];
    }

    case 'task_modified': {
      return state.map((task, index) => {
        if (index !== action.index) {
          return task;
        } else {
          task.taskText = action.text;
          task.id = Date.now();
          return task;
        }
      });
    }

    case 'task_removed': {
      return state.filter((_, index) => index !== action.index);
    }

    case 'tasks_extracted': {
      return action.tasks;
    }

    default: {
      throw new Error('Unknows use case');
    }
  }
}

const App = function () {
  const [tasks, setTasks] = useState([]);
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const tasksObject = JSON.parse(storedTasks);
      dispatch({type: 'tasks_extracted', tasks: tasksObject});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state));
  }, [state]);

  function createTask(newTaskText) {
    dispatch({type: 'task_added', text: newTaskText});
  }

  function modifyTasks(index, text) {
    dispatch({type: 'task_modified', index: index, text: text});
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
    dispatch({type: 'task_removed', 'index': index});
  }

  function removeCompletedTasks() {
    setTasks(tasks.filter(task => !task.completed));
  }

  return (
    <div className="main-container">
      <TaskCreator createTask={createTask} state={state} />
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
};

export default App;
