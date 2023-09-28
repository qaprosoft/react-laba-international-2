enum ErrorMessages {
  emptyInput = "You can't add empty task",
  tooLongInput = 'Task is too long',
  duplicate = 'This task already exist',
}

enum Numbers {
  maxInputLength = 120,
}

enum TaskFields {
  value = 'value',
  done = 'done',
}

export default { ErrorMessages, Numbers, TaskFields };
