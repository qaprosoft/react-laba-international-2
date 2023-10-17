import {renderWithClient} from '@/tests/utils';
import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoCard from './TodoCard';
import '@testing-library/jest-dom';

const mockTodo = {
  _id: '1',
  userId: '1',
  title: 'Test Todo',
  completed: false,
};

describe('TodoCard', () => {
  it('renders TodoCard with correct title and not completed', () => {
    renderWithClient(<TodoCard todo={mockTodo} />);

    const todoCard = screen.getByTestId('todo-card');
    const titleElement = screen.getByText('Test Todo');
    const editButton = screen.getByText('Edit');

    expect(todoCard).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
  });

  it('renders EditTodoCard when isEdit is true', async () => {
    renderWithClient(<TodoCard todo={mockTodo} />);

    const editButton = screen.getByText('Edit');
    await userEvent.click(editButton);

    await waitFor(() => {
      const editTodoCard = screen.getByTestId('edit-todo-card');
      expect(editTodoCard).toBeInTheDocument();
    });
  });
});
