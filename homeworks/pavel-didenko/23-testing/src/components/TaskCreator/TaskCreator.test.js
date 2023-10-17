import renderer from 'react-test-renderer';
import TaskCreator from './TaskCreator';

it('renders correctly', () => {
  const tree = renderer.create(<TaskCreator />).toJSON();
  expect(tree).toMatchSnapshot();
});
