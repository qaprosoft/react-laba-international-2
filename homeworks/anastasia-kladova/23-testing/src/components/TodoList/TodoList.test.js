import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TodoList from './TodoList';
import AppContextProvider from '../../contexts/AppContext/AppContextProvider';


 describe('TodoList Component', () => {
    it('is no todo text show when todos array is empty', () => {
        render(<AppContextProvider>
                <TodoList todos={[]}/>
               </AppContextProvider>);
        const noTodoList = screen.getByTestId("noTodoList");
        expect(noTodoList).toBeTruthy();
    });
 });