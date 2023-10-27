import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserItem from './UserItem';
import '@testing-library/jest-dom'


describe('UserItem Component', () => {
    const mockUser = {
        id: 1,
        url: 'https://tinyfac.es/api/data?limit=1&quality=0',
    };

    it('renders user image correctly', () => {
        const mockOnRefreshOne = jest.fn();
        const { getByAltText } = render(
            <UserItem user={mockUser} onRefreshOne={mockOnRefreshOne} />
        );
        const userImage = getByAltText('user');
        expect(userImage).toBeInTheDocument();
        expect(userImage.src).toBe(mockUser.url);

    });

    it('calls onRefreshOne function when overlay is clicked', () => {
        const mockOnRefreshOne = jest.fn();
        const { getByTestId } = render(
            <UserItem user={mockUser} onRefreshOne={mockOnRefreshOne} />
        );

        const overlay = getByTestId('overlay');
        fireEvent.click(overlay);

        expect(mockOnRefreshOne).toHaveBeenCalledWith(mockUser);
    });
});
