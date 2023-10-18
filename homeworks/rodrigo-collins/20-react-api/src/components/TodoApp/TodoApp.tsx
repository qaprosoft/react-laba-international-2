import { useContext, useState, useCallback } from 'react';
import './styles.css'
import TodoList from '../TodoList/TodoList';
import CreateTodoInput from '../CreateTodoInput/CreateTodoInput';
import AddTodoBtn from '../AddTodoBtn/AddTodoBtn';
import { TodoContext } from '../../context/TodoContext';
import useFocus from '../../hooks/useFocus';

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

function TodoApp() {

    const [task, setTask] = useState<string>('');

    const { state, dispatch } = useContext(TodoContext);

    const { todos, error } = state;

    const { focusInput, inputRef } = useFocus();

    const addTodo = useCallback(() => {
        dispatch({ type: "ADD_TODO", payload: task });
        setTask('');
        focusInput();
    }, [dispatch, task, setTask, focusInput]);

    const editTodo = useCallback((id: number, newText: string) => {
        dispatch({ type: "EDIT_TODO", payload: { id, newText } });
    }, [dispatch]);

    const toggleTodo = useCallback((id: number) => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    }, [dispatch]);

    const deleteTodo = useCallback((id: number) => {
        dispatch({ type: "DELETE_TODO", payload: id });
    }, [dispatch]);

    return (
        <div className="todo-container">
            <div className='flex-container'>
                <CreateTodoInput
                    task={task}
                    setTask={setTask}
                    inputRef={inputRef}
                    addTodo={addTodo}
                    error={error}
                />
                <AddTodoBtn addTodo={addTodo} />
            </div>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
    );
}

export default TodoApp;
