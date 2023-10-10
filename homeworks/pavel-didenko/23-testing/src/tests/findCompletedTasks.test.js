const findCompletedTask = require('../functions/findCompletedTasks');

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

const tasks2 = [
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
    completed: false,
  },
];


test('finds completed task, returns block', () => {
  expect(findCompletedTask(tasks1)).toBe('block');
});

test('finds completed task, returns none', () => {
  expect(findCompletedTask(tasks2)).toBe('none');
});
