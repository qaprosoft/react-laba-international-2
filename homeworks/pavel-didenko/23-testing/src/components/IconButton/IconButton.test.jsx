import IconButton from "./IconButton";
import renderer from 'react-test-renderer';
import buttonImage from '../../assets/img/icons/task-incomplete.svg';
import {render, screen} from '@testing-library/react';



it('renders correctly', () => {
  const tree = renderer.create(<IconButton src={buttonImage} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Has image', () => {
  render(<IconButton src={buttonImage} />);
  const img = screen.getByTestId('task-icon');
  expect(img.getAttribute("src")).toMatch(buttonImage);
});