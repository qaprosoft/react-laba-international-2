import {createContext} from 'react';
import {useLocalStorageReducer} from '../customHooks/useLocalStorageReducer';
import TaskReducer from '../reducer/TaskReducer';

export const TaskContext = createContext([]);
export const TaskDispatchContext = createContext(null);

export const TaskProvider = ({children}) => {
  const [tasks, dispatch] = useLocalStorageReducer(TaskReducer, []);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};
