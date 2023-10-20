import React, {useState} from 'react';
import AddTaskComponent from '../AddTaskComponent/AddTaskComponent';
import Task from '../Task/Task';
import {MAX_TASK_LENGTH} from '../../constants/constants';

interface ITask {
  id: number;
  text: string;
  done: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

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

  return (
    <>
      <AddTaskComponent
        newTaskText={newTaskText}
        addTask={addTask}
        setNewTask={setNewTaskText}
      />
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task
              text={task.text}
              onChange={() => editTask(task.id, task.text)}
              onDelete={() => deleteTask(task.id)}
              onToggle={console.log(123)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
