import {useEffect, useReducer, useState} from 'react';

const initializer = () => {
  return JSON.parse(localStorage.getItem('tasks') || []);
};

export const useLocalStorageReducer = (reducer, initialState) => {
  const [tasks, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return [tasks, dispatch];
};
