interface Task {
  id: number;
  name: string;
  completed: boolean;
}

enum ActionType {
  SET_TASKS = 'SET_TASKS',
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
  TOGGLE_TASK = 'TOGGLE_TASK',
  DELETE_COMPLETED_TASKS = 'DELETE_COMPLETED_TASKS',
}

interface Action {
  type: ActionType;
  payload?: any;
}

export { type Task, ActionType, type Action }