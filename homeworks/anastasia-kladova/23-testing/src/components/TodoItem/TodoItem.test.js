import { render, fireEvent, screen } from '@testing-library/react';
import AppContextProvider from '../../contexts/AppContext/AppContextProvider';
import TodoItem from './TodoItem';
import { act } from 'react-dom/test-utils';
import TESTTODOS from '../../constants/testTodos';

const renderTodoItemComponent = () => {
    render(
      <AppContextProvider>
        <TodoItem todos={TESTTODOS}/>
      </AppContextProvider>,
    );
  };
  
  beforeEach(renderTodoItemComponent);


 describe('TodoItem Component', () => {
    it('should have checkbox input', () => {
        const checkboxInput = screen.getByRole("checkbox");
        expect(checkboxInput).toBeTruthy();
    });

    it('todoItem isCompleted should be falsy when checkbox is falsy', () => {
        const checkboxInput = screen.getByRole("checkbox");

        expect(checkboxInput.checked).toEqual(false);
        expect(TESTTODOS[0].isCompleted).toBeFalsy();
    });


    it('form edit should be shown after click on edit button', () => {
      async  () => {
        act(async () => {
            const btnEdit = await screen.getByRole('button', {name: /edit button/i});
    
            await fireEvent.click(btnEdit);
            const formEdit = screen.getByTestId("formEdit");
            expect(formEdit).toBeTruthy();
        });
    };
    });

    it('modal should be shown after click on delete button', () => {
        async  () => {
          act(async () => {
              const btnDelete = await screen.getByRole('button', {name: /delete button/i});
      
              await fireEvent.click(btnDelete);
              const modal = screen.getByTestId("modal");
              expect(modal).toBeTruthy();
          });
      };
      });
});