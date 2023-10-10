import {Task, Action, ActionType} from '@/types';

export default (state: Task[], action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TASK:
      return [...state, action.payload];
    case ActionType.DELETE_TASK:
      return state.filter((task: Task) => task.id !== action.payload);
    case ActionType.UPDATE_TASK:
      return state.map((task: Task) =>
        task.id === action.payload.id ? action.payload : task,
      );
    case ActionType.TOGGLE_TASK:
      return state.map((task: Task) =>
        task.id === action.payload
          ? {...task, completed: !task.completed}
          : task,
      );
    case ActionType.DELETE_COMPLETED_TASKS:
      return state.filter((task: Task) => !task.completed);
    default:
      return state;
  }
};
