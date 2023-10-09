import {useContext, useEffect, useState} from 'react';

import Input from './components/Input';
import Task from './components/Task';
import {TodoContext, TodoDispatchContext} from './context/TodoContext';
import {
  addTaskActionCreator,
  deleteCompletedActionCreator,
  deleteTaskActionCreator,
  setTasksActionCreator,
  toggleCompletedActionCreator,
  updateTaskActionCreator,
} from './context/actions';

import styles from './App.module.css';
import { useTaskValidation } from './hook/useTaskValidation';

function App() {
  const {tasks} = useContext(TodoContext);
  const dispatch = useContext(TodoDispatchContext);
  const [didMount, setDidMount] = useState(false);
  const [newTask, newTaskError, onChangeNewTask, eraseNewTask] = useTaskValidation()

  const addTaskHandler = () => {
    if (newTaskError) {
      alert(newTaskError);
      return;
    }
    dispatch(
      addTaskActionCreator({
        id: 'id' + Math.random().toString(16).slice(2),
        value: newTask,
        completed: false,
      }),
    );
    eraseNewTask();
  };

  const deleteTaskHandler = id => {
    dispatch(deleteTaskActionCreator(id));
  };

  const updateTaskHandler = newTask => {
    dispatch(updateTaskActionCreator(newTask));
  };

  const toggleCompleteHandler = id => {
    dispatch(toggleCompletedActionCreator(id));
  };

  const deleteCompletedHandler = () => {
    dispatch(deleteCompletedActionCreator());
  };

  useEffect(() => {
    if (didMount) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, didMount]);

  useEffect(() => {
    setDidMount(true);
    const tasks = localStorage.getItem('tasks');
    if (tasks) dispatch(setTasksActionCreator(JSON.parse(tasks)));
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <header>
          <Input
            placeholder="Create ToDo task"
            value={newTask}
            onChange={onChangeNewTask}
          />
          <button className={styles.addButton} onClick={addTaskHandler}>
            Add
          </button>
        </header>

        <main>
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              updateHandler={updateTaskHandler}
              deleteHandler={deleteTaskHandler.bind(null, task.id)}
              toggleCompleteHandler={toggleCompleteHandler.bind(null, task.id)}
            />
          ))}
          <div className={styles.deleteCompleted}>
            <button onClick={deleteCompletedHandler}>
              Delete all completed tasks
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
