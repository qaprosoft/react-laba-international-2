import {useEffect, useReducer} from 'react';

export default function useReducerLocalStorage(
  key,
  reducer,
  defaultValue,
  initializer,
) {
  const [value, dispatchValue] = useReducer(reducer, defaultValue, initializer);

  useEffect(() => {
    const valueLS = window.localStorage.getItem(key);
    dispatchValue({type: 'init', value: valueLS ? JSON.parse(valueLS) : []});
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(value));
  }, [key, value]);

  return [value, dispatchValue];
}
