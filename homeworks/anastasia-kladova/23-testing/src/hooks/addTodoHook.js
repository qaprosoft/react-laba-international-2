import {useContext} from 'react';
import {Context} from '../contexts/AppContext/AppContext';
import {ACTION_TYPES} from '../state/actionTypes';
import {validateTodo} from '../utils/validateTodo';

export const useAddTodo = () => {
  const {
    state,
    dispatch,
    currentInputText,
    setCurrentInputText,
    setErrorMessage,
    inputRef,
    setIsNewTodoValid,
  } = useContext(Context);

  const addNewTodo = e => {
    e.preventDefault();

    const newTodo = currentInputText.trim();
    let currentError = validateTodo(newTodo, state.todos);

    if (!currentError) {
      dispatch({type: ACTION_TYPES.ADD_NEWTODO, payload: {newTodo: newTodo}});
      setCurrentInputText('');
      // inputRef.current.focus();
      setIsNewTodoValid(false);
      setErrorMessage('');
    } else {
      setIsNewTodoValid(true);
      setErrorMessage(currentError);
      setCurrentInputText('');
    }
  };

  return {addNewTodo};
};
