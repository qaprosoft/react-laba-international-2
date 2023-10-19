import { fireEvent, render, screen } from '@testing-library/react';
import Input from "./Input";
import AppContextProvider from '../../contexts/AppContext/AppContextProvider';
import { act } from 'react-dom/test-utils';

const renderInputComponent = () => {
    render(
      <AppContextProvider>
        <Input />
      </AppContextProvider>,
    );
  };

  beforeEach(renderInputComponent);

 describe('Input Component', () => {
    it('is input rendered', () => {
        const input = screen.getByTestId('input');
        expect(input).toBeTruthy();
    });

    it('check on input change event',async () => {
        await act(async () => {
           const input = screen.getByTestId("input");
           const inputTestWord = "Apple";

           await fireEvent.change(input, {target: {value: inputTestWord}});
          expect(input.value).toBe(inputTestWord);
        });
    });
 });