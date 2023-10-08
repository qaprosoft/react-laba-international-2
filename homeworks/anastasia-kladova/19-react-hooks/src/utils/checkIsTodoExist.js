const checkIsTodoExist = (text, todos) => {
  return todos.some(todo => todo.text === text);
};

export default checkIsTodoExist;
