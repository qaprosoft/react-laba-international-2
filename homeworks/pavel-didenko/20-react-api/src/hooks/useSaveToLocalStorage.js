import { useEffect } from "react";

export default function useSaveToLocalStorage(state, dispatch) {

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const tasksObject = JSON.parse(storedTasks);
      dispatch({type: 'tasks_extracted', tasks: tasksObject});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state));
  }, [state]);
}