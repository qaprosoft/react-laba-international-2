import {useRef, useState} from 'react';
import {Context} from './AppContext';

const AppContextProvider = ({children}) => {
  const [todos, setTodos] = useState([]);
  const [currentInputText, setCurrentInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isNewTodoValid, setIsNewTodoValid] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState('');
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
        isShowModal,
        setIsShowModal,
        todoToEdit,
        setTodoToEdit,
        editingText,
        setEditingText,
        inputRef,
        isNewTodoValid,
        setIsNewTodoValid,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContextProvider;
