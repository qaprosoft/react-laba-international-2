import {useEffect, useState} from 'react';

import styles from './App.module.css';
import Input from './components/Input';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [didMount, setDidMount] = useState(false);

  const changeNewTaskHandler = e => setNewTask(e.target.value);

  const addTaskHandler = () => {
    if (newTask.trim().length === 0) {
      alert('Task message cannot be empty');
      return;
    }
    setTasks(prev => [
      ...prev,
      {id: 'id' + Math.random().toString(16).slice(2), value: newTask},
    ]);
    setNewTask('');
  };

  const deleteTaskHandler = id =>
    setTasks(prev => prev.filter(task => task.id !== id));

  const updateTaskHandler = newTask => {
    setTasks(prev => {
      let ind = prev.findIndex(task => task.id === newTask.id);
      if (ind === -1) return prev;
      let newTasks = [...prev];
      newTasks[ind] = newTask;
      return newTasks;
    });
  };

  useEffect(() => {
    if (didMount) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, didMount]);

  useEffect(() => {
    setDidMount(true);
    const tasks = localStorage.getItem('tasks');
    if (tasks) setTasks(JSON.parse(tasks));
  }, []);

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
