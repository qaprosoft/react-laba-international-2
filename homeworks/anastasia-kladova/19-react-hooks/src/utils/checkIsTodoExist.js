const checkIsTodoExist = (todos, text) => {
  return todos.some(todo => todo.text === text);
};

export default checkIsTodoExist;
