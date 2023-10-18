export default function findCompletedTask(tasks) {
  let result = 'none';

  for (let task of tasks) {
    if (task.completed) {
      return 'block';
    }
  }

  return result;
}