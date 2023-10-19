import {Todo} from '../common/types';

interface Props {
  todo: Todo;
}

function TodoItem({todo}: Props) {
  return (
    <li>
      <p>{todo.task}</p>
    </li>
  );
}
export default TodoItem;
