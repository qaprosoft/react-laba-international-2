import LoadingOverlay from '@/components/common/loading-overlay/LoadingOverlay';
import TodoCard from '@/components/common/todo-card/TodoCard';
import {ServiceContext} from '@/context/TodoService';
import {TodoResponse} from '@/types/todos';
import {useContext} from 'react';
import {useQuery} from 'react-query';
import {toast} from 'react-toastify';

const TodoList = () => {
  const {getAll} = useContext(ServiceContext);

  const {data: todos, isLoading} = useQuery(['todos'], getAll, {
    onError: () => {
      toast.error("Something went wrong, can't load todos");
    },
  });

  return (
    <>
      {isLoading && <LoadingOverlay />}
      {todos?.map((todo: TodoResponse) => (
        <TodoCard todo={todo} key={todo._id} />
      ))}
    </>
  );
};

export default TodoList;
