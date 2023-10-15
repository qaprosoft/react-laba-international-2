import {createContext} from 'react';

export const ToDoContext = createContext({
  toDos: [],
  dispatch: () => {},
  addToDo: inputValue => {},
  deleteToDo: id => {},
  editToDo: (value, id, setInputValue, setIsEdit) => {},
  clearAllMarkedToDo: () => {},
});
