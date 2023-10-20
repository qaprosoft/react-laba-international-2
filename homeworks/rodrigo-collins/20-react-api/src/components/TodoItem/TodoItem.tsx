import { useState, useMemo } from 'react';
import deleteImg from '../../assets/delete 1.png'
import editImg from '../../assets/write 1.png'
import checkImg from '../../assets/check.svg'
import closeImg from '../../assets/close.svg'
import { Todo } from '../TodoApp/TodoApp';
import './styles.css'

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

    const todoTextElement = useMemo(() => (
        <>
            <div onClick={() => toggleTodo(todo.id)} className='todo-item' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </div>
            <img src={deleteImg} onClick={() => deleteTodo(todo.id)} className='todo-icon' />
            <img src={editImg} onClick={() => setIsEditing(true)} className='todo-icon' />
        </>
    ), [todo, toggleTodo]);

    const editButtons = useMemo(() => (
        <>
            <input
                className='todo-item'
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
            />
            <img src={checkImg} onClick={handleUpdate} className='todo-icon' />
            <img src={closeImg} onClick={() => setIsEditing(false)} className='todo-icon' />
        </>
    ), [editedText, handleUpdate, setIsEditing]);

    return (
        <div className='flex-container'>
            {isEditing ? editButtons : todoTextElement}
        </div>
    );
}

export default TodoItem;