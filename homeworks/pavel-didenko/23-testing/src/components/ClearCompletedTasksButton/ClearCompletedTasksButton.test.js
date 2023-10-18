import ClearCompletedTasksButton from './ClearCompletedTasksButton';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import { tasks1 } from '../../testVariables/tasks';

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