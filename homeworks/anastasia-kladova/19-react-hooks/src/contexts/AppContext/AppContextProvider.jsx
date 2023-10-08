import {useState} from 'react';
import {Context} from './AppContext';

const AppContextProvider = ({children}) => {
  const [todos, setTodos] = useState([]);
  const [currentInputText, setCurrentInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <Context.Provider
      value={{
        todos,
        setTodos,
        currentInputText,
        setCurrentInputText,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContextProvider;
