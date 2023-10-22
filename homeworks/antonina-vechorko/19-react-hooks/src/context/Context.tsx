import {createContext, useMemo} from 'react';
import {useLocalStorageReducer} from '../customHooks/useLocalStorageReducer';
import TaskReducer from '../reducer/TaskReducer';

export const TaskContext = createContext([]);
export const TaskDispatchContext = createContext(null);

export const TaskProvider = ({children}) => {
  const [tasks, dispatch] = useLocalStorageReducer(TaskReducer, []);

  const memoizedTasks = useMemo(() => tasks, [tasks]);
  const memoizedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <TaskContext.Provider value={memoizedTasks}>
      <TaskDispatchContext.Provider value={memoizedDispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};
