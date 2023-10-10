import EditTodoCard from './EditTodoCard';
import {renderWithClient} from '@/tests/utils';
import {screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

const mockTodo = {
  _id: '1',
  userId: '1',
  title: 'Test Todo',
  completed: false,
};

describe('EditTodoCard', () => {
  it('renders without crashing', async () => {
    renderWithClient(<EditTodoCard />);
    expect(
      screen.getByPlaceholderText('What are you working on?'),
    ).toBeInTheDocument();
  });

  it('renders with todo data', async () => {
    renderWithClient(<EditTodoCard todo={mockTodo} />);
    expect(screen.getByDisplayValue(mockTodo.title)).toBeInTheDocument();
  });

  it('calls onCancel callback when cancel button is clicked', () => {
    const onCancelMock = jest.fn();
    renderWithClient(<EditTodoCard onCancel={onCancelMock} />);

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(onCancelMock).toHaveBeenCalled();
  });
});
