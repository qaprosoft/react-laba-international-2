export default function validateDuplicatedTask(task, tasks) {
  let result = true;

  for (let item of tasks) {
    if (item.taskText === task) {
      return false;
    }
  }

  return result;
}
