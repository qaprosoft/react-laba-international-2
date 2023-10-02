enum ErrorMessages {
  emptyInput = "You can't add empty task",
  tooLongInput = 'Task is too long',
  duplicate = 'This task already exist',
  invalidInput = 'Do not use forbidden symbols',
}

enum Numbers {
  maxInputLength = 40,
}

enum TaskFields {
  value = 'value',
  done = 'done',
}
enum Actions {
  SET_TODOS = 'SET_TODOS',
  ADD_TODO_ITEM = 'ADD_TODO_ITEM',
  REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM',
  EDIT_TODO_ITEM = 'EDIT_TODO_ITEM',
  TOGGLE_DONE = 'TOGGLE_DONE',
  SET_EDIT_MODE = 'SET_EDIT_MODE',
}

const inputValidationReqEx = /[#^&*\-\[\]{};\\|<>\/~]/;

const constants = {
  ErrorMessages,
  Numbers,
  TaskFields,
  Actions,
  inputValidationReqEx,
};

export default constants;
