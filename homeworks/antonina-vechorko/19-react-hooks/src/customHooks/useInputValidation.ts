import {useContext} from 'react';
import {TaskContext} from '../context/Context';
import {MAX_TASK_LENGTH} from '../constants/constants';

const useInputValidation = () => {
  const tasks = useContext(TaskContext);

  const validateInput = (newTaskText: string) => {
    if (newTaskText.length === 0) {
      return 'Please enter a to-do.';
    }

    if (newTaskText.length > MAX_TASK_LENGTH) {
      return 'Your to-do is longer than 35 characters.';
    }

    if (tasks.some(task => task.text === newTaskText)) {
      return 'This to-do already exists.';
    }

    return null;
  };

  return {validateInput};
};

export default useInputValidation;
