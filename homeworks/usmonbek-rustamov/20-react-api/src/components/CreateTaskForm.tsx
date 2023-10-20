import {FormEvent, useState} from 'react';
import {useTodos} from '../contexts/TodosContext';

function CreateTaskForm() {
  const [task, setTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {onAddTodo} = useTodos();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!task) return;

    try {
      setErrorMessage('');
      onAddTodo(task);
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setTask('');
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
