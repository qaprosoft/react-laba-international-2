import {useContext, useEffect} from 'react';
import {Context} from '../contexts/AppContext/AppContext';
import {ACTION_TYPES} from '../state/actionTypes';
import {localStorageKeys} from '../constants/constants';
import {INITIAL_STATE} from '../state/initialState';
import {saveDataToStorage} from '../utils/saveDataToStorage';

export const useApp = () => {
  const {state, dispatch, setErrorMessage, setIsNewTodoValid} =
    useContext(Context);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(localStorageKeys.TODOS))) {
      dispatch({
        type: ACTION_TYPES.SET_TODOS,
        payload: JSON.parse(localStorage.getItem(localStorageKeys.TODOS)),
      });
    }
  }, [dispatch]);

  useEffect(() => {
    if (state !== INITIAL_STATE) {
      localStorage.setItem(localStorageKeys.TODOS, JSON.stringify(state.todos));
      saveDataToStorage(state.todos);
    }
  }, [state]);
};
