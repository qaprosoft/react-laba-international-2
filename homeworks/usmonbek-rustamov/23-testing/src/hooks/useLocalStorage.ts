import {useEffect, useReducer} from 'react';
import {State} from '../common/types';

function useLocalStorage<T, A>(
  key: string,
  initialState: State<T>,
  reducer: (state: State<T>, action: A) => State<T>,
) {
  const [state, dispatch] = useReducer(reducer, initialState, arg => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue == null) return arg;
    return {
      data: JSON.parse(jsonValue),
      error: '',
    };
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state.data));
  }, [key, state.data]);

  return [state, dispatch] as [typeof state, typeof dispatch];
}

export default useLocalStorage;
