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

const inputValidationReqEx = /[#^&*\-\[\]{};\\|<>\/~]/;

const constants = { ErrorMessages, Numbers, TaskFields, inputValidationReqEx };

export default constants;
