import {createContext, useReducer} from 'react';
import {
  ADD_TASK,
  DELETE_TASK,
  SET_TASKS,
  TOGGLE_COMPLETED,
  UPDATE_TASK,
} from './actions';

const initialState = {
  tasks: [],
};

export const TodoContext = createContext(initialState);
export const TodoDispatchContext = createContext(null);

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    }
    case UPDATE_TASK: {
      const newTasks = [...state.tasks];
      let ind = newTasks.findIndex(task => task.id === action.payload.id);
      if (ind === -1) return state;
      newTasks[ind] = action.payload;
      return {
        ...state,
        tasks: newTasks,
      };
    }
    case SET_TASKS: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    case TOGGLE_COMPLETED: {
      const newTasks = [...state.tasks];
      let ind = newTasks.findIndex(task => task.id === action.payload);
      if (ind === -1) return state;
      newTasks[ind].completed = !newTasks[ind].completed;
      return {
        ...state,
        tasks: newTasks,
      };
    }
    default:
      return state;
  }
};
export const TodoProvider = ({children}) => {
  const [tasks, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={tasks}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};
