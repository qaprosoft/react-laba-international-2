import {FormEvent, useCallback} from 'react';
import {useTodos} from '../contexts/TodosContext';
import useTodoValidation from '../hooks/useTodoValidation';
import minMaxCharacters from '../utils/minMaxCharacters';

function CreateTaskForm() {
  const todoValidator = useCallback(
    (text: string) => minMaxCharacters(3, 40)(text),
    [],
  );
  const {task, errorMessage, setTask, setErrorMessage} = useTodoValidation(
    todoValidator,
    '',
  );

  const {onAddTodo} = useTodos();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!task || errorMessage) return;

    try {
      onAddTodo(task);
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="form-control"
          aria-label="Create Todo"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <input type="submit" className="btn btn-primary" value="Add" />
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
export default CreateTaskForm;
