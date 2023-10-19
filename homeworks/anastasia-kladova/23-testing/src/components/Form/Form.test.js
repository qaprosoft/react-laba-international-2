import { render, fireEvent, screen } from '@testing-library/react';
import Form from './Form';
import AppContextProvider from '../../contexts/AppContext/AppContextProvider';

const renderFormComponent = () => {
    render(
      <AppContextProvider>
        <Form />
      </AppContextProvider>,
    );
  };
  
  beforeEach(renderFormComponent);

 describe('Form Component', () => {
    it('is form component rendered', () => {
        const form = screen.getByTestId("form");
        expect(form).toBeTruthy();
    });

    it('form should have add button', () => {
        const button = screen.getByText(/Add/i);
        expect(button).toBeTruthy();
    });

    it('check on input change event', () => {
        const input = screen.getByTestId("input");
        const testValue = "Apple";

        fireEvent.change(input, {target: {value: testValue}});
        expect(input.value).toBe(testValue);
    });

    it('check on add button click', () => {
        const input = screen.getByTestId("input");
        const button = screen.getByText(/Add/i);

        fireEvent.click(button);
        expect(input.value).toBe("");
    });

    it('is input focused after the addition of a new todo', () => {
        const input = screen.getByTestId("input");
        const button = screen.getByText(/Add/i);

        fireEvent.click(button);
        expect(input.focus);
    });

 });