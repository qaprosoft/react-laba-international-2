import renderer from 'react-test-renderer';
import {describe, expect, test} from 'vitest';

import CreateTaskForm from '../components/CreateTaskForm';

describe('CreateTaskForm component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<CreateTaskForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should show error', () => {
    const component = renderer.create(<CreateTaskForm />);
    const root = component.root;

    const errorEl = root.findByProps({className: 'error-message'});
    expect(errorEl).not.toBeNull();
  });

  test('should not show error', () => {
    const component = renderer.create(<CreateTaskForm />);
    const root = component.root;

    const input = root.findByProps({className: 'form-control'});
    input.props.onChange({target: {value: 'Test Todo'}});
    component.update(<CreateTaskForm />);

    const errorElements = root.findAllByProps({className: 'error-message'});
    expect(errorElements.length).toBe(0);
  });
});
