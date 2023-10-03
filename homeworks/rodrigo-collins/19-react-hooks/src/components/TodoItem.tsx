import { useState } from 'react';
import deleteImg from '../assets/delete 1.png'
import editImg from '../assets/write 1.png'
import checkImg from '../assets/check.svg'

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
}

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleUpdate = () => {
        if (editedText.trim() === '') return;
        editTodo(todo.id, editedText);
        setIsEditing(false);
    };

    return (
        <>
            {isEditing ? (
                <div className='flex-container'>
                    <input
                        className='todo-input'
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <img src={checkImg} onClick={handleUpdate} width={65} height={65} />
                </div>
            ) : (
                <div className='flex-container'>

                    <div onClick={() => toggleTodo(todo.id)} className='todo-input' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </div>
                    <img src={deleteImg} onClick={() => deleteTodo(todo.id)} />
                    <img src={editImg} onClick={() => setIsEditing(true)} />
                </div>
            )}
        </>
    );
}

export default TodoItem;
