import { useRef, useEffect, RefObject } from 'react';

const useFocus = () => {
    const inputRef: RefObject<HTMLInputElement> = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return { inputRef, focusInput };
};

export default useFocus;
