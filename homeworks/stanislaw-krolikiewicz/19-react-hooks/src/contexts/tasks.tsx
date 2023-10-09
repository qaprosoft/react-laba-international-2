import {createContext, useState, useEffect} from 'react';
import {Task} from '../types';
import {useTasksList, useLastTaskId} from '../hooks';

export const TasksContext = createContext({
  tasks: [] as Task[],
  error: '',
  setError: (error: string) => {},
  addTask: (name: string) => {},
  deleteTask: (id: number) => {},
  updateTask: (task: Task) => {},
});

export const TasksProvider = ({children}: {children: React.ReactNode}) => {
  const {tasks, setTasks} = useTasksList();
  const {lastTaskId, setLastTaskId} = useLastTaskId();
  const [error, setError] = useState('');

  useEffect(() => {
    if (error !== '') {
      setTimeout(() => setError(''), 3000);
    }
  }, [error]);

  const addTask = (name: string) => {
    const newTask: Task = {
      id: lastTaskId + 1,
      name,
    };
    if (tasks.find(task => task.name === name)) {
      setError(`Task already exists`);
      return;
    }
    setTasks([...tasks, newTask]);
    setLastTaskId(lastTaskId + 1);
    setError('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
  };

  return (
    <TasksContext.Provider
      value={{tasks, error, setError, addTask, deleteTask, updateTask}}
    >
      {children}
    </TasksContext.Provider>
  );
};
