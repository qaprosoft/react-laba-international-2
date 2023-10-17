import {useState, useMemo} from 'react';
import validateDublicatedTask from '../functions/validateDublicatedTasks';

export default function useTaskCreationValidator(
  minLength,
  maxLength,
  taskText,
  state,
) {
  const [taskExists, setTaskExists] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const result = useMemo(() => {
    let result = false;


    const taskLength = taskText.length;
    if (!validateDublicatedTask(taskText, state)) {
      setTaskExists(true);
      setOpacity(1);
      return {taskExists, opacity, result};
    }
    if (taskLength >= minLength && taskLength <= maxLength) {
      result = true;
      if (opacity === 1) {
        setOpacity(0);
      }
    } else {
      setTaskExists(false);
      setOpacity(1);
    }

    return {taskExists, opacity, result};
  }, [taskText, minLength, maxLength, opacity, taskExists, state]);

  return result;
}
