import {fireEvent, queryByTestId, render, screen} from '@testing-library/react';
import ToDoItem from './ToDoItem';

const defaultProps = {
  value: 'Default value',
  completed: false,
};

beforeEach(() => {
  render(<ToDoItem toDo={defaultProps} />);
});

describe('ToDoItem component', () => {
  test('should check Input Edit component is not rendered while edit button is not clicked', () => {
    const editBtn = screen.queryByTestId('edit-btn');
    expect(screen.queryByTestId('edit-input')).toBeNull();
    fireEvent.click(editBtn);
    expect(screen.queryByTestId('edit-input')).toBeInTheDocument();
  });

  test('should check Edit Save button is not rendered while Edit button is not clicked', () => {
    const editBtn = screen.queryByTestId('edit-btn');
    expect(screen.queryByTestId('edit-save-btn')).toBeNull();
    fireEvent.click(editBtn);
    expect(screen.queryByTestId('edit-save-btn')).toBeInTheDocument();
  });
});
