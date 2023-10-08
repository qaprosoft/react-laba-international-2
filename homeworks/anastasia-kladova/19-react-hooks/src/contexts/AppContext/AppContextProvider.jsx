import {useState} from 'react';
import {Context} from './AppContext';

const AppContextProvider = ({children}) => {
  const [todos, setTodos] = useState([]);
  const [currentInputText, setCurrentInputText] = useState('');
  return (
    <Context.Provider
      value={{todos, setTodos, currentInputText, setCurrentInputText}}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContextProvider;
