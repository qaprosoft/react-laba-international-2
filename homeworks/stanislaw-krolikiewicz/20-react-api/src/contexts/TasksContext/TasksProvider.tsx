import {
  createContext,
  useState,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import {Task} from '@/types';
import {useTasksList, useLastTaskId} from '@/hooks';
import tasksReducer from './TasksReducer';
import {ActionType} from '@/types';
import {ErrorsContext} from '../ErrorsContext';

export const TasksContext = createContext({
  tasks: [] as Task[],
  addTask: (name: string) => {},
  deleteTask: (id: number) => {},
  updateTask: (task: Task) => {},
  toggleTask: (id: number) => {},
  deleteCompletedTasks: () => {},
});

export const TasksProvider = ({children}: {children: React.ReactNode}) => {
  const {setError} = useContext(ErrorsContext);
  const {tasks, setTasks} = useTasksList();
  const {lastTaskId, setLastTaskId} = useLastTaskId();
  const [initialRender, setInitialRender] = useState(true);

  const [state, dispatch] = useReducer(tasksReducer, tasks);
  const nextId = useMemo(() => lastTaskId + 1, [lastTaskId]);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    } else {
      setTasks(state);
    }
  }, [state]);

  useEffect(() => {
    dispatch({type: ActionType.SET_TASKS, payload: tasks});
  }, [tasks]);

  const chekIfTaskExists = useCallback(
    (name: string) => {
      if (tasks.find(task => task.name === name)) {
        setError(`Task already exists`);
        return;
      }
    },
    [tasks],
  );

  const addTask = (name: string) => {
    const newTask: Task = {
      id: nextId,
      name,
      completed: false,
    };
    chekIfTaskExists(name);
    dispatch({type: ActionType.ADD_TASK, payload: newTask});
    setLastTaskId(nextId);
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

  const deleteCompletedTasks = useCallback(() => {
    if (tasks.filter((task: Task) => task.completed).length !== 0) {
      dispatch({type: ActionType.DELETE_COMPLETED_TASKS});
    } else {
      setError('No completed tasks to delete');
    }
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
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
