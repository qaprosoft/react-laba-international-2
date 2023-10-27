import { render, fireEvent } from '@testing-library/react';
import AddTodoBtn from './AddTodoBtn';

// Mock React methods
jest.mock('react', () => {
    const originalModule = jest.requireActual('react');
    return {
        ...originalModule,
        useEffect: originalModule.useEffect,
    };
});

describe('AddTodoBtn', () => {
    it('should call the addTodo function when the button is clicked', () => {
        const addTodo = jest.fn();
        const { getByText } = render(<AddTodoBtn addTodo={addTodo} />);
        const addButton = getByText('Add');

        fireEvent.click(addButton);

        expect(addTodo).toHaveBeenCalled();
    });
});
