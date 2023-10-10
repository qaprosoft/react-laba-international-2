const validateDuplicatedTask = require('../functions/validateDuplicatedTask');

const tasks1 = [
  {
    id: 1,
    taskText: 'someTask1',
    completed: false,
  },
  {
    id: 2,
    taskText: 'someTask2',
    completed: false,
  },
  {
    id: 3,
    taskText: 'someTask3',
    completed: true,
  },
];

test('Validate duplicated task, true', () => {
  expect(validateDuplicatedTask('someTask4', tasks1)).toBe(true);
});

test('Validate duplicated task, false', () => {
  expect(validateDuplicatedTask('someTask3', tasks1)).toBe(false);
});

test('Not Duplicated, true', () => {
  expect(validateDuplicatedTask('MyTask', tasks1)).toBe(true);
});
