import React from 'react';

interface CreateTodoInputProps {
    task: string;
    setTask: (value: string) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    addTodo: () => void;
}

const CreateTodoInput: React.FC<CreateTodoInputProps> = ({ task, setTask, inputRef, addTodo }) => {

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    };
    return (
        <input
            ref={inputRef}
            className='todo-input'
            type="text"
            placeholder="Create Todo-Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
        />
    );
};

export default CreateTodoInput;