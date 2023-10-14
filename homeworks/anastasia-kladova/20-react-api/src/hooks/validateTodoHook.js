import {TODOLENGTHLIMIT} from '../constants/constants';
import useCheckIsTodoExist from './checkIsTodoExistHook';

export const useValidateTodo = (text, todos, todoToEdit) => {
  let currentError;
  const {isTodoExist} = useCheckIsTodoExist(text, todos);

  if (!text) {
    currentError = 'There is no todo. Please, type something!';
  } else if (isTodoExist && !todoToEdit) {
    currentError = 'Such a todo already exists. Please, create a new one!';
  } else if (text.length > TODOLENGTHLIMIT) {
    currentError =
      'Your todo should have maximum 20 characters. Please, create a new one!';
  } else {
    currentError = '';
  }

  return {currentError};
};
