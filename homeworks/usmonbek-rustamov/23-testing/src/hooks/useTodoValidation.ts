import {useState, useEffect} from 'react';

const useTodoValidation = (
  validateTodo: (task: string) => void,
  initialValue: string,
) => {
  const [task, setTask] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    try {
      validateTodo(task);
    } catch (error) {
      setErrorMessage((error as Error).message);
    }

    return () => setErrorMessage('');
  }, [task, validateTodo]);

  return {task, errorMessage, setTask, setErrorMessage};
};

export default useTodoValidation;
