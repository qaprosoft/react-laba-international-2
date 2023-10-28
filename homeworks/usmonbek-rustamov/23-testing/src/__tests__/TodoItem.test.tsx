import renderer from 'react-test-renderer';
import {describe, expect, test} from 'vitest';

import TodoItem from '../components/TodoItem';

const todo = {
  id: '1',
  task: 'Sample Todo',
  isCompleted: false,
};

describe('TodoItem component', () => {
  test('TodoItem renders correctly', () => {
    const tree = renderer.create(<TodoItem todo={todo} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
