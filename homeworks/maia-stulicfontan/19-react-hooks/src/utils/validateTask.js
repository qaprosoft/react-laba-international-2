export default function validateTask(tasks, taskText) {
  if (taskText.length > 40) {
    throw new Error(
      `Task should have 40 characters or less\nCurrent amount of characters: ${taskText.length}`,
    );
  }
  if (tasks.map(task => task.text).includes(taskText)) {
    throw new Error('Task already exists');
  }
  return true;
}
