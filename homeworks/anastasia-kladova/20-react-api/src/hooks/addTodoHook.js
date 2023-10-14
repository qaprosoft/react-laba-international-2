import {useContext} from 'react';
import {useValidateTodo} from './validateTodoHook';
import {Context} from '../contexts/AppContext/AppContext';
import {ACTION_TYPES} from '../state/actionTypes';

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

  const newTodo = currentInputText.trim();
  const {currentError} = useValidateTodo(newTodo, state.todos);

  const addNewTodo = e => {
    e.preventDefault();

    if (!currentError) {
      dispatch({type: ACTION_TYPES.ADD_NEWTODO, payload: {newTodo: newTodo}});
      setCurrentInputText('');
      inputRef.current.focus();
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
