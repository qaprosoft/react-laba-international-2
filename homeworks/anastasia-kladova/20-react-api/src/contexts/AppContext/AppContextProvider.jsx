import {useRef, useState} from 'react';
import {Context} from './AppContext';

const AppContextProvider = ({children}) => {
  const [todos, setTodos] = useState([]);
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
        todos,
        setTodos,
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
