import {Todo} from '../common/types';

export const checkTodoExist = (todos: Todo[], target: string) => {
  const existTodo = todos.find(todo => todo.task === target);
  if (existTodo) throw new Error('Todo already exist');
};
