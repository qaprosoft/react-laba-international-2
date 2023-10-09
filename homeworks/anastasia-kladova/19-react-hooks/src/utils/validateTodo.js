import {TODOLENGTHLIMIT} from '../constants/constants';
import checkIsTodoExist from './checkIsTodoExist';

export const validateTodo = (text, todos, todoToEdit) => {
  let errorMessage;
  const isTodoExist = checkIsTodoExist(text, todos);

  if (!text) {
    errorMessage = 'There is no todo. Please, type something!';
  } else if (isTodoExist && !todoToEdit) {
    errorMessage = 'Such a todo already exists. Please, create a new one!';
  } else if (text.length > TODOLENGTHLIMIT) {
    errorMessage =
      'Your todo should have maximum 20 characters. Please, create a new one!';
  } else {
    errorMessage = '';
  }

  return errorMessage;
};
