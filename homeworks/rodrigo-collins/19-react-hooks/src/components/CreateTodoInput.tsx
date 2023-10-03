import React from 'react';

interface CreateTodoInputProps {
    task: string;
    setTask: (value: string) => void;
    inputRef: React.RefObject<HTMLInputElement>;
}

const CreateTodoInput: React.FC<CreateTodoInputProps> = ({ task, setTask, inputRef }) => {
    return (
        <input
            ref={inputRef}
            className='todo-input'
            type="text"
            placeholder="Create Todo-Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
    );
};

export default CreateTodoInput;