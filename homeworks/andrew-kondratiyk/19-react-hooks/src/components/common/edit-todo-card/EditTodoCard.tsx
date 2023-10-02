'use client';

import {queryClient} from '@/context/Providers';
import {ServiceContext} from '@/context/TodoService';
import {
  TodoCreateRequest,
  TodoResponse,
  TodoUpdateRequest,
} from '@/types/todos';
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

  const {mutate: deleteTodo} = useMutation(['todos'], deleteById, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  const {mutate: createTodo} = useMutation(['todos'], create, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  const {mutate: updateTodo} = useMutation(['todos'], update, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

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
    onCancel?.();
  };

  return (
    <div className={styles.editTodoCard}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="What are you working on?"
        className={styles.input}
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
