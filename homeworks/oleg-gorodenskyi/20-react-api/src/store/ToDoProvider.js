import inputValidation from '../helpers/inputValidation';
import {ToDoContext} from './toDoContext';
import {useReducer} from 'react';

export const toDoReducer = (state, action) => {
  let actualState = state;
  switch (action.type) {
    case 'Add': {
      const validated = inputValidation(action.value, actualState, 'Add');
      actualState = validated;
      break;
    }
    case 'EditToDo': {
      const validated = inputValidation(
        action.value,
        actualState,
        'Edit',
        action.id,
      );
      if (Array.isArray(validated)) {
        actualState = validated;
      } else {
        const {updatedToDoList, toFalse} = validated;
        actualState = updatedToDoList;
        action.setIsEdit(toFalse);
      }
      break;
    }
    case 'Delete': {
      const updatedToDoList = state.filter(list => list.id !== action.id);
      localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
      actualState = updatedToDoList;
      break;
    }
    case 'ToggleMarked': {
      const updatedToDoList = state.map(list =>
        list.id === action.id
          ? {id: action.id, value: action.value, completed: action.completed}
          : list,
      );
      localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));
      actualState = updatedToDoList;
      break;
    }
    case 'ClearAllMarked': {
      const filteredToDoList = state.filter(list => list.isCompleted === false);
      localStorage.setItem('toDoList', JSON.stringify(filteredToDoList));
      actualState = filteredToDoList;
      break;
    }

    default: {
      throw Error('We don"t have action: ' + action.type);
    }
  }
  return actualState;
};

const ToDoProvider = props => {
  const [toDos, dispatchToDos] = useReducer(toDoReducer, [], initialValue);

  function initialValue() {
    let storedData = localStorage.getItem('toDoList');
    return storedData ? JSON.parse(storedData) : [];
  }

  const addToDo = inputValue => {
    dispatchToDos({type: 'Add', value: inputValue});
  };

  const clearAllMarkedToDo = () => {
    dispatchToDos({type: 'ClearAllMarked'});
  };

  const deleteToDo = id => {
    dispatchToDos({type: 'Delete', id: id});
  };

  const editToDo = (value, id, setIsEdit) => {
    dispatchToDos({type: 'EditToDo', value, id, setIsEdit});
  };

  const cartContext = {
    toDos,
    dispatchToDos,
    addToDo,
    clearAllMarkedToDo,
    editToDo,
    deleteToDo,
  };

  return (
    <ToDoContext.Provider value={cartContext}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
