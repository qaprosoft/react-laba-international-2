import './App.css';
import Task from './components/Task/Task';
import TaskCreator from './components/TaskCreator/TaskCreator';
import { useReducer, useCallback} from 'react';
import reducer from './functions/reducer';
import { MainContext } from './contexts/mainContext';
import ClearCompletedTasksButton from './components/ClearCompletedTasksButton/ClearCompletedTasksButton';
import useSaveToLocalStorage from './hooks/useSaveToLocalStorage';

const App = function () {
  const [state, dispatch] = useReducer(reducer, []);

  const tasksUploader = useCallback(() => {
    return state.map((task) => {
      return (
        <Task
          taskText={task.taskText}
          key={task.id}
          id={task.id}
          completed={task.completed}
          modifyTasks={modifyTasks}
          removeTask={removeTask}
          setCompletedTask={setCompletedTask}
          state={state}
        />
      );
    });
  }, [state]);

  useSaveToLocalStorage(state, dispatch);

  function createTask(newTaskText) {
    dispatch({type: 'task_added', text: newTaskText});
  }

  function modifyTasks(id, text) {
    dispatch({type: 'task_modified', 'id': id, text: text});
  }

  function setCompletedTask(id) {
    dispatch({type: 'task_completed', 'id': id});
  }

  function removeTask(id) {
    dispatch({type: 'task_removed', 'id': id});
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
          <ClearCompletedTasksButton
            removeCompletedTasks={removeCompletedTasks}
            tasks={state}
          />
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default App;
