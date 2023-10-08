import {useState} from 'react';
import {Context} from './AppContext';

const AppContextProvider = ({children}) => {
  const [todos, setTodos] = useState([]);
  const [currentInputText, setCurrentInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContextProvider;
