import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import AddButton from './AddButton';

 describe('Add Button Component', () => {
    it('is add button rendered', () => {
        const {getByTestId} = render(<AddButton />);
        const addBtn = getByTestId("addBtn");
        expect(addBtn).toBeTruthy();
    });
 });