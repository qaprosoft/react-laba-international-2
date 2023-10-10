import React, {createContext, useContext, useReducer, useEffect} from 'react';

const ToDoContext = createContext();

const initialState = {
  toDos: [],
  newToDo: '',
  editingId: null,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
        newToDo: '',
      };

    case 'EDIT_TODO':
      const updatedToDos = state.toDos.map(todo =>
        todo.id === action.payload.id
          ? {...todo, text: action.payload.text}
          : todo,
      );
      return {
        ...state,
        toDos: updatedToDos,
        editingId: null,
      };

    case 'DELETE_TODO':
      const filteredToDos = state.toDos.filter(
        todo => todo.id !== action.payload,
      );
      return {
        ...state,
        toDos: filteredToDos,
      };
    case 'TOGGLE_COMPLETION':
      const toggledToDos = state.toDos.map(todo =>
        todo.id === action.payload
          ? {...todo, completed: !todo.completed}
          : todo,
      );
      return {
        ...state,
        toDos: toggledToDos,
      };
    case 'SET_NEW_TODO':
      return {
        ...state,
        newToDo: action.payload,
      };
    case 'SET_EDITING_ID':
      return {
        ...state,
        editingId: action.payload,
      };
    case 'SET_TO_DOS':
      return {
        ...state,
        toDos: action.payload,
      };
    default:
      return state;
  }
};

const ToDoProvider = ({children}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    const savedToDos = localStorage.getItem('toDos');
    if (savedToDos) {
      dispatch({type: 'SET_TO_DOS', payload: JSON.parse(savedToDos)});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(state.toDos));
  }, [state.toDos]);

  return (
    <ToDoContext.Provider value={{state, dispatch}}>
      {children}
    </ToDoContext.Provider>
  );
};

const useToDoContext = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error('useToDoContext must be used within a ToDoProvider');
  }
  return context;
};

export {ToDoProvider, useToDoContext};
