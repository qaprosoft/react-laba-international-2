import {useEffect, useRef, useState} from 'react';
import {Todo} from '../common/types';

import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg';
import completeIcon from '../assets/complete.svg';

interface Props {
  todo: Todo;
  onEdit: (id: string, task: string) => void;
  onToggle: (id: string, isCompleted: boolean) => void;
  onDelete: (id: string) => void;
}

function TodoItem({todo, onEdit, onDelete, onToggle}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!(isEditing && inputRef.current)) return;
    inputRef.current.focus();
  }, [isEditing]);

  const handleEdit = () => {
    if (!inputRef.current?.value) return;

    try {
      onEdit(todo.id, inputRef.current.value);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <li className="todo">
      <div className="todo__edit">
        <input
          ref={inputRef}
          disabled={!isEditing}
          defaultValue={todo.task}
          onBlur={handleEdit}
          onKeyUp={e => e.key === 'Enter' && handleEdit()}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <div className="todo__actions">
        <button className="btn btn-icon" onClick={() => setIsEditing(true)}>
          <img src={editIcon} alt="Edit task" />
        </button>
        <button className="btn btn-icon" onClick={() => onDelete(todo.id)}>
          <img src={deleteIcon} alt="Delete task" />
        </button>
        <button
          style={{background: todo.isCompleted ? 'green' : 'transparent'}}
          className="btn btn-icon"
          onClick={() => onToggle(todo.id, !todo.isCompleted)}
        >
          <img src={completeIcon} alt="Complete task" />
        </button>
      </div>
    </li>
  );
}
export default TodoItem;
