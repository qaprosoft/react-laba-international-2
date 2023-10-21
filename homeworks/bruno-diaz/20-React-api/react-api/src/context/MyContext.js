import { createContext, useReducer } from 'react';

export const MyContext = createContext();

const taskReducer = (initialState, action) => {
  switch (action.type) {
    case 'add-task':
      return [...initialState, action.payload];

    case 'delete-task':
      return initialState.filter(task => task.id !== action.payload);

    case 'complete-task':
      return initialState.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            done: !task.done
          };
        }
        return task;
      });

    case 'delete-completed-tasks':
      return initialState.filter(task => !task.done);

    default:
      return initialState;
  }
}

const MyContextProvider = ({ children }) => {
  const initialState = init(); 
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}


const init = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

export {
  MyContextProvider
}
