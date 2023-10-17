import {toast} from 'react-toastify';
import {useEffect, useState} from 'react';

function useTaskValidation(tasks) {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      showErrorToast(errors);
    }
  }, [errors]);

  const showErrorToast = errorArr => {
    toast.error(errorArr.join('; '), {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const validateTask = taskText => {
    const newErrors = [];
    if (/\s+/.test(taskText)) {
      newErrors.push("Task can't be empty");
    }

    if (taskText.length > 40) {
      newErrors.push(
        `Task should have 40 characters or less. Current amount of characters: ${taskText.length}`,
      );
    }

    if (tasks.map(task => task.text).includes(taskText)) {
      newErrors.push(`Task "${taskText}" already exists`);
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return false;
    }

    setErrors([]);
    return true;
  };

  return validateTask;
}

export default useTaskValidation;
