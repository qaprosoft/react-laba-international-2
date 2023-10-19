import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import AppContextProvider from './contexts/AppContext/AppContextProvider'
import { TESTTODOS } from './constants/testTodos';


const renderAppComponent = () => {
    render(
      <AppContextProvider>
        <App todos={TESTTODOS}/>
      </AppContextProvider>,
    );
  };
  
  beforeEach(renderAppComponent);


 describe('App Component', () => {
    it('is delete all completed todos button rendered', () => {
        const deleteAllCompletedBtn = screen.getByText("Delete completed");
        expect(deleteAllCompletedBtn).toBeTruthy();
    });
 });