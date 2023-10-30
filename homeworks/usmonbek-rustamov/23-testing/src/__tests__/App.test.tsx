import renderer from 'react-test-renderer';
import {describe, expect, test} from 'vitest';

import App from '../App';

describe('App component', () => {
  test('should render correct', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
