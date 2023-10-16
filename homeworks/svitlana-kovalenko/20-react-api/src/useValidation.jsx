import { useState } from 'react';

const useValidation = () => {
    const [error, setError] = useState(null);

    const validateInput = (input) => {
        setError(null);

        if (input.trim() === '') {
            setError('Input cannot be empty');
            return false;
        }

        if (!/^[a-zA-Z0-9\s]+$/.test(input)) {
            setError('Invalid Characters in To-Do Name');
            return false;
        }

        if (input.length > 50) {
            setError('Exceeding Maximum To-Do Length');
            return false;
        }

        return true;
    };

    const handleDuplicates = (input, todoList) => {
        if (todoList.some(todo => todo.task === input)) {
            setError('Duplicate To-Do Item');
            return true;
        }

        return false;
    };

    return {
        error,
        validateInput,
        handleDuplicates
    };
};

export default useValidation;
