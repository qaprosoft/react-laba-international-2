import {FormEvent, useState} from 'react';

interface Props {
  onAddTodo: (task: string) => void;
}

function CreateTaskForm({onAddTodo}: Props) {
  const [task, setTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!task) return;

    try {
      onAddTodo(task);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setTask('');
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="Create Todo"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
export default CreateTaskForm;
