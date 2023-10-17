import findCompletedTask from "../functions/findCompletedTasks.js";
import { tasks1, tasks2 } from "../testVariables/tasks.js";


test('finds completed task, returns block', () => {
  expect(findCompletedTask(tasks1)).toBe('block');
});

test('finds completed task, returns none', () => {
  expect(findCompletedTask(tasks2)).toBe('none');
});
