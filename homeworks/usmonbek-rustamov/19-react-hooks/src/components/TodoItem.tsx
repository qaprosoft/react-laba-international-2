import {useEffect, useRef, useState} from 'react';
import {Todo} from '../common/types';
import {useTodos} from '../contexts/TodosContext';

import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg';
import completeIcon from '../assets/complete.svg';

interface Props {
  todo: Todo;
}

function TodoItem({todo}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {onEditTodo, onToggleTodo, onDeleteTodo} = useTodos();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!(isEditing && inputRef.current)) return;
    inputRef.current.focus();
  }, [isEditing]);

  const handleEdit = () => {
    if (!inputRef.current?.value) return;

    try {
      if (inputRef.current.value === todo.task) return;
      onEditTodo(todo.id, inputRef.current.value);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage((error as Error).message);
      inputRef.current.value = todo.task;
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <li className="todo">
      <div className="todo__container">
        <input
          className={`form-control ${
            todo.isCompleted ? 'text-line-through' : ''
          }`}
          ref={inputRef}
          disabled={!isEditing}
          defaultValue={todo.task}
          onBlur={handleEdit}
          onKeyUp={e => e.key === 'Enter' && handleEdit()}
        />

        <div className="todo__actions">
          <button className="btn btn-icon" onClick={() => setIsEditing(true)}>
            <img src={editIcon} alt="Edit task" />
          </button>
          <button
            className="btn btn-icon"
            onClick={() => onDeleteTodo(todo.id)}
          >
            <img src={deleteIcon} alt="Delete task" />
          </button>
          <button
            className={`btn btn-icon ${
              todo.isCompleted ? 'btn-icon_active' : ''
            }`}
            onClick={() => onToggleTodo(todo.id, !todo.isCompleted)}
          >
            <img src={completeIcon} alt="Complete task" />
          </button>
        </div>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </li>
  );
}
export default TodoItem;
