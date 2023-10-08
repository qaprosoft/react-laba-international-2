import TodoCard from '@/components/common/todo-card/TodoCard';
import {TodoContext, TodoResponse} from '@/context/TodoContext';
import {useContext, useMemo} from 'react';

const TodoList = () => {
  const {todos} = useContext(TodoContext);

  return (
    <>
      {useMemo(
        () =>
          todos?.map((todo: TodoResponse) => (
            <TodoCard todo={todo} key={todo.id} />
          )),
        [todos],
      )}
    </>
  );
};

export default TodoList;
