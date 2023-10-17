import IconButton from "./IconButton";
import renderer from 'react-test-renderer';
import buttonImage from '../../assets/img/icons/task-incomplete.svg';
import {render, screen} from '@testing-library/react';

const altText = 'Complete icon';

it('renders correctly', () => {
  const tree = renderer
    .create(<IconButton src={buttonImage} alt={'Complete icon'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Has image', () => {
  render(<IconButton src={buttonImage} alt={altText} />);
  const img = screen.getByAltText(altText);
  expect(img.getAttribute("src")).toMatch(buttonImage);
});