import {State, Todo} from '../common/types';

export const checkTodoExist = (todos: Todo[], target: string) => {
  const existTodo = todos.find(todo => todo.task === target);
  if (existTodo) throw new Error('Todo already exist');
};

export const updateSingleTodo = (
  todos: Todo[],
  id: string,
  props: Partial<Todo>,
) => {
  return todos.map(todo => {
    if (todo.id === id) {
      return {...todo, ...props};
    }
    return todo;
  });
};

export function checkErrors<T, A>(
  reducer: (state: State<T>, action: A) => State<T>,
  currentState: State<T>,
  currentAction: A,
) {
  const nextState = reducer(currentState, currentAction);
  if (nextState.error) {
    throw new Error(nextState.error);
  }
}
