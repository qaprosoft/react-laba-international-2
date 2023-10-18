import renderer from 'react-test-renderer';
import TaskCreator from './TaskCreator';
import {render, screen} from '@testing-library/react';

it('renders correctly', () => {
  const tree = renderer.create(<TaskCreator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('has placeholder', () => {
  render(<TaskCreator />);
  screen.getByPlaceholderText('Create-Todo-Task');
})
