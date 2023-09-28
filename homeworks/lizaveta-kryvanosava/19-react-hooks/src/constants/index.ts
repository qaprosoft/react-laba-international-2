enum ErrorMessages {
  emptyInput = "You can't add empty task",
  tooLongInput = 'Task is too long',
  duplicate = 'This task already exist',
  unexpectedError = 'Something went wrong',
}
const maxInputLength = 120;

export default { ErrorMessages, maxInputLength };
