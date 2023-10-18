import React from 'react';
import './styles.css'

type CreateTodoInputProps = {
    addTodo: () => void;
}

const AddTodoBtn: React.FC<CreateTodoInputProps> = ({ addTodo }) => {
    return (
        <button
            onClick={addTodo}
            className='add-todo-btn'
        >Add</button>
    )
}

export default AddTodoBtn