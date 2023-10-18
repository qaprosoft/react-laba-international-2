import renderer from 'react-test-renderer';
import App from './App';
import {render, screen, fireEvent} from '@testing-library/react';
import {tasks1} from './testVariables/tasks';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Has task length warning message', () => {
  render(<App />);
  screen.getByText('Task length must be from 0 to 33 characters');
});

test('Renders tasks from localStorage', () => {
  localStorage.setItem('tasks', JSON.stringify(tasks1));
  render(<App />);
  screen.getByDisplayValue('someTask1');
  screen.getByDisplayValue('someTask2');
  screen.getByDisplayValue('someTask3');
  screen.getByDisplayValue('someTask4');
  localStorage.clear();
});