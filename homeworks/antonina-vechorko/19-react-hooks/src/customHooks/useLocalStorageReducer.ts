import {Reducer, useEffect, useReducer, Dispatch} from 'react';
import {IAction, ITask} from '../reducer/TaskReducer';

const initializer = () => {
  const storedValue = localStorage.getItem('tasks');
  return storedValue ? JSON.parse(storedValue) : [];
};

export const useLocalStorageReducer = (
  reducer: Reducer<ITask[], IAction>,
  initialState: ITask[],
): [ITask[], Dispatch<IAction>] => {
  const [tasks, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return [tasks, dispatch];
};
