export default function validateDublicatedTask(task, state) {
  let result = true;

  for (let item of state) {
    if (item.taskText === task) {
      return false;
    }
  }

  return result;
}
