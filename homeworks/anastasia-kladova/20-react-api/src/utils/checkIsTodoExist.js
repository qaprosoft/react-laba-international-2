const checkIsTodoExist = (text, todos) => {
  const isTodoExist = todos.some(todo => todo.text === text);
  return isTodoExist;
};

export default checkIsTodoExist;
