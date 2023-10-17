import renderer from 'react-test-renderer';
import App from './App';
import {render, screen} from '@testing-library/react';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Has task length warning message', () => {
  render(<App />);
  screen.getByText('Task length must be from 0 to 33 characters');
});