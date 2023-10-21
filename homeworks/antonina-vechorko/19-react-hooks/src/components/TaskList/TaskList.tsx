import React, {useEffect, useState} from 'react';
import AddTaskComponent from '../AddTaskComponent/AddTaskComponent';
import Task from '../Task/Task';
import {MAX_TASK_LENGTH} from '../../constants/constants';
import Button from '../Button/Button';

interface ITask {
  id: number;
  text: string;
  done: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTaskText, setNewTaskText] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTaskText.length === 0) {
      alert('Please enter to-do');
      return;
    }

    if (newTaskText.length > MAX_TASK_LENGTH) {
      alert('Your to-do is longer than 35 symbols');
      return;
    }

    if (tasks.some(task => task.text === newTaskText)) {
      alert('This to-do already exists');
      return;
    }

    const newTaskItem = {id: Date.now(), text: newTaskText, done: false};
    setTasks([...tasks, newTaskItem]);
    setNewTaskText('');
  };

  const editTask = (id, newTaskText) => {
    const updatedTasks = [...tasks];
    const taskToEdit = updatedTasks.find(task => task.id === id);

    if (taskToEdit) {
      taskToEdit.text = newTaskText;
      setTasks(updatedTasks);
    }
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleToggle = id => {
    const updatedTasks = [...tasks];
    const taskIsDone = updatedTasks.find(task => task.id === id);

    if (taskIsDone) {
      taskIsDone.done = !taskIsDone.done;
      setTasks(updatedTasks);
    }
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  const handleClearAllCompleted = () => {
    const updatedTasks = tasks.filter(task => !task.done);
    setTasks(updatedTasks);
  };

  return (
    <>
      <AddTaskComponent
        newTaskText={newTaskText}
        addTask={addTask}
        setNewTask={setNewTaskText}
      />
      <>
        <Button onClick={handleClearAll}>Clear All</Button>
        <Button onClick={handleClearAllCompleted}>Clear All Completed</Button>
      </>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task
              text={task.text}
              onChange={() => editTask(task.id, task.text)}
              onDelete={() => deleteTask(task.id)}
              onToggle={() => handleToggle(task.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
