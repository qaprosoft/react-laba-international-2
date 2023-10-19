import {Todo} from '../common/types';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  onEdit: (id: string, task: string) => void;
  onToggle: (id: string, isCompleted: boolean) => void;
  onDelete: (id: string) => void;
}

function TodoList({todos, onEdit, onToggle, onDelete}: Props) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
export default TodoList;
