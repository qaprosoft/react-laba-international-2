import React from 'react';

type CreateTodoInputProps = {
    task: string;
    setTask: (value: string) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    addTodo: () => void;
    error: string | null;
    setError: (value: string) => void;
}

const CreateTodoInput: React.FC<CreateTodoInputProps> = ({ task, setTask, inputRef, addTodo, error, setError }) => {
    const handleKeyDown = (event: React.KeyboardEvent) => {
        setError('');
        if (event.key === 'Enter') {
            addTodo();
        }
    };

    const handleFocus = () => {
        inputRef.current?.setAttribute('data-placeholder', inputRef.current.placeholder);
        inputRef.current!.placeholder = '';
    };

    const handleBlur = () => {
        inputRef.current!.placeholder = inputRef.current?.getAttribute('data-placeholder') || '';
        setError('');
    };

    return (
        <div className='todo-input-container'>
            <input
                ref={inputRef}
                className='todo-input'
                type="text"
                placeholder="Create Todo-Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {
                error && <div className='error-msj'>{error}</div>
            }
        </div>
    );
};

export default CreateTodoInput;

