import {createContext, useContext, useEffect, useReducer} from 'react';
import tasksReducer from '../utils/tasksReducer';

const TaskContext = createContext(null);
const TaskDispatchContext = createContext(null);

export function useTasks() {
  return useContext(TaskContext);
}

export function useDispatch() {
  return useContext(TaskDispatchContext);
}

export function TasksProvider({children}) {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, dispatch] = useReducer(tasksReducer, savedTasks);

  useEffect(() => {
    if (tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
