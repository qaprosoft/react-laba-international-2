import {useReducer, useRef, useState} from 'react';
import {Context} from './AppContext';
import {mainReducer} from '../../state/mainReducer';
import {INITIAL_STATE} from '../../state/initialState';

const AppContextProvider = ({children}) => {
  //reducer
  const [state, dispatch] = useReducer(mainReducer, INITIAL_STATE);
  //state
  const [currentInputText, setCurrentInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isNewTodoValid, setIsNewTodoValid] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState('');
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [editingText, setEditingText] = useState('');
  const inputRef = useRef(null);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        currentInputText,
        setCurrentInputText,
        errorMessage,
        setErrorMessage,
        isShowDeleteModal,
        setIsShowDeleteModal,
        todoToEdit,
        setTodoToEdit,
        editingText,
        setEditingText,
        inputRef,
        isNewTodoValid,
        setIsNewTodoValid,
        todoToDelete,
        setTodoToDelete,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContextProvider;
