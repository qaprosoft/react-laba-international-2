import {Todo} from '../common/types';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
}

function TodoList({todos}: Props) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
export default TodoList;
