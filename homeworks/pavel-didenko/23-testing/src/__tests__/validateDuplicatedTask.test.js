import validateDuplicatedTask from "../functions/validateDuplicatedTask";
import { tasks2 } from "../testVariables/tasks";

test('Validate duplicated task, true', () => {
  expect(validateDuplicatedTask('someTask4', tasks2)).toBe(true);
});

test('Validate duplicated task, false', () => {
  expect(validateDuplicatedTask('someTask3', tasks2)).toBe(false);
});

test('Not Duplicated, true', () => {
  expect(validateDuplicatedTask('MyTask', tasks2)).toBe(true);
});
