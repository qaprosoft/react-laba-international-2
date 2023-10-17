import { useState, useEffect, useRef } from 'react';
import '../App.css';
import TodoList from './TodoList';
import CreateTodoInput from './CreateTodoInput';
import AddTodoBtn from './AddTodoBtn';

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

const MAX_TODO_LENGTH = 20;

function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('todos') || '[]') as Todo[]);
    const [task, setTask] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const validateTodoText = (text: string) => {
        const trimmedText = text.trim();

        if (trimmedText === '') {
            setError('Can not save an empty todo');
            return false;
        }

        if (trimmedText.length > MAX_TODO_LENGTH) {
            setError(`Task must be a maximum of ${MAX_TODO_LENGTH} characters long`);
            return false;
        }

        return true;
    };

    const addTodo = () => {
        const trimmedTask = task.trim();

        if (!validateTodoText(trimmedTask)) return;

        if (todos.some((todo) => todo.text === trimmedTask)) {
            setError('To-Do already exists');
            return;
        }

        setTodos([...todos, { id: Date.now(), text: trimmedTask, completed: false }]);
        setTask('');
        inputRef.current?.focus()
    };

    const editTodo = (id: number, newText: string) => {
        if (!validateTodoText(newText)) {
            setTodos(todos);
            return;
        }

        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
        );
        setTodos(updatedTodos);
    };


    const toggleTodo = (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-container">
            <div className='flex-container'>
                <CreateTodoInput
                    task={task}
                    setTask={setTask}
                    inputRef={inputRef}
                    addTodo={addTodo}
                    error={error}
                    setError={setError}
                />
                <AddTodoBtn addTodo={addTodo} />
            </div>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
    );
}

export default TodoApp;
