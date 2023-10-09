import {useContext, useEffect, useState} from 'react';

import Input from './components/Input';
import Task from './components/Task';
import {TodoContext, TodoDispatchContext} from './context/TodoContext';
import {
  addTaskActionCreator,
  deleteTaskActionCreator,
  setTasksActionCreator,
  updateTaskActionCreator,
} from './context/actions';

import styles from './App.module.css';

function App() {
  const {tasks} = useContext(TodoContext);
  const dispatch = useContext(TodoDispatchContext);
  const [newTask, setNewTask] = useState('');
  const [didMount, setDidMount] = useState(false);

  const changeNewTaskHandler = e => {
    if (e.target.value.length > 20) {
      alert('Task length must be less than 20');
      return;
    }
    setNewTask(e.target.value);
  };

  const addTaskHandler = () => {
    if (newTask.trim().length === 0) {
      alert('Task message cannot be empty');
      return;
    }
    dispatch(
      addTaskActionCreator({
        id: 'id' + Math.random().toString(16).slice(2),
        value: newTask,
      }),
    );
    setNewTask('');
  };

  const deleteTaskHandler = id => {
    dispatch(deleteTaskActionCreator(id));
  };

  const updateTaskHandler = newTask => {
    dispatch(updateTaskActionCreator(newTask));
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
            onChange={changeNewTaskHandler}
          />
          <button className={styles.addButton} onClick={addTaskHandler}>
            Add
          </button>
        </header>

        <main>
          {tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              value={task.value}
              updateHandler={updateTaskHandler}
              deleteHandler={deleteTaskHandler.bind(null, task.id)}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
