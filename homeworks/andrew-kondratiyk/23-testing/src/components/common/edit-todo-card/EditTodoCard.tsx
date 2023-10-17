'use client';

import LoadingOverlay from '@/components/common/loading-overlay/LoadingOverlay';
import {queryClient} from '@/context/Providers';
import {ServiceContext} from '@/context/TodoService';
import {TodoResponse} from '@/types/todos';
import {useContext, useState} from 'react';
import {useMutation} from 'react-query';

import styles from './EditTodoCard.module.css';

type EditTodoCardProps = {
  todo?: TodoResponse;
  onCancel?: () => void;
};
const EditTodoCard = ({todo, onCancel}: EditTodoCardProps) => {
  const {deleteById, create, update} = useContext(ServiceContext);
  const [inputValue, setInputValue] = useState(todo?.title || '');

  const handleSuccess = async () => {
    onCancel?.();
    await queryClient.invalidateQueries({queryKey: ['todos']});
  };

  const {mutate: deleteTodo, isLoading: deleteLoading} = useMutation(
    ['todos'],
    deleteById,
    {
      onSuccess: handleSuccess,
    },
  );

  const {mutate: createTodo, isLoading: createLoading} = useMutation(
    ['todos'],
    create,
    {
      onSuccess: handleSuccess,
    },
  );

  const {mutate: updateTodo, isLoading: updateLoading} = useMutation(
    ['todos'],
    update,
    {
      onSuccess: handleSuccess,
    },
  );

  const handleSave = () => {
    if (!inputValue) return;
    if (todo) {
      updateTodo({
        id: todo._id,
        todo: {
          title: inputValue,
          completed: todo.completed,
        },
      });
    } else {
      createTodo({title: inputValue});
    }
  };

  return (
    <div data-testid="edit-todo-card" className={styles.editTodoCard}>
      {(deleteLoading || createLoading || updateLoading) && <LoadingOverlay />}
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="What are you working on?"
        className={styles.input}
        autoFocus
        onKeyDown={e => e.code === 'Enter' && handleSave()}
      />
      <div className={styles.footer}>
        {todo ? (
          <button
            onClick={() => deleteTodo(todo._id)}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        ) : (
          <div></div>
        )}
        <div className={styles.right}>
          <button onClick={onCancel} className={styles.cancelBtn}>
            Cancel
          </button>
          <button onClick={handleSave} className={styles.saveBtn}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoCard;
