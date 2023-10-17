import IconButton from "./IconButton";
import renderer from 'react-test-renderer';
import buttonImage from '../../assets/img/icons/task-incomplete.svg'



it('renders correctly', () => {
  const tree = renderer.create(<IconButton src={buttonImage} />).toJSON();
  expect(tree).toMatchSnapshot();
});
