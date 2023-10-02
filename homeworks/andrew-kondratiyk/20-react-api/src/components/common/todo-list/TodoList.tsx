import TodoCard from '@/components/common/todo-card/TodoCard';
import {TodoContext} from '@/context/TodoContext';
import {TodoResponse} from '@/types/todos';
import {useContext} from 'react';

const TodoList = () => {
  const {todos} = useContext(TodoContext);

  return (
    <>
      {todos?.map((todo: TodoResponse) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default TodoList;
