import './App.css';
import Task from './components/Task/Task';
import TaskCreator from './components/TaskCreator/TaskCreator';
import {useEffect, useReducer, useMemo, callBack, useCallback} from 'react';
import reducer from './functions/reducer';
import { MainContext } from './contexts/mainContext';

const App = function () {
  const [state, dispatch] = useReducer(reducer, []);

  const tasksUploader = useCallback(() => {
    return state.map((task, index) => {
      return (
        <Task
          taskText={task.taskText}
          key={task.id}
          index={index}
          completed={task.completed}
          modifyTasks={modifyTasks}
          removeTask={removeTask}
          setCompletedTask={setCompletedTask}
          state={state}
        />
      );
    });
  }, [state]);

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
    dispatch({type: 'task_completed', 'index': index});
  }

  function removeTask(index) {
    dispatch({type: 'task_removed', 'index': index});
  }

  function removeCompletedTasks() {
    dispatch({type: 'remove_completed_tasks'});
  }

  return (
    <MainContext.Provider
      value={{
        createTask,
        modifyTasks,
        setCompletedTask,
        removeTask,
        removeCompletedTasks,
      }}
    >
      <div className="main-container">
        <TaskCreator state={state} />
        <div className="tasks-section">
          {tasksUploader()}
          <button
            className="clear-completed-tasks"
            onClick={removeCompletedTasks}
          >
            Clear completed tasks
          </button>
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default App;
