import { KeyboardEvent, useCallback } from 'react';

const useEnterKey = (action: () => void) => {
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            action();
        }
    }, [action]);

    return handleKeyDown;
};

export default useEnterKey;
