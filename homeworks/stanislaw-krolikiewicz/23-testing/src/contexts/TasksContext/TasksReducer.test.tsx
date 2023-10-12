import {test, expect} from '@jest/globals';
import TasksReducer from '@/contexts/TasksContext/TasksReducer';
import {ActionType} from '@/types';

test('Checking if reducer adds task to the list', () => {
  const payload = 'value';

  const tasks = TasksReducer([], {
    type: ActionType.ADD_TASK,
    payload,
  });

  expect(tasks.length).toStrictEqual(1);
  expect(tasks[tasks.length - 1]).toStrictEqual(payload);
});
