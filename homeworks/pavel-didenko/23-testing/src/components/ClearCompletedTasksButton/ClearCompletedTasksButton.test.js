import ClearCompletedTasksButton from './ClearCompletedTasksButton';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';

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

test('Button has text', () => {
  render(<ClearCompletedTasksButton tasks={tasks1} />);
  screen.getByText('Clear completed tasks');
});