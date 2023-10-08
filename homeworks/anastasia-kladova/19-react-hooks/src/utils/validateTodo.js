import {TODOLENGHLIMIT} from '../constants/constants';
import checkIsTodoExist from './checkIsTodoExist';

export const validateTodo = todo => {
  let errorMessage;
  if (!todo) {
    errorMessage = 'There is no todo. Please, type something!';
  } else if (checkIsTodoExist) {
    errorMessage = 'Such a todo already exists. Please, create a new one!';
  } else if (todo.length > TODOLENGHLIMIT) {
    errorMessage =
      'Your todo should have maximum 20 characters. Please, create a new one!';
  } else {
    errorMessage = '';
  }

  return errorMessage;
};
