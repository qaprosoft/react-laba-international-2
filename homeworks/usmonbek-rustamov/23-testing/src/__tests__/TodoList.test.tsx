import renderer from 'react-test-renderer';
import {afterEach, beforeEach, describe, expect, test} from 'vitest';

import TodoList from '../components/TodoList';
import {TodosProvider} from '../contexts/TodosContext';

const sampleTodo = {
  id: '1',
  task: 'sample todo',
  isCompleted: false,
};

describe('TodoList component', () => {
  beforeEach(() => {
    localStorage.setItem('todo-app.todos', JSON.stringify([sampleTodo]));
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('should render todos in localStorage', () => {
    const tree = renderer
      .create(
        <TodosProvider>
          <TodoList />
        </TodosProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
