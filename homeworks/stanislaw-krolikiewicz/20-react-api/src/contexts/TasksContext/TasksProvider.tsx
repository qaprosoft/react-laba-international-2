import {createContext, useState, useEffect, useReducer} from 'react';
import {Task} from '@/types';
import {useTasksList, useLastTaskId} from '@/hooks';
import tasksReducer from './TasksReducer';
import {ActionType} from '@/types';

export const TasksContext = createContext({
  tasks: [] as Task[],
  error: '',
  setError: (error: string) => {},
  addTask: (name: string) => {},
  deleteTask: (id: number) => {},
  updateTask: (task: Task) => {},
  toggleTask: (id: number) => {},
  deleteCompletedTasks: () => {},
});

export const TasksProvider = ({children}: {children: React.ReactNode}) => {
  const {tasks, setTasks} = useTasksList();
  const {lastTaskId, setLastTaskId} = useLastTaskId();
  const [error, setError] = useState('');
  const [initialRender, setInitialRender] = useState(true);

  const [state, dispatch] = useReducer(tasksReducer, tasks);

  useEffect(() => {
    if (error !== '') {
      setTimeout(() => setError(''), 3000);
    }
  }, [error]);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    } else {
      setTasks(state);
    }
  }, [state]);

  const addTask = (name: string) => {
    const newTask: Task = {
      id: lastTaskId + 1,
      name,
      completed: false,
    };
    if (tasks.find(task => task.name === name)) {
      setError(`Task already exists`);
      return;
    }
    dispatch({type: ActionType.ADD_TASK, payload: newTask});
    setLastTaskId(lastTaskId + 1);
    setError('');
  };

  const deleteTask = (id: number) => {
    dispatch({type: ActionType.DELETE_TASK, payload: id});
  };

  const updateTask = (task: Task) => {
    dispatch({type: ActionType.UPDATE_TASK, payload: task});
  };

  const toggleTask = (id: number) => {
    dispatch({type: ActionType.TOGGLE_TASK, payload: id});
  };

  const deleteCompletedTasks = () => {
    dispatch({type: ActionType.DELETE_COMPLETED_TASKS});
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        error,
        setError,
        addTask,
        deleteTask,
        updateTask,
        toggleTask,
        deleteCompletedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
