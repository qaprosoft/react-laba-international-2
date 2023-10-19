import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import AppContextProvider from '../../contexts/AppContext/AppContextProvider';


 describe('TodoList Component', () => {
    it('is no todo text show when todos array is empty', () => {
        render(<AppContextProvider>
                <TodoList todos={[]}/>
               </AppContextProvider>);
        const noTodoText= screen.getByTestId("noTodoText");
        expect(noTodoText).toBeTruthy();
    });
 });