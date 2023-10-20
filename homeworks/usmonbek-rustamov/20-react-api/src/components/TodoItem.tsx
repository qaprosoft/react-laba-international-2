import {useEffect, useRef, useState, useCallback} from 'react';
import {Todo} from '../common/types';
import {useTodos} from '../contexts/TodosContext';

import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg';
import completeIcon from '../assets/complete.svg';
import minMaxCharacters from '../utils/minMaxCharacters';
import useTodoValidation from '../hooks/useTodoValidation';

interface Props {
  todo: Todo;
}

function TodoItem({todo}: Props) {
  const {onEditTodo, onToggleTodo, onDeleteTodo} = useTodos();

  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const todoValidator = useCallback(
    (text: string) => minMaxCharacters(3, 40)(text),
    [],
  );
  const {task, errorMessage, setTask, setErrorMessage} = useTodoValidation(
    todoValidator,
    todo.task,
  );

  useEffect(() => {
    if (!(isEditing && inputRef.current)) return;
    inputRef.current.focus();
  }, [isEditing]);

  const handleEdit = () => {
    if (!task || errorMessage) return;

    try {
      if (task === todo.task) return;
      onEditTodo(todo.id, task);
      setIsEditing(false);
    } catch (error) {
      setErrorMessage((error as Error).message);
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
          value={task}
          onBlur={handleEdit}
          onKeyUp={e => e.key === 'Enter' && handleEdit()}
          onChange={e => setTask(e.target.value)}
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
