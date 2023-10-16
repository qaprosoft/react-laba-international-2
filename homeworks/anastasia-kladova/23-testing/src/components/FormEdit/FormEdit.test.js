import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import FormEdit from './FormEdit';

 describe('FormEdit Component', () => {
    it('is formEdit rendered', () => {
        const {getByTestId} = render(<FormEdit />);
        const form = getByTestId("formEdit");
        expect(form).toBeTruthy();
    });

    it('should have submit button', () => {
        const {getByTestId} = render(<FormEdit />);
        const btnSubmit = getByTestId("btnSubmit");
        expect(btnSubmit).toBeInTheDocument();
    });

    it('should have input', () => {
        const {getByTestId} = render(<FormEdit />);
        const input = getByTestId("input")
        expect(input).toBeInTheDocument();
    });

    it('check on input change event', () => {
        const {getByTestId} = render(<FormEdit />);
        const input = getByTestId("input");
        const testValue = "Apple";

        fireEvent.change(input, {target: {value: testValue}});
        expect(input.value).toBe(testValue);
    });


 });