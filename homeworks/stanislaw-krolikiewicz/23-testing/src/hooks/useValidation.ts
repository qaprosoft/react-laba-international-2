import { Task } from '@/types';

export default function useValidation(name: string, tasks: Task[], actualTask?: Task) {
  let error = '', valid = false;

  if (name !== '') {
    if (actualTask && name === actualTask.name) {
      error = "Task name hasn't changed";
    }
    else if (tasks.find(task => task.name === name)) {
      error = "Task already exists";
    } else if (name.length >= 15) {
      error = "Task name is too long. Max 15 characters."
    }
    else {
      valid = true;
    }
  } else {
    error = "Task name cannot be empty!"
  }

  return {
    valid,
    error
  }
}