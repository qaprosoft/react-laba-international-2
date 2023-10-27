import { Todo } from "../../components/TodoApp/TodoApp";
import { validateTodoText } from "../../helpers/validateTodoText";

export type Action =
    | { type: "ADD_TODO"; payload: string }
    | { type: "EDIT_TODO"; payload: { id: number; newText: string } }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "DELETE_TODO"; payload: number };

export const todoReducer = (state: { todos: Todo[]; error: string | null }, action: Action) => {

    switch (action.type) {
        case "ADD_TODO":
            const trimmedTask = action.payload.trim();
            if (!validateTodoText(trimmedTask)) {
                return { ...state, error: "Invalid todo text" };
            }

            if (state.todos.some((todo: Todo) => todo.text === trimmedTask)) {
                return { ...state, error: "Todo already exists" };
            }

            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), text: trimmedTask, completed: false },
                ],
                error: null,
            };

        case "EDIT_TODO":
            const { id, newText } = action.payload;
            if (!validateTodoText(newText)) {
                return { ...state, error: "Invalid todo text" };
            }

            const updatedTodos = state.todos.map((todo: Todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            );

            return { ...state, todos: updatedTodos, error: null };

        case "TOGGLE_TODO":
            const updatedTodosToggle = state.todos.map((todo: Todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );

            return { ...state, todos: updatedTodosToggle, error: null };

        case "DELETE_TODO":
            const updatedTodosDelete = state.todos.filter(
                (todo: Todo) => todo.id !== action.payload
            );

            return { ...state, todos: updatedTodosDelete, error: null };

        default:
            return state;
    }
};