import {createContext, useMemo, ReactNode, FC} from 'react';
import {useLocalStorageReducer} from '../customHooks/useLocalStorageReducer';
import TaskReducer from '../reducer/TaskReducer';
import {IAction, ITask} from '../reducer/TaskReducer';

interface ProviderProps<T> {
  value?: T;
  children?: ReactNode | undefined;
}

export const TaskContext = createContext<ITask[]>([]);
export const TaskDispatchContext = createContext<
  ((action: IAction) => void) | null
>(null);

export const TaskProvider: FC<ProviderProps<ITask[]>> = ({children}) => {
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
