import { useEffect } from "react";
import { useMyContext } from "./useMyContext";

export const useTask = () => {

  const { state, dispatch } = useMyContext();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  const handleNewTask = (task) => {
    const action = {
      type: "add-task",
      payload: task,
    };

    dispatch(action);
  };

  const handleDeleteTask = (id) => {
    const action = {
      type: "delete-task",
      payload: id,
    };

    dispatch(action);
  };

  const handleCompleteTask = (id) => {
    const action = {
      type: "complete-task",
      payload: id,
    };

    dispatch(action);
  };

  const handleUpdateTask = (id, description) => {
    const action = {
      type: 'update-task',
      payload: {
        id,
        description,
      },
    };
    dispatch(action);
  }

  const handleDeleteCompletedTasks = () => {
    const action = {
      type: 'delete-completed-tasks',
    };
    dispatch(action);
  }

  return {
    tasks: state,
    handleNewTask,
    handleDeleteTask,
    handleCompleteTask,
    handleUpdateTask,
    handleDeleteCompletedTasks,
  }
}