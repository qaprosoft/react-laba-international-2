import { Todo } from './TodoApp';
import TodoItem from './TodoItem';


interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, text: string) => void;
}

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }: TodoListProps) {
    return (
        <>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            ))}
        </>
    );
}

export default TodoList;
