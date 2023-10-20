import React from 'react';
import useEnterKey from '../../hooks/useEnterKey';
import './styles.css'

type CreateTodoInputProps = {
    task: string;
    setTask: (value: string) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    addTodo: () => void;
    error: string | null;
}

const CreateTodoInput: React.FC<CreateTodoInputProps> = ({ task, setTask, inputRef, addTodo, error }) => {

    const handleKeyDown = useEnterKey(addTodo);

    const handleFocus = () => {
        inputRef.current?.setAttribute('data-placeholder', inputRef.current.placeholder);
        inputRef.current!.placeholder = '';
    };

    const handleBlur = () => {
        inputRef.current!.placeholder = inputRef.current?.getAttribute('data-placeholder') || '';
    };

    return (
        <>
            <input
                ref={inputRef}
                className='todo-item'
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
        </>
    );
};

export default CreateTodoInput;

