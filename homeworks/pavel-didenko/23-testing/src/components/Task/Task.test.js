import renderer from 'react-test-renderer';
import Task from './Task';

it('renders correctly', () => {
  const tree = renderer.create(<Task />).toJSON();
  expect(tree).toMatchSnapshot();
});
