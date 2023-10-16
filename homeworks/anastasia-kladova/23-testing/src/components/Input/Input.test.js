import { render, fireEvent, screen } from '@testing-library/react';
import Input from "./Input";
import { act } from 'react-dom/test-utils';

 describe('Input Component', () => {
    it('is input rendered', () => {
        const {getByTestId} = render(<Input />);
        const input = getByTestId('input');
        expect(input).toBeTruthy();
    });

    // it('check on input change event',async () => {
    //     await act(async () => {
    //        const {queryByTestId, getByTestId} = render(<Input />);
    //        const input = screen.getByTestId("input");
    //     //    const input = getByTestId ("input");
    //        const todoItemText = screen.queryByTestId("todoText");
    //        const inputTestWord = "Apple";

    //        await fireEvent.change(input, {target: {value: inputTestWord}});
    //       expect(todoItemText.innerHTML).toBe(inputTestWord);
    //     });
    // });
 });