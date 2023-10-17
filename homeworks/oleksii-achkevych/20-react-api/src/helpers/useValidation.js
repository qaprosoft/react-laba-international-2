import {useState} from 'react';

const MAX_TODO_LENGTH = 30;

const useToDoValidation = initialToDos => {
  const [error, setError] = useState();

  const validateInput = (value, toDos) => {
    if (value.trim() === '') {
      const errorMessage = 'To-do name cannot be empty';
      setError(errorMessage);
      console.log(errorMessage);
      return false;
    }

    if (value.length > MAX_TODO_LENGTH) {
      const errorMessage = 'To-do name exceeds the maximum length';
      setError(errorMessage);
      console.log(errorMessage);
      return false;
    }

    if (toDos.some(todo => todo.text === value)) {
      const errorMessage = 'Duplicate to-do item';
      setError(errorMessage);
      console.log(errorMessage);
      return false;
    }

    return true;
  };

  const clearError = () => {
    setError(null);
  };

  return {error, setError, validateInput, clearError};
};

export default useToDoValidation;
