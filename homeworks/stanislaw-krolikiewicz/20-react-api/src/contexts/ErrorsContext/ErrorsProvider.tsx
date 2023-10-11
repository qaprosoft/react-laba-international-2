import {createContext, useState, useCallback, useMemo, useEffect} from 'react';

export const ErrorsContext = createContext({
  error: '',
  setError: (error: string) => {},
});

export const ErrorsProvider = ({children}: {children: React.ReactNode}) => {
  const [error, setError] = useState('');

  useEffect(() => {
    if (error !== '') {
      setTimeout(() => setError(''), 3000);
    }
  }, [error]);

  return (
    <ErrorsContext.Provider
      value={{
        error,
        setError,
      }}
    >
      {children}
    </ErrorsContext.Provider>
  );
};
