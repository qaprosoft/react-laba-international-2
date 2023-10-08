import {Context} from './AppContext';

const AppContextProvider = ({children}) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export default AppContextProvider;
