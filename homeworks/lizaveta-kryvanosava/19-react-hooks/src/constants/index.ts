enum ErrorMessages {
  emptyInput = "You can't add empty task",
  tooLongInput = 'Task is too long',
  duplicate = 'This task already exist',
  unexpectedError = 'Something went wrong',
}

enum Numbers {
  maxInputLength = 120,
}

enum TaskFields {
  value = 'value',
  done = 'done',
  __id = 'id',
}

export default { ErrorMessages, Numbers, TaskFields };
