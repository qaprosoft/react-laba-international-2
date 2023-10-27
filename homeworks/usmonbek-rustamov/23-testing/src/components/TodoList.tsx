import {useTodos} from '../contexts/TodosContext';
import TodoItem from './TodoItem';

function TodoList() {
  const {todos} = useTodos();

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
export default TodoList;
