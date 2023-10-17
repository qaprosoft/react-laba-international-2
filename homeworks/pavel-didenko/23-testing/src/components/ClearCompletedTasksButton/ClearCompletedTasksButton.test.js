import ClearCompletedTasksButton from './ClearCompletedTasksButton';
import renderer from 'react-test-renderer';

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
    completed: false,
  },
  {
    id: 4,
    taskText: 'someTask4',
    completed: true,
  },
];

it('renders correctly', () => {
  const tree = renderer
    .create(<ClearCompletedTasksButton tasks={tasks1} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
